# Motion — Foundations

Connected operational knowledge. Select responsibilities according to actual project needs.

## Creative Brief

**Inputs:** Message, audience, duration, destination and constraints

**Decision:** Turn the request into a visible outcome and a short list of visual priorities; retain unresolved choices explicitly.

**Expected mechanism:** A bounded purpose can guide both image selection and scene construction.

**Tradeoff:** Too many equal priorities weaken the focal message.

**Verification:** Describe the intended takeaway in one sentence and test the planned opening against it.

**Output:** Project purpose and acceptance criteria

## Reference Curation

**Inputs:** Candidate images and intended visual priorities

**Decision:** Label each image by its role: composition, silhouette, surface, palette, lighting or mood; resolve conflicts before reconstruction.

**Expected mechanism:** Role-specific references provide usable targets without requiring one image to answer every question.

**Tradeoff:** Mixing lenses, light directions or styles blindly can create an incoherent scene.

**Verification:** Identify the governing reference for every major visual property and list conflicting cues.

**Output:** Reference manifest with roles and observations

## Visual Direction

**Inputs:** Brief and role-labelled references

**Decision:** Define a coherent visual grammar for proportions, type, palette, edge treatment, surface detail and camera; compare alternatives as stills.

**Expected mechanism:** Shared visual rules can make separately built scenes feel related.

**Tradeoff:** A rigid style rule can prevent an important scene from communicating clearly.

**Verification:** Place representative frames side by side and inspect hierarchy and consistency.

**Output:** Visual system and permitted variation

## Storyboard

**Inputs:** Message structure and visual system

**Decision:** Map each beat to a shot, its visible action and the reason for its transition; choose duration from reading and action needs.

**Expected mechanism:** An explicit sequence can expose missing information before expensive rendering.

**Tradeoff:** Attractive individual shots may fail to form a readable sequence.

**Verification:** Walk through the boards without narration and identify gaps or redundant beats.

**Output:** Shot list and provisional beat timing

## Styleframes

**Inputs:** Shot list and reference targets

**Decision:** Resolve key stills for appearance; include motion extremes and transition boundaries when they alter composition.

**Expected mechanism:** Defined visual endpoints make reconstruction and motion decisions reviewable.

**Tradeoff:** Perfect endpoints do not guarantee good intermediate shapes or movement.

**Verification:** Compare start, key event and end frames; flag properties that must remain invariant.

**Output:** Selected visual targets and invariants

## Shot Continuity

**Inputs:** Adjacent styleframes and object identities

**Decision:** Track screen direction, scale, anchor positions, palette and visual motifs across shots; mark deliberate breaks.

**Expected mechanism:** Selected continuity cues can help viewers connect changes across edits.

**Tradeoff:** Preserving every cue may make scenes repetitive.

**Verification:** Inspect consecutive frames at each cut and follow the intended subject.

**Output:** Continuity constraints and transition handoff

## Shape Decomposition

**Inputs:** Reference image, crop and focal objects

**Decision:** Separate silhouette, internal contours, negative space and occlusion into editable primitives or meshes; prioritize large relationships.

**Expected mechanism:** Reconstructing silhouette and proportion first can reduce wasted detail work.

**Tradeoff:** Premature tracing of tiny details can preserve pixels while missing structure.

**Verification:** Compare flat silhouette masks at matched scale before adding shading.

**Output:** Object hierarchy, shape measurements and construction plan

## Spatial Inference

**Inputs:** Perspective cues, overlaps and visible faces

**Decision:** Infer a plausible camera and depth layout; record alternate explanations when one image cannot determine hidden geometry.

**Expected mechanism:** Consistent perspective can reproduce visible depth with economical geometry.

**Tradeoff:** A single image does not uniquely reveal camera, depth or hidden surfaces.

**Verification:** Overlay projected edges and test the requested camera move for exposed gaps.

**Output:** Camera hypothesis, depth arrangement and uncertainty notes

## Appearance Inference

**Inputs:** Highlights, shadows, gradients and surface cues

**Decision:** Separate likely material response from illumination and painted detail; test simple material-light combinations.

**Expected mechanism:** Separating causes makes later movement and relighting more coherent.

**Tradeoff:** A baked highlight can be mistaken for a physically moving reflection.

**Verification:** Rotate a light or camera in a probe render and inspect whether surface cues behave plausibly.

