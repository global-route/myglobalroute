# Sprint & Delivery Documentation

Reconciled 2026-10-18 (session 2).

## Current sources of truth

1. `ACTIVE_SPRINT.md` — current task board, blockers, and next actions
2. `../project/PHASE_STATUS.md` — phase status and exit gates
3. `MASTER_DELIVERY_PLAN.md` — lifecycle plan through Phase 6
4. `P0_DELIVERY_PLAN.md` — P0 sprint definitions and acceptance criteria

## Active sprint status

All code-addressable tasks are complete. The only remaining open items are owner-side actions:

- **P0-S5** — DNS/hostname resolution → production smoke → Phase 0 close (owner action, hard blocker)
- **P1-S1.2** — Human sign-off on 26 country source anchors; Russia jurisdiction confirmation (owner action)
- **P1-S1.3** — Update `dataset.asOf` after sign-off (1-line code change, gated on P1-S1.2)
- **UI-3** — ARIA audit, colour contrast, keyboard navigation (requires live browser)
- **P5** — AdSense account, publisher ID, live ad activation (owner action, gated on P0-S5)

## Archived sprints

`NEXT_SPRINT_P1_DATA_REFRESH.md` — archived 2026-10-18. P1-S1 manifest complete; human sign-off tracked in ACTIVE_SPRINT.

Historical artifacts (CURRENT_SPRINT_STATUS.md, SPRINT_STRUCTURE.md, SPRINT3_*, SPRINT4_*, dated September summaries) are in `docs/archive/`. Their dates, checkboxes and old live-site claims are not current evidence.
