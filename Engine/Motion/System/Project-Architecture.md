# Motion — Project Architecture

## Purpose

A single reusable creative-production system serves independent social-video projects. Each project owns a small, persistent design and editorial decision system; each episode inherits it without copy-pasting global expertise. Kinesis governs decisions, Motion owns technical capabilities, a project owns approved style, and an episode owns content and timeline.

## Runtime hierarchy

| Location | Responsibility |
| --- | --- |
| Engine/Kinesis/Motor-System.md | General decision motor |
| Engine/Motion/System | Shared expertise contracts, graphs, QA and project tools |
| Engine/Motion/Knowledge | Connected media knowledge |
| Engine/Templates/Project | Generic project and episode starter |
| Projects/<project-id> | Project identity, recipes, episode records and editable source |
| Outputs/<project-id>/<episode-id> | Generated media and build lineage |


Source chapters under `Motion/Knowledge/`, the 14 social-editing domains and character/voice rules stay as authoritative capabilities. `Graph-Integrated.json` retains its existing IDs; the project extension graph references them rather than duplicating or rewriting the base graph.

## Ownership

| Owner | Holds | May change |
| --- | --- | --- |
| Kinesis | planning, routing, decision/evidence loop | general coordination behavior |
| Global Motion | animation techniques, code primitives, shared G01–G10, structural and visual QA | broadly valid capability or contract |
| Project motor | component selection, palette, font, placement, grade, sound, safe-zone strategy, review criteria | the project's visual/editorial identity |
| Episode | media, script, edit, assets, beat/cue timings, scene edits, per-video exceptions, exports | that specific production |

A project refers to existing expertise by `expertise_id` and shared contracts by `Gxx`; it does not fork underlying algorithms. A project design system may create visual references and reusable visual recipes. New source footage, character identities, music licenses, platform-specific UI assumptions and approved color decisions belong to that project or episode, not Kinesis.

## Project lifecycle

1. **Bootstrap** a new unique project ID from the project template with draft status.
2. **Discover/design** desired audience, purpose, visual references and styleframes; register source/license and classify observed vs invented properties.
3. **Approve** coherent visual identity, reusable components and quality limits. Approval is an explicit project decision, not inferred from an attractive first render.
4. **Produce** episodes using the approved tokens and versioned recipe choices. Build only new shots/visuals when the story needs them.
5. **Review** actual output at final size and playback speed; record evidence for the relevant timeline and placement variants.
6. **Revise** narrowly; log design-system versions and recipe upgrades. Episodes pinned to older versions remain reproducible.
7. **Promote** truly generalizable discoveries to global Motion only after cross-project checks; never import a client's aesthetic as global defaults.

## Project identity and templates

`Project.json` is the single source for design tokens and constraints. `Template-Library.json` stores **recipes** referencing tokens and expertise IDs: caption, explainer card, brand icon, freeze-frame accent, original motion B-roll, character insert, hook and outro. A recipe is not a pre-rendered asset and should not pretend its effect has already been implemented. Reusable project-specific assets live in a project asset manifest with provenance and usage rights. Episode JSON refers to recipe IDs and versions, and supplies content/timing parameters. Different videos share style but do not have identical compositions by default.

## Override and precedence

- Explicit and authorized user requests override preferences, but not platform capability, ownership or asset rights.
- Project-specific choices may customize tokens, recipe parameters, visual rhythm and permitted creative variations, not redefine shared coordinate, audio, render or tracking contracts.
- Episode overrides must have a `reason`, `scope`, and `review_status`. Permanent recurring choices are reviewed for promotion to the project design system.
- Sensitive protected content (subtitles, prices, product names, CTA, identifying text) must be readable. Decorative shapes and noncritical card regions may intentionally overflow. UI/safe-zone profiles depend on actual platform, placement and interface state; provisional values are not certified requirements.
- If a requested effect cannot be rendered by available tools, choose a feasible visual alternative or explicitly mark the shot as unimplemented.

## Change impact

| Changed input | Recheck |
| --- | --- |
| Project palette/look | affected visual references, materials, grade and final color output |
| Project font or caption recipe | text metrics, optical alignment, layout collisions, mobile readability |
| Platform profile | protected regions, crop, visibility, all affected output variants |
| Narration/speech timing | word-level captions, character lip sync, semantic cues, music/SFX timing |
| Footage framing | tracking, masks, subject crop, anchored icons and callouts |
| Scene/camera timing | transforms, transition continuity, dependent audio, frame cache |
| Component recipe version | instances using that recipe, styleframe and regression comparisons |
| Asset/license | all dependent shots, provenance and delivery permission |

Affected evidence becomes `stale` until rerendered and reviewed. Passing a JSON schema or programmatic test is evidence of structure, not the quality of the final video.

## Multi-project isolation

A project cannot silently read another project's mutable design decisions or assets. Share **capabilities** through Motion; share a **project component** across clients only with explicit authority, license and migration path. Project IDs and episode IDs are stable. Build signatures include the project ID, approved design-system version, recipe revisions, source hashes, renderer versions and output variants.
