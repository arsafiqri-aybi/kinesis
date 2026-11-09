# Motion — Characters-and-Voice

Connected operational knowledge. Select responsibilities according to actual project needs.

## Character Design & Identity

**Inputs:** Approved styleframes, role, silhouette, personality cues, expression examples and allowed viewpoints

**Decision:** Define a canonical model sheet, shape language, proportion ratios, palette, recognizable markers and permitted variation for a character.

**Expected mechanism:** A stable character identity sheet with explicit invariants can reduce visual drift across shots and control changes.

**Tradeoff:** A single flattering reference hides viewpoint and occlusion uncertainty; excessive constraints can suppress expressive poses.

**Verification:** Compare the neutral design and at least three acting poses at intended crops, viewpoints and lighting; check landmarks, silhouette and recognizability.

**Output:** Character identity sheet, proportions, landmarks, permissible expression and pose range

## Character Anatomy & Construction

**Inputs:** Character identity sheet, required action set, pose extremes, visible views and procedural boundary

**Decision:** Specify articulation and deformation regions for stylized or realistic bodies and choose cutout, vector path, layered 2.5D or procedural 3D construction.

**Expected mechanism:** Pose-aware segment and deformation plans can keep the visible form coherent at the required angles.

**Tradeoff:** Overly literal anatomical joints may limit stylization; a still photo cannot establish unseen body structure.

**Verification:** Render turnarounds or planned views and stress silhouette, limb proportions, topology and deformation at action extremes.

**Output:** Procedural anatomy map, controllable segments, joints and deformation envelope

## Character Asset System

**Inputs:** Canonical character design, construction plan, scene requirements and versioned source parameters

**Decision:** Create a reusable parameterized master character with stable object/part IDs and project-specific variants separated from animation.

**Expected mechanism:** One source of character geometry and identity may prevent shot-by-shot redrawing and enable predictable revisions.

**Tradeoff:** Rigid sharing can break camera-specific corrective shapes; imported rigs require declared provenance and may violate a code-only boundary.

**Verification:** Instantiate the same master asset in two dissimilar scenes, vary pose and view, then compare identity and verify stable handles.

**Output:** Versioned reusable character definition, expression targets, part IDs and approved overrides

## Advanced Rigging & Skinning

**Inputs:** Character anatomy, rest pose, controllable parts, joint motion limits and intended shots

**Decision:** Construct 2D parenting/deformation controls or 3D bones, inverse kinematics, skin weights and corrective shapes as needed; define solve order.

**Expected mechanism:** A controllable rig can coordinate multiple parts during body and facial animation without redrawing each frame.

**Tradeoff:** Joint flips, unstable IK, volume loss and skin collapse can emerge at extreme poses, especially with cyclic constraints.

**Verification:** Test reachable targets, joint limits, blend shapes, extreme bends, reverse seeking and reproducible deformations.

**Output:** Evaluable rig, pose interface, weight maps or deformation rules, solver constraints

## Body Mechanics & Locomotion

**Inputs:** Rig, mass/scale convention, action goals, path, environment contacts and rhythm

**Decision:** Author balanced poses, weight transfer, gait cycles, contact timing, anticipation, follow-through and physical or stylized arcs.

**Expected mechanism:** Controlled contact and timing can make locomotion readable and convey mass, intent and momentum.

**Tradeoff:** Foot sliding, unstable balance, penetrations or over-mechanical cycles can make behavior implausible; stylistic exaggeration may be deliberate.

**Verification:** Inspect feet/contact trajectories, planted phases, center-of-mass estimates, cycle seam and full-speed playback over repeated steps.

**Output:** Reusable contact-aware body action with pose keyframes and cycle parameters

## Facial Animation & Expressions

**Inputs:** Facial construction, rig, emotional beats, eye target, design constraints and camera crop

**Decision:** Design expression shapes, brows, gaze, eyelids, cheek/mouth deformation, pose combinations and timing with an expressive but stable face.

**Expected mechanism:** Coordinated gaze and facial deformation can communicate attention and emotion while retaining character identity.

**Tradeoff:** Expression controls may conflict, clip through surfaces or lose readability at small scales; emotion cannot be proved from expression alone.

