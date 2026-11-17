# Contributing to Kinesis

Contributions are welcome. Changes should preserve deterministic frame evaluation, a stable composition contract, and testable renderer behavior.

1. Fork the repository and create a focused branch.
2. Install Node.js 22+ and FFmpeg.
3. Run `npm ci` and `npm test`.
4. For browser-related changes, install Playwright Chromium and run `npm run test:browser`.
5. Add or update tests for changes to timeline semantics, rendering, encoding, or CLI behavior.
6. Open a pull request describing the behavior changed and the checks performed.

Keep generated media and dependencies out of commits. Public examples should contain original or appropriately licensed assets. Do not commit secrets or private client material.

By submitting a contribution, you agree it can be distributed under the repository's MIT License and confirm you hold the rights necessary to submit it.

