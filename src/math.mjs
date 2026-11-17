/**
 * Deterministic motion mathematics. Time is expressed in seconds.
 * Independent original implementation for Kinesis.
 */
export const clamp = (v, lo = 0, hi = 1) => {
  if (![v, lo, hi].every(Number.isFinite) || lo > hi) throw new RangeError('Invalid clamp');
  return Math.min(hi, Math.max(lo, v));
};
export const lerp = (a, b, t) => a + (b - a) * t;
export const inverseLerp = (a, b, x) => a === b ? 0 : (x - a) / (b - a);
export const remap = (x, inA, inB, outA, outB, bound = true) =>
  lerp(outA, outB, bound ? clamp(inverseLerp(inA, inB, x)) : inverseLerp(inA, inB, x));
export const progress = (time, start, duration) => {
  if (!(duration > 0)) throw new RangeError('Duration must be positive');
  return clamp((time - start) / duration);
};
export const smoothstep = t => { const x = clamp(t); return x * x * (3 - 2 * x); };
export const smootherstep = t => {const x = clamp(t);return x*x*x*(x*(x*6-15)+10);};
export const easeOutCubic = t => 1 - (1 - clamp(t)) ** 3;
export const easeInOutCubic = t => {const x=clamp(t); return x<.5?4*x*x*x:1-(-2*x+2)**3/2;};
export const easeInOutSine = t => -(Math.cos(Math.PI * clamp(t)) - 1)/2;
export const easeOutExpo = t => {const x=clamp(t);return x===1?1:1-2**(-10*x);};
export const pulse = (t,center,width) => Math.exp(-.5*((t-center)/width)**2);
export const mix = (a,b,t) => a.map((v,i) => lerp(v,b[i],t));
export const vec2 = (x,y) => ({x,y});
export const magnitude = ({x,y}) => Math.hypot(x,y);
export const rotation = (x,y,rad) => ({x:x*Math.cos(rad)-y*Math.sin(rad),y:x*Math.sin(rad)+y*Math.cos(rad)});
export const frameTime = (frame,fps) => {if(!Number.isInteger(frame)||frame<0||!(fps>0))throw new RangeError('Invalid frame or fps');return frame/fps;};
/**
 * Analytical solution of m*x'' + damping*x' + stiffness*(x-target)=0.
 * It is evaluated from absolute time, so seek order does not change results.
 */
export function spring(time, {initial=0,target=1,velocity=0,mass=1,stiffness=180,damping=22}={}) {
  if (!(mass>0 && stiffness>0 && damping>=0) || ![time,initial,target,velocity].every(Number.isFinite)) {
    throw new RangeError('Invalid spring parameters');
  }
  if (time<=0) return initial;
  const omega=Math.sqrt(stiffness/mass), zeta=damping/(2*Math.sqrt(stiffness*mass)), y0=initial-target;
  if (zeta < 1 - 1e-7) {
    const wd=omega*Math.sqrt(1-zeta*zeta);
    return target + Math.exp(-zeta*omega*time)*(y0*Math.cos(wd*time)+(velocity+zeta*omega*y0)/wd*Math.sin(wd*time));
  }
  if (zeta<=1+1e-7) {
    return target + Math.exp(-omega*time)*(y0+(velocity+omega*y0)*time);
  }
  const s=Math.sqrt(zeta*zeta-1), r1=-omega*(zeta-s),r2=-omega*(zeta+s);
  const c1=(velocity-r2*y0)/(r1-r2),c2=y0-c1;
  return target + c1*Math.exp(r1*time)+c2*Math.exp(r2*time);
}
export const cubicPoint = (p0,p1,p2,p3,t) => {
  const u=1-clamp(t),v=1-u;return u**3*p0+3*u*u*v*p1+3*u*v*v*p2+v**3*p3;
};
export const lerpAngle = (a,b,t) => a + Math.atan2(Math.sin(b-a),Math.cos(b-a))*t;
export function seededNoise(seed) {
  let state=(seed>>>0)||1;
  return () => { state^=state<<13;state^=state>>>17;state^=state<<5;return (state>>>0)/4294967296; };
}
export function keyframes(time,frames,interpolator=easeInOutCubic) {
  if(!Array.isArray(frames)||!frames.length)throw new RangeError('At least one keyframe required');
  if(frames.length===1 || time<=frames[0].time)return frames[0].value;
  for(let i=1;i<frames.length;i++){
    if(!(frames[i].time>frames[i-1].time))throw new RangeError('Keyframe times must increase');
    if(time<=frames[i].time){
      const t=interpolator((time-frames[i-1].time)/(frames[i].time-frames[i-1].time));
      return lerp(frames[i-1].value,frames[i].value,t);
    }
  }
  return frames.at(-1).value;
}

