import fs from 'node:fs/promises';
import path from 'node:path';
import {buildProject, verifyProject, renderProject, KinesisError} from './engine.mjs';
import {loadSvgProject, verifySvgProject, renderSvgProject} from './svg-engine.mjs';

export const backends = Object.freeze(['svg', 'chromium']);

export async function initializeProject(project, options = {}) {
  project = path.resolve(project);
  const config = {
    width: options.width ?? 720,
    height: options.height ?? 1280,
    fps: options.fps ?? 30,
    durationInFrames: options.durationInFrames ?? 120
  };
  for (const [name, value, min, max] of [
    ['width', config.width, 16, 8192],
    ['height', config.height, 16, 8192],
    ['fps', config.fps, 1, 120],
    ['durationInFrames', config.durationInFrames, 1, 1000000]
  ]) {
    if (!Number.isInteger(value) || value < min || value > max) {
      throw new KinesisError('Invalid ' + name);
    }
  }
  if (config.width % 2 || config.height % 2) throw new KinesisError('Width and height must be even for H.264 output');
  const destination = path.join(project, 'src', 'scene.tsx');
  const code = [
    'export const config = ' + JSON.stringify(config, null, 2) + ';',
    '',
    'export default function Scene({config}) {',
    '  return <svg xmlns="http://www.w3.org/2000/svg"',
    '    width={config.width} height={config.height}',
    '    viewBox={[0, 0, config.width, config.height].join(" ")} />;',
    '}',
    ''
  ].join('\n');
  await fs.mkdir(path.dirname(destination), {recursive:true});
  try {
    await fs.writeFile(destination, code, {flag:'wx'});
  } catch(error) {
    if (error.code === 'EEXIST') throw new KinesisError('Project scene already exists');
    throw error;
  }
  return {project, scene:destination, config};
}

export async function execute({
  operation, project, backend='svg', output, start, end,
  concurrency, crf, preset, ffmpegPath, browserPath, onProgress,
  width, height, fps, durationInFrames
} = {}) {
  if (!project || typeof project !== 'string') throw new KinesisError('Project path is required');
  if (!backends.includes(backend)) throw new KinesisError('Unknown backend: ' + backend);
  const source = path.resolve(project);
  if (operation === 'init') return initializeProject(source, {width, height, fps, durationInFrames});
  if (operation === 'build') {
    if (backend === 'chromium') return {backend, ...(await buildProject(source))};
    const {config} = await loadSvgProject(source);
    return {backend, config, compiled:true};
  }
  if (operation === 'verify') {
    return backend === 'svg' ? verifySvgProject(source) : verifyProject(source, {browserPath});
  }
  if (operation === 'render') {
    const options = {
      out:output ?? path.join(source,'output','video.mp4'),
      start, end, concurrency, crf, preset, ffmpegPath, browserPath, onProgress
    };
    for (const key of Object.keys(options)) if (options[key] === undefined) delete options[key];
    return backend === 'svg' ? renderSvgProject(source, options) : renderProject(source, options);
  }
  throw new KinesisError('Unknown operation: ' + operation);
}

