# Reference

## References for comparison

Spatial motion requires comparing arrangements across temporal contexts. A reference specifies the comparison rule. It may be an object, environment, relation among subsystems, network of ideal clocks and rulers, or theoretical geometric structure.

A reference is not a conscious observer. Coordinates also differ from physical references: many coordinate systems can describe the same reference.

**Conceptual synthesis.** Four questions must be distinguished:

| Question | Example of change |
| --- | --- |
| Does the system change relative to a particular reference? | Relative motion |
| Is the reference changed? | A moving frame |
| Are labels for the same state changed? | Coordinate change |
| Are several states grouped together? | Information reduction or equivalence identification |

Without these distinctions, numerical changes can be mistaken for physical changes, or physical motion dismissed because coordinates are held fixed.

## Comparison across contexts

In a model with configuration spaces \(Q_t\) at each time, comparison can be represented by maps \(F_t:Q_t\to Q_R\) into a shared comparison space:

\[
q_R(t)=F_t(q_t).
\]

This explicitly states what counts as the “same place” or “same arrangement”. It is a conditional representation, not a definition imposed on every theory.

If all \(Q_t\) are already presented as one \(Q\), that presentation hides part of the comparison rule. Writing \(q(t_1)=q(t_2)\) still presupposes cross-time equality.

## Relabellings that preserve change

Let \(f:Q\to Q'\) be injective and time-independent. Then:

\[
q(t_1)=q(t_2)
\quad\Longleftrightarrow\quad
f(q(t_1))=f(q(t_2)).
\]

**Direct proof.** The forward direction follows from functionality; the reverse follows from injectivity. Constant histories therefore remain constant, and nonconstant histories remain nonconstant.

Stronger properties require stronger conditions. Preserving continuity in both directions requires topological compatibility, for example a homeomorphism. Preserving differential structure requires a suitable transformation, for example a diffeomorphism. An arbitrary bijection preserves element equality, not all geometric structure. [S07](../Research/Sources.md#s07)

If \(f\) is not injective, a changing history can map to a constant one. This differs from a coordinate change that merely relabels without losing information.

## Time-dependent references

In Euclidean space with shared time, take a position \(\mathbf r(t)\) and moving origin \(\mathbf z(t)\). Coordinates relative to that origin are:

\[
\mathbf r'(t)=\mathbf r(t)-\mathbf z(t).
\]

If \(\mathbf z(t)=\mathbf r(t)\), then \(\mathbf r'(t)=0\). The system is at rest relative to an origin following it; this does not eliminate every physical relation involved in its motion.

For time-dependent axis rotations and translations:

\[
\mathbf r'=R(t)\mathbf r+\mathbf b(t),
\]

the chain rule gives:

\[
\dot{\mathbf r}'=
R\dot{\mathbf r}+\dot R\,\mathbf r+\dot{\mathbf b}.
\]

The additional terms show that coordinate rates can arise from changing bases or origins. Any “equal velocity” claim must specify the transformation and compared quantity.

## Relativity does not erase every physical distinction

**Established in classical mechanics.** Inertial frames are related to free-particle behaviour. For Galilean transformations with fixed rotation \(R\) and constant relative velocity \(\mathbf u\), one convention is:

\[
t'=t,\qquad
\mathbf r'=R\mathbf r-\mathbf u t+\mathbf b.
\]

Then \(\mathbf v'=R\mathbf v-\mathbf u\), while \(\mathbf a'=R\mathbf a\). Position constancy depends on the frame; whether acceleration is zero is preserved between these inertial frames. [S04](../Research/Sources.md#s04)

Allowing arbitrary coordinates does not make every frame inertial. Laws and additional terms must also be transformed.

In relativity, an object's local velocity is measured relative to a local timelike observer. Different observers can obtain different velocities at the same event. Once observer and object are specified, however, the relation is independent of coordinate names.

Proper acceleration is a physical distinction not erased by keeping an object's coordinates fixed. A null path also has no physical rest frame like a timelike object. “All motion is entirely a coordinate choice” is therefore too strong. [S05](../Research/Sources.md#s05), [S06](../Research/Sources.md#s06)

## Symmetry, invariance, and redundancy

**Mathematical definition.** A symmetry transformation preserves a specified structure, such as distances, relations, or the form of laws. “Symmetry” always requires identifying what is preserved.

Three uses must be separated:

1. **Passive transformation:** changes a description's representation.
2. **Active transformation:** compares a transformed physical arrangement with reference structures.
3. **Gauge redundancy:** multiple representations express the same physical state in the theory concerned.

Not every active symmetry is redundancy. Rotating an object relative to its environment can produce a different state even when natural laws have rotational symmetry.

Transformation order also has structure. Two fixed translations in a vector space commute:

\[
T_{\mathbf a}T_{\mathbf b}
=T_{\mathbf a+\mathbf b}
=T_{\mathbf b}T_{\mathbf a}.
\]

In contrast, three-dimensional rotations generally do not commute. This concerns composition of particular transformations, not a principle that “motion always commutes” or “motion never commutes”. [S03](../Research/Sources.md#s03)

Mathematical properties transfer only when the relevant transformations and structures are actually used.

## Internal relations and overall motion

Translating every system position by the same vector preserves internal position differences. Rotating an entire configuration together preserves internal distances. A description retaining only internal distances cannot distinguish these transformations.

**Inferential limit.** Failure of an internal description to distinguish configurations does not prove absence of differences relative to an environment, orientation, or inertial structure. Removing global transformations through a quotient space requires justification within the theory.

Some relational approaches treat relational structure as more basic than background-relative positions. Here “more basic” concerns theory construction, not a universal result settled by a translation example.

## Fundamental role

Reference keeps comparisons meaningful and distinct from representational changes. Particular references, transformation groups, and claims about absolute or relational structures depend on the framework.

Coordinate invariance establishes descriptive consistency, not model adequacy, physical existence of all model objects, or valid inference from data. The last issue is discussed in [Evidence](Evidence.md).
