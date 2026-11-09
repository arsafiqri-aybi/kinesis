"""Project structure and rejection behavior using synthetic, disposable fixtures."""
from pathlib import Path
import importlib.util,json,tempfile,unittest
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('toolkit',ROOT/'Engine/Motion/System/Project-Toolkit.py')
toolkit=importlib.util.module_from_spec(spec);spec.loader.exec_module(toolkit)

class ProjectTests(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.addCleanup(self.temp.cleanup)
  self.project=toolkit.init_project('sample-series','Sample Series',Path(self.temp.name)/'sample-series')
  toolkit.new_episode(self.project,'ep-001','First episode')
  self.episode=self.project/'Episodes/ep-001/Episode.json'
 def change_episode(self,fn):
  d=json.loads(self.episode.read_text());fn(d);self.episode.write_text(json.dumps(d))
 def test_bootstrap_and_validate(self):
  errors,_=toolkit.check_project(self.project);self.assertEqual(errors,[])
 def test_graph_endpoints(self):
  errors=[];toolkit.check_graph(errors);self.assertEqual(errors,[])
 def test_existing_project_is_not_overwritten(self):
  with self.assertRaises(toolkit.Invalid):toolkit.init_project('sample-series','Replace',self.project)
 def test_foreign_project_rejected(self):
  self.change_episode(lambda e:e.update(project_id='another-project'))
  errors,_=toolkit.check_project(self.project);self.assertTrue(any('different project' in x for x in errors))
 def test_invalid_shot_range_rejected(self):
  self.change_episode(lambda e:e['timeline'].update(shots=[{'start_frame':5,'end_frame':5}]))
  errors,_=toolkit.check_project(self.project);self.assertTrue(any('half-open' in x for x in errors))
 def test_delivery_without_reviews_rejected(self):
  self.change_episode(lambda e:e.update(status='delivered'))
  errors,_=toolkit.check_project(self.project);self.assertTrue(any('delivered without' in x for x in errors))
 def test_nonapplicable_audio_needs_reason(self):
  def update(e):
   e['status']='delivered';e['evidence']={k:'pass' for k in e['evidence']};e['evidence']['audio']='not_applicable';e['build']['rendered_files']=['Outputs/sample-series/ep-001/final.mp4']
  self.change_episode(update);errors,_=toolkit.check_project(self.project);self.assertTrue(any('delivered without' in x for x in errors))
  self.change_episode(lambda e:e['evidence_reasons'].update(audio='Silent video; no audio track requested.'))
  errors,_=toolkit.check_project(self.project);self.assertEqual(errors,[])
 def test_unknown_recipe_rejected(self):
  self.change_episode(lambda e:e['recipe_instances'].append({'recipe_id':'unknown','recipe_version':'1.0.0'}))
  errors,_=toolkit.check_project(self.project);self.assertTrue(any('unknown recipe' in x for x in errors))

if __name__=='__main__':unittest.main()
