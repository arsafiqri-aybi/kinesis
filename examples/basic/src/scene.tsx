import React from 'react';

export const config = {
  width: 720,
  height: 720,
  fps: 30,
  durationInFrames: 90,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const smooth = value => {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

export function inspectFrame(frame, time) {
  const appear = smooth(time / 0.8);
  const x = 120 + 480 * smooth(time / 2.5);
  return {frame, appear, x};
}

export default function Scene({frame, time}) {
  const {appear, x} = inspectFrame(frame, time);
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width="720" height="720" viewBox="0 0 720 720">
      <rect width="720" height="720" fill="#101928" />
      <circle cx={x} cy="360" r={45 + 28 * appear}
              fill="#8DE6C3" opacity={appear} />
      <path d="M 60 540 H 660" fill="none" stroke="#7892B5" strokeWidth="2" />
    </svg>
  );
}