**Output:** Material and lighting hypotheses with confidence notes

## Reconstruction Planning

**Inputs:** Decomposition, shot movement and hardware observations

**Decision:** Choose vector, layered 2.5D, analytic shading or full 3D per object based on required views; define any allowed imported assets.

**Expected mechanism:** Representation matched to visible behavior can reduce cost while preserving the target.

**Tradeoff:** A shortcut may fail when motion exposes a side absent from the reference.

**Verification:** Test the widest planned view and audit every image load against the declared procedural scope.

**Output:** Representation plan and procedural asset boundary

## Reference Matching

**Inputs:** Target styleframe and rendered candidate

**Decision:** Compare equal-size, equal-crop images; diagnose silhouette, layout, value, color and material separately; fix dominant deviations first.

**Expected mechanism:** Structured comparison can make revisions more attributable.

**Tradeoff:** Pixel error can penalize harmless differences and ignore meaning.

**Verification:** Record one visible mismatch, its likely cause and the result of changing that cause.

**Output:** Ranked reconstruction revisions

## Ambiguity Resolution

**Inputs:** Unobserved regions and competing visual interpretations

**Decision:** Mark observed, inferred and invented properties; build the simplest plausible hidden structure needed by the shot.

**Expected mechanism:** Explicit uncertainty can prevent unsupported detail from dominating reconstruction.

**Tradeoff:** Excessively literal reconstruction can block useful creative interpretation.

**Verification:** Inspect every newly revealed region and check it against the agreed creative freedom.

**Output:** Chosen interpretation and unresolved reference limits

## Curve Geometry

**Inputs:** Silhouettes, handles, stroke targets and scale

**Decision:** Construct paths with controlled tangents and joins; choose tessellation from output scale and curvature.

**Expected mechanism:** Smooth curvature and stable stroke treatment can preserve intended contours.

**Tradeoff:** Too few samples facet curves; too many increase cost without visible benefit.

**Verification:** Inspect inflections, corners and stroke joins at final size and during scaling.

**Output:** Reusable curve constructors and path parameters

## Planar Geometry

**Inputs:** Shape outlines, holes, overlaps and fill rules

**Decision:** Build filled regions and negative spaces using explicit winding and boolean operations; retain separate semantic parts.

**Expected mechanism:** Explicit topology can keep fills and cutouts consistent across edits.

**Tradeoff:** Self-intersections and inconsistent winding can invert holes or create artifacts.

**Verification:** Render flat masks and inspect holes, overlaps and extreme parameter values.

**Output:** Editable 2D shape definitions

## Procedural Modeling

**Inputs:** Required views, silhouette and object dimensions

**Decision:** Generate meshes, sweeps, profiles and bevels from parameters; use actual volume where camera movement demands it.

**Expected mechanism:** Parametric volume supports coherent changes across viewpoints.

**Tradeoff:** Bad normals, topology or unnecessary subdivisions can degrade shading and speed.

**Verification:** Inspect silhouette from all planned views plus normals and the closest camera distance.

**Output:** Parametric 3D object construction

## Typography

**Inputs:** Copy, font files, emphasis and available frame area

**Decision:** Specify shaping, font metrics, line breaks, kerning and alignment through code; lock font availability before layout.

**Expected mechanism:** Stable text geometry supports predictable composition and animation anchors.

**Tradeoff:** Substituted fonts or unsupported scripts can invalidate measured layout.

**Verification:** Render actual copy with target fonts; inspect glyphs, line breaks and clipping at phone size.

**Output:** Text layout and font manifest

## Composition

**Inputs:** Subject hierarchy, frame ratio and projected bounds

**Decision:** Balance focal weight, alignment, negative space and grouping; evaluate composition at motion extremes as well as stills.

**Expected mechanism:** A controlled hierarchy can keep the message visible while objects change.

**Tradeoff:** A balanced still can become crowded during movement.

**Verification:** Inspect silhouettes and text bounds at the busiest and most expanded states.

**Output:** Layout constraints and composition anchors

## Depth Layering

**Inputs:** Scene layers, intended depth and camera movement

**Decision:** Assign depth, overlap and parallax deliberately; preserve ordering and reveal regions during camera moves.

**Expected mechanism:** Relative displacement and occlusion can suggest volume without full geometry.

**Tradeoff:** Flat cards may reveal edges or contradictory occlusions.

