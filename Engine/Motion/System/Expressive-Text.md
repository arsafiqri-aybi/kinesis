# Expressive Text

Use language as readable information and, when appropriate, as visual composition. Choose the role before the treatment. Keep the underlying text, its meaning, timing evidence, layout and animated presentation independently editable. Reuse existing typography, alignment, layout, animation, compositing and editorial owners.

## Text roles and semantic integrity

Distinguish a complete caption from selected emphasis, a title, an illustrative label and an independent text scene. A decorative keyword is not automatically an accessible transcript. Preserve the approved utterance when a complete caption is required; provide an appropriate complete caption track or variant when the visual design only displays selected words. Do not duplicate information in competing overlays without a purpose.

Preserve negation, quantities, conditions, attribution and speaker intent across grouping and emphasis. An expressive rendering must not silently rewrite the source. Representing language as an interface, code, handwriting or another visual metaphor may change the presentation grammar; retain a mapping to the approved text and label illustrative syntax as such. A picture of code is not proof of executable behavior.

## Compose a phrase, then reveal it

Choose a semantic group and its important relationship before splitting it into words. Plan a complete readable state with actual glyph metrics, deliberate line breaks and a stable local anchor. Decide whether the group accumulates, replaces in place, scrolls, travels or becomes a scene. A single-word sequence can work for some delivery; it can also destroy syntax and force needless eye movements. Keep conventional phrase captions available.

Use hierarchy across the group: size, weight, line spacing, alignment, case and optional color. Give small connector words enough prominence to preserve grammar. Optical spacing may differ from equal numeric spacing. Determine the final phrase bounds before staged reveals when stable composition is desired; dynamic reflow is another deliberate option, not an accidental consequence of adding a word.

Store a compact project-owned phrase plan when relevant:

- `group_id`, exact text range, speaker and role;
- approved emphasis spans and their semantic reason;
- block anchor, measured final bounds, line breaks and protected subregions;
- cue IDs and precision/provenance, reveal/hold/exit intervals;
- local per-word transforms, shared group transform and permitted variation.

These fields extend project records under existing G02, G04 and G05 responsibilities. They do not create a second alignment, layout or motion engine. Sparse local text timing remains authored timing until actual alignment has been reviewed.

## Stage around footage and framing

Choose whether text belongs in negative space, beside a speaker, over a protected background region, inside a scene surface or alone in the frame. Account for face, gesture, mic/product, existing graphics and placement UI according to the current message. The mouth need not always be visible, but an accidental caption over an important expression is a compositional failure.

Keep shot crop, any inset content window, text block and platform frame as distinct coordinate spaces. A film with baked black margins or rounded footage does not establish a platform safe zone. Recompute placement per output and through reframing. Decide whether a phrase persists across a cut or resets for a new speaker/idea. Keep a stable screen anchor when it carries continuity; restage intentionally when the composition changes.

For text on a filmed screen, distinguish the source camera/perspective from any animation inside the screen. Use the existing tracking/compositing owner when attaching new content; use a native scene when that is the appropriate construction. Do not infer 3D geometry, camera paths or a particular tool from a finished clip alone.

## Animate meaningfully

Choose the reading state and cue provenance before adding blur, scale, translation, rotation, masking or type-on. Separate word-level action, group motion and camera motion so their effects do not compound unintentionally. Use bounded motion around the local anchor and existing easing/secondary-motion owners; a handwritten character does not require random jitter on every frame.

Allow the incoming word to settle into a readable state. A blur reveal or overshoot can occupy a brief transition, but should not consume the entire time available for comprehension. Keep the whole word or meaningful phrase intact when letter-by-letter reveal would make it too late to read. Preserve intentional holds and let completed groups clear before a competing group when necessary.

Emphasis channels are alternatives, not a checklist: a size difference, a weight shift, spacing, an underline, position, a selected color, an isolated frame or a held beat may suffice. Color should support an association that remains understandable by another cue when needed. Exact accent hues and which words receive them belong to the project.

Do not assign universal durations or words-per-second thresholds from a few examples. Inspect actual text length, language, font complexity, viewing size, speech and reading demands. Translation can require different grouping, duration and layout; preserve meaning instead of blindly reusing word indices or an English line break.

## Integrate style and legibility

Keep a coherent project vocabulary for baseline type, emphasis, entrance, reading state and exit. Permit a local exception when a new narrative role warrants it. A vocabulary is a set of controllable relationships rather than a fixed template pack. Vary the design when the purpose changes; do not cycle effects simply to fill time.

Separate footage correction/look from overlay rendering. Test contrast over the actual changing background and after any global grade. Use restrained shadows, local contrast support or repositioning as alternatives; do not assume thick outlines or glow improve every design. Dark type may suit a bright scene; a large white caption is only one option.

## Review and revise by owner

Check exact text and qualifiers → cue truth → final phrase composition → intermediate/reframed bounds → readable motion state → encoded viewing conditions, revisiting only the relevant part when it changes. This is a dependency relationship, not a mandatory creative sequence.

For alignment claims, compare with real decoded speech and inspect speaker/phrase boundaries. For geometry, inspect first/last glyphs, descenders, diacritics, line spacing, maximum scale and clipping masks. For temporal quality, watch the actual output at target speed; a still cannot certify readable timing. Keep repeated-phrase carryover, exit tails and the first new word across cuts under review. Record coverage and unverified checks explicitly.

When language is wrong, fix the transcript; when the group is unreadable, revisit typography/layout; when emphasis misleads, revisit editorial intent; when the motion competes, revisit choreography/easing; when it lacks contrast, revisit composition, grading or compositing. Avoid solving every failure by shrinking the entire design.
