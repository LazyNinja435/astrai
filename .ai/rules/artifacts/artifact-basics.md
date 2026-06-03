# Artifact Basics

## Rule: Use Templates

When generating structured output (plans, reviews, reports, handoffs), use the corresponding template from `.ai/templates/`. Templates standardize format and ensure completeness.

## Rule: Artifacts Must Be Complete

Generated artifacts must be self-contained, complete (no TODOs or placeholders), and factually accurate (no hallucinated APIs or data).

## Rule: Artifacts Go in Designated Locations

Generated files go in locations specified by their templates or protocols. Never in the repository root unless explicitly specified.

## Rule: No Binary Artifacts

Generated artifacts must be text-based (Markdown, JSON, plain text). Do not generate binary formats unless explicitly requested.

## Rule: Check for Existing Artifacts

Before generating, check if an equivalent already exists. Update existing files rather than creating duplicates.
