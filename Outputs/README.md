# Outputs

Store generated production media separately from the engine and editable projects:

`Outputs/<project-id>/<episode-id>/<variant-id>/`

Use subfolders such as `frames/`, `audio/`, `previews/`, `covers/` and `final/` when needed. Keep a build manifest with project/episode IDs, design and recipe versions, source hashes, renderer/settings, exact frame rate and review scope. The episode's rendered-file references identify these outputs.

Generated media is ignored by default to keep the shared repository small. Publish a deliberate public sample or release asset only after checking its contents and permissions. A file's presence does not imply that playback, audio or placement review has passed.
