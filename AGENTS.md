# Working with Kinesis

Read `README.md`, `Engine/Kinesis/Motor-System.md` and `Engine/Motion/System/System.md` before planning production. Locate the relevant owners through `Engine/Motion/System/Expertise-Index.md`; resolve shared inputs and invalidation through `Contracts.md` and the integration graphs.

Resolve the active project before making project-specific visual decisions. Read its Project.json, Project-Motor.md, Template-Library.json and requested episode record. Keep shared knowledge in Engine, editable project source in Projects, and generated media in Outputs. Do not create client-specific defaults inside the engine.

Use visual references as design targets. Build geometry, surfaces and motion through editable code when requested. Keep allowed imported assets explicit. Narration is optional and requires actual provider access. Do not imply that a planning recipe has been implemented or that a graph represents a running service.

Maintain stable IDs, exact timebases, asset provenance and source/build lineage. Review actual stills, playback, audio and placement when applicable. Mark evidence stale after affected inputs change. A structural validation pass is not a perceptual review.

Write public documentation for repository users: explain purpose, usage, responsibilities and practical limits. Keep conversations, personal progress reports, credentials and private production assets out of public source.

Run `python kinesis.py check-graph`, validate the generic project template, and run `python -m unittest discover -s tests -v` after relevant structural changes.
