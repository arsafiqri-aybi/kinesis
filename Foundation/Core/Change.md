# Change

## Change and motion

**Conditional definition.** Given a temporal domain \(T\), state space \(S\), and fixed equality rule, a history is a map \(s:T\to S\). It is nonconstant if some \(t_1,t_2\in T\) satisfy \(s(t_1)\ne s(t_2)\).

This formalizes change, not its causes. For **spatial motion**, the changing component must mean position, orientation, or spatial arrangement relative to a stated reference.

Temperature change is not automatically displacement. Classical configuration change need not encompass all quantum-state evolution. Pattern motion, material transport, and perceived motion must also be distinguished. Broader uses of “motion” are legitimate if their meaning is stated.

## End states do not determine a history

Take \(T=[0,1]\) and:

\[
q_0(t)=0,\qquad q_1(t)=t(1-t).
\]

Both have \(q(0)=q(1)=0\), but only \(q_0\) is constant. Equal initial and final states therefore do not imply absence of intervening change.

Even histories traversing the same point set may differ in order or repetition. The geometric image \(q(T)\) does not contain all information in a parametrized history.

**Immediate result.** Removing the parameter can remove when, how fast, and how many times a configuration is traversed. Geometric paths, temporal histories, and observational records are therefore distinct objects.

## Continuity is additional structure

**Mathematical definition.** For topological spaces \(T\) and \(Q\), a map \(q:T\to Q\) is continuous when the preimage of every open set in \(Q\) is open in \(T\). This requires neither numerical velocities nor distance units. [S07](../Research/Sources.md#s07)

For metric spaces, continuity at \(t_0\) is:

\[
\forall\varepsilon>0\ \exists\delta>0:
d_T(t,t_0)<\delta
\Longrightarrow
d_Q(q(t),q(t_0))<\varepsilon.
\]

This constrains proximity relations. It does not establish that all physical histories must be continuous, time must be continuous, or velocity must exist.

A discrete history \(q:\mathbb Z\to Q\) can still distinguish ordered configurations. Continuity on a discrete domain imposes no behaviour between labels outside that domain.

**Mathematical result with proof.** If \(T\) is nonempty and connected and \(Q\) topologically discrete, every continuous \(q:T\to Q\) is constant. A continuous image of a connected set is connected; a connected subset of a discrete space has at most one point. Thus the image of \(q\) is one point.

The implication is limited: connected time, discrete states, and ordinary continuity together exclude nonconstant change. This does not prove that nature cannot be discrete. A selected theory may change an assumption or its continuity definition.

## Differentiability and local rates

In a vector space with a real parameter:

\[
\dot q(t_0)=
\lim_{h\to0}\frac{q(t_0+h)-q(t_0)}{h},
\]

when the limit exists. On a smooth manifold, a curve's derivative is a tangent vector at \(q(t_0)\); arbitrary manifold-point subtraction is not a global definition.

Derivatives require more structure than state differences. Differentiability implies continuity, but not conversely. The elementary example \(q(t)=|t|\) is continuous and not differentiable at zero.

Standard Brownian models have versions with continuous paths that are almost surely nowhere differentiable. This is a probability-model result, not a claim that physical particles have ideal Brownian paths at every scale. [S08](../Research/Sources.md#s08)

A classical velocity defined at every instant is therefore not universally required by every meaning of motion.

## Rest on an interval and an instantaneous zero rate

In a configuration model with fixed reference, rest on \(I\) means \(q|_I\) is constant. This differs from \(\dot q(t_0)=0\) at one instant.

Take:

\[
q(t)=t^3,\qquad \dot q(0)=0.
\]

The history changes in every open neighbourhood of zero despite its instantaneous zero rate. Zero instantaneous velocity does not establish rest throughout an interval.

**Mathematical result.** If \(q:I\to\mathbb R^n\) is differentiable on a connected open interval \(I\) and \(\dot q(t)=0\) for every \(t\in I\), then \(q\) is constant on \(I\). Apply the mean value theorem componentwise between any two points.

“Differentiable everywhere” must not silently become “derivative zero almost everywhere”. Without extra regularity, such as absolute continuity in the appropriate setting, the implication can fail.

Instantaneous-motion statements thus use a history's structure or a limit around that instant. One isolated position does not supply this information.

## Displacement, length, and speed

In Euclidean space, endpoint displacement \(\Delta\mathbf r=\mathbf r(b)-\mathbf r(a)\) differs from path length.

In a metric space, curve length can be defined by:

\[
L(q)=\sup_{\mathcal P}
\sum_{i=1}^n d(q(t_i),q(t_{i-1})),
\quad
a=t_0<\cdots<t_n=b.
\]

The triangle inequality immediately gives:

\[
d(q(a),q(b))\le L(q).
\]

A curve returning to its start can have positive length. Length may also be infinite; continuity alone does not ensure finite length.

With sufficient structure and regularity, speed relates to a tangent vector's norm. A metric derivative is also possible:

\[
|\dot q|(t)=
\lim_{h\to0}\frac{d(q(t+h),q(t))}{|h|},
\]

when the limit exists. This differs from a velocity vector: it supplies a magnitude without vector direction. Metric and parameter remain assumptions.

## Kinematics and dynamics

Kinematics describes motion. Dynamics restricts histories through a theory's laws. A mathematically possible \(q(t)\) does not establish that the motion occurs, is physically permitted, or results from a particular force.

In Newtonian mechanics, \(F=ma\) requires mass, force, inertial frames, and suitable regularity. It is not the definition of motion. Other theories have different laws and state structures. [S04](../Research/Sources.md#s04)

Determinism does not follow from the definition of history. A history may be known retrospectively while its predictive model is stochastic. Deterministic evolution equations themselves require existence and uniqueness conditions; writing an equation does not prove those conditions hold.

## Limits of classical trajectories in quantum theory

In standard quantum theory, evolving probability distributions and probability currents must not immediately be identified with definite individual particle trajectories.

For a free one-dimensional Hamiltonian without a vector potential:

\[
\rho=|\psi|^2,\qquad
j=\frac{\hbar}{m}\operatorname{Im}
\left(\psi^*\partial_x\psi\right),
\qquad
\partial_t\rho+\partial_xj=0.
\]

The continuity equation locally relates probability-density change to current; it does not add an individual-trajectory assumption. [S10](../Research/Sources.md#s10)

On a circle of length \(L>0\), with mass \(m>0\), take the normalized state:

\[
\psi(x,t)=\frac1{\sqrt L}
e^{i(kx-\omega t)},\qquad
k=\frac{2\pi n}{L},\quad n\in\mathbb Z,\quad
\hbar\omega=\frac{\hbar^2k^2}{2m}.
\]

Direct substitution gives constant \(\rho=1/L\) and \(j=\hbar k/(mL)\), nonzero if \(n\ne0\). Stationary position density therefore does not imply that every motion-related quantity vanishes. The particle-on-a-circle and stationary-state context is discussed in [S11](../Research/Sources.md#s11).

In the Schrödinger picture, an energy eigenstate's global phase evolution also leaves its pure-state ray unchanged. A “moving” conclusion must identify whether it compares rays, position densities, currents, observables, or trajectories within a particular interpretation.

## Fundamental role

Change concerns histories of distinctions interpreted through explicit temporal, spatial, and reference structures. Continuity, rate, length, and evolution laws are added only with their supporting structures.

No single “coordinates change” test covers every case without a framework. Clarity about what changes, relative to what, in which sense, and under which assumptions is central to understanding motion.
