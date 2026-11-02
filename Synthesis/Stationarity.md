# Stationarity

## What is claimed to remain constant?

“Stationary” may concern a state, selected quantity, distribution, process statistics, or representation. Motion conclusions require specifying both object and equality type.

Connections among [State](../Foundation/Core/State.md), [Change](../Foundation/Core/Change.md), and [Evidence](../Foundation/Core/Evidence.md) separate several implications precisely.

## P10

**Constant observations imply a constant state only when sufficiently distinguishing.**

**Premises.** Let \(h:T\to S\) and time-independent \(A:S\to Z\). If \(A\) is injective on \(h(T)\), then:

\[
A(h(t))\text{ constant}
\quad\Longrightarrow\quad
h(t)\text{ constant}.
\]

**Proof.** For all \(t,u\), equality \(A(h(t))=A(h(u))\) and image injectivity imply \(h(t)=h(u)\).

Conversely, a constant state always makes \(A\circ h\) constant. For a family \(A_i\), separating relevant states suffices; one scalar quantity is unnecessary.

**Theoretical limit.** State and injectivity are assessed after representational redundancy is fixed. Quantum state-to-outcome-distribution maps do not give classical definite values to all observables.

**Relation to P06.** P10 examines a state path through selected quantities. P06 examines a property across all data-compatible histories. Both use equal outputs, but differ in objects and quantifier scope.

If \(A\) depends on time, constant states can yield changing outputs: \(h(t)=0\), \(A_t(x)=x+t\). Conversely, \(h(t)=t\), \(A_t(x)=x-t\) yields constant output. Observation changes must separate system changes from changes in comparison or procedure.

## P11

**Stationary density constrains current divergence, not necessarily current.**

**Additional model premises.** In a specified domain and reference, sufficiently regular density \(\rho\) and current \(J\) obey source-free conservation:

\[
\partial_t\rho+\nabla\cdot J=0.
\tag{6}
\]

Such equations have different meanings in mass and probability conservation. [N03](Sources.md#n03) discusses mass conservation; [F-S10](../Foundation/Research/Sources.md#s10) supplies the quantum form.

**Conclusion.** If \(\partial_t\rho=0\), then \(\nabla\cdot J=0\). This does not imply \(J=0\).

**Proof and counterexample.** Substitution gives zero divergence. On a one-dimensional circle, constant \(J(x)=J_0\ne0\) has \(\partial_xJ=0\) and admits constant density. Zero-current implication therefore fails.

**Boundary conditions.** On a connected one-dimensional interval, \(\partial_xJ=0\) makes \(J\) constant with respect to \(x\) at each time. Adding zero current at one endpoint at every time and continuity to that boundary forces zero throughout. Zero current now follows jointly from stationary density, conservation, and the boundary condition.

This does not generalize to every higher-dimensional domain: circulation can have zero divergence and zero boundary-normal flux while remaining nonzero inside.

### Zero total current still need not mean every part is at rest

On a circle, two homogeneous material components can have densities \(\rho_0/2\) and velocities \(+u\) and \(-u\), with \(\rho_0>0,u\ne0\). Currents \(\rho_0u/2\) and \(-\rho_0u/2\) cancel, but both components move.

This is a two-component kinematic example, without conclusions about interactions or dynamical stability. For a medium genuinely described by one relation \(J=\rho v\), \(\rho>0\), \(J=0\) implies \(v=0\). That single constitutive relation must not be silently applied to mixtures or probability currents.

### Connection to quantum states on a circle

For a free model on a circle of length \(L>0\):

\[
\psi_n(x,t)=L^{-1/2}e^{i(k_nx-\omega_nt)},\qquad
k_n=\frac{2\pi n}{L},\quad
\omega_n=\frac{\hbar k_n^2}{2m}.
\]

With \(m>0,n\in\mathbb Z\), Foundation gives \(|\psi_n|^2=1/L\) and \(j_n=\hbar k_n/(mL)\). States \(n\) and \(-n\), for \(n\ne0\), have equal densities and opposite currents.

Position density cannot distinguish them; current direction does not factor through density alone, as P04 requires. This connects the quantum calculation to descriptive sufficiency without identifying probability current with classical material current.

## P12

**Stationary statistics do not require constant individual histories.**

**Probabilistic example premises.** Take \(A\ne0,\omega\ne0\), and \(\Theta\) uniform on \([0,2\pi)\). Define:

\[
X(t)=A\cos(\omega t+\Theta).
\]

“Strictly stationary” means the joint distribution at every finite time collection is invariant under shifting all times equally.

**Stationarity proof.** For \(t_1,\ldots,t_n\) and shift \(s\):

\[
(X(t_1+s),\ldots,X(t_n+s))
=\bigl(A\cos(\omega t_i+\Theta+\omega s)\bigr)_{i=1}^n.
\]

The variable \((\Theta+\omega s)\bmod2\pi\) remains uniform. The joint distribution is therefore that at \(t_1,\ldots,t_n\).

**Nonconstancy proof.** For every fixed phase, \(t\mapsto A\cos(\omega t+\Theta)\) is nonconstant on every nonempty open interval. Its derivative \(-A\omega\sin(\omega t+\Theta)\) is not identically zero there.

**Consequence.** Even invariance of every joint distribution under time translation differs from constancy of one realization. Constant one-time distributions are weaker still.

Uniform random phase is an example premise, not derived from the six foundations. This does not establish universally random motion, ergodicity under every temporal observation scheme, or exact observer knowledge of distributions.

## P13

**Instantaneous state equivalence does not guarantee unchanged evolution equations.**

**Additional model premises.** In the Schrödinger picture:

\[
i\hbar\partial_t\psi=H\psi,
\]

define \(\psi'(t)=e^{i\theta(t)}\psi(t)\), with differentiable real global phase. States and operators have domains making these differentiations and operations valid.

At each time, \(\psi'\) and \(\psi\) represent the same pure-state ray under [F-S09](../Foundation/Research/Sources.md#s09).

**Derivation.**

\[
i\hbar\partial_t\psi'
=-\hbar\dot\theta\,\psi'+H\psi'
=H'\psi',\qquad
H'=H-\hbar\dot\theta I.
\]

The global phase multiplies the identity, so commutation with \(H\) introduces no other terms.

**Conclusion.** Time-dependent representational changes require a corresponding generator transformation. A changing phase does not justify assuming \(\psi'\) obeys exactly the same \(H\). Constant phase makes the extra term zero.

This parallels extra terms for changing references in P01–P02, but shared differential form does not identify spatial bases with quantum phase physically.

## Several levels of constancy

P10 specifies when constant observables suffice for constant states. P11 exposes current information absent from density and boundary-condition effects. P12 separates probability laws from realizations. P13 separates ray equivalence from representational generator consistency.

No simple “more stationary means more at rest” ordering equates these. Sound conclusions name their object, reference, equivalence, and law structure.
