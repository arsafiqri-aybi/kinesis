import fs from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {once} from 'node:events';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Resvg} from '@resvg/resvg-js';
import {build} from 'esbuild';
import {KinesisError,validateConfig,openEncoder,projectSource,workspace} from './engine.mjs';

const nodeRequire=createRequire(import.meta.url);
const runtimeModules={
  react:nodeRequire.resolve('react'),
  'react/jsx-runtime':nodeRequire.resolve('react/jsx-runtime'),
  'react/jsx-dev-runtime':nodeRequire.resolve('react/jsx-dev-runtime')
};
const runtimeResolve={name:'kinesis-react-runtime',setup(build){
  build.onResolve({filter:/^react(?:\/jsx(?:-dev)?-runtime)?$/},({path:specifier})=>({
    path:pathToFileURL(runtimeModules[specifier]).href,external:true
  }));
}};

function boundedInteger(x,label,lo,hi){
  if(!Number.isInteger(x)||x<lo||x>hi)throw new KinesisError(`${label} must be between ${lo} and ${hi}`);
  return x;
}
function inspectFinite(value,label='inspectFrame'){
  if(typeof value==='number'&&!Number.isFinite(value))throw new KinesisError('Non-finite '+label);
  if(value && typeof value==='object')for(const [k,v] of Object.entries(value))inspectFinite(v,label+'.'+k);
}
export async function loadSvgProject(project){
  project=path.resolve(project);
  const source=projectSource(project);
  if(!existsSync(source))throw new KinesisError('Scene not found: '+source);
  const buildDir=workspace(project);
  await fs.mkdir(buildDir,{recursive:true});
  const outfile=path.join(buildDir,'node-entry.mjs');
  await build({
    entryPoints:[source],outfile,bundle:true,platform:'node',format:'esm',
    target:'node22',jsx:'automatic',packages:'external',plugins:[runtimeResolve],
    loader:{'.png':'dataurl','.jpg':'dataurl','.jpeg':'dataurl','.webp':'dataurl','.svg':'dataurl'},
    logLevel:'silent',write:true
  });
  const mod=await import(pathToFileURL(outfile).href+'?load='+Date.now());
  if(typeof mod.default!=='function')throw new KinesisError('Scene must export a default React function');
  const config=validateConfig(mod.config);
  return {Scene:mod.default,inspectFrame:mod.inspectFrame,config};
}
function drawSvg(scene,frame){
  const {Scene,inspectFrame,config}=scene;
  const time=frame/config.fps;
  const markup=renderToStaticMarkup(React.createElement(Scene,{frame,time,progress:frame/(config.durationInFrames-1||1),config}));
  if(!/^\s*<svg\b/i.test(markup))throw new KinesisError('SVG renderer requires an SVG root. Use --backend chromium for HTML/CSS scenes.');
  const state=typeof inspectFrame==='function'?inspectFrame(frame,time):null;
  inspectFinite(state);
  if(/(?:\s|=|,)(?:NaN|Infinity|-Infinity)(?:\s|,|\)|"|$)/.test(markup))throw new KinesisError('Invalid numeric attribute at frame '+frame);
  return {markup,state};
}
function renderPng(markup,config){
  const png=new Resvg(markup,{font:{loadSystemFonts:true}}).render();
  if(png.width!==config.width||png.height!==config.height)throw new KinesisError(`Unexpected raster size ${png.width}x${png.height}`);
  return png.asPng();
}
export async function verifySvgProject(project) {
  const scene=await loadSvgProject(project);
  const {config}=scene;
  const positions=[...new Set([0,Math.floor((config.durationInFrames-1)/3),Math.floor((config.durationInFrames-1)*2/3),config.durationInFrames-1])];
  const samples=positions.map(frame=>{
    const {markup,state}=drawSvg(scene,frame);
    const png=renderPng(markup,config);
    return {frame,seconds:frame/config.fps,markupBytes:Buffer.byteLength(markup),pngBytes:png.length,inspect:state};
  });
  const mid=positions[Math.floor(positions.length/2)];
  const a=drawSvg(scene,mid).markup,b=drawSvg(scene,mid).markup;
  if(a!==b)throw new KinesisError('Non-deterministic SVG at frame '+mid);
  return {ok:true,backend:'svg',config,samples,deterministic:true};
}
export async function renderSvgProject(project,{out='output/kinesis.mp4',start=0,end=null,ffmpegPath='ffmpeg',crf=18,preset='medium',onProgress}={}){
  const scene=await loadSvgProject(project);
  const {config}=scene;
  const first=boundedInteger(Number(start),'start',0,config.durationInFrames-1);
  const last=end===null?config.durationInFrames-1:boundedInteger(Number(end),'end',first,config.durationInFrames-1);
  const frameCount=last-first+1;
  const output=path.resolve(out);
  let audioPath=null;
  if(config.audio){
    const root=path.resolve(project)+path.sep;
    audioPath=path.resolve(project,config.audio);
    if(!audioPath.startsWith(root))throw new KinesisError('Audio path must be inside project');
    if(!existsSync(audioPath))throw new KinesisError('Audio file missing: '+audioPath);
  }
  let encoder;
  const started=Date.now();
  try{
    encoder=await openEncoder({out:output,config,frameCount,audioPath,startFrame:first,ffmpegPath,crf,preset});
    for(let i=0;i<frameCount;i++){
      const f=first+i;
      const {markup}=drawSvg(scene,f);
      const png=renderPng(markup,config);
      if(!encoder.child.stdin.write(png))await once(encoder.child.stdin,'drain');
      onProgress?.(i+1,frameCount);
    }
    encoder.child.stdin.end();
    await encoder.finished;
    const stat=await fs.stat(output);
    if(stat.size===0)throw new KinesisError('Output video empty');
    return {ok:true,backend:'svg',out:output,bytes:stat.size,frames:frameCount,seconds:frameCount/config.fps,elapsedMs:Date.now()-started,config};
  }catch(error){
    if(encoder){encoder.child.stdin.destroy();encoder.child.kill('SIGKILL');encoder.finished.catch(()=>{});}
    await fs.rm(output,{force:true}).catch(()=>{});
    throw error;
  }
}

