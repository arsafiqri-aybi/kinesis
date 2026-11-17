import fs from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {build} from 'esbuild';
import {chromium} from 'playwright-core';

export class KinesisError extends Error {
  constructor(message, cause) { super(message, {cause}); this.name='KinesisError'; }
}
const safeInt=(v,name,min,max)=> {
  if(!Number.isInteger(v)||v<min||v>max) throw new KinesisError(`${name} must be an integer between ${min} and ${max}`);
  return v;
};
const normalize=(input)=>path.resolve(input);
export const projectSource = project=>path.join(normalize(project),'src','scene.tsx');
export const workspace = project=>path.join(normalize(project),'.kinesis');
export async function buildProject(project) {
  project=normalize(project);
  const entry=projectSource(project);
  if(!existsSync(entry)) throw new KinesisError(`Composition not found: ${entry}`);
  const temp=workspace(project);
  await fs.mkdir(temp,{recursive:true});
  const bootstrap=path.join(temp,'bootstrap.tsx');
  const input=JSON.stringify(entry);
  const source=`import React from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import Scene, * as module from ${input};
const root=createRoot(document.getElementById('root'));
let lastFrame=-1;
window.__kinesis = {
  config: module.config,
  async setFrame(frame) {
    const cfg=module.config;
    const time=frame/cfg.fps;
    flushSync(() => root.render(React.createElement(Scene,{frame,time,progress:frame/(cfg.durationInFrames-1||1),config:cfg})));
    await document.fonts.ready;
    lastFrame=frame;
    return {frame, children: document.getElementById('root').childElementCount};
  },
  inspect: typeof module.inspectFrame === 'function' ? module.inspectFrame : null,
  version:1,
  get lastFrame(){return lastFrame}
};`;
  await fs.writeFile(bootstrap,source);
  const result=await build({
    entryPoints:[bootstrap], outfile:path.join(temp,'index.js'),
    bundle:true,platform:'browser',format:'iife',target:'chrome120',jsx:'automatic',
    nodePaths:[path.join(path.dirname(fileURLToPath(import.meta.url)),'..','node_modules')],
    loader:{'.png':'dataurl','.jpg':'dataurl','.jpeg':'dataurl','.webp':'dataurl','.svg':'dataurl','.woff':'dataurl','.woff2':'dataurl'},
    logLevel:'silent',write:true,metafile:true,
  });
  const html=`<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}html,body,#root{width:100%;height:100%;padding:0;margin:0;overflow:hidden}*{animation-play-state:paused!important;transition:none!important}</style></head><body><div id="root"></div><script src="./index.js"></script></body></html>`;
  await fs.writeFile(path.join(temp,'index.html'),html);
  return {dir:temp,entry,bytes:Object.values(result.metafile.outputs).reduce((s,v)=>s+v.bytes,0)};
}
function chromiumExecutable() {
  const options=[
    process.env.KINESIS_CHROMIUM,
    chromium.executablePath(),
    '/usr/bin/chromium',
    '/usr/bin/google-chrome'
  ].filter(Boolean);
  return options.find(p=>existsSync(p));
}
async function setupPage(browser, html, {width=720,height=1280}={}) {
  const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,colorScheme:'light'});
  await context.route(/^https?:\/\//,r=>r.abort('blockedbyclient'));
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('crash',()=>errors.push('Browser page crashed'));
  await page.goto(pathToFileURL(html).href,{waitUntil:'load',timeout:45000});
  await page.waitForFunction(()=>Boolean(window.__kinesis),{timeout:45000});
  if(errors.length) throw new KinesisError('Browser startup failed: '+errors.join('; '));
  return {context,page,errors};
}
export function validateConfig(config) {
  if(!config || typeof config!=='object')throw new KinesisError('Scene must export a config object');
  safeInt(config.width,'width',16,8192);
  safeInt(config.height,'height',16,8192);
  if(config.width%2 || config.height%2)throw new KinesisError('H.264 yuv420p output requires even width and height');
  if (!Number.isFinite(config.fps) || config.fps < 1 || config.fps > 120) throw new KinesisError('fps must be a finite number between 1 and 120');
  safeInt(config.durationInFrames,'durationInFrames',1,1000000);
  if(config.audio!==undefined && typeof config.audio!=='string')throw new KinesisError('audio must be a relative path');
  return config;
}
async function begin(project,{browserPath}={}) {
  const bundled=await buildProject(project);
  const executablePath=browserPath||chromiumExecutable();
  if(!executablePath)throw new KinesisError('Chromium not found. Install Playwright Chromium or set KINESIS_CHROMIUM');
  let browser;
  try {browser=await chromium.launch({headless:true,executablePath,args:['--disable-dev-shm-usage']});}
  catch(err){throw new KinesisError('Cannot launch Chromium: '+err.message,err);}
  const html=path.join(bundled.dir,'index.html');
  try{
    const first=await setupPage(browser,html);
    const config=validateConfig(await first.page.evaluate(()=>window.__kinesis.config));
    await first.context.close();
    return {browser,html,config,bundled};
  }catch(e){await browser.close();throw e;}
}
function assertFiniteState(state, label='inspectFrame') {
  if(typeof state==='number' && !Number.isFinite(state))throw new KinesisError(`Invalid ${label} value: ${state}`);
  if(state && typeof state==='object'){
    for(const [key,value] of Object.entries(state))assertFiniteState(value,`${label}.${key}`);
  }
}
export async function verifyProject(project,{browserPath}={}) {
  const session=await begin(project,{browserPath});
  const {browser,html,config,bundled}=session;
  const sample=[...new Set([0,Math.floor((config.durationInFrames-1)/3),Math.floor((config.durationInFrames-1)*2/3),config.durationInFrames-1])];
  const reports=[];
  try{
    const {context,page,errors}=await setupPage(browser,html,config);
    try{
      for(const frame of sample){
        await page.evaluate(f=>window.__kinesis.setFrame(f),frame);
        const state=await page.evaluate(f=>({
          markup:document.getElementById('root').innerHTML,
          computed:window.__kinesis.inspect?.(f,f/window.__kinesis.config.fps)||null,
          invalidAttributes:[...document.querySelectorAll('*')].flatMap(el=>[...el.attributes].filter(attr=>/(?:^|[ ,(])(?:NaN|Infinity|-Infinity)(?:$|[ ,)])/i.test(attr.value)).map(attr=>`${el.tagName}.${attr.name}=${attr.value}`)).slice(0,5),
          width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,
        }),frame);
        if(!state.markup)throw new KinesisError(`Frame ${frame} rendered empty markup`);
        if(state.invalidAttributes.length)throw new KinesisError(`Frame ${frame}: invalid attributes ${state.invalidAttributes.join(', ')}`);
        assertFiniteState(state.computed);
        reports.push({frame,seconds:frame/config.fps,bytes:state.markup.length,inspect:state.computed});
      }
      const mid=sample[Math.floor(sample.length/2)];
      await page.evaluate(f=>window.__kinesis.setFrame(f),mid);
      const one=await page.evaluate(()=>document.getElementById('root').innerHTML);
      await page.evaluate(f=>window.__kinesis.setFrame(f),mid);
      const two=await page.evaluate(()=>document.getElementById('root').innerHTML);
      if(one!==two)throw new KinesisError(`Non-deterministic markup at frame ${mid}`);
      if(errors.length)throw new KinesisError('Browser errors: '+errors.join('; '));
      return {ok:true,config,bundleBytes:bundled.bytes,samples:reports,deterministic:true};
    }finally{await context.close();}
  }finally{await browser.close();}
}
export async function openEncoder({out,config,frameCount,audioPath,startFrame=0,ffmpegPath='ffmpeg',crf=18,preset='medium'}) {
  await fs.mkdir(path.dirname(out),{recursive:true});
  const args=['-hide_banner','-loglevel','error','-y','-f','image2pipe','-vcodec','png','-framerate',String(config.fps),'-i','pipe:0'];
  if(audioPath)args.push('-ss',String(startFrame/config.fps),'-i',audioPath);
  args.push('-frames:v',String(frameCount),'-c:v','libx264','-preset',preset,'-crf',String(crf),'-pix_fmt','yuv420p','-movflags','+faststart');
  if(audioPath)args.push('-c:a','aac','-b:a','192k','-t',String(frameCount/config.fps));
  else args.push('-an');
  args.push(out);
  const child=spawn(ffmpegPath,args,{stdio:['pipe','ignore','pipe']});
  let stderr='',fatal=null;
  child.stderr.setEncoding('utf8');
  child.stderr.on('data',chunk=>{stderr=(stderr+chunk).slice(-16000);});
  child.stdin.on('error',err=>{fatal=err;});
  const finished=new Promise((resolve,reject)=>{
    child.once('error',reject);
    child.once('close',code=>code===0?resolve():reject(new KinesisError(`FFmpeg exited ${code}: ${stderr||fatal?.message||'unknown error'}`)));
  });
  return {child,finished,errors:()=>stderr};
}
export async function renderProject(project,{out='output/kinesis.mp4',start=0,end=null,concurrency=2,ffmpegPath='ffmpeg',browserPath,crf=18,preset='medium',onProgress}={}) {
  const session=await begin(project,{browserPath});
  const {browser,html,config,bundled}=session;
  let pages=[];
  let encoder;
  let output=null;
  const started=Date.now();
  try {
  const first=safeInt(Number(start),'start',0,config.durationInFrames-1);
  const last=end===null?config.durationInFrames-1:safeInt(Number(end),'end',first,config.durationInFrames-1);
  concurrency=safeInt(Number(concurrency),'concurrency',1,8);
  const frameCount=last-first+1;
  output=path.resolve(out);
  let audioPath=null;
  if(config.audio){
    const root=path.resolve(project)+path.sep;
    audioPath=path.resolve(project,config.audio);
    if(!audioPath.startsWith(root))throw new KinesisError('Audio path must be inside project');
    if(!existsSync(audioPath))throw new KinesisError(`Audio not found: ${audioPath}`);
  }
    for(let i=0;i<concurrency;i++)pages.push(await setupPage(browser,html,config));
    encoder=await openEncoder({out:output,config,frameCount,audioPath,startFrame:first,ffmpegPath,crf,preset});
    for(let offset=0;offset<frameCount;offset+=pages.length){
      const batch=await Promise.all(pages.slice(0,Math.min(pages.length,frameCount-offset)).map(async(p,j)=>{
        const f=first+offset+j;
        await p.page.evaluate(frame=>window.__kinesis.setFrame(frame),f);
        if(p.errors.length)throw new KinesisError(`Browser error on frame ${f}: ${p.errors.join('; ')}`);
        return p.page.screenshot({type:'png',animations:'disabled',timeout:60000});
      }));
      for(const bytes of batch) {
        if(!encoder.child.stdin.write(bytes))await once(encoder.child.stdin,'drain');
      }
      onProgress?.(Math.min(frameCount,offset+batch.length),frameCount);
    }
    encoder.child.stdin.end();
    await encoder.finished;
    const stat=await fs.stat(output);
    if(stat.size<=0)throw new KinesisError('Output file empty');
    return {ok:true,out:output,bytes:stat.size,frames:frameCount,seconds:frameCount/config.fps,elapsedMs:Date.now()-started,config,bundleBytes:bundled.bytes};
  }catch(error){
    if(encoder){encoder.child.stdin.destroy();encoder.child.kill('SIGKILL');encoder.finished.catch(()=>{});}
    await fs.rm(output,{force:true}).catch(()=>{});
    throw error;
  }finally{
    for(const {context} of pages)await context.close().catch(()=>{});
    await browser.close();
  }
}

