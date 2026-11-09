# Motion — Editorial

Connected operational knowledge. Select responsibilities according to actual project needs.

## Story & Editing

**Inputs:** Convert subject matter into a coherent, engaging short-form viewing sequence. Inputs come from the shared project contracts and connected technical owners.

**Decision:** What must viewers understand, feel, or do at each moment? Should the shot cut, hold, replace with B-roll, or show an explanation?

**Expected mechanism:** Convert subject matter into a coherent, engaging short-form viewing sequence.

**Tradeoff:** A dramatic hook promises a different subject than the actual explanation.

**Verification:** Play the cut without explanatory commentary and record the understood message, missed beats and redundant shots.

**Output:** beat map, shot/cut plan, time-coded editorial decisions.

**Recovery:** Rewrite the hook or reorder the first explanatory beat; preserve the intended claim.

## Animated Subtitles & Captions

**Inputs:** Deliver accessible, synchronized, legible spoken content with optional expressive emphasis. Inputs come from the shared project contracts and connected technical owners.

**Decision:** When should words simply be readable, and when should a word or phrase be visually emphasized? Maintain semantics, spelling, timing, and mobile readability.

**Expected mechanism:** Deliver accessible, synchronized, legible spoken content with optional expressive emphasis.

**Tradeoff:** Captions are visually impressive but mistimed or incomplete.

**Verification:** Compare each phrase with the actual speech and inspect word boundaries, line breaks and speaker changes.

**Output:** timed caption cues and animated layout with collision constraints.

**Recovery:** Correct transcript/alignment first; then recompute emphasis, layout and render ranges.

## Kinetic Typography & Lyric Scenes

**Inputs:** Turn language into visual scenes, not merely moving text. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Is typography the primary scene or a support element? Choose only the structural complexity the shot warrants.

**Expected mechanism:** Turn language into visual scenes, not merely moving text.

**Tradeoff:** The metaphor or deformation destroys readability before the phrase is understood.

**Verification:** Inspect glyph correspondence and intermediate states at the actual reading speed.

**Output:** text-scene plan, references, compositional states, animation timelines.

**Recovery:** Hold a readable state, simplify deformation and re-evaluate the entry/exit.

## Original Motion B-roll & Explainers

**Inputs:** Build inserted visual sequences that replace or alternate with primary footage to explain meaning. Inputs come from the shared project contracts and connected technical owners.

**Decision:** A complete cutaway is preferable when adding more overlays would obstruct the subject, overload the scene, or limit explanation.

**Expected mechanism:** Build inserted visual sequences that replace or alternate with primary footage to explain meaning.

**Tradeoff:** The inserted shot is attractive but disconnects the speaker from the argument.

**Verification:** Play the cutaway in its editorial context and explain the information it adds.

**Output:** self-contained visual shot with start/end editorial handoffs.

**Recovery:** Replace the metaphor or shorten the insert; hand the revised duration to the edit.

## Motion Graphics, Cards, Icons & UI

**Inputs:** Supply concise context and explanations while preserving the main footage's identity. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Which information is better shown as a momentary overlay rather than as standalone B-roll? Brand marks should be recognizable and used appropriately; do not invent product features in simulated UIs.

**Expected mechanism:** Supply concise context and explanations while preserving the main footage's identity.

**Tradeoff:** A card obscures the subject or a simulated UI implies an unsupported feature.

**Verification:** Check each information-bearing bound and factual label in actual composited frames.

**Output:** responsive, parameterized, reusable visual components with critical-content bounds.

**Recovery:** Recompose or use a standalone insert; correct UI content before animation.

## Character & Illustration Animation

**Inputs:** Use animated characters or illustrations to demonstrate, react, and narrate ideas. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Does character action provide clarity, personality, or humor? Integrate with captions and speaking footage rather than competing for attention.

**Expected mechanism:** Use animated characters or illustrations to demonstrate, react, and narrate ideas.

**Tradeoff:** The character competes with the speaker or changes identity across cuts.

**Verification:** Review acting, contact, identity and captions together at target speed.

**Output:** character shot/insertion with rig controls, cues, framing, and review conditions. **Preserve existing character-animation work in Motion; this domain is an editorial integration point, not a replacement.**

**Recovery:** Restage the reaction and reuse the canonical character; recheck affected rig/performance tracks.

## Freeze Frames, Subject Effects & Tracking

**Inputs:** Make filmed people and objects interact with graphics in an intentional, convincing way. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Which visible subject or object is emphasized, and does tracking hold across movement and occlusion?

**Expected mechanism:** Make filmed people and objects interact with graphics in an intentional, convincing way.

**Tradeoff:** A mask leaks or a tethered label jumps to the wrong object.

**Verification:** Scrub masks and tracked anchors across occlusion, scale change and re-entry.

**Output:** keyed/tracked shot with stable masks and subject-safe placement.

