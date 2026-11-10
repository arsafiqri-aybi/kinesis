# Motion — Creative Craft

Conditional operational knowledge. Select responsibilities according to the current task.

<a id="product-film-direction"></a>
## Product Film Direction

**Inputs:** Product purpose, supported capabilities, audience, intended takeaway and permitted source material

**Decision:** Choose the product change worth showing and the minimum sequence that makes it understandable. An input-process-result sequence is one option; a metaphor, direct comparison or quiet detail may fit better. Distinguish demonstrated behavior from illustrative condensation.

**Expected mechanism:** A visible relationship between an action and a result can make the product message concrete.

**Tradeoff:** An attractive simulation may imply an unsupported capability or spend its duration on interface detail instead of the benefit.

**Verification:** Review the sequence without explanation. Compare each visible claim with supplied evidence; distinguish an illustration from functional validation. Check that the intended result can be identified.

**Output:** Product beat plan with claim evidence, visual changes and editorial handoffs

### Craft practice

- Specify the desired audience understanding per beat and the change that communicates it; omit redundant navigation.
- Choose which interactions need continuity and which may be condensed with a clear editorial cut. Do not use a loading animation as proof of actual speed.
- Send UI behavior to UI Choreography and state-to-state motion to Motion Choreography. Keep exact product identity and screen content in the project.

Authored transferable craft hypothesis; validate through actual project output and audience-relevant review.

<a id="ui-choreography"></a>
## UI Choreography

**Inputs:** Component IDs and hierarchy, accurate UI content, action/state sequence and edit ranges

**Decision:** Define causal state transitions and visible feedback before animating. Coordinate cursor, input, selection, menu, progress and result only when present in the brief. Preserve component anchors and nested coordinate spaces; use the existing layout and transform owners for implementation.

**Expected mechanism:** Stable state relationships can let the viewer follow what changed and why.

**Tradeoff:** Simultaneous changes can hide causality; simulated UI may misrepresent the product; excessive realism can bury the key idea.

**Verification:** Check each state change against its trigger, panel anchors, text bounds, occlusion and reading interval. Inspect interruption and entry/exit boundaries; keep functional claims separate from the visual demo.

**Output:** UI state/action map, component anchors, cue dependencies and motion handoffs

### Craft practice

- Use states such as idle, input, selection, processing and result only when relevant; declare valid transitions and which parts persist.
- Bind an event to the actual cue source. Use measured speech timing only when available; hand-authored editorial cues must be labeled.
- Separate the panel transform from content reveals. Anchor menus to their control and preserve the connection through reframing.
- Treat cursor blink, hover, focus, spinner and selection highlight as optional cues. Scope them to meaningful intervals rather than running every cue continuously.

Authored transferable craft hypothesis; validate through actual project output and audience-relevant review.

<a id="motion-choreography"></a>
## Motion Choreography

**Inputs:** Intended change, stable object IDs, key states, hierarchy, timing constraints and optional cues

**Decision:** Choose the primary action and dependent responses. Describe their relative timing, preserved relationships and attention handoff. Permit overlap, sequential movement, independent motion or stillness according to meaning; delegate trajectory, easing, springs and camera algorithms to their existing owners.

**Expected mechanism:** Coordinating dependencies can make multiple moving parts read as one intentional action.

**Tradeoff:** Moving everything together feels mechanical; excessive offsets fragment a single event; a universal beat grid can obscure meaning.

**Verification:** Review whether the main action is identifiable and the next event begins with enough context. Inspect interrupted settling, pivots and handoffs. Use target-speed playback before claiming successful pacing.

**Output:** Action dependency map with primary/supporting tracks, overlaps, holds and invariants

### Craft practice

- Plan anticipation, travel, settle and reading states only where useful; specify which intervals may overlap.
- Separate object, parent-group and camera changes so compounded transforms remain intentional.
- Assign one owner to each driven property. Pass the motion endpoints and intended response to easing/secondary-motion; avoid competing drivers.
- Re-evaluate relative timing after retiming or copy changes. Preserve deliberate silence and stillness as valid action choices.

Authored transferable craft hypothesis; validate through actual project output and audience-relevant review.

<a id="attention-direction"></a>
## Attention Direction

**Inputs:** Audience task, focal subjects, layout, motion tracks, reading needs and viewing scale

**Decision:** Choose the intended focal event and how attention passes to the next one. Allocate movement, scale, contrast, depth and detail around that purpose. Keep competing accents subordinate when clarity is needed; permit distributed attention when intentionally required.

**Expected mechanism:** Coordinated visual cues may help preserve an understandable sequence of attention.

**Tradeoff:** Glow, camera motion or decorative highlights can attract attention away from meaning; focal intent is not proof of actual viewer gaze.

**Verification:** At intended viewing size, review what can be understood on a first pass and inspect the busiest interval. Record reviewer observations as such; do not claim eye-tracking or audience retention without measurement.

**Output:** Focal-event plan, attention handoff anchors and competing-salience corrections

### Craft practice

- Declare an intended focus per relevant interval and an anchor connecting the next state; change the plan when the narrative needs a deliberate break.
- Use empty space and stillness as available tools. Before adding blur, reduce competing contrast or motion if that solves the problem.
- Keep defocus, motion blur and glow distinct; request the required operation from compositing/temporal-sampling instead of conflating them.
- Try a different cue such as shape or position when a color correspondence is inaccessible, ambiguous or inconsistent with the project identity.
- Coordinate caption hierarchy, framing and local look changes around the intended event. One salient layer may lead while the others hold; purposeful distributed attention is still allowed.
- Use small-versus-large wording, negative space or a repeated phrase as possible attention relationships without adopting a source font or palette. Record intended focus as a design hypothesis, not measured gaze.

Authored craft hypothesis informed by multiple visual studies; sampled frames establish visible states, not validated audience response, playback rhythm or audiovisual synchronization.
