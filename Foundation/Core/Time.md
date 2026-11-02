# Time

## Order, duration, and parameters

Time involves several inequivalent structures:

| Structure | What it supplies | What it does not yet supply |
| --- | --- | --- |
| Order | Before, after, or comparability | Interval length |
| Duration | Comparison or measurement of intervals | Spatial position |
| Parameter | Labels describing a history | A guarantee of physical clock readings |
| Coordinate time | Placement of events in a spacetime description | A universal time agreed upon by all observers |
| Proper time | Duration along a timelike history in relativity | A parameter for lightlike histories |

This is a conceptual distinction, not proof that time consists of these separate constituents.

## Order structure

**Mathematical definition.** A non-strict partial order \(\preceq\) is reflexive, antisymmetric, and transitive. Not every pair need be comparable. A total order additionally makes every pair comparable. [S01](../Research/Sources.md#s01)

The ordering \(a\prec b\prec c\) does not determine whether the interval from \(a\) to \(b\) exceeds that from \(b\) to \(c\). Labels \(0,1,2\) and \(0,1,100\) preserve order but give different numerical differences. Label differences express duration only when justified by measurement structure.

The order of an observation list need not equal the order of its source events. Information may arrive late, be reordered, or originate at different locations. Equating these orders requires a model connecting events and records.

Not every order is temporal. Alphabetical order has mathematical structure but does not itself describe physical history.

## Histories and parameter choice

A simple history is \(q:T\to Q\). Its domain \(T\) may be a real interval or discrete sequence, depending on the framework. Merely using the label \(t\) does not require continuity, uniform units, or a particular physical time direction.

Let \(t=f(\lambda)\) be bijective and strictly increasing, and write

\[
\widetilde q(\lambda)=q(f(\lambda)).
\]

**Immediate result.** Both histories traverse the same configurations in the same order. With domains related bijectively, one is constant exactly when the other is constant. Parameter intervals, however, can differ.

If \(f\) and \(q\) are differentiable, the chain rule gives:

\[
\frac{d\widetilde q}{d\lambda}
=\frac{dq}{dt}\frac{dt}{d\lambda}.
\]

A numerical derivative is not a property of the geometric curve alone; it also depends on parametrization. Regular use of the inverse rate formula requires \(dt/d\lambda\) to be nonzero on the part considered.

If \(f\) decreases, traversal reverses. If \(f\) is not injective, parameters can be merged, losing order or repetition information. Relabellings are therefore not automatically equivalent.

A unit change \(t'=at+b\), \(a>0\), differs from a general function that does not represent a uniformly running clock in the original model. Rates can be compared after unit conversion; general reparametrization needs additional physical explanation.

## Duration and clocks

Duration requires a standard for comparing processes. A clock is a physical system whose readings establish intervals within a specified domain and uncertainty.

In the SI, the second is defined through the fixed frequency of the unperturbed ground-state hyperfine transition of caesium-133, \(\Delta\nu_{\mathrm{Cs}}=9\,192\,631\,770\ \mathrm{Hz}\). This unit definition supplies metrological uniformity, not an ontology of time. [S16](../Research/Sources.md#s16)

A standard unit does not imply equal intervals for all clocks following different paths or in different environments. The unit, the quality of clock realization, and the physical duration measured must be distinguished.

## Time in classical and relativistic frameworks

**A particular classical assumption.** Newtonian models use a shared time to compare configurations at the same instant. Histories can be represented in a product \(T\times Q\). Success within this domain does not prove that global time is necessary for every motion.

**Established in special relativity.** Simultaneity of spatially separated events depends on the inertial frame. Time-orientation-preserving Lorentz transformations preserve the causal order of timelike- or null-related events; spacelike pairs have no such invariant temporal order. [S05](../Research/Sources.md#s05)

The one-dimensional equation shows why:

\[
\Delta t'=\gamma\left(\Delta t-\frac{v\Delta x}{c^2}\right),
\qquad
\gamma=\frac{1}{\sqrt{1-v^2/c^2}}.
\]

If \(\Delta t=0\), generally \(\Delta t'\) is nonzero when \(v\Delta x\ne0\). Merely correcting light-travel time does not remove this difference: event coordinates can already be assigned after signal-reception corrections.

A causal relation forms a partial order under appropriate causality conditions. In spacetimes with closed causal curves, antisymmetry can fail. Thus “all relativity supplies a global partial order” overgeneralizes.

## Proper time

With metric convention \((-+++)\) and \(x^0=ct\), proper duration along a timelike curve is:

\[
\Delta\tau
=\frac1c\int_{\lambda_1}^{\lambda_2}
\sqrt{-g_{\mu\nu}
\frac{dx^\mu}{d\lambda}
\frac{dx^\nu}{d\lambda}}\,d\lambda.
\]

Proper time is a geometric quantity along that curve. Different curves between two events can yield different durations. For null curves, \(d\tau=0\); proper time is not a regular parameter for light. [S06](../Research/Sources.md#s06)

In Minkowski spacetime:

\[
d\tau=dt\sqrt{1-\frac{|\mathbf v|^2}{c^2}}
\]

for timelike paths in inertial coordinates. The limit \(|\mathbf v|\ll c\) explains why coordinate and proper time can approximate each other in particular conditions; it does not identify them in principle.

## Direction, causality, and change

Orienting a domain towards the “future” does not explain why many macroscopic processes have a characteristic direction. The thermodynamic arrow requires statistical states and boundary conditions. Temporal order, cause, parameter direction, and process irreversibility are not synonyms.

Change does not automatically establish a substance theory of time either. Relational descriptions can connect variables without assuming an external clock underlying everything.

**Open conceptual model.** Page and Wootters proposed describing evolution through correlations with a clock subsystem in an overall stationary state. This illustrates a different formulation of time's role, not empirical elimination of external time from all physics. [S19](../Research/Sources.md#s19)

## Fundamental role

A history requires clearly stated temporal relations or relational substitutes. Metric duration, a continuous real line, global time, a thermodynamic arrow, and an external clock are additional commitments whose roles depend on the framework.

Whether time is fundamental or emerges from another structure remains open. Writing \(q(t)\) does not settle it. Function regularity is discussed in [Change](Change.md), and cross-context position comparison in [Reference](Reference.md).
