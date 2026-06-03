# Source of Truth

## Rule: `.ai/` Is the Source of Truth

All AI operating instructions for this project live under `.ai/`. No other file, directory, or tool-specific configuration should be treated as the primary source of agent instructions.

## Rule: AGENTS.md Is the Root Dispatcher

Every AI agent entering this project **must** start by reading `AGENTS.md`. It is the root dispatcher and describes the full startup sequence.

## Rule: Dispatchers Before Details

Agents must first read dispatcher files before loading specific files:
1. `AGENTS.md` → root
2. `.ai/rules/rules.md` → rules dispatcher
3. `.ai/protocols/protocols.md` → protocol dispatcher

Only after reading the relevant dispatcher should an agent load specific rule, skill, protocol, or agent files.

## Rule: Manifest Is the Index

`.ai/manifest.json` is the discoverable index of all `.ai/` contents. Agents must load it immediately after `AGENTS.md`. The manifest provides exact file paths for everything.

## Rule: No Hidden Configs

Do not rely on or create hidden configuration files outside `.ai/` for AI operating instructions. Tool-specific harness configs are adapter guidance only — not source of truth.
