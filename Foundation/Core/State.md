# State

## States and criteria of distinction

**Framework definition.** A state describes a system in a particular context, with alternatives distinguished by that framework. The context may include time, selected quantities, system boundaries, and resolution. A state is not automatically a complete picture of reality.

Let \(S\) be a model's state set. Writing \(s_1\ne s_2\) becomes meaningful after specifying an equality criterion. Different numbers or labels alone do not establish different physical states.

Three notions of sameness must be distinguished:

| Notion | Question |
| --- | --- |
| System identity | Are we still discussing the same system or part? |
| State equality | Are the quantities defining its state equal? |
| Representational equivalence | Are two descriptions different ways of expressing the same physical state? |

The same object can have different states. Different objects can have equal positions or temperatures under a particular description. Different numerical vectors can represent the same physical state when their transformation is a specified representational redundancy.

This distinction is a **conceptual synthesis**; it does not establish a universal theory of identity.

## A configuration is not always a complete dynamical state

A configuration specifies a system's arrangement. For classical particles, it may consist of positions. If an evolution law requires positions and momenta, positions alone are insufficient for prediction. In Hamiltonian mechanics, \((q,p)\) supplies a phase-space structure distinct from configuration space. [S02](../Research/Sources.md#s02), [S22](../Research/Sources.md#s22)

The distinction is immediate. Two one-dimensional histories,

\[
q_1(t)=t,\qquad q_2(t)=-t,
\]

have the same configuration at \(t=0\), but different directions of change. A configuration at one instant does not determine an entire history. No particular law is needed to establish this informational insufficiency.

For an extended body, a single point need not represent its state of motion. A fixed centre does not exclude changing orientation. For a medium, a state may be a distribution or field without treating every part as a separately labelled object.

“Complete state” is always relative to a theory and purpose. Choosing variables that make evolution Markovian, where possible, is a model property requiring explanation, not an automatic consequence of the word “state”.

## Equivalence and retained information

**Mathematical definition.** An equivalence relation \(\sim\) on \(S\) is reflexive, symmetric, and transitive. It forms classes \([s]\) of states treated as equivalent and the quotient set \(S/{\sim}\). This structure is mathematically established; the physical justification for choosing the relation is separate. [S01](../Research/Sources.md#s01)

Two constructions have similar forms but different meanings:

1. **Redundancy:** multiple representations express the same physical state.
2. **Limited resolution:** distinct physical states are deliberately grouped because a description retains only some information.

Let \(C:S\to Z\) be a coarse-graining map. Equality \(C(s_1)=C(s_2)\) does not prove \(s_1=s_2\). If \(C\) is not injective, it fails to retain some distinctions.

**Immediate result.** For a history \(s:T\to S\), constancy in \(S\) implies constancy after applying \(C\). Conversely, \(C\circ s\) can remain constant while \(s\) changes. Proof: equal inputs have equal outputs, but a noninjective map can give equal outputs for distinct inputs.

Thus change at one resolution need not equal change at another. Projecting a state onto its centre position can discard rotation; measuring energy alone can discard other state differences. The conclusion depends on retained information, not the number of displayed values.

## Comparable quantities

In a simple classical model, an observable can be a function \(A:S\to\mathbb R\). A difference \(A(s_1)\ne A(s_2)\) guarantees \(s_1\ne s_2\) within that model. Equality of one quantity does not imply equality of the entire state.

A family \(\mathcal A\) separates points when:

\[
s_1\ne s_2\ \Longrightarrow\
\exists A\in\mathcal A:\ A(s_1)\ne A(s_2).
\]

**Mathematical result.** If the family separates points and all its values agree, the states are equal. This follows from the definition; it does not assert that all quantities are jointly measurable with unlimited precision.

In quantum theory, observables and states do not have the simple relationship of definite-valued functions for every quantity. States assign probabilities to measurement outcomes; normalized state vectors differing only by a global phase represent the same pure state. Components of a representation can therefore change without a change in the physical state distinguished by the theory. [S09](../Research/Sources.md#s09)

Incomplete knowledge of outcomes also differs from the physical state itself. Observer uncertainty does not always mean that the system's state is changing.

## Identity across a history

To say that something moves requires a rule connecting descriptions across temporal contexts. This might use particle labels, continuity of form, material relations, particular conservation properties, or theoretical structure. It need not be an intrinsic, directly observed property.

Two records containing identical points can support multiple point correspondences. Matching colour or proximity justifies correspondence only when observational assumptions support it. This epistemic problem is discussed further in [Evidence](Evidence.md).

**Physical limit.** For identical quantum particles, formal labels cannot simply be treated as classically trackable individual identities. Label exchange in the standard description follows symmetry rules connected to particle statistics. This limits the universality of “labelled objects that always have trajectories”. [S12](../Research/Sources.md#s12)

This limit does not establish that identity is entirely meaningless. What fails is the unconditional transfer of classical particle identity to every framework.

## Existence, models, and ontological limits

An element \(s\in S\) denotes a state among a model's formal possibilities. It does not establish physical realization. Nor does the existence of a mathematical curve prove that nature permits that history.

This distinction prevents two leaps:

- From “representable” to “necessarily exists in nature”.
- From “not distinguished by the model” to “no physical difference exists”.

Assumptions about what exists, what constitutes a system, and what counts as a state belong to a scientific framework. Observation can constrain these choices, but no single notation settles every ontological question.

## Fundamental role

State supplies **meaningful distinctions and equality criteria**. State-space form, individual identity, completeness of variables, and measurability of every quantity are further structures.

Different states alone do not imply motion: differences may occur between systems at the same time or involve nonspatial change. Motion requires relations to [Time](Time.md), [Space](Space.md), [Reference](Reference.md), and [Change](Change.md).

**Limit of certainty:** no single definition of state or identity has been proved applicable to every physical theory and perceptual experience.
