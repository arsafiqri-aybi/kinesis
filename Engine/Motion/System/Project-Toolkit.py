#!/usr/bin/env python3
"""Motion project bootstrap / structural validator. Does not render or certify a video."""
from __future__ import annotations
import argparse, copy, json, re, shutil, sys
from pathlib import Path

MOTION = Path(__file__).resolve().parents[1]
SYSTEM = MOTION / 'System'
REPO = Path(__file__).resolve().parents[3]
TEMPLATE = REPO / 'Engine' / 'Templates' / 'Project'
PROJECTS = REPO / 'Projects'
VALID = re.compile(r'^[a-z][a-z0-9-]{1,63}$')
EVIDENCE = {'pass', 'fail', 'stale', 'unverified', 'intentional_exception', 'not_applicable'}

class Invalid(Exception):
    pass

def load(path: Path):
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except (OSError, ValueError) as exc:
        raise Invalid(f'{path}: cannot read JSON: {exc}') from exc

def save(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def require(condition, msg, errors):
    if not condition: errors.append(msg)

def unique(ids, prefix, errors):
    ids = list(ids)
    require(len(ids) == len(set(ids)), f'{prefix}: duplicate IDs', errors)

def check_graph(errors):
    base=load(SYSTEM/'Graph-Integrated.json')
    overlay=load(SYSTEM/'Project-Architecture-Graph.json')
    ids={n['id'] for n in base['nodes']}
    ext=[n['id'] for n in overlay['nodes']]
    unique(ext, 'extension nodes', errors)
    require(ids.isdisjoint(ext), 'project overlay duplicates global graph nodes', errors)
    known=ids|set(ext)
    unique([(e.get('source'),e.get('target'),e.get('relation'),e.get('condition')) for e in overlay['edges']], 'extension edges', errors)
    for i,e in enumerate(overlay['edges']):
        require(e.get('source') in known and e.get('target') in known, f'overlay edge {i}: unknown endpoint', errors)
        require(bool(e.get('condition')) and bool(e.get('payload')), f'overlay edge {i}: missing condition/payload', errors)
    reachable={'motor:kinesis'}
    # Weak reachability in overlay alone. Cross-edge anchors keep separate knowledge graphs linked.
    changed=True
    while changed:
        changed=False
        for e in overlay['edges'] + base['edges']:
            if e['source'] in reachable and e['target'] not in reachable:
                reachable.add(e['target']); changed=True
            if e['target'] in reachable and e['source'] not in reachable:
                reachable.add(e['source']); changed=True
    require(set(ext).issubset(reachable), 'project overlay contains disconnected nodes', errors)
    return ids, {n['id'] for n in base['nodes'] if n['kind']=='production_contract'}

def check_project(folder: Path, template=False):
    errors=[]; warnings=[]
    p=load(folder/'Project.json')
    recipes=load(folder/p.get('components',{}).get('registry','Template-Library.json'))
    base_ids, contracts=check_graph(errors)
    if template:
        require(p['project_id']=='_template', 'template should keep placeholder ID',errors)
    else:
        require(bool(VALID.fullmatch(p.get('project_id',''))), 'invalid project ID', errors)
        require(folder.name==p.get('project_id'), 'folder and project ID mismatch', errors)
    require(p.get('schema_version')=='1.0', 'unknown project schema version', errors)
    require(recipes.get('project_id')==p.get('project_id'), 'recipe registry belongs to different project', errors)
    require(p.get('engine',{}).get('global_overrides')==[], 'project may not override core Motion algorithms', errors)
    require(p.get('engine',{}).get('motor')=='Engine/Kinesis/Motor-System.md', 'motor path not canonical', errors)
    require(p.get('engine',{}).get('motion_graph')=='Engine/Motion/System/Graph-Integrated.json', 'Motion graph path not canonical', errors)
    require(p.get('quality',{}).get('overflow_policy')=='protect_information_not_container', 'protect critical information, not the whole decorative shape', errors)
    recipe_list=recipes.get('recipes',[])
    recipe_ids=[r.get('id') for r in recipe_list]
    unique(recipe_ids, 'recipe', errors)
    for r in recipe_list:
        require(r.get('status') in {'pattern_only','implemented','retired'},f"recipe {r.get('id')}: unknown status",errors)
        require(bool(r.get('version')), f"recipe {r.get('id')}: missing version",errors)
        for eid in r.get('expertise_ids',[]):
            require(eid in base_ids, f"recipe {r.get('id')}: unknown expertise {eid}", errors)
        for cid in r.get('contracts',[]):
            require(cid in contracts, f"recipe {r.get('id')}: unknown contract {cid}", errors)
        require(r.get('status')!='pattern_only' or not r.get('approved'),f"recipe {r.get('id')}: unimplemented pattern must not be marked approved",errors)
    for rid in p.get('components',{}).get('approved_recipes',[]):
        require(rid in recipe_ids, f'approved recipe missing from registry: {rid}', errors)
        rr=next((r for r in recipe_list if r.get('id')==rid),None)
        require(rr is not None and rr.get('approved') and rr.get('status')=='implemented',f'approved recipe {rid} is not implemented/reviewed',errors)
    for profile in p.get('platform_profiles',[]):
        if profile.get('status')=='verified':
            require(bool(profile.get('verified_at')) and bool(profile.get('evidence_scope')),f"profile {profile.get('id')}: verified requires date and scope",errors)
    unique([a.get('id') for a in p.get('assets',[])], 'asset', errors)
    for asset in p.get('assets',[]):
        if asset.get('license_status') not in ('approved','pending','unknown','restricted'):
            errors.append(f"asset {asset.get('id')}: unknown license status")
    ds=p.get('design_system',{})
    if p.get('status') in ('approved','production'):
        require(ds.get('approved') is True, 'project status approved/production requires design-system approval', errors)
        require(bool(p.get('purpose',{}).get('audience')) and bool(p.get('purpose',{}).get('message')), 'approved project lacks audience or message', errors)
        require(bool(ds.get('references') or ds.get('styleframes')), 'approved design system needs evidence of visual target', errors)
    else:
        warnings.append('Project design identity not yet approved; this is a production starter, not a released style.')
    # jsonschema is optional: tool remains runnable in stdlib-only Python.
    try:
        import jsonschema
        sp=copy.deepcopy(p)
        if template: sp['project_id']='template-probe'
        jsonschema.validate(sp, load(SYSTEM/'Project-Contract.schema.json'))
    except ImportError:
        warnings.append('jsonschema not installed; semantic validations only.')
    except Exception as exc:
        errors.append(f'JSON schema: {str(exc).splitlines()[0]}')
    episodes=folder/'Episodes'
    for ep_file in sorted(episodes.glob('*/Episode.json')):
        ep=load(ep_file)
        eid=ep_file.parent.name
        require(ep.get('episode_id')==eid, f'{eid}: filename/ID mismatch',errors)
        require(ep.get('project_id')==p.get('project_id'),f'{eid}: episode bound to different project',errors)
        require(bool(ep.get('project_design_version')),f'{eid}: missing pinned style version',errors)
        fps=ep.get('timeline',{})
        require(isinstance(fps.get('fps_num'),int) and fps.get('fps_num',0)>0 and isinstance(fps.get('fps_den'),int) and fps.get('fps_den',0)>0, f'{eid}: invalid timebase',errors)
        for shot in fps.get('shots',[]):
            a,b=shot.get('start_frame'),shot.get('end_frame')
            require(isinstance(a,int) and isinstance(b,int) and 0<=a<b, f'{eid}: shot must have positive half-open frame range', errors)
        for inst in ep.get('recipe_instances',[]):
            require(inst.get('recipe_id') in recipe_ids,f"{eid}: unknown recipe {inst.get('recipe_id')}", errors)
            require(bool(inst.get('recipe_version')),f'{eid}: recipe instance missing pinned version',errors)
        for exc in ep.get('overrides',[]):
            require(bool(exc.get('reason')) and bool(exc.get('scope')) and bool(exc.get('review_status')),f'{eid}: creative override missing reason/scope/review',errors)
        evidence=ep.get('evidence',{})
        required={'structural','visual','motion','audio','mobile','placement','encoded_playback','rights'}
        require(required.issubset(evidence.keys()),f'{eid}: incomplete QA evidence keys',errors)
        require(set(evidence.values()).issubset(EVIDENCE),f'{eid}: invalid QA evidence state',errors)
        if ep.get('status')=='delivered':
            require(all(evidence.get(k)=='pass' or (evidence.get(k)=='not_applicable' and bool(ep.get('evidence_reasons',{}).get(k))) for k in required),f'{eid}: delivered without passing or justified non-applicable reviews',errors)
            require(bool(ep.get('build',{}).get('rendered_files')),f'{eid}: delivered without rendered files',errors)
    return errors,warnings

def init_project(pid, name, dest=None):
    if not VALID.fullmatch(pid): raise Invalid('project id must be lower-case slug (letters, digits, hyphen)')
    dest=dest or PROJECTS/pid
    if dest.exists(): raise Invalid(f'refusing to overwrite existing project: {dest}')
    shutil.copytree(TEMPLATE,dest)
    p=load(dest/'Project.json'); p['project_id']=pid;p['name']=name;save(dest/'Project.json',p)
    r=load(dest/'Template-Library.json');r['project_id']=pid;save(dest/'Template-Library.json',r)
    sample=dest/'Episodes'/'_Episode.json'
    e=load(sample);e['project_id']=pid;save(sample,e)
    return dest

def new_episode(folder,eid,title):
    if not VALID.fullmatch(eid): raise Invalid('invalid episode id')
    epdir=folder/'Episodes'/eid
    if epdir.exists(): raise Invalid(f'episode exists; refusing to overwrite: {eid}')
    e=load(folder/'Episodes'/'_Episode.json')
    p=load(folder/'Project.json')
    e['episode_id']=eid;e['project_id']=p['project_id'];e['project_design_version']=p['design_system']['version'];e['title']=title
    save(epdir/'Episode.json',e)
    return epdir

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    sub=ap.add_subparsers(dest='command',required=True)
    a=sub.add_parser('init');a.add_argument('id');a.add_argument('--name',required=True);a.add_argument('--dest',type=Path)
    a=sub.add_parser('new-episode');a.add_argument('project',type=Path);a.add_argument('id');a.add_argument('--title',required=True)
    a=sub.add_parser('validate');a.add_argument('project',type=Path);a.add_argument('--template',action='store_true')
    sub.add_parser('check-graph')
    args=ap.parse_args()
    try:
        if args.command=='init':
            result=init_project(args.id,args.name,args.dest);print(f'CREATED {result}')
        elif args.command=='new-episode':
            result=new_episode(args.project,args.id,args.title);print(f'CREATED {result}')
        elif args.command=='check-graph':
            errs=[];check_graph(errs)
            if errs: raise Invalid('; '.join(errs))
            print('PASS: overlay node references and graph connectivity')
        else:
            errors,warnings=check_project(args.project,args.template)
            for w in warnings:print('WARN:',w)
            for e in errors:print('ERROR:',e)
            if errors:return 1
            print('PASS: structure and cross-layer rules; visual/audio quality not certified')
    except Invalid as exc:
        print('ERROR:',exc,file=sys.stderr);return 1
    return 0

if __name__=='__main__': sys.exit(main())
