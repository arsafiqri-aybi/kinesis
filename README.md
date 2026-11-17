# Kinesis

**Kinesis is a code-first motion and video rendering engine.** Define a composition in React and TypeScript, evaluate it at exact frame times, and export H.264 MP4 using a headless renderer and FFmpeg.

Kinesis provides two rendering paths:

- **SVG:** React-generated SVG rendered natively with resvg. No browser is needed.
- **Chromium:** React, SVG, HTML, and CSS rendered in a headless browser through Playwright.

Both backends share the same project format and frame-indexed timeline. Source code remains editable; the renderer produces media rather than a locked editing project.

## Requirements

- **Node.js 22 or newer** and npm
- **FFmpeg** available on `PATH`, with the `libx264` encoder
- **Chromium**, only when using `--backend chromium` (install with Playwright or supply an executable path)

The SVG backend works without Chromium. Windows, macOS, and Linux can use the Node.js project when compatible native dependencies and FFmpeg are installed.

## Get started

Clone the repository and install dependencies:

```bash
git clone https://github.com/arsafiqri-aybi/kinesis.git
cd kinesis
npm ci
```

Render the included composition:

```bash
node bin/kinesis.mjs verify examples/basic --backend svg
node bin/kinesis.mjs render examples/basic --out output/basic.mp4
```

Or create your own project:

```bash
node bin/kinesis.mjs init my-video --width 1080 --height 1920 --fps 30 --frames 150
# Edit my-video/src/scene.tsx
node bin/kinesis.mjs verify my-video
node bin/kinesis.mjs render my-video --out my-video/output/final.mp4
```

The `init` command creates an empty SVG composition ready for your design. It never overwrites an existing scene.

### Composition

Each project contains `src/scene.tsx`, exporting a configuration and React component:

```tsx
import React from 'react';

export const config = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 150,
};

export default function Scene({frame, time, config}) {
  const x = config.width / 2 + Math.sin(time * 2) * 140;

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={config.width} height={config.height}
         viewBox={[0, 0, config.width, config.height].join(' ')}>
      <rect width={config.width} height={config.height} fill="#081321" />
      <circle cx={x} cy={config.height / 2} r="72" fill="#A9F6DA" />
    </svg>
  );
}
```

`frame` starts at zero. `time = frame / fps`, in seconds. Motion derived from these inputs can be evaluated independently of render order. The optional `inspectFrame(frame, time)` export exposes state for verification.

### Choose a renderer

For SVG compositions, the default backend is `svg`:

```bash
node bin/kinesis.mjs render my-video --backend svg --out output/video.mp4
```

For compositions that need browser layout, HTML, or CSS, use Chromium:

```bash
npx playwright-core install chromium
node bin/kinesis.mjs render my-video --backend chromium --out output/video.mp4
```

You can specify an installed browser with `--chromium /path/to/chrome` or the `KINESIS_CHROMIUM` environment variable.

### Select frames and include sound

```bash
node bin/kinesis.mjs render my-video --start 30 --end 89 --out output/segment.mp4
```

The frame range is **inclusive**. For audio, add an in-project relative path to the configuration:

```ts
export const config = {
  width: 1080, height: 1920, fps: 30, durationInFrames: 150,
  audio: 'assets/music.wav',
};
```

Audio is muxed as AAC and aligned with the requested starting frame. Keep rights to music and other media used in your compositions.

## Development

- CLI operations: `init`, `build`, `verify`, `render`
- Library API: `execute()`, `initializeProject()`, mathematical helpers
- Structured CLI results: `--json`
- Source: `src/`; commands: `bin/`; independent examples: `examples/`

See [API reference](docs/api.md) and [architecture](docs/architecture.md).

```bash
npm test
npm run test:browser    # requires Playwright Chromium
```

Kinesis runs project-authored JavaScript. Run trusted compositions locally; executing third-party projects requires separate operating-system or container isolation. Browser network requests are blocked by default during Chromium rendering.

## License

Kinesis's original source is available under the [MIT License](LICENSE).

React, esbuild, Playwright, resvg, Chromium, and FFmpeg have their own licenses. Kinesis does not redistribute Chromium or FFmpeg and does not change those licenses. See [contribution guidelines](CONTRIBUTING.md) and [security policy](SECURITY.md).

