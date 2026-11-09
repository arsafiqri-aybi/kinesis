# Motion — Social Media Editing

## Purpose

Create polished, clear, expressive social videos from recorded footage, spoken dialogue, scripts, images, audio, and reference frames. Use [Foundations](Foundations.md) for image reconstruction, procedural construction, motion, rendering and evaluation. This document owns the **editorial and social-video specialization layer**; it does not duplicate the underlying 2D/2.5D/3D primitives.

A creator may describe a visual idea using ordinary language rather than technical production vocabulary. Infer the visual intention, identify viable specialist mechanisms, design a reference-led sequence, and distinguish feasible implementation from visual aspiration. Use code to build and animate shots when required; use footage when it conveys the message better. The finished video must work on a phone, not merely look impressive on a large preview.

## Operating principles

1. **Meaning before effects.** Every visible or audible element has an editorial purpose: explain, emphasize, orient, entertain, or establish identity.
2. **Creative intensity is conditional.** Silence, stillness, a clean cut, and unchanged footage are valid creative choices; do not add motion just because a capability exists.
3. **Reference → styleframe → editable construction → animation → composite → review.** For a new visual scene, establish its appearance before implementing motion.
4. **Separate primitives from presentation specializations.** Reuse time, transforms, typography, animation curves, scene geometry, camera, color, audio, compositing, and encoding rather than reimplementing them for each effect.
5. **Protect the message, not the entire shape.** Essential information stays readable; decoration may intentionally extend beyond conventional safe zones for balance and expression.
6. **Adapt to actual platform and placement.** UI occlusion differs by app, feed surface, post type, device, caption length, and interactive elements. Profiles are revisable data with provenance and review dates, not eternal percentages.
7. **Evidence-based finishing.** Judge actual rendered frames, video, captions, audio, platform previews, and technical files separately. Never equate a design description with a completed video.

## The 14 specialization domains

Each domain has one editorial responsibility and may call shared mechanisms or other specializations. These are **ownership areas**, not mandatory stages in every job.

### 01 — Story & Editing

**Responsibility:** Convert subject matter into a coherent, engaging short-form viewing sequence.

**Capabilities:** message hierarchy, audience and intent, hook selection, cold opens, cut selection, talking-head/podcast edit, J/L cuts, jump cuts, visual continuity, pacing, speed ramps where editorially justified, humor timing, retention-focused reveals, chapter beats, repeated motifs, loop design.

**Decide:** What must viewers understand, feel, or do at each moment? Should the shot cut, hold, replace with B-roll, or show an explanation?

**Output:** beat map, shot/cut plan, time-coded editorial decisions.

### 02 — Animated Subtitles & Captions

**Responsibility:** Deliver accessible, synchronized, legible spoken content with optional expressive emphasis.

**Capabilities:** transcript cleanup, speech segmentation, word-level cue timing, multi-speaker labels, word highlighting, karaoke timing, punch/scale accents, kinetic phrase captions, bilingual captions, readable line breaking, subtitle collisions and avoidance, intentional pauses.

**Decide:** When should words simply be readable, and when should a word or phrase be visually emphasized? Maintain semantics, spelling, timing, and mobile readability.

**Output:** timed caption cues and animated layout with collision constraints.

### 03 — Kinetic Typography & Lyric Scenes

**Responsibility:** Turn language into visual scenes, not merely moving text.

**Capabilities:** morphing glyphs, letter physics, word-to-object transformation, typography as environment, icon/text interplay, lyric sequences, metaphor-based letter behavior, 2D/2.5D/3D title choreography, audio-synchronized typographic transitions.

**Decide:** Is typography the primary scene or a support element? Choose only the structural complexity the shot warrants.

**Output:** text-scene plan, references, compositional states, animation timelines.

### 04 — Original Motion B-roll & Explainers

**Responsibility:** Build inserted visual sequences that replace or alternate with primary footage to explain meaning.

**Capabilities:** concept-to-scene metaphors, animated diagrams, timelines, process visualization, comparison scenes, photo collage, map/abstract visualizations, procedural illustration, object deconstruction and exploded view, cutaway sequences, information-to-scene transformation.

**Decide:** A complete cutaway is preferable when adding more overlays would obstruct the subject, overload the scene, or limit explanation.

**Output:** self-contained visual shot with start/end editorial handoffs.

