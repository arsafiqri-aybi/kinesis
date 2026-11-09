# Motion — Production-Support

Connected operational knowledge. Select responsibilities according to actual project needs.

## Media Ingest and Normalization

**Inputs:** Footage/audio/image metadata, timecode, orientation, variable frame rate and source color tags

**Decision:** Preserve immutable originals and create explicit proxies with source-to-timeline maps; normalize only what the selected pipeline requires.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Unrecorded frame-rate conversion or rotation breaks every downstream coordinate and cue.

**Verification:** Compare known source frames and audio anchors against normalized media; test orientation, duration and seek behavior.

**Output:** Asset manifest, proxy mapping and decode capability report

**Recovery:** Rebuild the proxy and its mapping, then invalidate dependent track/caption/edit evidence.

## Transcript and Speech Alignment

**Inputs:** Final decoded speech, approved transcript, speaker IDs and alignment provenance

**Decision:** Distinguish authored phrase cues from measured word/phoneme alignment; correct transcript before emphasis and captions.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Estimated timestamps can appear plausible while drifting from spoken audio.

**Verification:** Listen across phrase boundaries and compare actual audio with the claimed word/phoneme evidence.

**Output:** Reviewed cue map with timing precision and uncertainty

**Recovery:** Re-align changed audio ranges; propagate offsets to captions, editorial cuts and lip sync.

## Temporal Layout and Collision

**Inputs:** Projected protected bounds, time intervals, placement masks and object priority

**Decision:** Evaluate collisions over relevant motion intervals; preserve critical text/face bounds and allow intentional decorative overflow.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Static safe-frame checks miss transient overlaps and time-dependent interface occlusion.

**Verification:** Inspect holds plus maximum expansion/camera extremes and the first contact between bounds.

**Output:** Timed layout findings and chosen priority resolutions

**Recovery:** Reflow, restage or cut away; invalidate only affected layout variants and their rendered ranges.

## Tracking Confidence and Recovery

**Inputs:** Anchor trajectories, coordinate transforms, confidence, masks and occlusion intervals

**Decision:** Keep tracked coordinates in the source frame with explicit transforms to output space; mark loss of confidence and use reviewed manual anchors or gaps.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** A convincing first frame can hide identity switches after occlusion.

**Verification:** Inspect entry, exit, re-entry and maximal perspective change against the actual filmed subject.

**Output:** Confidence-aware tracks, manual corrections and gap policy

**Recovery:** Stop extrapolating through uncertain ranges and change to a cut/crop if the effect cannot be stabilized.

## Editorial Retiming and Dependency Repair

**Inputs:** Old/new shot ranges, cue precision, source maps and performance tracks

**Decision:** Represent time edits as explicit piecewise mappings; handle cut, stretch, hold and reverse semantics separately.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Stretching the picture alone invalidates speech, captions, contact and cached simulation.

**Verification:** Compare boundary-neighbor frames and speech/contact anchors before and after the edit.

**Output:** Time mapping and invalidation list

**Recovery:** Rebuild dependent cues or re-perform narration; preserve intelligibility rather than forcing arbitrary speed.

## Dialogue Restoration and Stem Balance

**Inputs:** Speech/noise stems, sample rate, speech priority and mix context

**Decision:** Apply the minimum cleanup needed; maintain intelligible consonants and compare processed/bypass speech in the real mix.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Aggressive denoising, gating or limiting can damage intelligibility and naturalness.

**Verification:** Listen through quiet words, breath/phrase joins and loud events; inspect clipping and start/end alignment.

**Output:** Reviewed dialogue stem, gain automation and processing settings

**Recovery:** Back off the damaging process and revise competing music/SFX before intensifying cleanup.

## Reusable Component Contracts

**Inputs:** Component identity/version, editable parameters, bounds, cue channels and dependency IDs

**Decision:** Expose stable render/time/bounds interfaces and declare allowed overrides; share one master rather than copying divergent shot implementations.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** An unversioned component edit can silently change many scenes or character identities.

**Verification:** Render default and extreme parameter cases and verify bounds, time evaluation and dependency identity.

**Output:** Versioned component schema and migration/invalidation rules

**Recovery:** Pin unaffected shots or migrate overrides explicitly; regenerate impacted frames and reviews.

## Variant Rendering and Export Lineage

**Inputs:** Master edit, placement requirements, caption language, aspect ratio and build signatures

**Decision:** Derive placement/language variants from one semantic edit while keeping per-variant layout and reviewed export lineage.

**Expected mechanism:** Explicit mappings and ownership make downstream edits attributable and reproducible.

**Tradeoff:** Blind scaling or stale caches can silently mix media from different revisions.

**Verification:** Check each variant signature, protected bounds, actual streams and source-to-output relationships.

**Output:** Variant manifest and verified export set

**Recovery:** Regenerate mismatched variants and report unverified ones separately.
