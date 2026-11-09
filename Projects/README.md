# Projects

Keep persistent creative projects here: `Projects/<project-id>/`.

- `Project.json`: audience, purpose, design tokens, references, approved recipe choices, assets and placement profiles.
- `Project-Motor.md`: project-local routing and consistency policy.
- `Template-Library.json`: versioned recipe parameters and implementation status.
- `Episodes/<episode-id>/Episode.json`: episode content, exact timebase, recipe instances, exceptions, output references and review evidence.
- `Source/`: editable project-specific scene, illustration, compositing or audio code.

Create a project with `python kinesis.py init my-series --name 'My Series'`. The toolkit starts it as a draft and refuses to overwrite an existing project. Shared expertise stays in Engine; rendered media goes in `Outputs/<project-id>/<episode-id>/`.

Do not commit client footage, private data, credentials or media without permission. Keep source paths in asset manifests and configure local ignore rules for private material. Project manifests and recipes should reference stable asset IDs and revisions rather than embed media bytes.
