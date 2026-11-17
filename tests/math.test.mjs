import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clamp, lerp, progress, smoothstep, smootherstep, easeOutCubic,
  easeInOutCubic, spring, frameTime, keyframes, seededNoise, cubicPoint, lerpAngle
} from '../src/math.mjs';

const near = (a, b, tolerance = 1e-7) => assert.ok(
  Math.abs(a - b) < tolerance, String(a) + ' differs from ' + String(b)
);

test('interpolation and easing have stable limits', () => {
  near(clamp(-3),0); near(clamp(2),1);
  near(lerp(10,30,.25),15);
  near(progress(0,1,3),0); near(progress(4,1,3),1);
  near(smoothstep(0),0); near(smoothstep(1),1);
  near(smootherstep(.5),.5); near(easeInOutCubic(.5),.5);
  near(easeOutCubic(1),1);
});

test('analytical spring starts at the initial state and converges', () => {
  for (const damping of [3,22,45]) {
    near(spring(0,{initial:3,target:11,damping}),3);
    near(spring(10,{initial:3,target:11,damping}),11,.001);
  }
});

test('spring is independent of frame evaluation order', () => {
  const options={initial:-2,target:15,stiffness:200,damping:24,velocity:3};
  const first=spring(1.24,options);
  spring(2.5,options); spring(.1,options);
  near(spring(1.24,options),first);
});

test('frame conversion and keyframe endpoints', () => {
  near(frameTime(60,30),2);
  near(keyframes(.5,[{time:0,value:5},{time:1,value:25}]),15);
  near(keyframes(2,[{time:0,value:5},{time:1,value:25}]),25);
  near(cubicPoint(0,0,1,1,.5),.5);
  near(lerpAngle(3,-3,.5),Math.PI);
});

test('seeded noise is deterministic', () => {
  const a=seededNoise(42),b=seededNoise(42);
  for(let i=0;i<30;i++)near(a(),b());
});

test('mathematical functions reject invalid domains', () => {
  assert.throws(()=>clamp(NaN));
  assert.throws(()=>progress(2,0,0));
  assert.throws(()=>frameTime(-1,30));
  assert.throws(()=>spring(1,{mass:0}));
});