### 05 — Motion Graphics, Cards, Icons & UI

**Responsibility:** Supply concise context and explanations while preserving the main footage's identity.

**Capabilities:** explain cards, lower thirds, animated logos and service icons, brand icon motion (Instagram, Facebook, ChatGPT, Claude, etc.), callouts and labels, annotated arrows/doodles, interface simulations, app/browser panels, graphs, polls, lists, notifications, CTAs, comparisons.

**Decide:** Which information is better shown as a momentary overlay rather than as standalone B-roll? Brand marks should be recognizable and used appropriately; do not invent product features in simulated UIs.

**Output:** responsive, parameterized, reusable visual components with critical-content bounds.

### 06 — Character & Illustration Animation

**Responsibility:** Use animated characters or illustrations to demonstrate, react, and narrate ideas.

**Capabilities:** rigged pose and motion, gestures, facial expression, eye line, simple lip-sync, reaction inserts, pointer behavior, character/graphic interaction, secondary motion, illustrated scene transitions, consistent visual identity.

**Decide:** Does character action provide clarity, personality, or humor? Integrate with captions and speaking footage rather than competing for attention.

**Output:** character shot/insertion with rig controls, cues, framing, and review conditions. **Preserve existing character-animation work in Motion; this domain is an editorial integration point, not a replacement.**

### 07 — Freeze Frames, Subject Effects & Tracking

**Responsibility:** Make filmed people and objects interact with graphics in an intentional, convincing way.

**Capabilities:** freeze-frame captures, snapshot emphasis, cutout and bold-outline effects, background blur/dim, spotlight, masks and rotoscoping, subject/object tracking, tethered callouts, tracked stickers, parallax from a still, limited subject duplication, foreground occlusion.

**Decide:** Which visible subject or object is emphasized, and does tracking hold across movement and occlusion?

**Output:** keyed/tracked shot with stable masks and subject-safe placement.

### 08 — Camera, Zoom & Transition Language

**Responsibility:** Direct viewer attention and connect scenes through comprehensible movement.

**Capabilities:** punch-in/out, digital crop/zoom, push/pull, pan, orbit, whip pan, crash zoom, zoom-through, parallax, camera-roll, subject reframe, transition matching by direction/shape/color/sound, restrained portal entry as a transition option.

**Decide:** Is movement serving a reveal, emphasis, spatial continuity, or scene change? Maintain focal continuity and avoid accidental crop of subjects/text.

**Output:** movement trajectories and shot transitions with entry/exit states.

### 09 — Color Grading & Visual Look

**Responsibility:** Preserve visible quality while giving footage and graphics a consistent emotional character.

**Capabilities:** exposure and white balance correction, matching sources, skin-tone preservation, contrast and tonal hierarchy, selective color, vibrant/soft/cinematic/horror/nostalgic looks, restrained grain/glow, light accents, intentional scene-to-scene look changes, display-safe output transforms.

**Decide:** Is a requested mood achievable while retaining skin detail, readable text, and credible product colors?

**Output:** shot-matched correction and look parameters tested in the rendered output.

### 10 — Sound, Voice & Musical Synchronization

**Responsibility:** Make speech understandable and audio support the visual timing.

**Capabilities:** voice cleanup, leveling, ducking, noise reduction, narration/AI voice when available and authorized, music cut and beat mapping, Foley, whoosh/impact/riser design, silence, spatial impression, transition sounds, caption/voice timing, loudness and clipping inspection.

**Decide:** Prioritize understandable dialogue. Let music and SFX reinforce—not obscure—the content. Use permitted/licensed sources and avoid implied voice identity without authorization.

**Output:** synchronized audio stems/cue map and monitored final mix.

### 11 — Social-Scale Creative VFX & 2.5D

**Responsibility:** Offer expressive transformations within an achievable short-form production budget.

**Capabilities:** particles, glow, glass and reflection accents, kaleidoscope/mirror scenes, simple portal transitions, planar perspective tricks, liquid/dissolve typography, object assembly/disassembly, collage depth, procedural patterns, motion trails, selective distortions.

**Decide:** Prefer clear 2D/2.5D illusions over full photorealistic simulation when the latter does not improve the message. Require a visual reference and performance budget for complex sequences.

**Output:** self-contained composited shot with an achievable renderer plan.

### 12 — Social Composition & Adaptive Safe Zones

