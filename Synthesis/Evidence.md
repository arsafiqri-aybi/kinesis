# Evidence

## Conclusions are relative to a possibility class

Knowledge of motion requires more than data \(y\): an admissible history class \(\mathcal H\), comparison reference, and observation map \(\mathcal O:\mathcal H\to Y\) specify what remains possible after observing.

Define:

\[
\mathcal H_y=\{h\in\mathcal H:\mathcal O(h)=y\}.
\]

Here \(y\) always belongs to \(\mathcal O(\mathcal H)\), so its compatible class is nonempty. An empty class signals model–data incompatibility, not evidence for every conclusion simultaneously.

[Evidence Foundation](../Foundation/Core/Evidence.md) supplies the basis; [P04](Reduction.md#p04) develops the functional criterion.

## P06

**Identifiability is property factorization through data.**

**Premises.** Let \(P:\mathcal H\to W\) be a property; for yes–no questions, \(W=\{0,1\}\). Reference and equivalence conventions are fixed.

**Conclusion.** A unique \(\widehat P:\mathcal O(\mathcal H)\to W\) determining \(P(h)\) from data for every history exists if and only if:

\[
\mathcal O(h_1)=\mathcal O(h_2)
\ \Longrightarrow\
P(h_1)=P(h_2).
\]

**Proof.** Apply P04 with \(X=\mathcal H\), \(C=\mathcal O\) restricted to its image, and \(A=P\).

For one particular datum, constancy of \(P\) on \(\mathcal H_y\) suffices; global model uniqueness is unnecessary.

### Knowing motion without reconstructing the history

Take continuous line histories, a fixed reference, and exact data \(q(0)=0,q(1)=1\). Every compatible history is nonconstant, so position change on the interval is known.

Yet \(q_1(t)=t\) and \(q_2(t)=t^2\) give equal endpoint data and different histories. Information insufficient for full reconstruction can suffice for one motion conclusion.

Conversely, \(q(0)=q(1)=0\) admits both rest and \(q(t)=t(1-t)\). The same property is not identifiable on this class.

### Two conditions that must remain distinct

If \(\sim_{\mathrm{phys}}\) denotes physical redundancy, \(P\) must first be constant on its classes to be physically well-defined. Only then is constancy of \(P\) on observation fibres tested.

Physical classes and observation fibres may have different sizes. Limited observation can merge physically distinct states. Data differences also require calibration and representational checks before being called physical differences.

**Limit.** This establishes uniqueness in an ideal deterministic model, not stability under disturbances or physically exact measurement procedures.

## P07

**Data reduction cannot increase structural identifiability.**

**Premises.** Observations are related by:

\[
\mathcal O_2=K\circ\mathcal O_1.
\]

The second data result solely from deterministic processing of the same first data, with no additional input.

**Conclusion.** A property determinable from \(\mathcal O_2\) is determinable from \(\mathcal O_1\). The converse can fail.

**Proof.** If \(\mathcal O_1(h_1)=\mathcal O_1(h_2)\), applying \(K\) produces equal \(\mathcal O_2\) outputs. Classes merged by \(\mathcal O_1\) are therefore no larger than those merged by \(\mathcal O_2\). Constancy on larger classes implies constancy on smaller ones.

Directly, if \(P=\widehat P_2\circ\mathcal O_2\), then:

\[
P=(\widehat P_2\circ K)\circ\mathcal O_1.
\]

**Loss example.** On all line histories, let \(P(h)=1\) when \(q(0)\ne q(1)\), otherwise zero. It is always determined by \(\mathcal O_1(h)=(q(0),q(1))\). If \(K\) retains only the initial position, \(q(t)=t\) and rest at zero have identical outputs but different \(P\). The converse fails.

For data \((0,1)\), this property also proves motion. But \(P=0\) does not prove rest: a history can return to its starting point. “Different endpoints” is not equivalent to “ever moved”.

**Consequence.** Reprocessing data that merge two histories cannot force their separation. Additional models or assumptions can narrow \(\mathcal H\), but change the premises. Adding a sensor or experimental condition is not merely applying \(K\) to old data.

This concerns deterministic maps, not all Shannon information theorems, statistical optimality, or algorithmic performance. Processing may improve noisy-data estimation or presentation; this theorem does not assess estimator performance.

## P08

**A length lower bound from positions with bounded errors.**

**Additional premises.** Let \(q:[a,b]\to Q\) be continuous in one positive metric space \((Q,d)\), with consistent reference and units. At exact times \(a=t_0<\cdots<t_n=b\), positions \(y_i\in Q\) satisfy deterministic bounds:

\[
d(y_i,q(t_i))\le\varepsilon_i,\qquad \varepsilon_i\ge0.
\]

These bounds need independent justification. They are not automatically certainty intervals derived from metrological standard deviations.

**Conclusion.** For curve length defined by partition supremum:

\[
L(q)\ge
\sum_{i=1}^{n}
\max\{0,\ d(y_i,y_{i-1})-\varepsilon_i-\varepsilon_{i-1}\}.
\tag{4}
\]

**Proof.** The triangle inequality gives:

\[
d(y_i,y_{i-1})
\le \varepsilon_i+d(q(t_i),q(t_{i-1}))+\varepsilon_{i-1}.
\]

Nonnegativity bounds each true distance below by the maximum in (4). The partition's true-distance sum is bounded above by the supremum \(L(q)\).

**Meaning.** A positive right side makes every premise-satisfying curve nonconstant, despite nonunique full reconstruction. This connects geometry, uncertainty, and property identifiability concretely.

If \(L(q)\) is finite and \(b-a>0\) is the relevant duration, length-based average speed is bounded below by (4) divided by \(b-a\). This differs from displacement divided by time.

**Example.** One-dimensional data \(y_0=0,y_1=3,y_2=0\), each with error at most \(1/4\), imply \(L(q)\ge5\), despite equal endpoint data. Exact positions give a bound of 6. Values use consistent units or normalized quantities.

**Limits.** A zero right side does not prove rest. The bound need not be sharp and determines neither cause, full direction, nor velocity profile. Lorentzian “distance” is not substituted for a positive metric. Moving-reference observations first require consistent transformation under P01.

## P09

**Rate bounds constrain hidden motion without necessarily excluding it.**

**Additional premises.** The history satisfies a Lipschitz bound:

\[
d(q(t),q(u))\le V|t-u|,\qquad V\ge0.
\]

This assumes regularity and bounded change in the selected metric; continuity alone does not imply it.

If \(q(a)=q(b)=x_0\), then:

\[
d(q(t),x_0)
\le V\min\{t-a,b-t\}
\le\frac{V(b-a)}2.
\tag{5}
\]

**Proof.** Apply the Lipschitz bound to endpoint \(a\) and endpoint \(b\) and take the smaller bound.

On the line, \(q(t)=x_0+V\min\{t-a,b-t\}\) reaches height \(V(b-a)/2\). It is Lipschitz and nonconstant for \(V>0\). Equal endpoints and a positive rate bound therefore do not prove rest.

A smooth uniform-sampling example is:

\[
q(t)=A\sin(2\pi t/\Delta),\qquad
0<|A|\le \frac{V\Delta}{2\pi}.
\]

All positions at \(t=n\Delta\) vanish, but the history changes with \(|q'(t)|\le V\). This connects Foundation's sampling ambiguity to an additional rate bound.

**Further consequence.** Exact data with \(d(q(a),q(b))>V(b-a)\) contradict the bounded-rate model. A premise must be reassessed; selecting a history violating all premises is invalid.

For \(V=0\), the Lipschitz bound itself forces constancy. Constancy then follows from an interval-wide assumption, not two records alone.

## Uniqueness is not stability

P06 asks whether ideal data determine one answer. Another question is whether small data changes produce only small conclusion changes.

An injective map can have a highly sensitive inverse. Conversely, a noninjective reduction can reliably retain a binary property when all compatible histories agree on it.

P08 uses explicit error bounds for one stronger justification. It does not resolve every disturbance, identity ambiguity, projection, or model error. These epistemic distinctions preserve the care established in [Evidence Foundation](../Foundation/Core/Evidence.md).