**Verification:** Preview maximum parallax and all layer crossings.

**Output:** Layer stack and depth parameters

## Color Design

**Inputs:** Visual direction, background and material palette

**Decision:** Define palette roles and interpolation space; compare colors under the intended output transform.

**Expected mechanism:** Controlled value and chromatic contrast can support visual hierarchy.

**Tradeoff:** An appealing palette can lose separation under shading or encoding.

**Verification:** Inspect grayscale separation, gradients and key colors in the encoded frame.

**Output:** Palette parameters and color roles

## Materials

**Inputs:** Surface hypothesis, geometry and lighting

**Decision:** Encode roughness, opacity, reflectance and other needed surface properties using the selected renderer; keep stylization explicit.

**Expected mechanism:** Material-light interaction can preserve surface identity through motion.

**Tradeoff:** Physically detailed materials may be expensive or visually inappropriate.

**Verification:** Render the material on the actual object from planned viewpoints and light angles.

**Output:** Parameterized material definitions

## Procedural Texture

**Inputs:** Surface scale, texture role and viewing distance

**Decision:** Build patterns from coordinates, noise and functions with fixed seeds; choose object or world mapping to fit intended behavior.

**Expected mechanism:** Procedural patterns can retain editability and avoid dependence on reference image pixels.

**Tradeoff:** High-frequency patterns shimmer or slide if mapping is inconsistent.

**Verification:** Inspect animated closeups and distant views for swimming and aliasing.

**Output:** Seeded texture functions and scale settings

## Lighting

**Inputs:** Surface response, depth cues and reference light direction

**Decision:** Construct key, fill, rim or environment contributions as needed; separate shape-defining light from decorative highlights.

**Expected mechanism:** Deliberate light placement can reveal volume and guide attention.

**Tradeoff:** Too much fill flattens form; bright accents can compete with text.

**Verification:** Inspect silhouette, shadow direction and highlight clipping through object rotation.

**Output:** Lighting rig and exposure intent

## Camera Projection

**Inputs:** Reference framing, perspective and reveal requirements

**Decision:** Select orthographic or perspective projection; set framing, lens or scale, near/far limits and target explicitly.

**Expected mechanism:** A consistent camera aligns geometry with reference proportions.

**Tradeoff:** Lens changes alter shape appearance and projected motion.

**Verification:** Compare reference landmarks and inspect near-plane clipping at every planned pose.

**Output:** Camera model and framing parameters

## Compositing

**Inputs:** Layer outputs, masks, alpha and effect intent

**Decision:** Composite layers with an explicit alpha convention and color space; keep blur, glow and grading as adjustable operations.

**Expected mechanism:** Controlled compositing can integrate elements while preserving editability.

**Tradeoff:** Premultiplication errors create fringes; excess glow hides structure.

**Verification:** Test transparent edges on light and dark backgrounds and compare effects enabled versus disabled.

**Output:** Compositing graph and effect parameters

## Timeline Design

**Inputs:** Shot beats, frame rate and duration

**Decision:** Represent shots with exact frame ranges and evaluate local time from the global frame; define boundary ownership.

**Expected mechanism:** Explicit scheduling can avoid accidental overlaps and gaps.

**Tradeoff:** Floating rounding and inclusive endpoints can duplicate or omit frames.

**Verification:** Evaluate the first, last and adjacent boundary frames and sum shot lengths.

**Output:** Master timeline and local-time mapping

## Timing and Pacing

**Inputs:** Reading needs, action intent and beat structure

**Decision:** Allocate anticipation, action, settle and hold intervals where useful; adjust durations from playback observations.

**Expected mechanism:** Time allocated to comprehension can make a short sequence feel intentional.

**Tradeoff:** Uniform pacing can feel mechanical; excessive speed can hide the message.

**Verification:** Watch once at target speed and record missed text or unresolved actions.

**Output:** Event durations and hold intervals

## Easing

**Inputs:** Property endpoints and desired velocity behavior

**Decision:** Choose interpolation by movement character; inspect velocity and acceleration near endpoints and overshoot extrema.

**Expected mechanism:** Appropriate velocity change can suggest weight, precision or softness.

**Tradeoff:** Applying the same easing everywhere can create synchronized artificial motion.

**Verification:** Plot or sample the curve and watch the resulting motion in context.