**Recovery:** Use confidence-aware gaps and manual anchors; change the effect if reliable tracking cannot be obtained.

## Camera, Zoom & Transition Language

**Inputs:** Direct viewer attention and connect scenes through comprehensible movement. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Is movement serving a reveal, emphasis, spatial continuity, or scene change? Maintain focal continuity and avoid accidental crop of subjects/text.

**Expected mechanism:** Direct viewer attention and connect scenes through comprehensible movement.

**Tradeoff:** Camera movement cuts off protected text or produces an unintended spatial jump.

**Verification:** Inspect maximal crops and transition boundary frames while following the same subject.

**Output:** movement trajectories and shot transitions with entry/exit states.

**Recovery:** Modify framing and incoming/outgoing states together; rerun layout checks.

## Color Grading & Visual Look

**Inputs:** Preserve visible quality while giving footage and graphics a consistent emotional character. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Is a requested mood achievable while retaining skin detail, readable text, and credible product colors?

**Expected mechanism:** Preserve visible quality while giving footage and graphics a consistent emotional character.

**Tradeoff:** An intended look crushes detail or makes graphics conflict with footage.

**Verification:** Compare representative skin/product colors, black levels and text contrast across adjacent shots.

**Output:** shot-matched correction and look parameters tested in the rendered output.

**Recovery:** Separate source correction from the creative look; retest the output conversion.

## Sound, Voice & Musical Synchronization

**Inputs:** Make speech understandable and audio support the visual timing. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Prioritize understandable dialogue. Let music and SFX reinforce—not obscure—the content. Use permitted/licensed sources and avoid implied voice identity without authorization.

**Expected mechanism:** Make speech understandable and audio support the visual timing.

**Tradeoff:** Beat matching cuts a meaningful phrase or masks a key word.

**Verification:** Listen to speech over music/SFX at ordinary playback level and compare early/late sync cues.

**Output:** synchronized audio stems/cue map and monitored final mix.

**Recovery:** Prioritize phrase semantics, reduce competing sound and move cues using the shared timebase.

## Social-Scale Creative VFX & 2.5D

**Inputs:** Offer expressive transformations within an achievable short-form production budget. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Prefer clear 2D/2.5D illusions over full photorealistic simulation when the latter does not improve the message. Require a visual reference and performance budget for complex sequences.

**Expected mechanism:** Offer expressive transformations within an achievable short-form production budget.

**Tradeoff:** A complex simulation is too slow or visually hides the concept.

**Verification:** Render the most expensive effect interval and inspect meaning, artifacts and measured cost.

**Output:** self-contained composited shot with an achievable renderer plan.

**Recovery:** Replace it with an explicit 2D/2.5D construction or simplify the shot while preserving the meaning.

## Social Composition & Adaptive Safe Zones

**Inputs:** Keep the design effective across Instagram/Facebook Reels and Stories, TikTok, YouTube Shorts, and supported ad placements. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Classify elements as `protected`, `flexible`, `decorative`, or `full_bleed`. Protect information-bearing regions within flexible elements, not the entire container. Recompose layouts when the platform changes rather than blindly scaling.

**Expected mechanism:** Keep the design effective across Instagram/Facebook Reels and Stories, TikTok, YouTube Shorts, and supported ad placements.

**Tradeoff:** A caption fits one layout but is hidden in another surface.

**Verification:** Test protected content against time-varying UI masks at reading holds for every target placement.

**Output:** per-placement layout profile, time-dependent critical bounds, and preview QA results.

**Recovery:** Recompose the placement variant; do not blindly shrink all scene contents.

## Opening, Ending & Cover Design

**Inputs:** Establish a compelling first impression and meaningful conclusion. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Choose an opening according to audience and story; avoid an intro that delays the content's purpose.

**Expected mechanism:** Establish a compelling first impression and meaningful conclusion.

**Tradeoff:** An intro delays the message or the cover promises content absent from the edit.

**Verification:** Review opening, ending and selected cover crops independently and in sequence.

**Output:** opening/ending sequences and cover candidates linked to the editorial timeline.

**Recovery:** Move identity treatment into the content; choose a truthful cover and purposeful ending.

## Production, Platform Delivery & Quality

**Inputs:** Deliver technically valid, visually legible social video and source materials. Inputs come from the shared project contracts and connected technical owners.

**Decision:** Generate platform-specific outputs only when the surface differs materially. Verify actual files and final frames before describing production as complete.

**Expected mechanism:** Deliver technically valid, visually legible social video and source materials.

**Tradeoff:** A valid encode contains stale frames, wrong captions or an unverified placement crop.

**Verification:** Fully decode exports, inspect A/V metadata and watch target-sized playback with the actual caption/audio mix.

**Output:** verified export variants and repeatable source-build package.

**Recovery:** Invalidate the relevant build signature and regenerate affected ranges and variants.