**Responsibility:** Keep the design effective across Instagram/Facebook Reels and Stories, TikTok, YouTube Shorts, and supported ad placements.

**Capabilities:** subject-aware framing, UI-aware layout, safe-area envelopes, subtitle clearance, priority-based occlusion, portrait/landscape/square adaptation, optical alignment, negative space, intentional overflow, device previews, time-varying layout collision testing.

**Decide:** Classify elements as `protected`, `flexible`, `decorative`, or `full_bleed`. Protect information-bearing regions within flexible elements, not the entire container. Recompose layouts when the platform changes rather than blindly scaling.

**Output:** per-placement layout profile, time-dependent critical bounds, and preview QA results.

### 13 — Opening, Ending & Cover Design

**Responsibility:** Establish a compelling first impression and meaningful conclusion.

**Capabilities:** cold opens, hook shots, title treatments, cinematic but short intros, contextual logo appearances, chapter reveals, visual punchline, outros, seamless loops, end cards, creator identity, cover/thumbnail frames, feed preview and crop.

**Decide:** Choose an opening according to audience and story; avoid an intro that delays the content's purpose.

**Output:** opening/ending sequences and cover candidates linked to the editorial timeline.

### 14 — Production, Platform Delivery & Quality

**Responsibility:** Deliver technically valid, visually legible social video and source materials.

**Capabilities:** reference manifest, code-based scene generation, timeline assembly, compositing, format profiles, bitrate/codec/frame-rate decisions, audio/video synchronization, MP4 validation, export variants, poster/cover, file naming, re-rendering, mobile QC, clipping/crop checks, source and license manifest.

**Decide:** Generate platform-specific outputs only when the surface differs materially. Verify actual files and final frames before describing production as complete.

**Output:** verified export variants and repeatable source-build package.

## Shared mechanism owners

These mechanisms are implemented once and reused by domains through typed inputs and outputs. Specialized logic describes its decisions but does not fork the shared engines.

| ID | Mechanism | Canonical responsibility |
| --- | --- | --- |
| G01 | Editorial Time & Beat Map | Stable shot timing, speech cue, hold, cut and local timeline alignment |
| G02 | Speech & Semantic Cue Map | Transcript, words, entities, emphasis, speaker, intent and visual suggestions |
| G03 | Visual Grammar & Reference System | Reference image roles, styleframes, palette, type, shape identity and continuity |
| G04 | Layout & Priority Resolver | Responsive screen coordinates, safe-zone profiles, occlusion and optical balance |
| G05 | Motion & Camera Primitives | Easing, trajectories, transformation, camera/crop motion and temporal sampling |
| G06 | Asset & Component Registry | Icons, character rigs, visual cards, fonts, footage, audio, rights and provenance |
| G07 | Subject Tracking & Compositing | Mask, track, depth, alpha, coordinate transforms and visual handoffs |
| G08 | Audio Cue & Mix Engine | Voice, music, SFX timing, ducking, level and export sync |
| G09 | Scene/Render/Export Engine | Script-driven shot composition, renderer selection, frame renders and MP4 packaging |
| G10 | Cross-Platform QA & Profiles | Platform/placement metadata, profile freshness, preview testing, legibility, timing and compliance checks |

## Adaptive safe-zone policy

Treat safe zones as multiple dynamic regions: interface occlusion, UI interaction risk, readability envelope and the editor's intended negative space. There is no one universal percent that works for every social surface.

- `protected`: subtitles, claims, prices, CTAs, logos required for comprehension, faces/subjects relevant to meaning; must remain visible and readable at the intended hold moment.
- `flexible`: motion cards, frames, diagrams, illustrations; may intentionally extend beyond conservative zones provided their information-bearing bounds remain legible.
- `decorative`: shapes, outlines, connectors, particles, glow; may overflow when their occlusion is acceptable.
- `full_bleed`: background, scene footage, self-contained visual B-roll; may cover the entire canvas, subject to protected content and UI review.

Maintain a profile keyed by `{platform, placement, format, organic_or_ad, ui_variant, device_class, verified_at}`. Where actual UI profiles are unknown, label margins provisional and review representative official/device previews. Check intersections over **time**, not only static frames; allow temporary transit through less-safe regions when key content is not intended to be read during that motion.

## Editorial activation rules

