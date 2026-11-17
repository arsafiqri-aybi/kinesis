#!/usr/bin/env node
import path from 'node:path';
import {execute} from '../src/index.mjs';

function parse(args) {
  const tokens=[], flags={};
  for (let i=0; i<args.length; i++) {
    const arg=args[i];
    if (!arg.startsWith('--')) {tokens.push(arg);continue;}
    const key=arg.slice(2);
    if (key==='json' || key==='help') {flags[key]=true;continue;}
    if (!args[i+1] || args[i+1].startsWith('--')) throw new Error('Missing value for --' + key);
    flags[key]=args[++i];
  }
  return {tokens, flags};
}
function help() {
  process.stdout.write([
    'Kinesis',
    'Usage:',
    '  kinesis init <project> [--width N] [--height N] [--fps N] [--frames N]',
    '  kinesis build <project> [--backend svg|chromium]',
    '  kinesis verify <project> [--backend svg|chromium]',
    '  kinesis render <project> [--backend svg|chromium] [--out file.mp4]',
    '      [--start N] [--end N] [--concurrency N] [--crf N] [--preset name]',
    'Set --chromium /path/to/browser or KINESIS_CHROMIUM for the browser backend.',
    'All commands support --json.',
    ''
  ].join('\n'));
}
const number=(v) => v === undefined ? undefined : Number(v);

async function main() {
  const {tokens,flags}=parse(process.argv.slice(2));
  const [operation,project]=tokens;
  if (flags.help || !operation || operation==='help') return help();
  if (!project) throw Error('Project path required');
  const result = await execute({
    operation, project:path.resolve(project), backend:flags.backend??'svg',
    output:flags.out ? path.resolve(flags.out) : undefined,
    start:number(flags.start),end:number(flags.end),
    concurrency:number(flags.concurrency),crf:number(flags.crf),
    preset:flags.preset,ffmpegPath:flags.ffmpeg,browserPath:flags.chromium,
    width:number(flags.width),height:number(flags.height),
    fps:number(flags.fps),durationInFrames:number(flags.frames)
  });
  process.stdout.write(JSON.stringify(result,null,2)+'\n');
}
main().catch(error=>{
  process.stderr.write('KINESIS_ERROR: ' + (error.stack??error.message??String(error)) + '\n');
  process.exitCode=1;
});

