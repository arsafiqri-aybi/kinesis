# Shared Production Contracts

These are interfaces and ownership rules. They do not assert that ten software engines, a GPU service or a speech alignment provider have been implemented. Use the actual tools available.

## G01 — Editorial Time and Beat Map

**Owners:** timeline-design, editorial-retiming

**Required fields:** `shot_id, source_range, output_range, fps_num, fps_den, cue_id, time_mapping`

**Invalidation:** Cut/hold/retime invalidates cues, animation, simulation and affected encoded ranges.

## G02 — Speech and Semantic Cues

**Owners:** transcript-alignment, ai-voice-narration

**Required fields:** `utterance_id, speaker_id, exact_text, audio_asset_id, start, end, precision, alignment_source`

**Invalidation:** Transcript edits invalidate captions/emphasis; audio replacement also invalidates word/viseme timing.

## G03 — Visual Grammar and References

**Owners:** reference-curation, visual-direction, styleframes

**Required fields:** `reference_id, property_role, observed_cues, inferred_regions, styleframe_id, revision`

**Invalidation:** Changed targets invalidate affected reconstruction/style checks, not every source asset.

## G04 — Layout and Priority

**Owners:** layout-collision, composition, mobile-legibility

**Required fields:** `element_id, protected_subregions, priority, bounds_at_time, placement_profile_id`

**Invalidation:** New camera, copy, font or placement invalidates time-dependent layout evidence.

## G05 — Motion and Camera

**Owners:** transform-animation, camera-motion, easing

**Required fields:** `object_id, local_time, transform_space, pivot, evaluator, interpolation, shutter`

**Invalidation:** Retiming/pivot/rig changes invalidate related contact, projected bounds and sampled frames.

## G06 — Assets and Components

**Owners:** component-contracts, media-ingest, character-asset-system

**Required fields:** `asset_id, immutable_source, revision, source_hash, license, overrides, source_to_output_map`

**Invalidation:** New asset versions invalidate consumers; overrides require explicit migration.

## G07 — Tracking and Compositing

**Owners:** track-recovery, compositing

**Required fields:** `track_id, source_coordinates, output_transform, confidence, mask_alpha, valid_intervals`

**Invalidation:** Reframe/retime changes invalidate track projection; source replacement invalidates tracking itself.

## G08 — Audio Cues and Mix

**Owners:** sound-design, audio-synchronization, audio-restoration

**Required fields:** `stem_id, sample_rate, decoded_samples, cue_offsets, gain_envelope, provenance`

**Invalidation:** Speech timing changes invalidate caption/lip-sync cues; gain edits invalidate mix review.

## G09 — Scene Render and Export

**Owners:** scene-state, frame-rendering, video-encoding, variant-rendering

**Required fields:** `scene_id, state_at_frame, build_signature, renderer_version, frame_range, output_variant`

**Invalidation:** Changed dependencies invalidate matching frame caches and downstream exports.

## G10 — Platform Profiles and QA

**Owners:** quality-gates, mobile-legibility, variant-rendering

**Required fields:** `profile_id, platform, placement, format, ui_variant, verified_at, status, evidence_scope`

**Invalidation:** Profile changes invalidate placement review; structural checks never certify artistic quality.
