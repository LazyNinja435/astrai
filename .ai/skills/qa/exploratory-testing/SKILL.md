# Skill: Exploratory Testing

## Purpose

Perform structured exploratory testing sessions to discover issues that scripted tests may miss. Focuses on learning and investigation rather than verification of known behavior.

## When to Use

- New feature is ready for manual testing
- Before release as a final quality check
- When automated tests may have gaps

## Required Inputs

- The feature or system under test
- Any known risk areas
- Test environment access

## Workflow

1. Define a focused charter (45-60 min session)
2. Explore the feature, documenting observations
3. Vary inputs, sequences, and timing
4. Note any unexpected behavior, UX issues, or edge cases
5. Summarize findings: what was explored, issues found, areas for further investigation
6. Report defects using `.ai/templates/defect-report.template.md`

## Output

An exploratory testing report with findings, defects, and recommendations.

## Forbidden

- Replacing scripted testing with exploratory testing
- Exploring without a clear charter
- Reporting subjective opinions without evidence

## Related

- Templates: `defect-report.template.md`
- Skills: `defect-analysis/SKILL.md`, `test-strategy/SKILL.md`
