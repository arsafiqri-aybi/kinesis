import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {execute} from '../src/index.mjs';

test('Chromium renders HTML/CSS and React hooks in a project outside the engine',async()=>{
  const temp=await fs.mkdtemp(path.join(os.tmpdir(),'kinesis-browser-'));
  const project=path.join(temp,'project');
  const destination=path.join(project,'src','scene.tsx');
  try{
    await fs.mkdir(path.dirname(destination),{recursive:true});
    await fs.writeFile(destination,[
      "import React, {useMemo} from 'react';",
      "export const config={width:256,height:256,fps:24,durationInFrames:12};",
      "export function inspectFrame(frame,time){return {frame,phase:Math.sin(time*2)};}",
      "export default function Scene({frame,time}) {",
      " const x=useMemo(()=>Math.sin(time*2)*50,[time]);",
      " return <div style={{width:256,height:256,background:'#101f34',display:'grid',placeItems:'center'}}>",
      "   <div style={{width:64,height:64,background:'#80f0ce',borderRadius:32,transform:'translateX('+x+'px)'}} />",
      " </div>;",
      "}"
    ].join('\n'));
    const report=await execute({operation:'verify',project,backend:'chromium'});
    assert.equal(report.ok,true);
    assert.equal(report.deterministic,true);
    assert.equal(report.samples.at(-1).frame,11);
    const output=path.join(temp,'video.mp4');
    const result=await execute({operation:'render',project,backend:'chromium',output,start:2,end:5,concurrency:2});
    assert.equal(result.frames,4);
    const info=JSON.parse(execFileSync('ffprobe',[
      '-v','error','-show_entries','stream=codec_name,width,height,nb_frames',
      '-of','json',output
    ],{encoding:'utf8'}));
    assert.equal(info.streams[0].nb_frames,'4');
    assert.equal(info.streams[0].codec_name,'h264');
  }finally{await fs.rm(temp,{recursive:true,force:true});}
});