**Output:** Parameter curves and endpoint behavior

## Transform Animation

**Inputs:** Object hierarchy, pivots, trajectories and scale

**Decision:** Animate position, rotation and scale with explicit local/world spaces; choose rotation interpolation suited to the path.

**Expected mechanism:** Correct pivots and spaces preserve intended spatial relationships.

**Tradeoff:** Euler wrapping, parent scaling or a misplaced pivot can distort motion.

**Verification:** Inspect hierarchy transforms, rotation crossings and object bounds at extrema.

**Output:** Transform evaluators and motion paths

## Shape Morphing

**Inputs:** Source and destination shapes and semantic identity

**Decision:** Establish point or topology correspondence; interpolate meaningful structure and inspect intermediate silhouettes.

**Expected mechanism:** Consistent correspondence can make transformation readable as one evolving object.

**Tradeoff:** Arbitrary vertex matching creates folds, inversion or identity loss.

**Verification:** Render multiple intermediate states including maximum deformation and check winding or normals.

**Output:** Morph correspondence and deformation rules

## Secondary Motion

**Inputs:** Main action, attachment points and desired follow-through

**Decision:** Derive lag, spring response or overshoot from the primary action; use analytic solutions or reproducible simulation checkpoints.

**Expected mechanism:** Delayed response can suggest elasticity and connected mass.

**Tradeoff:** Unbounded oscillation or stateful stepping breaks stability and seeking.

**Verification:** Test rest, impulse, large time jumps and out-of-order frame access.

**Output:** Stable secondary-motion model

## Constraints and Rigging

**Inputs:** Object relationships, joints and permitted motion

**Decision:** Express attachment, look-at, distance or hierarchy constraints with explicit ownership and solve order.

**Expected mechanism:** Relationship constraints can preserve coordinated behavior during revisions.

**Tradeoff:** Cyclic dependencies and competing constraints cause jitter or unsolved states.

**Verification:** Stress the allowed motion range and inspect constraint errors.

**Output:** Rig relationships and evaluation order

## Particle Systems

**Inputs:** Emitter behavior, lifetime, distribution and scene budget

**Decision:** Derive particles from seed, birth time and stable identity; cap density by visible need and measured resources.

**Expected mechanism:** Deterministic particles permit consistent seeking and re-rendering.

**Tradeoff:** Excess density obscures the subject and raises render or memory cost.

**Verification:** Compare repeated frames, birth/death boundaries and peak density.

**Output:** Seeded particle model and lifetime rules

## Camera Motion

**Inputs:** Shot purpose, camera projection and subject trajectory

**Decision:** Design camera position and aim together; preserve readable screen-space relationships and reveal only constructed regions.

**Expected mechanism:** Purposeful framing changes can disclose depth and direct attention.

**Tradeoff:** Camera movement can amplify apparent speed or expose incomplete reconstruction.

**Verification:** Preview maximum reveal, angular changes and subject framing at target playback speed.

**Output:** Camera path and framing constraints

## Transitions

**Inputs:** Adjacent scene meanings, identities and cut boundaries

**Decision:** Choose cuts, masks, matches or transformations from the relationship between shots; coordinate outgoing and incoming states.

**Expected mechanism:** A transition linked to content can connect ideas while maintaining momentum.

**Tradeoff:** Decorative transitions can obscure meaning and create boundary artifacts.

**Verification:** Play the transition alone and in context; inspect exact boundary frames.

**Output:** Transition construction and overlap rules

## Editing Rhythm

**Inputs:** Shot lengths, visual density and message structure

**Decision:** Place cuts and holds according to information changes; use contrast in duration when it supports the intended reading.

**Expected mechanism:** Deliberate temporal grouping can clarify sequence structure.

**Tradeoff:** Cutting only to a fixed beat can interrupt reading or action completion.

**Verification:** Watch with and without sound and identify where comprehension changes.

**Output:** Edit decision list

## Sound Design

**Inputs:** Intended mood, visible events and available audio sources

**Decision:** Assign sound roles to events, atmosphere and emphasis; record imported audio provenance separately from procedural visuals.

**Expected mechanism:** Controlled sound can reinforce event identity and perceived motion.

**Tradeoff:** Excess effects or loudness differences distract from the visual subject.

**Verification:** Listen on ordinary speakers and compare transitions, peaks and silence.

