# Space

## Position belongs to a structure

Position is not meaningful as a standalone number. It specifies a place in a space or relative to defined spatial relations. Coordinates label such places; one point can have many coordinate descriptions.

**Mathematical definition.** A space may carry topology, a metric, an affine structure, or a differential structure. These answer different questions. Not every numerical set is physical space, nor is every space relevant to motion three-dimensional.

| Structure | Role | Limit |
| --- | --- | --- |
| Set | Alternative locations or configurations | No proximity yet |
| Topology | Neighbourhoods and continuity | No particular lengths yet |
| Metric | Distance under specified rules | No physical interpretation of distance yet |
| Affine structure | Point differences and displacements | No preferred origin |
| Differential structure | Local change and tangent vectors | No metric by itself |

Standard relations among topology, metric spaces, products, quotients, and manifolds are discussed in [S07](../Research/Sources.md#s07). Interpreting a structure as physical space requires an additional scientific choice.

## Points, vectors, and coordinates

In Euclidean affine space, points \(p,q\) determine a displacement vector \(q-p\). A point alone is not a position vector without an origin. Choosing \(o\) gives the vector representation \(\mathbf r=p-o\).

**Immediate result.** Shifting the origin by \(\mathbf b\) changes both position vectors in the same way:

\[
\mathbf r'_p=\mathbf r_p-\mathbf b,\qquad
\mathbf r'_q=\mathbf r_q-\mathbf b.
\]

Hence \(\mathbf r'_q-\mathbf r'_p=\mathbf r_q-\mathbf r_p\). Displacement between points survives a fixed origin translation. This does not assume measurable absolute position.

Point subtraction is not canonical on every manifold. In curved spaces, connecting points or comparing vectors at different locations can require a curve and additional structure. Applying Euclidean formulas everywhere introduces unstated assumptions.

## Spatial relations and configurations

A configuration is an arrangement, not merely one position. For \(N\) labelled classical particles in \(X\), an initial construction is:

\[
Q=X^N,\qquad q=(x_1,\ldots,x_N).
\]

Constraints can restrict configurations to a subset of this product. Fixed material-point distances constrain a rigid body, for example. The number of written coordinates need not equal the number of independent degrees of freedom. [S02](../Research/Sources.md#s02)

For a rigid body with a fixed point and sufficient material markings, orientation in three-dimensional Euclidean space is represented by:

\[
SO(3)=\{R\in\mathbb R^{3\times3}:R^\top R=I,\ \det R=1\}.
\]

Changing orientation is thus motion even when the fixed point does not move. Body symmetries or unobserved information can reduce distinguishable orientations below the full \(SO(3)\). [S03](../Research/Sources.md#s03)

This example tests conceptual completeness of configuration. It does not require developing rotation theory or cataloguing motion types.

## Distance does not always contain all information

**Mathematical definition.** A metric \(d:X\times X\to[0,\infty)\) satisfies:

\[
d(x,y)=0\Leftrightarrow x=y,\qquad
d(x,y)=d(y,x),\qquad
d(x,z)\le d(x,y)+d(y,z).
\]

Weakening the first condition can give a pseudometric: distinct elements may have zero distance. Calling a quantity “distance” does not guarantee all metric axioms.

Pairwise distances provide relational information but need not specify orientation relative to an environment. All internal distances of a rigid body remain constant during translation and rotation. Thus **constant internal distances do not imply rest relative to an external reference**.

Moreover, a configuration and its mirror image can have equal pairwise distances. If orientation or chirality matters, distances alone need not suffice. Retaining or discarding that distinction depends on the physical question, not notational preference.

A reference need not be an external object. Relations among subsystems can supply comparisons, provided lost information is explained.

## Physical space and state space

Three meanings of space are often confused:

- **Physical space:** the locations or spatial relations being modelled.
- **Configuration space:** the set of possible arrangements.
- **State space:** the states selected by a theory, potentially including further quantities.

A configuration-space point can specify many physical positions simultaneously. Changes in temperature, probability, or composition can trace a state-space path without moving an object through physical space.

“Motion in state space” is therefore a legitimate mathematical extension when its meaning is stated. It does not prove that every change is spatial motion in the same sense.

## Distributions, fields, and transport

Not every account of motion needs labelled individuals. A distribution \(\phi(x,t)\) can describe quantities at locations. A material description may instead use \(\chi(a,t)\), the location of a material part labelled \(a\). These ask different questions: what happens at a location, or where the same part is.

**Mathematical analysis.** Compare:

\[
\phi_1(x,t)=f(x-vt),\qquad
\phi_2(x,t)=a(t)f(x).
\]

The first represents translation of a fixed profile in a one-dimensional model. The second changes amplitude at fixed locations and generally is not translation of that profile. Both can have \(\partial_t\phi\ne0\).

If \(f\) is constant, even \(\phi_1\) does not change despite the parameter \(v\). A homogeneous distribution alone cannot identify material displacement. Current information, material labels, or other structures may be needed.

The limited but fundamental conclusion is that changing field values at a point do not suffice to infer transport, and a constant distribution does not exclude every possible motion.

## Space and time as one structure

In relativity, events belong to spacetime. “Space at an instant” requires a choice of events treated as simultaneous. Observers need not make identical choices.

A Lorentzian spacetime metric is not a positive distance metric as defined by \(d\) above. It distinguishes timelike, null, and spacelike directions. Substituting “four-dimensional distance” for Euclidean distance without changing the mathematical meaning is misleading. [S06](../Research/Sources.md#s06)

Separating space and time conceptually remains useful for questions, but does not imply their physical separation in every theory.

In SI metrology, the metre is defined through fixed \(c=299\,792\,458\ \mathrm{m\,s^{-1}}\), with the second separately defined. This connects length and time standards without deriving all spatial geometry from those units. [S17](../Research/Sources.md#s17)

## Fundamental role

Spatial structure permits distinctions of position, orientation, or arrangement. Euclidean geometry, three dimensions, global coordinates, point identity across time, and a particular spacetime splitting do not follow from “space” alone.

Whether spacetime is continuous or discrete at the deepest level remains open. Causal set models, for example, propose a locally finite order structure underlying an approximation to spacetime. This is a research proposal, not established spatial discreteness. [S20](../Research/Sources.md#s20)

Configuration comparison needs [Reference](Reference.md); tracing configurations across temporal contexts is discussed in [Change](Change.md).
