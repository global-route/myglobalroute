# Sprint & Delivery Documentation

Reconciled 2026-10-11. This index is the current entry point; old August sprint plans remain historical artifacts and must not override current status.

## Current sources of truth

1. ACTIVE_SPRINT.md — current sprint/task board and blockers.
2. ../project/PHASE_STATUS.md — phase status and exit gates.
3. ../project/EXECUTION_STATUS.md — verified baseline and P0 blockers.
4. P0_DELIVERY_PLAN.md — P0 sprint definitions and acceptance criteria.
5. MASTER_DELIVERY_PLAN.md — lifecycle plan through Phase 6.
6. P1_UI_CLASSIC_REDESIGN_TASKS.md — UI redesign task status and exit gates.
8. P1_SEO_GROWTH_ADSENSE_TASKS.md — SEO, organic acquisition, Search Console, AdSense readiness and gated future AdMob work.
7. HANDOVER.md — ordered continuation.

## Active sprint

P0-S5 — Deployment Verification & Phase 0 Exit remains externally blocked. Source-tree CI is historical; production origin and deployed content are not verified. Phase 0 is not complete.

P1-SEO-GROWTH — Organic acquisition & AdSense readiness is now explicitly tracked in [the SEO/AdSense task register](P1_SEO_GROWTH_ADSENSE_TASKS.md). Technical/editorial SEO, Search Console, privacy/provider review, AdSense approval and placements remain open; existing consent/monetization code is foundation only. AdMob is deferred unless a native mobile app is scoped. Production NO-GO remains unchanged.

P1-UI — Classic UI redesign is an active cross-cutting workstream. Use [P1 UI task register](P1_UI_CLASSIC_REDESIGN_TASKS.md) and [design roadmap](../product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md). Blog source fixes are implemented but **not tested**; no build/CI/browser checks have been run under the current user instruction. Production NO-GO and migration-data trust gates remain unchanged.

## Next independently executable sprint

NEXT_SPRINT_P1_DATA_REFRESH.md — review all 26 official country anchors. Do not advance source dates or dataset.asOf until review is complete and auditable.

## Concurrent workstreams

- P1-REQ: exact-source conditional requirements with date, family-size, region, costs and exception handling.
- P1-ROUTE: recommendation-safety tests for missing inputs, stale/mismatched evidence, alternatives and no-match.
- P1-REV: readiness only; no provider activation, paid placement or lead collection before production/privacy/approval gates pass.

## Historical artifacts

CURRENT_SPRINT_STATUS.md, SPRINT_STRUCTURE.md, SPRINT_TRANSITION_SUMMARY.md, SPRINT3_*, SPRINT4_*, and dated September sprint summaries are historical. Their dates, checkboxes, percentages and old live-site claims are not current evidence. The old Austria and NZ “next task” files are superseded because those routes are already promoted; check current validation before making changes.
