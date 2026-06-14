# Plans

Plan documents track multi-step work through a lifecycle of three folders:

| Folder | Meaning | When a plan lives here |
|--------|---------|------------------------|
| `new/` | Created, not yet started | A plan has been written but no step has begun |
| `wip/` | Work in progress | Implementation has started; the plan is being executed and updated |
| `completed/` | Finished | All steps are done and verified |

## Lifecycle

1. **Create** a new plan in `.ai/plans/new/` from `.ai/templates/plan.template.md`.
2. **Start** work → move the file to `.ai/plans/wip/`.
3. **Update** the plan's Progress Tracking section after every completed step.
4. **Finish** → once all steps are complete and verified, move the file to `.ai/plans/completed/`.

## Naming

Use `YYYY-MM-DD-short-task-title.md` (e.g. `2026-06-04-add-manifest-validation.md`).
