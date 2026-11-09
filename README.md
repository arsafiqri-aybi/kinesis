# Kinesis

**A reference-led production system for social video.**

Kinesis connects creative decisions, Motion expertise and reusable project design systems. Plan an edit from footage or a script, build original 2D, 2.5D or 3D scenes through code, and keep each episode connected to its references, timing, assets and review evidence.

The repository provides operational knowledge, dependency graphs, project templates and a Python toolkit. Rendering, media editing and optional narration use the tools available in the production environment. The toolkit creates and validates project structures; it is not a one-command video generator.

## Start

Use Python 3.10 or later. Run commands from the repository root.

```bash
python kinesis.py check-graph
python kinesis.py init my-series --name 'My Series'
python kinesis.py new-episode Projects/my-series ep-001 --title 'First episode'
python kinesis.py validate Projects/my-series
```

The new project starts as a draft. Fill in its purpose, visual references and design tokens; choose or implement the recipes needed by its episodes. Record rendered outputs and actual review evidence before marking an episode delivered.

For complete project JSON-schema checks, optionally install the validator:

```bash
python -m pip install -r requirements.txt
```

Without it, the toolkit still performs its built-in structural and relationship checks.

## Repository map

| Location | Purpose |
| --- | --- |
| [Engine/Kinesis](Engine/Kinesis/Motor-System.md) | Portable decision, routing and revision motor |
| [Engine/Motion/Knowledge](Engine/Motion/Knowledge/README.md) | Visual construction, motion, editing, character, voice and production expertise |
| [Engine/Motion/System](Engine/Motion/System/README.md) | Shared contracts, graphs, project architecture and quality rules |
| [Engine/Templates/Project](Engine/Templates/Project/README.md) | Clean starting point for independent projects |
| [Projects](Projects/README.md) | Project identity, episode content and editable production sources |
| [Outputs](Outputs/README.md) | Rendered frames, audio, previews, covers and final video |
| [docs](docs/architecture.md) | Architecture, workflow, validation and contribution guides |

Engine knowledge is shared. Project identity belongs to the project. Episode decisions belong to the episode. Generated media belongs in Outputs, alongside a manifest that identifies its source project and build.

## What Motion covers

Fourteen editorial responsibilities connect to visual, character, narration and production expertise: story/editing; captions; kinetic typography; original B-roll; cards/icons/UI; character animation; subject effects/tracking; camera/transitions; color; sound/voice/music; social-scale VFX; adaptive composition; openings/endings/covers; and delivery/QA.

The knowledge registry contains 87 expertise owners, 12 common reasoning mechanisms and 10 production contracts. Its base graph distinguishes 200 conditional handoffs from routing and shared-logic links. A separate project overlay connects the motor, project identity, episodes, rendering and evidence without copying the expertise registry.

See [the workflow](docs/workflow.md), [the expertise index](Engine/Motion/System/Expertise-Index.md), and [the integration playbooks](Engine/Motion/System/Playbooks.md).

## Production principles

- Establish a visual target, reconstruct its important properties through editable code, then develop its changes over time.
- Use effects when they serve meaning. A clean cut, still frame or quiet hold is a valid decision.
- Share capabilities and contracts; keep each project's identity and assets independent.
- Inspect actual output. A valid configuration or successful encode cannot prove visual quality, natural narration or smooth character performance.

## Requirements and boundaries

The project toolkit uses Python's standard library, with optional JSON-schema validation. Actual production may require a renderer, FFmpeg, fonts, editing tools or other dependencies selected for the shot. Optional OpenAI narration needs separately configured API access and billing; credentials and private assets do not belong in this repository.

Recipe templates are planning patterns until their implementations and outputs have been reviewed. Platform/UI profiles require evidence for the actual placement. Kinesis supplies no hosted renderer, GPU, paid API entitlement or autonomous publishing service.

Read [contribution guidance](CONTRIBUTING.md) before changing shared contracts or adding expertise.
