# Review

Review date: **2 November 2026**.

## What was examined

Review included all six foundations and their structure, sources, relations, claims, glossary, questions, and initial assessment. At the synthesis stage, all 16 source files matched the pre-reorganization snapshot hashes. This repository edition subsequently translates the prose into English; Origins records both identities.

Arguments were evaluated for whether conclusions follow stated premises, terms retain their meanings, and counterexamples defeat excessive generalizations.

P01–P13 are not 13 new postulates. Several apply the same elementary result in different contexts; separate identifiers trace differing premises and meanings.

## Separation of results from sources

At the original synthesis stage, Foundation was moved into one subfolder without content changes. [Origins.tsv](Origins.tsv) now records the original snapshot and English-edition identities and their locations.

New results remain in Synthesis. Sources records additional references; Trace records premises. The refinements below remain separate from the foundation; translating the edition does not silently add them to its scientific claims.

## Refinements of the original source reading

| Finding | Original source | Synthesis refinement | Status |
| --- | --- | --- | --- |
| Noninjectivity does not guarantee an admissible moving history within a fibre | State, “Equivalence and retained information” | Reduction adds history classes and a connected-domain/discrete-state example | Scope refinement, not rejection of “can hide” |
| Instantaneous global-phase equivalence does not fix the evolution equation after time-dependent phase changes | State and Change, quantum pure states | P13 derives an additional generator term | Added consequence under Schrödinger premises |
| Constant samples are insufficient, but different endpoints can establish a property | Evidence, identifiability and sampling | P06 separates property detection from reconstruction; P08 adds errors | Deeper reasoning |
| Partial orders need clarification of “changing” | Time, order structure | P03 restricts conclusions to comparable pairs and comparison classes | Conceptual qualification |
| “Stationary” can refer to several objects | Change and Glossary | P10–P12 separate observables, densities, currents, statistical laws, realizations | Meaning separation |

This review did not justify silently changing the foundations. Refinements remain independently examinable results.

## Counterexamples and retained conditions

| Test | Error prevented | Result |
| --- | --- | --- |
| \(q=t,\ x'=x-t\), with transformed comparison rule | Zero coordinates erase original relative motion | P01 preserves the comparison history |
| \(x'=x^3\), \(t=\lambda^3\) | Bijections suffice to preserve zero derivatives | P02 requires regularity |
| Incomparable contexts | Different values automatically imply one object's temporal change | P03 limits inference |
| \(C(x,y)=x,\ T(x,y)=(-y,x)\) | Transformations always remain possible after discarding information | P05 fails precisely when fibres are not preserved |
| Equal-position free particles with different momenta | Full determinism predicts position from position alone | Reduced evolution is not closed on that class |
| Endpoint data \((0,1)\) versus \((0,0)\) | Motion detection equals reconstruction or merely endpoint difference | P06–P07 distinguish properties and quantification |
| Noisy data with deterministic error bounds | Standard deviation guarantees motion absolutely | P08 states actual bound premises |
| Tent curves and intersample sinusoids | Positive rate bounds eliminate all hidden motion | P09 bounds amplitude without proving rest |
| Circulating and opposing-component currents | Zero divergence or total current means every part rests | P11 retains the distinctions |
| Uniform-phase oscillation | Stationary statistics imply fixed individual paths | P12 proves fixed joint laws with nonconstant histories |
| Time-dependent quantum phase | Original equation holds without generator transformation | P13 gives the consistent extra-term sign |

## Proofs and additional checks

General proofs appear in result documents; they are not inferred from counts of passing examples. Additional checks targeted algebra and example conditions:

| Check | Finite scope examined |
| --- | --- |
| P04 factorization | 162 map pairs on a three-element domain, including unique factor functions |
| P05 operation descent | 162 operations and reductions on a three-element domain |
| P07 data simplification | 1,728 map–predicate combinations |
| P03 partial-order constancy | 19 labelled three-element partial orders; 152 value assignments |
| P08 inequality | 1,000 one-dimensional polygonal cases using exact rationals |
| P09 excursion bound | 21 positions on a peak-bound-attaining example |
| P12 phase shifts | 44 discrete uniform-phase permutations as illustrations |
| P13 phase generator | Five complex evaluations of the \(-\hbar\dot\theta\) sign |

These finite checks agreed with the statements. They do not prove all domains, continuous probabilities from discrete samples, or physical applicability.

During review P07's example was clarified to separate “different endpoints” from “ever moved”: returning histories have equal endpoints but remain nonconstant.

## Claim-type assessment

P01–P10 mainly concern functions, orders, differentiation, and metrics under stated premises. P11 needs conservation; P12 assumes a probabilistic example; P13 needs quantum evolution.

No new empirical results are claimed. Perception findings and quantum or relativistic limits retain their inherited source domains. Shared mass/probability conservation forms do not establish identical quantities.

## Artifact checks and evaluation limits

Local links, result anchors, source references, trace tables, and formula delimiters were checked. Foundation/Checksums.tsv is regenerated for this English edition. Project checksums assess byte equality, not scientific truth.

Review is internal, without independent peer review, proof assistants, or systematic coverage of all literature. Failure to unify the foundations into one ontology does not prove permanent impossibility.

The retained result is a conditional reasoning structure stronger than the initial relation list: shared sufficiency criteria, geometric consequences of evidence, and traceable limits on stationarity and reduction. Universal minimality and new laws of all Motion are not claimed.
