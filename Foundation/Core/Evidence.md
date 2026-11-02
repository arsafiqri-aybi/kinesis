# Evidence

## Motion and knowledge of motion

A mathematical history can be defined without an observer. An empirical claim that motion occurs requires evidence and a defensible connection between that evidence and the history.

Four layers must be distinguished:

| Layer | Content |
| --- | --- |
| Modelled events | Assumed physical states and relations |
| Observation | Results of interactions with an observational procedure or device |
| Inference | Conclusions about histories from data and assumptions |
| Perception | A perceptual system's experience or judgement of motion |

The layers are related but not identical. Equal experiences do not prove equal physical causes; one equal measurement does not prove equal entire states.

## Observation relations

In a simple model:

\[
y_i=H_i(s(t_i),\eta_i),
\]

where \(H_i\) is an observation relation and \(\eta_i\) includes noise, calibration, or observer conditions. This deterministic form is not required for every measurement; a model may instead assign outcome distributions.

Not every record comes from one ideal instant. An exposure over an interval may involve an average:

\[
y_i=\frac1{\Delta}\int_{t_i}^{t_i+\Delta}
H(s(t))\,dt.
\]

This illustrates observation structure, not a universal instrument law. It shows how one datum can combine information from several instants.

In metrology, the measurand is the quantity intended to be measured. Measurement results and uncertainty differ from an imperfectly known value. Uncertainty is not a single error whose value is already known. [S18](../Research/Sources.md#s18)

## Identifiability

Let \(\mathcal H\) be the histories admitted by the assumptions and \(\mathcal O:\mathcal H\to Y\) the observation map. For data \(y\), compatible histories lie in:

\[
\mathcal H_y=\{h\in\mathcal H:\mathcal O(h)=y\}.
\]

A property \(P\), such as “moving relative to R during I”, is identifiable from ideal data if every history in \(\mathcal H_y\) has the same \(P\) value.

**Immediate result.** If \(h_1,h_2\in\mathcal H_y\) have \(P(h_1)\ne P(h_2)\), those data do not determine \(P\). Numerical noise reduction alone cannot resolve structural nonuniqueness.

Conversely, identifying one property need not require distinguishing every history. Histories can differ in detail while both necessarily involve motion. Identifiability is question-specific.

In probabilistic models, observational equivalence can mean equal data distributions. Model uniqueness differs from finite-sample limitations.

## Equal samples, different histories

Take sample times \(t_n=n\Delta\), \(\Delta>0\), and:

\[
q_1(t)=0,\qquad
q_2(t)=A\sin\left(\frac{2\pi t}{\Delta}\right),\quad A\ne0.
\]

Every sample satisfies \(q_1(t_n)=q_2(t_n)=0\), although the second history is nonconstant. Equal position samples therefore do not establish rest between samples, even for continuous smooth histories.

Sampling theorems guarantee unique reconstruction on suitably bandlimited function classes under appropriate ideal sampling conditions. They do not claim that unrestricted finite records determine arbitrary physical histories. [S15](../Research/Sources.md#s15)

The sinusoid above deliberately falls outside reconstruction guarantees when its frequency is not bounded sufficiently low. The ambiguity example does not contradict a conditional theorem.

## Identity and projection

For two classical points with unobserved labels, compare:

\[
h_1(t)=(t,-t),\qquad
h_2(t)=(|t|,-|t|).
\]

The ordered pairs differ at some times, but their unlabelled position sets agree: \(\{t,-t\}=\{|t|,-|t|\}\). Such data do not determine whether labels cross or turn back.

Assumptions about velocity regularity, interactions, or material markings can restrict the alternatives. They are additional constraints, not information already in unlabelled positions. This is a classical example, not a quantum-particle exchange model.

Projection also discards information. In an ideal perspective camera:

\[
(u,v)=\left(f\frac{x}{z},f\frac{y}{z}\right),\quad z\ne0.
\]

Multiplying \((x,y,z)\) by the same positive factor preserves \((u,v)\). One image position therefore does not uniquely determine depth. Even image histories require additional information to separate object motion, camera reference, and changing three-dimensional structure.

## Stimulus change and pattern motion

For image intensity \(I(x,y,t)\) assumed constant along a differentiable pattern path, the chain rule gives:

\[
I_xu+I_yv+I_t=0.
\]

This is one equation for two motion components \((u,v)\). At a nonzero spatial gradient, only a particular projection is constrained. This local limitation is the model's aperture problem. [S13](../Research/Sources.md#s13)

The derivation assumes constant intensity along the pattern. Illumination changes, occlusion, or pattern changes may violate it. This example explains a local information limit without requiring an estimation algorithm.

## Motion perception

**Empirical result under particular conditions.** Adelson and Movshon showed directional ambiguity for gratings viewed through apertures and changes in perceptual coherence when two gratings are combined. Coherence depends on stimulus properties such as contrast and spatial frequency. [S14](../Research/Sources.md#s14)

These findings constrain identification of perceived motion with a single local stimulus component. A complete neuronal explanation needs further evidence; a study's proposed mechanism is not automatically a definition of all motion perception.

Other experiments show attention influencing reported apparent motion for particular stimuli. This supports distinguishing stimulus patterns from motion interpretation, not the claim that attention freely creates all perceived motion. [S21](../Research/Sources.md#s21)

Physical motion and experienced motion thus have a scientific relationship to investigate, rather than a definitional identity to assume.

## Uncertainty and nonuniqueness

Value uncertainty and explanatory nonuniqueness differ. Highly precise data can remain compatible with many histories when observation is noninjective. Conversely, an ideally identifiable model can be hard to estimate from noisy data.

**Mathematical example.** If positions at two times have bounded errors \(|e_i|\le\varepsilon\), their difference divided by interval \(\Delta t\) has an error contribution bounded by:

\[
\left|\frac{e_2-e_1}{\Delta t}\right|
\le\frac{2\varepsilon}{|\Delta t|}.
\]

This assumes exact times and the stated bounded-error model. It is not a universal velocity-uncertainty formula, but shows why differentiation-derived rates can be more sensitive than positions.

## Fundamental role

Evidence supplies an epistemic basis for distinguishing:

- What is observed.
- What follows mathematically.
- What is inferred using model assumptions.
- What available data still cannot distinguish.

Unobserved change does not itself establish absence of motion. Observed change does not itself establish a unique identity, reference, or mechanism. Inferential strength depends on the observation relation and the possibility class actually tested.
