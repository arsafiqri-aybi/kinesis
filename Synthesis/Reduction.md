# Reduction

## The same equation, three meanings

State equivalence, coarse-graining, and observational indistinguishability can all be maps merging alternatives. Their reasons differ:

| Merger | What is treated as equal | Required justification |
| --- | --- | --- |
| Representational redundancy | Physical states according to a theory | Theoretical structure and interpretation |
| Descriptive reduction | Deliberately retained information | Sufficiency for a particular question |
| Observational indistinguishability | Possible generated data | Observation model and possibility class |

[State](../Foundation/Core/State.md) distinguishes the first two; [Evidence](../Foundation/Core/Evidence.md) supplies the third. Their relation allows a shared mathematical criterion without equating physical meanings.

## P04

**Factorization through a reduced description.**

**Premises.** Let \(X,W\) be sets, \(C:X\to Z\) surjective, and \(A:X\to W\) a function. Each \(z\) represents the possibilities in its fibre \(C^{-1}(\{z\})\).

**Conclusion.** A unique \(\bar A:Z\to W\) with \(A=\bar A\circ C\) exists if and only if:

\[
C(x_1)=C(x_2)\ \Longrightarrow\ A(x_1)=A(x_2).
\tag{1}
\]

**Necessity.** If \(\bar A\) exists, equal inputs \(C(x_1)=C(x_2)\) have equal outputs, giving \(A(x_1)=A(x_2)\).

**Sufficiency.** For each \(z\in Z\), take the value \(A(x)\) on the fibre \(C^{-1}(\{z\})\). Surjectivity makes the fibre nonempty; condition (1) makes this value independent of representative, defining \(\bar A(z)\).

**Uniqueness.** Every \(z=C(x)\) must satisfy \(\bar A(z)=A(x)\); no alternative output is possible.

This elementary theorem about functions on equivalence classes is not a new physical law. [N01](Sources.md#n01) discusses the topological form with continuity conditions. The proof here starts at set level.

**What does not follow.** Existence of \(\bar A\) as a function guarantees neither continuity, measurability, smoothness, computability, nor physical measurability. If \(C\) is a topological quotient map and \(A\) continuous, the quotient's universal property makes \(\bar A\) continuous. Extra properties are not free without their conditions.

## Motion as a well-defined predicate

Let \(\pi:\mathcal H\to\mathcal H/{\sim}\) merge history representations expressing the same physical state according to the theory, including the reference. A predicate \(M:\mathcal H\to\{0,1\}\) is meaningful on physical classes only if:

\[
h_1\sim h_2\ \Longrightarrow\ M(h_1)=M(h_2).
\]

This applies P04 with \(C=\pi\). A predicate changing under representational redundancy is not well-defined at its claimed physical level.

P01 illustrates how transforming comparison rules together with states preserves such conclusions. Declaring every transformation “redundancy”, however, adds ontology not justified by P04.

## P05

**When operations descend to reduced descriptions.**

**Premises.** Let \(C:X\to Z\) be surjective and \(T:X\to X\) an operation.

**Conclusion.** A unique operation \(\bar T:Z\to Z\) satisfying:

\[
\bar T\circ C=C\circ T
\tag{2}
\]

exists exactly when:

\[
C(x_1)=C(x_2)
\ \Longrightarrow\
C(T(x_1))=C(T(x_2)).
\tag{3}
\]

**Proof.** Apply P04 to \(A=C\circ T\). Condition (3) is precisely condition (1).

This establishes sufficiency for a specified operation, not preservation of every state distinction or operation.

### Reference transformations may fail to descend

Take \(X=\mathbb R^2\), \(C(x,y)=x\), and rotation:

\[
T(x,y)=(-y,x).
\]

States \((0,0)\) and \((0,1)\) both reduce to zero. After rotation their reduced values are zero and \(-1\). Condition (3) fails.

Thus no single rule transforms old \(x\) into new \(x\) for all points under this rotation after discarding \(y\). Reduction has lost information needed for transformation.

**Cross-foundation consequence.** Descriptions equivalent for one reference need not suffice for changing references. The rotation is valid; the one-component description is insufficient.

### Reduced evolution requires closure

Suppose an autonomous deterministic evolution \(\Phi_t:X\to X\), \(t\ge0\), is supplied with:

\[
\Phi_0=\mathrm{id},\qquad
\Phi_{t+s}=\Phi_t\circ\Phi_s.
\]

This is an **additional dynamical-model premise**, not a kinematic consequence.

If condition (3) holds for every \(\Phi_t\), P05 yields \(\Psi_t:Z\to Z\) with:

\[
\Psi_t\circ C=C\circ\Phi_t.
\]

**Further derivation.**

\[
\Psi_{t+s}(C(x))
=C(\Phi_{t+s}(x))
=\Psi_t(\Psi_s(C(x))).
\]

Surjectivity of \(C\) gives \(\Psi_{t+s}=\Psi_t\circ\Psi_s\), and similarly \(\Psi_0=\mathrm{id}\). The semigroup property therefore descends at set level. Regularity and other physical properties require separate conditions.

**Failure example.** For a classical free particle with \(m>0\):

\[
\Phi_t(q,p)=\left(q+\frac{p}{m}t,p\right),\qquad C(q,p)=q.
\]

Initial states \((0,0)\) and \((0,m)\) have equal positions. At \(t>0\), positions are zero and \(t\). Position evolution is therefore not closed as a function of current position on this state class.

This assumes the free-particle law. It clarifies configuration versus phase state in [F-S22](../Foundation/Research/Sources.md#s22), without deriving that law from P05.

**Valid restriction.** Fixing momentum to one known value in advance can make position sufficient on the narrower class. Sufficiency changes because the class is restricted, not because position supplies momentum information.

## Merging need not preserve continuity

Quotients can change topology. Algebraically identical diagrams do not guarantee a manifold or the same rates on the reduced space.

Sharing a fibre also does not guarantee a physical path inside it. For example, let \(X=\{0,1\}\) be discrete, \(C\) constant, and allow only continuous histories from a connected interval. No nonconstant history is allowed despite noninjective \(C\).

This sharpens “reduction can hide change”: lost distinctions permit structural ambiguity, but actual history ambiguity still depends on the admissible class \(\mathcal H\).

## What can and cannot be unified

P04 supplies one reasoning pattern for retained-information sufficiency. P05 applies it to both transformations and dynamics.

Physical reasons for merging, relevant operations, and history-restricting laws remain distinct. A reduction may answer one question adequately while failing another.

[Evidence](Evidence.md) applies the criterion to observations. [Stationarity](Stationarity.md) examines descriptive constancy versus state constancy.