**Output:** Audio layers, sources and level plan

## Audio Synchronization

**Inputs:** Audio sample rate, event times and frame timeline

**Decision:** Use a common rational timebase and explicit offsets; align cues to chosen visual events and preserve audio tails.

**Expected mechanism:** Explicit mapping reduces accumulated audiovisual drift.

**Tradeoff:** Retiming video without retiming cues or truncating tails breaks synchronization.

**Verification:** Check early and late cues and the last audible sample in the encoded output.

**Output:** Cue map and audio timing

## Captions and Overlays

**Inputs:** Final copy, speech timing and viewing context

**Decision:** Time captions to meaningful phrases; keep layout and dwell time legible within project-specific interface clearance.

**Expected mechanism:** Readable synchronized text can preserve meaning with sound off.

**Tradeoff:** Dense text, short holds or platform overlays can hide content.

**Verification:** Review at phone size with sound muted and inspect every caption change.

**Output:** Caption geometry and timing

## Scene State

**Inputs:** Visual constructors, motion evaluators and project parameters

**Decision:** Separate build(parameters), state_at(frame) and render(state); keep stable IDs and explicit dependencies.

**Expected mechanism:** Separation enables reconstruction edits without entangling time evaluation.

**Tradeoff:** Hidden mutations make previews depend on the order frames were visited.

**Verification:** Evaluate the same frame before and after distant seeks and compare output.

**Output:** Scene interface and dependency structure

## Procedural Randomness

**Inputs:** Variation purpose, object IDs and seed

**Decision:** Derive variation from explicit seeds and stable identities; separate static variation from time-varying noise.

**Expected mechanism:** Stable variation can retain visual identity while allowing controlled complexity.

**Tradeoff:** Global randomness changes unrelated objects after a small edit.

**Verification:** Reorder object creation and verify unchanged object properties remain stable.

**Output:** Seed strategy and deterministic noise inputs

## Reproducible Build

**Inputs:** Scene code, fonts, dependency versions and configuration

**Decision:** Record runtime versions, inputs and render settings; resolve assets before capture and retain build metadata.

**Expected mechanism:** Known inputs support repeatable output and attributable differences.

**Tradeoff:** Floating dependencies, unavailable assets or hardware differences can change pixels.

**Verification:** Rebuild in a fresh output folder and compare declared invariants with tolerances.

**Output:** Build manifest and dependency lock strategy

## Renderer Selection

**Inputs:** Representation requirements, effects and observed runtime capabilities

**Decision:** Choose an available renderer by required behavior and measured probe output; permit mixed renderers with explicit handoffs.

**Expected mechanism:** A fit renderer can meet the visual target without unnecessary resource cost.

**Tradeoff:** Installed binaries do not prove usable GPU contexts, fonts or codecs.

**Verification:** Render and encode a representative probe using the actual intended execution path.

**Output:** Renderer decision and verified capability notes

## Resource Budget

**Inputs:** Probe frame timings, peak memory and output size

**Decision:** Estimate frame count and cost from representative and worst-case samples; cap concurrency and preserve completed frames.

**Expected mechanism:** Measured limits support workable resolution and effect choices.

**Tradeoff:** Extrapolation can miss transient simulation or memory peaks.

**Verification:** Render a short segment with peak complexity and compare actual cost to the estimate.

**Output:** Resource estimate and quality fallback choices

## Execution Adapter

**Inputs:** Available local, chat or remote execution tools

**Decision:** Bind project commands to verified tools; report absent capabilities and checkpoint frame ranges rather than inventing a service.

**Expected mechanism:** Clear execution boundaries keep instructions portable across environments.

**Tradeoff:** A knowledge plugin does not itself supply a renderer, GPU or persistent job queue.

**Verification:** Run one real build-render-encode path and record which steps actually completed.

**Output:** Execution commands, locations and honest capability status

## Frame Rendering

**Inputs:** Exact timeline, renderer and output configuration

**Decision:** Render numbered lossless frames with explicit dimensions and frame range; resume only frames belonging to the same build signature.

**Expected mechanism:** Stable frame files allow recovery and targeted revision.

**Tradeoff:** Stale frames from older scene settings can silently contaminate output.

**Verification:** Validate complete numbering, dimensions, signature and representative decoded pixels.

**Output:** Complete frame sequence and render manifest

## Temporal Sampling

