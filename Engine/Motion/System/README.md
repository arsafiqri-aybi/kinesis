# Motion System

Start with [System](System.md) for responsibility boundaries and [Project Architecture](Project-Architecture.md) for inheritance across the motor, project and episode.

| Resource | Use |
| --- | --- |
| [Expertise Index](Expertise-Index.md) | Locate an owner |
| [Integration](Integration.json) | Resolve participating rule sources |
| [Integrated Graph](Graph-Integrated.json) | Traverse expertise, contracts and common logic |
| [Project Graph](Project-Architecture-Graph.json) | Connect project and episode responsibilities to the base graph |
| [Contracts](Contracts.md) | Resolve IDs, time/coordinate conventions, payloads and invalidation |
| [Shared Logic](Shared.md) | Reuse common reasoning mechanisms |
| [Playbooks](Playbooks.md) | Select practical production paths |
| [Quality Intelligence](Quality-Intelligence.md) | Review intended experience and unexpected defects |
| [Project Contract](Project-Contract.schema.json) | Validate project data shape |
| [Project Toolkit](Project-Toolkit.py) | Bootstrap projects and check structural relationships |

Run `python kinesis.py check-graph` from the repository root. Follow [validation guidance](../../../docs/validation.md) for project and production checks.
