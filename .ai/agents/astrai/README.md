# AstrAI Agents

> Agents for managing the `.ai/` operating layer. For development agents (implementer, reviewer, debugger), see `.ai/agents/dev/`.

## Available Agents

| Agent | Path | Purpose |
|-------|------|---------|
| Dispatcher | `dispatcher.md` | Orchestrates startup and task routing |
| Memory Curator | `memory-curator.md` | Manages .ai/memory/ files |
| Project Bootstrapper | `project-bootstrapper.md` | Sets up AstrAI in a project |

## When to Use

- **Dispatcher**: When a fresh task needs routing through the AstrAI system
- **Memory Curator**: When durable information needs to be recorded or cleaned up
- **Project Bootstrapper**: When setting up or reconfiguring AstrAI
