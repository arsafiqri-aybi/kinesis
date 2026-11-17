# Architecture

Kinesis separates composition source, timeline evaluation, rasterization, and encoding.

```text
Project
  └── src/scene.tsx          React component + frame configuration
            │
            ▼
       esbuild compiler
            │
       ┌────┴────┐
       ▼         ▼
   SVG backend   Chromium backend
    React SSR    React DOM / Playwright
       │         │
       └────┬────┘
            ▼
      PNG frame stream
            ▼
           FFmpeg
            ▼
        H.264 MP4
```

## Project layout

A project owns its own `src/scene.tsx` and optional assets. Generated bundles live under `<project>/.kinesis/`. Media is written to the caller's requested output path.

## Frame-indexed motion

The scene receives an exact frame index, time in seconds, and normalized timeline progress. A composition maps these inputs to geometry, colors, positions, transforms, and other visible state.

The SVG backend compiles React/TSX into Node-compatible ESM and rasterizes SVG with resvg. The Chromium backend compiles a browser bundle, evaluates React DOM and captures frames. It supports bounded page concurrency while preserving output frame order.

## Verification

`verify` builds and samples a composition and checks reproducible markup and numeric state. Frame-range exports allow targeted checks of an implementation. Automated checks do not replace a viewer's evaluation of creative results.

## Execution boundary

Kinesis runs project-authored JavaScript and is not a security sandbox. Environments accepting untrusted compositions must isolate processes and constrain CPU, memory, filesystem, network access, and execution time. Browser HTTP(S) requests are blocked at the page level by default, but that alone does not isolate Node.js code.

