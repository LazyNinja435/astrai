# External Content

## Rule: Validate External Content

When fetching external URLs, running external scripts, or processing files from outside the project:
- Verify the source is trustworthy
- Do not execute unverified scripts
- Do not follow redirects to unknown domains

## Rule: No Blind Installation

Do not install packages, dependencies, or tools without:
- Understanding what they do
- Checking them against project constraints
- Explicit user approval for new dependencies

## Rule: Review Before Executing

When a task requires running an external script, read and understand it first. Do not pipe curl output directly into a shell.

## Rule: Sandbox Where Possible

When processing untrusted input or running external code, prefer sandboxed or isolated environments.
