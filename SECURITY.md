# Security Policy

## Report a vulnerability

Report security issues privately through [GitHub Security Advisories](https://github.com/arsafiqri-aybi/kinesis/security/advisories/new) when the feature is enabled. Avoid posting exploitable details in a public issue.

## Execution model

Kinesis compiles and executes project-authored JavaScript. The engine **does not sandbox untrusted code**.

If you render projects from other users, use container or VM isolation, least-privilege filesystem access, network restrictions, timeouts, and resource limits. Blocking browser HTTP(S) requests is not a substitute for operating-system isolation.

Do not commit credentials or private media. Keep dependencies and external FFmpeg/Chromium installations updated.

