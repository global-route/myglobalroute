# Documentation Map

This folder contains the project's public planning, implementation, product, data, and reference documentation.

## Folder responsibilities

| Relative path | Purpose | Source-of-truth rule |
|---|---|---|
| `project/` | Project assessment, phase status, execution roadmap, task specifications and release records | Phase and roadmap state should be reconciled with the active sprint |
| `sprints/` | Current sprint, delivery plans, task checklists, handover and owner actions | `ACTIVE_SPRINT.md` is the current task board; dated reports are historical |
| `product/` | Product experience specifications and UX/UI audit documents | Approved specs should feed sprint tasks; drafts are not completed work |
| `reference/` | Architecture, stack, deployment, design, evidence, SEO and privacy/security standards | Current technical truth must match code/configuration |
| `data/` | Source-review manifests and auditable dataset review records | Do not mark sources signed off without human review |
| `monetization/` | Advertising, affiliate, partner revenue, measurement and monetization governance | Registry and consent/privacy constraints override older strategy documents |
| `guides/` | Setup, contribution, content and implementation how-to guides | Reconcile instructions with current package scripts and runtime |
| `phase-0/`, `phase-1/`, etc. | Phase-specific research and implementation artifacts | Keep active status in the phase tracker; preserve dated evidence here when needed |
| `phase-3/` | Research/blog build and editorial documentation | Use the canonical content system and current data contracts |
| `phase-4/` | Privacy/data inventory and related trust implementation notes | Inventory is not legal sign-off |
| `archive/` | Superseded plans, dated handovers, historical summaries and checkpoints | Not a current source of truth |

## Where to start

1. [Documentation Index](INDEX.md) — complete navigation.
2. [Active Sprint](sprints/ACTIVE_SPRINT.md) — current tasks and blockers.
3. [Phase Status](project/PHASE_STATUS.md) — phase state and exit gates.
4. [Execution Roadmap](project/EXECUTION_ROADMAP.md) — sequence and dependencies.
5. [Owner Actions](sprints/OWNER_ACTIONS.md) — decisions or external work that code cannot complete.
6. [Project UI/UX Roadmap](product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md) — UI corrections and Figma workflow.

## File placement rules

- Keep only the user-facing repository README, changelog and build/configuration essentials at repository root.
- Put project planning and current status under `project/` and `sprints/`.
- Put product/UI specifications under `product/`.
- Put revenue strategy under `monetization/`, not in root notes or unrelated sprint folders.
- Keep one canonical blueprint. The historical project blueprint is under `reference/`; the design and implementation blueprints remain separate, scoped references.
- Move completed, superseded or date-specific execution notes to `archive/` and link them where relevant.
- Avoid copies of the same checklist. Keep `sprints/OWNER_ACTIONS.md` as the canonical owner-action checklist.
- Do not put credentials, personal data, confidential financial models, private team details or private contracts in this public repository.

## Local-only internal files

Internal-only documents should be maintained outside the public Git tree or in an ignored local directory such as `docs/internal/`, `docs/private/` or `internal/`. Ignore rules are in the root `.gitignore`.

**Git behavior:** `.gitignore` prevents untracked matching files from being added; it does not conceal files already committed. When moving a document to local-only storage, remove it from the repository and retain a private local copy separately. If sensitive information has already been committed, consider history cleanup and rotate any exposed credentials.
