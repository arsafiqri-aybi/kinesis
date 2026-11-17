# Kinesis API

## CLI

Run `node bin/kinesis.mjs` from the repository root.

| Command | Purpose |
| --- | --- |
| `init <directory>` | Create a project with `src/scene.tsx`; refuses to overwrite a scene. |
| `build <directory>` | Compile a composition for the selected backend. |
| `verify <directory>` | Compile and evaluate representative frames, checking numeric state and reproducibility. |
| `render <directory>` | Encode an inclusive frame range to MP4. |

Options:

| Option | Commands | Meaning |
| --- | --- | --- |
| `--backend svg / chromium` | build, verify, render | Select renderer; SVG is default. |
| `--out file.mp4` | render | Output path. |
| `--start N` | render | First zero-based frame, inclusive. |
| `--end N` | render | Last frame, inclusive; defaults to final frame. |
| `--concurrency N` | render | Concurrent Chromium pages, 1–8. |
| `--crf N` | render | FFmpeg H.264 quality factor. |
| `--preset name` | render | FFmpeg H.264 encoder preset. |
| `--ffmpeg path` | render | FFmpeg executable. |
| `--chromium path` | verify, render | Browser executable. |
| `--width N, --height N, --fps N, --frames N` | init | Initial composition settings. |
| `--json` | all | Machine-readable JSON. |

## Programmatic API

```js
import {execute, initializeProject} from './src/index.mjs';
import {spring, smoothstep, lerp, progress} from './src/math.mjs';

await initializeProject('./my-project', {
  width: 1080, height: 1920, fps: 30, durationInFrames: 180,
});

const verification = await execute({
  operation: 'verify', project: './my-project', backend: 'svg',
});

const result = await execute({
  operation: 'render', project: './my-project', backend: 'svg',
  output: './output/video.mp4', start: 0, end: 179,
});
```

The scene contract:

- `config`: `{ width, height, fps, durationInFrames, audio? }`
- `default Scene({ frame, time, progress, config })`: a React component
- `inspectFrame(frame, time)` (optional): serializable numeric state

Time is in seconds. FPS must be finite and positive. Width and height must be **even integers** for H.264/yuv420p output. `durationInFrames` must be a positive integer. The final frame index is `durationInFrames - 1`.

`verify` checks sampled frames, defined numeric state, and reproducibility of serialized markup. It is a technical check, not a judgment of visual quality.

## Renderers

The SVG backend expects an SVG root returned by the React component. It supports the SVG features implemented by resvg; browser APIs and HTML/CSS layout require Chromium.

Chromium evaluates each requested frame in React DOM. Browser CSS animations are disabled during capture; express intended motion with explicit frame/time parameters.

Both backends stream PNG frames into FFmpeg. Video uses H.264/yuv420p; optional audio uses AAC. The single audio input is an in-project path.

## Mathematics

`src/math.mjs` exports interpolation, easing, keyframes, cubic curves, vectors, seeded noise, and an analytical damped spring. Prefer absolute-time evaluation over mutable wall-clock state.

