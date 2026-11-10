# Shared logic

Maintain these mechanisms once. Specialized pages reference them by ID; apply them under their own conditions. These are operational heuristics with project-specific verification.

<a id="intent"></a>
## Intent and attention

**Decision:** Select detail, pace and hierarchy from the message, audience and viewing context.

**Expected mechanism:** A single dominant event at a time can make the intended reading easier to follow.

**Tradeoff:** Excessive simplification can remove needed meaning.

**Verification:** Watch once without explanation; record what was noticed and understood.

<a id="reference"></a>
## Source roles and creative learning

**Decision:** When sources are supplied, distinguish learning, inspiration and explicit matching. Record the properties each source informs, observations and uncertainty. With no source, derive project decisions from intent and experiments; leave reference assignments empty.

**Expected mechanism:** Separating transferable relationships from source-specific appearance can expand creative choices while making requested comparisons actionable.

**Tradeoff:** Treating the latest source as a mandatory style or mistaking inferred technique for observed fact narrows creativity.

**Verification:** Check source roles against the actual request. For learning, propose a different realization of the relationship; for matching, compare only requested properties. Record what was inspected and what remains unverified.

<a id="geometry"></a>
## Geometry and coordinates

**Decision:** Declare units, origin, axes, projection and transform order before constructing related objects.

**Expected mechanism:** Consistent coordinates preserve intended relationships across renderers and motion.

**Tradeoff:** Changing coordinate conventions can invert axes or alter pivots.

**Verification:** Render axis markers and test known points before final framing.

<a id="perception"></a>
## Perceptual hierarchy

**Decision:** Allocate contrast, scale, spacing and dwell time to the intended focal subject.

**Expected mechanism:** Controlled competition between elements can preserve visual hierarchy.

**Tradeoff:** Texture, highlights and movement may attract more attention than the message.

**Verification:** Inspect at phone size, in grayscale and during the busiest moment.

<a id="time"></a>
## Time and continuity

**Decision:** Use explicit frame indices and a rational frame rate; define shot intervals as half-open ranges.

**Expected mechanism:** A common timebase prevents timing drift and duplicate boundary frames.

**Tradeoff:** Mixing milliseconds, seconds and frame indices produces offsets.

**Verification:** Evaluate frames immediately before, at and after a boundary and check duration.

<a id="determinism"></a>
## Deterministic state

**Decision:** Make scene state a function of project parameters, exact time and seed; checkpoint any simulation.

**Expected mechanism:** Re-rendering a frame out of order should preserve its pixels under a fixed environment.

**Tradeoff:** Hidden clock reads, load races and global random state break replay.

**Verification:** Render the same times in a different order and compare pixels or documented tolerances.

<a id="continuity"></a>
## Identity and continuity

**Decision:** Track object identity, correspondence, screen direction and visibility between visual states.

**Expected mechanism:** Preserving chosen invariants can make changes legible as one evolving object or idea.

**Tradeoff:** Smooth interpolation can still produce a semantically wrong transition.

**Verification:** Inspect silhouette, topology and identity through the entire interval.

<a id="sampling"></a>
## Spatial and temporal sampling

**Decision:** Match feature size and motion speed to final resolution and frame rate; prefilter when needed.

**Expected mechanism:** Adequate sampling reduces jagged edges, shimmer and temporal aliasing.

**Tradeoff:** More samples increase render cost and blur can obscure small text.

**Verification:** Inspect fast edges and fine patterns in the encoded clip at actual playback speed.

<a id="color"></a>
## Color and alpha contract

**Decision:** Declare working and output color spaces, transfer functions, alpha convention and any view transform.

**Expected mechanism:** Consistent conversion preserves expected appearance across compositing and delivery.

**Tradeoff:** Applying a transform twice or tagging unconverted data can alter appearance.

**Verification:** Compare known patches, gradients and transparent edges through the full pipeline.

<a id="budget"></a>
## Measured resource budget

**Decision:** Measure representative frames before committing to resolution, samples or simulation density.

**Expected mechanism:** Measured cost supports achievable rendering without guessing hardware capacity.

**Tradeoff:** A simple frame may underestimate peak complexity or memory.

**Verification:** Benchmark the most expensive expected frame and a short representative segment.

<a id="evidence"></a>
## Observation and revision

**Decision:** Pair each decision with an expected result, a concrete check and a revision trigger.

**Expected mechanism:** Observable disagreements can guide useful corrections instead of arbitrary changes.

**Tradeoff:** Metrics can miss semantic meaning and visual character.

**Verification:** Record the actual observation, affected decision and chosen correction.

<a id="provenance"></a>
## Source and dependency provenance

**Decision:** Record reference roles and origins, font files, runtime versions, seeds and external dependencies.

**Expected mechanism:** Known inputs make rebuilds, substitutions and asset boundaries explicit.

**Tradeoff:** An unavailable font or hidden image texture can change the result.

**Verification:** Rebuild from the recorded inputs; audit image loads and font substitutions.
