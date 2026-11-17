import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {execute,initializeProject} from '../src/index.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const project=path.join(root,'examples','basic');
const probe=output=>JSON.parse(execFileSync('ffprobe',[
  '-v','error','-show_entries','format=duration',
  '-show_entries','stream=codec_name,codec_type,width,height,nb_frames',
  '-of','json',output
],{encoding:'utf8'}));

test('compiles and verifies the included composition', async()=>{
  const result=await execute({operation:'verify',project,backend:'svg'});
  assert.equal(result.ok,true);
  assert.equal(result.deterministic,true);
  assert.equal(result.config.width,720);
  assert.equal(result.config.durationInFrames,90);
  assert.equal(result.samples.at(-1).frame,89);
  for(const sample of result.samples) assert.ok(sample.pngBytes>100);
});

test('renders a frame range with H.264 and exact frame count',async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'kinesis-svg-'));
  try{
    const out=path.join(temp,'video.mp4');
    const result=await execute({operation:'render',project,backend:'svg',output:out,start:12,end:16});
    const meta=probe(out);
    assert.equal(result.frames,5);
    assert.equal(meta.streams[0].codec_name,'h264');
    assert.equal(meta.streams[0].nb_frames,'5');
    assert.equal(meta.streams[0].width,720);
    assert.equal(meta.streams[0].height,720);
  }finally{await fs.rm(temp,{recursive:true,force:true});}
});

test('supports a new user project outside the engine directory',async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'kinesis-project-'));
  const dest=path.join(temp,'project');
  try{
    const created=await initializeProject(dest,{width:192,height:192,fps:12,durationInFrames:6});
    assert.equal(created.config.width,192);
    await assert.rejects(()=>initializeProject(dest),/already exists/);
    const verification=await execute({operation:'verify',project:dest});
    assert.equal(verification.ok,true);
    assert.equal(verification.samples.at(-1).frame,5);
    const render=await execute({operation:'render',project:dest,output:path.join(temp,'a.mp4')});
    assert.equal(render.frames,6);
    assert.equal(probe(path.join(temp,'a.mp4')).streams[0].nb_frames,'6');
  }finally{await fs.rm(temp,{recursive:true,force:true});}
});

test('rejects invalid video sizes and out-of-range frame requests',async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'kinesis-invalid-'));
  try{
    await assert.rejects(()=>initializeProject(path.join(temp,'odd'),{width:191}),/even/);
    await assert.rejects(()=>initializeProject(path.join(temp,'no-fps'),{fps:0}),/fps/);
    await assert.rejects(()=>execute({operation:'render',project,start:500,output:path.join(temp,'bad.mp4')}),/start/);
    await assert.rejects(()=>execute({operation:'verify',project,backend:'other'}),/Unknown backend/);
  }finally{await fs.rm(temp,{recursive:true,force:true});}
});

test('can mux in-project audio on a cropped frame range',async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'kinesis-audio-'));
  const p=path.join(temp,'project');
  try{
    await fs.mkdir(path.join(p,'src'),{recursive:true});
    await fs.writeFile(path.join(p,'src','scene.tsx'),[
      "export const config={width:192,height:192,fps:12,durationInFrames:24,audio:'tone.wav'};",
      "export default function Scene({frame}) { return <svg xmlns='http://www.w3.org/2000/svg' width='192' height='192'><rect width='192' height='192' fill={frame%2?'#123456':'#789abc'}/></svg>; }"
    ].join('\n'));
    execFileSync('ffmpeg',[
      '-v','error','-y','-f','lavfi','-i','sine=frequency=440:duration=3',
      '-ar','48000',path.join(p,'tone.wav')
    ]);
    const out=path.join(temp,'audio.mp4');
    const result=await execute({operation:'render',project:p,start:12,end:17,output:out});
    const info=probe(out);
    assert.equal(result.frames,6);
    assert.ok(info.streams.some(s=>s.codec_name==='aac'));
    assert.ok(info.streams.some(s=>s.codec_name==='h264'));
    assert.ok(Number(info.format.duration)>=.48 && Number(info.format.duration)<=.55);
  }finally{await fs.rm(temp,{recursive:true,force:true});}
});