**Verification:** Check neutral and emotion transitions, left/right asymmetry, blink extremes, mouth-eye coordination and full-shot viewing size.

**Output:** Expression library, facial rig channels, emotional pose and gaze tracks

## Dialogue & Lip Synchronization

**Inputs:** Approved dialogue, actually rendered or recorded speech, verified timing or phoneme alignment, viseme library and facial rig

**Decision:** Map timed phonemes or reviewed acoustic cues to mouth poses, coarticulation and holds; preserve acting expressions and dialogue performance.

**Expected mechanism:** Audio-timed visemes plus transition shaping can align recognizable mouth movement to spoken speech.

**Tradeoff:** Text-only timings and raw audio duration do not establish phoneme timing; visemes can clash with emotion or oversaturate the mouth.

**Verification:** Listen and watch encoded dialogue at normal speed; check hard consonants, open vowels, offsets, pauses, mouth closure and desynchronization over long shots.

**Output:** Audio-bound viseme track, timing provenance and tested lip-sync shot

## Character Acting & Performance

**Inputs:** Character role, scene objectives, storyboard beats, dialogue/emotion and shot/framing

**Decision:** Translate intent into anticipations, pose accents, gaze changes, gesture phrases, holds and action transitions; orchestrate body and facial tracks.

**Expected mechanism:** Contrast between meaningful poses and controlled timing can make a character action intelligible and motivated.

**Tradeoff:** Generic gestures, excessive motion, competing gestures and mismatch with spoken intent reduce clarity.

**Verification:** Review blocking with sound off, then full performance with sound; test poses and silhouette, emotional transition and acting continuity.

**Output:** Shot-based performance plan and synchronized body/face/gaze action tracks

## Multi-Character Interaction & Contact

**Inputs:** Two or more character rigs, shared scene coordinates, props, communication beats and blocking

**Decision:** Coordinate eyelines, turn-taking, distance, occlusion, contact targets, prop handoffs and collision or stylized overlap rules.

**Expected mechanism:** Explicit shared constraints and interaction beats can improve spatial and social coherence between actors.

**Tradeoff:** Competing rig constraints, contact jitter, impossible reach, blocking ambiguity and timing collisions arise in multi-actor scenes.

**Verification:** Inspect interaction at entrance, touch and exit; test both camera and spatial views, occlusion, eye contact and prop ownership changes.

**Output:** Scene-level interaction constraints, actor tracks, handoff ownership and collision checks

## Character Continuity & Performance Evaluation

**Inputs:** Master character, approved styleframes, shots, rigs, animation tracks and final encoded footage

**Decision:** Audit recurring visual identity, acting logic, rig stability, phoneme/audio synchronization, model reuse and cross-shot geography.

**Expected mechanism:** Independent repeated checks across shot boundaries can catch character-specific errors missed by generic motion inspection.

**Tradeoff:** Passing still-frame tests cannot prove convincing performance; successful playback cannot prove source asset provenance.

**Verification:** Compare character landmarks across all shots, inspect cut frames and stress poses, play encoded clips at target speed, verify audio offset when dialogue exists.

**Output:** Character acceptance record and targeted correction list tied to the responsible owners

## AI Voice Narration

**Inputs:** Approved narration copy, intended audience and language, pronunciation notes, per-scene intent, desired voice character, licensed or consented voice choices, API budget, timeline and soundtrack constraints

**Decision:** Produce an approved, scene-linked spoken performance through the OpenAI Speech API by default; define meaningful segments, voice, language, delivery instructions and revisions separately from mixing and synchronization.

**Expected mechanism:** Segment-oriented synthesis and iterative listening can align intelligibility, narrative emphasis, pauses and character with the visual story while leaving the audio reproducible and editable.

**Tradeoff:** Synthetic narration can mispronounce names or shift timing, emotion and voice identity across chunks; provider access, latency and API cost also constrain production. Speech output does not guarantee word timestamps.

**Verification:** Listen to the entire generated voice track at actual speed, audit script coverage and pronunciation, measure the actual duration of every file, inspect segment joins, verify licensed provenance and AI disclosure, then check the combined video at beginning, middle and end.

**Output:** Approved narration plan, generated voice stems, segment-level duration and provenance manifest, pronunciation review and handoff cues
