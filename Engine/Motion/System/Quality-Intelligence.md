# Motion — Quality Intelligence

## Purpose

Test intended experience against observable output, including unexpected defects with no predefined rule. Apply throughout social-video construction and revision. Quality is a cross-cutting concern, not a standalone editing style.

## Four evidence modes

1. **Structural:** parse contracts, unique IDs, referenced expertise, exact timebase, asset provenance, dependency versions and parameter bounds.
2. **Measured:** rendered-frame coordinates, legibility regions, alpha edges, optical alignment, UI occlusion, actual levels and durations, codec/frame metadata.
3. **Perceptual:** actual stills and playback at viewing size; assess hierarchy, pacing, color comfort, emotional intention, motion continuity, recognizability and audience comprehension.
4. **Contextual:** platform and placement previews, variants, subtitles, audio devices, intended viewer context and approved creative exceptions.

Do not turn structural confidence into perceptual certainty. Checks may miss subtle defects; record unverified states rather than claim universal perfection.

## Intent-aware defect discovery

For every relevant shot, determine **required invariants** (what must remain visible, correctly timed, recognizable and consistent) and **intended deviations** (overflow, asymmetry, stylization, silence, motion blur, reflection, stretching). Then inspect the actual output for unexplained deviations that are not in either list. Record novel findings, investigate the causal layer and update targeted checks when justified.

| Surface | Examples of detectable concerns |
| --- | --- |
| Text and layout | browser defaults, pseudo-elements, font metrics, subpixel text, unexpected symbols, spacing bias, optical imbalance, clipping |
| Shape and assets | reference mismatch, licensing gaps, deformed iconography, missing media, unintended transforms, resolution loss |
| Motion | pacing drift, discontinuity, jitter, temporal aliasing, popping, unintended holds, layer/scene leaks |
| Subject and character | silhouette instability, mask chatter, track drift, occlusion errors, lip-sync mismatch, identity changes |
| Sound | voice masking, abrupt tails, gain/clipping, missing stem, poor SFX alignment, wrong music permissions |
| Grade and composite | wrong alpha premultiplication, halo edges, double transforms, banding, flicker, skin-tone variation |
| Platform | crop, interface occlusion, wrong aspect/cover, unsafe CTA, subtitle collision, bad end-frame, incorrect delivery encoding |
| Revision | fixing one component breaks another, stale render cache, mismatch between episode and approved project version |

## Sampling strategy

Inspect beginning/end and each cut/hold; sample just before, at and after time-critical boundaries; test intervals of fastest motion, densest overlays and strongest compositing. Inspect more than keyframe endpoints, including independent render order when reproducibility matters. Review the **encoded video** as well as source frames. At least one review should use phone-scale viewing and the targeted placement profile where available.

## Fault resolution

1. Observe and isolate a minimal failing time range/element.
2. Identify source owner: episode content, project visual/recipe decision, Motion shared capability/contract, or environment/toolchain.
3. Change only the necessary layer and invalidate dependent evidence.
4. Rerender affected frames/variants and inspect the failure plus adjacent transitions.
5. Record outcome as `pass`, `fail`, `stale`, `unverified`, or `intentional_exception`; exceptions include rationale and an approver.
6. If a new failure pattern generalizes, propose a new shared check without copying a client-specific rule into the global engine.

## Minimum production gates

- Message/storyline is intelligible with and without optional effects.
- Protected information is readable through motion and relevant UI variants; decorative overflow is intentional.
- Reference-led visual reconstruction matches the agreed visual target within documented tolerances.
- Speech, captions, character cues, sound effects and picture remain in sync.
- Source/assets/brand marks have recorded origin and permitted usage.
- Final MP4 or other requested media is decoded, duration and streams are checked, and full-playback review is recorded.
- Cross-project design-system isolation, episode version pinning and targeted regression checks are respected.

No production may be marked delivered solely by passing the project configuration validator.