**Inputs:** Motion speed, frame rate and shutter intent

**Decision:** Sample time consistently; add subframe integration or motion blur only when it improves the target appearance.

**Expected mechanism:** Sufficient temporal sampling can reduce strobing in fast motion.

**Tradeoff:** Blur can erase detail and subframes multiply render cost.

**Verification:** Compare fast edges, fine patterns and readable text in encoded playback.

**Output:** Sampling and shutter settings

## Color Pipeline

**Inputs:** Working-space frames, alpha and delivery target

**Decision:** Convert pixel values and tag output consistently; choose a documented SDR path unless another target is required.

**Expected mechanism:** Explicit conversion can reduce differences between stills and video playback.

**Tradeoff:** Metadata tags alone do not perform a color conversion.

**Verification:** Decode the MP4 and compare patches and gradients with source frames under the same viewing transform.

**Output:** Output conversion and color metadata

## Video Encoding

**Inputs:** Verified frames, frame rate, audio and target format

**Decision:** Select an available codec and pixel format; set input frame rate explicitly, preserve dimensions and inspect output streams.

**Expected mechanism:** Correct encoding settings preserve intended duration and playback compatibility.

**Tradeoff:** Compression can damage thin lines, grain and gradients; audio lengths may differ.

**Verification:** Probe dimensions, frame count, frame rate and audio duration; fully decode the output.

**Output:** Validated MP4 and encode settings

## Delivery Package

**Inputs:** Validated video, editable source and intended audience

**Decision:** Provide the requested video and rebuild inputs; confirm aspect ratio and platform requirements when publication depends on them.

**Expected mechanism:** Clear deliverables support reuse and future edits.

**Tradeoff:** Platform interface clearance and upload rules can change.

**Verification:** Open the final file, inspect first and last frames and confirm the requested deliverable set.

**Output:** Final video, source entry point and handoff notes

## Still Evaluation

**Inputs:** Rendered styleframes and agreed references

**Decision:** Compare silhouette, composition, hierarchy, color and surface behavior separately; rank deviations by visual consequence.

**Expected mechanism:** Separating dimensions of appearance can make fixes more precise.

**Tradeoff:** Numeric similarity alone cannot establish artistic or semantic success.

**Verification:** Produce matched comparisons and describe each significant visible mismatch.

**Output:** Visual findings and reconstruction corrections

## Motion Evaluation

**Inputs:** Representative playback, extrema and transition frames

**Decision:** Inspect timing, velocity, identity, collisions, continuity and camera behavior in motion as well as stills.

**Expected mechanism:** Temporal review can reveal failures invisible in isolated frames.

**Tradeoff:** A contact sheet cannot establish smoothness or correct audiovisual timing.

**Verification:** Watch a real clip at target speed and inspect suspect intervals frame by frame.

**Output:** Motion findings and timing corrections

## Mobile Legibility

**Inputs:** Encoded video, small viewing size and interface clearance

**Decision:** Inspect text, contrast, fine detail and focal subject at plausible phone display size; use project-specific safe regions.

**Expected mechanism:** Small-size review can reveal losses hidden by a large preview.

**Tradeoff:** Fixed universal safe-area claims can fail on different app layouts.

**Verification:** View a reduced playback and simulated interface mask; record hidden or unreadable content.

**Output:** Legibility corrections and delivery clearance

## Change Impact

**Inputs:** Requested revision, ownership graph and existing evidence

**Decision:** Trace incoming prerequisites and outgoing conditional handoffs; invalidate affected caches, frames and downstream checks.

**Expected mechanism:** Scoped propagation can preserve consistency without rebuilding unrelated work.

**Tradeoff:** Treating every related subject as a dependency produces unnecessary rework.

**Verification:** Revise one parameter and verify the affected owners, outputs and validation records change together.

**Output:** Revision scope and invalidated evidence

## Quality Gates

**Inputs:** Acceptance criteria and observed output evidence

**Decision:** Evaluate visual fidelity, motion, technical output and procedural provenance separately; report passed, failed or unverified status.

**Expected mechanism:** Separate gates prevent a technically valid file from being mistaken for a finished design.

**Tradeoff:** Completion claims can exceed actual inspected frames or runtime capabilities.

**Verification:** Check the delivered source and MP4 against each explicit criterion; retain unresolved observations.

**Output:** Completion decision and evidence record
