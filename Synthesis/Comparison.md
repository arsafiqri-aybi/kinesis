# Comparison

## Comparison precedes constancy claims

Calling configurations at two times “equal” requires a rule connecting those contexts. Equal coordinates alone are insufficient if origins or bases change. Different coordinates do not establish physical change if labels change.

[Reference](../Foundation/Core/Reference.md) presents \(q_t\in Q_t\) and comparison maps \(F_t:Q_t\to Q_R\). [State](../Foundation/Core/State.md) establishes equality's role; [Time](../Foundation/Core/Time.md) distinguishes time from parameters. Together they yield the following consistency condition.

## P01

**Covariance of comparison rules.**

**Premises.** For each \(t\), let \(f_t:Q_t\to Q'_t\) be a representational bijection, \(q_t\) a configuration, and \(F_t\) a comparison rule. All maps apply on the domains considered. Define:

\[
q'_t=f_t(q_t),\qquad F'_t=F_t\circ f_t^{-1}.
\]

**Conclusion.**

\[
F'_t(q'_t)=F_t(q_t).
\]

**Proof.** Substitution gives \(F_t(f_t^{-1}(f_t(q_t)))=F_t(q_t)\). Identical comparison histories at every context preserve constancy, endpoint differences, and other properties of that history.

This is map algebra requiring neither continuity nor differentiability. Preserving those properties in coordinates additionally requires compatible transformations.

**Example.** On a line with shared time, take \(q(t)=t\) and fixed-reference \(F_t(x)=x\). Change coordinates to \(x'=x-t\). The object's coordinates become \(q'(t)=0\), but the same comparison rule becomes \(F'_t(x')=x'+t\). Thus \(F'_t(q'(t))=t\): change relative to the original reference remains.

Using \(G'_t(x')=x'\) after this coordinate change instead selects a different comparison: a reference following the moving origin. Its constant result does not contradict P01 because the physical comparison rule changed.

**Conceptual consequence.** Relative-motion predicates concern the state **together with its reference and comparison rules**, rather than object coordinates alone. This does not make every \(F_t\) family physically realizable or guarantee a global comparison in every spacetime.

## P02

**Preserving a property requires compatible structure.**

Let \(h:T\to Q\), with time-independent \(f:Q\to Q'\) and \(\phi:T'\to T\). The transformed history is:

\[
\widetilde h=f\circ h\circ\phi.
\]

| Property | Sufficient conditions for two-way preservation |
| --- | --- |
| Constancy or nonconstancy | \(f\) injective on the relevant image and \(\phi\) surjective onto the history domain |
| Traversal order | Additional order structure and increasing bijective \(\phi\) |
| Continuity | Homeomorphisms of relevant spaces and domains |
| Equivalent derivative structure | Suitable diffeomorphisms of spaces and parameters |
| Zero derivative vector at corresponding points | Injective \(Df\), \(\phi'\ne0\), and differentiability |
| Equal curve length | For example, isometric \(f\) and increasing bijective interval reparametrization |

A homeomorphism is a continuous bijection with continuous inverse. A diffeomorphism is a smooth bijection with smooth inverse on the compared structures; weaker local conditions may suffice for one derivative.

These rows are not a chain of jointly necessary conditions. Isometry, for example, is sufficient but stronger than required for one particular curve.

**Constancy proof.** Composition preserves a constant \(h\). Conversely, constancy of \(f(h(\phi(u)))\) and injectivity of \(f\) imply constancy of \(h(\phi(u))\). Surjectivity of \(\phi\) reaches every \(h(t)\), so \(h\) is constant.

Surjectivity matters. Observing only a resting subinterval does not establish constancy of the entire history.

**Derivative proof.** In smooth coordinates:

\[
\frac{d\widetilde h}{d\lambda}
=Df_{h(\phi(\lambda))}
\left(\frac{dh}{dt}\bigg|_{t=\phi(\lambda)}\right)\phi'(\lambda).
\]

With \(\phi'\ne0\) and injective \(Df\), the right side vanishes exactly when \(dh/dt=0\) at the corresponding point. Numerical speeds need not agree; norms and units may change too.

**Length proof.** An isometry preserves every partition-sum distance. Increasing bijective interval reparametrization pairs partitions between domains. Their suprema are therefore equal.

**Counterexamples connecting Time and Reference.** Take \(h(t)=t\).

- The coordinate map \(f(x)=x^3\) is a bijection and homeomorphism of the line, but its inverse is not differentiable at zero. The history \(f(h(t))=t^3\) has zero derivative at zero, while \(h'(0)=1\).
- The reparametrization \(t=\lambda^3\) is also an increasing bijection, but \(\phi'(0)=0\). The transformed history \(\lambda^3\) has zero rate at zero without interval constancy.

Both preserve nonconstancy and continuity. Both fail to preserve zero-rate criteria because regularity conditions fail. Cubic coordinates are not a compatible smooth chart at zero for the line's standard differential structure.

**Physical limit.** Formal reparametrization does not prove a physical clock can realize those readings with every requested property. That needs a clock model. Differential and physical-time concepts use [F-S06](../Foundation/Research/Sources.md#s06), and topology uses [F-S07](../Foundation/Research/Sources.md#s07).

## P03

**Constancy on a partial order differs from comparing every pair.**

**Premises.** Let \(T\) have partial order \(\preceq\), \(Q\) ordinary equality, and \(h:T\to Q\). Assume \(h(t)=h(u)\) whenever \(t\) and \(u\) are comparable.

Define \(t\approx u\) when a finite sequence \(t=t_0,\ldots,t_n=u\) connects them with each neighbouring pair comparable in either direction.

**Conclusion.** \(h\) is constant on each \(\approx\)-class. With only one class, \(h\) is constant on all \(T\).

**Proof.** Each step gives equality; transitivity yields \(h(t_0)=h(t_n)\). The relation is reflexive, symmetric by sequence reversal, and transitive by concatenation, so \(\approx\) forms equivalence classes.

**Limit.** Two components lacking such a connecting sequence can have different values without violating the premise.

The smallest example is incomparable \(a,b\) with \(h(a)=0,h(b)=1\). The function is nonconstant without an ordered change from \(a\) to \(b\). Conversely, a branching order \(a\preceq b\), \(a\preceq c\) forces all three values equal through \(a\), even if \(b,c\) are incomparable.

**Scientific meaning.** For partial domains, interpreting “two different values exist” as temporal change requires a comparison context. Different field values at spacelike events do not automatically describe one moving object.

This mathematical result does not establish that causality is always a partial order, every event lies on one object's history, or material identity emerges from order. Causal and proper-time limits remain those of [Time](../Foundation/Core/Time.md).

## What can be simplified

Coordinates, parameters, and state groupings can all be maps, but preserve different properties. Explanation does not require six separate substances; it requires distinguishing each structure's mathematical and physical tasks.

P01 establishes comparison consistency, P02 property-preservation conditions, and P03 temporal limits for nontotal orders. None derives physical geometry or dynamics from functions alone.