1. **Narration contains an important concept:** use a caption for speech; add a card, icon or B-roll only if it increases comprehension.
2. **The spoken concept needs multiple steps or spatial explanation:** prefer a standalone motion B-roll shot over several simultaneous overlays.
3. **The speaker references an identifiable platform/brand:** show the correct icon if it reinforces meaning, and use licensed/accurate visual identity.
4. **A person or object must be singled out:** freeze/cutout or a tracked callout if the footage supports extraction; otherwise cut or crop.
5. **A phrase is the visual subject:** use kinetic typography; do not make every spoken word a full-screen typography effect.
6. **A major idea or section changes:** choose a cut, matching transition, motion bridge, or rare portal based on continuity and timing.
7. **Mood should change:** use shot-matched grading, sound, timing and optional lighting effects together; protect skin tone and legibility.
8. **A character can clarify the point or create a deliberate beat:** integrate an existing character asset and give it the same caption, layout and timing constraints as footage.
9. **One frame becomes visually crowded:** remove secondary elements, change shot, or use B-roll rather than shrinking every item.
10. **Delivery platform changes:** remap captions, UI clearances and focal regions; never assume one 9:16 render is safe everywhere.
11. **Advanced effects exceed the current environment or budget:** choose a restrained achievable illusion while preserving intended meaning; disclose inability to render the original idea.

## Standard scene contract

Every edited scene should be representable by:

```yaml
scene_id: unique-id
intent: message-or-emotion
source: footage | image | generated_scene | mix
reference_manifest: [role-labeled-source]
entry_state: framing-style-subject-state
exit_state: framing-style-subject-state
speech_cues: [time-text-speaker-emphasis]
visual_elements: [type-asset-role-importance-animation]
scene_timing: start-end-local-beats
look: correction-and-creative-grade
sound: dialogue-music-sfx-cues
placement_profile: platform-placement-variant
critical_bounds: per-element-per-time
render_plan: 2d | 2_5d | 3d | composite
quality_checks: [visual, temporal, audio, mobile, platform, technical]
```

## Conditional handoffs

- Story & Editing → Captions: transcript, time code and speech emphasis exist.
- Story & Editing → B-roll / Graphics / Character: explanatory or emotional opportunity exists.
- Captions ↔ Graphics / Character / Subject Effects: simultaneous items share the reading area or attention budget.
- Graphics → Asset Registry: identifiable brand or reusable card is needed.
- Subject Effects → Tracking & Compositing: visual elements must follow filmed people or objects.
- Typography / Graphics / B-roll / Character → Visual Grammar: a new shot or effect needs consistency with the approved styleframe.
- Camera / Transitions → Layout Resolver: movement may crop or occlude important material.
- Color Grading ↔ Composition: contrast changes affect text and subject visibility.
- Sound → Editorial Time Map: beat, dialogue, and impact cues align with shot decisions.
- Creative VFX → Renderer Selection: effects require verified 2D/2.5D/3D capability.
- All visible domains → Social Composition: content bounds and platform-specific constraints need inspection.
- All audible and visible domains → Production & Quality: only actual rendered/mixed artifacts can pass final checks.

## Production acceptance

A social-video delivery is ready only when the following relevant conditions are supported by inspection:

- The central message is understandable without relying on decorative elements; pacing and cuts feel intentional.
- Speech is intelligible; captions match spoken words with acceptable sync, punctuation and safe placement.
- Visual assets, icons, graphics and character shots accurately refer to the intended concepts and preserve style continuity.
- Important words, faces, labels, prices and CTAs remain visible at their reading moments across target placements.
- Tracking, masks, motion, camera and cuts have no conspicuous jumps or accidental overlaps.
- Color and sound are coherent; no avoidable clipped audio, unreadable text or unintended color shift.
- Final MP4 exists, plays correctly, has expected duration, format, audio and frame rate, and is backed by a reproducible source plan.

## Priority and scope

**Core for most edited videos:** Story & Editing, Captions when spoken, Sound & Voice, Color, Composition & Safe Zone, Production & QA.

**Activated by content:** Kinetic Typography, Motion B-roll, Graphics/Icons/UI, Character, Subject Effects, Camera/Transitions, Opening/Ending.

**Special effects by justification:** portal, mirror-world, kaleidoscope, elaborate 3D, heavy particles and complex simulations. Keep these within social-scale Creative VFX; a full cinema VFX or feature-film production department is outside this library's intended scope.
