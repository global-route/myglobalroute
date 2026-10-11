# Next Sprint Handover — P1-S1 Country Source Refresh & Dataset Reconciliation

**Prepared:** 2026-10-11  
**Repository:** `global-route/myglobalroute`  
**Branch:** `main`  
**Starting source head:** `e7a2e483ed5284944c6f95808ea7c242128b0cd6`  
**Release status:** **NO-GO**  
**Sprint status:** **OPEN — not completed**

## 1. Handover verdict

The repository's task, sprint and phase documentation does **not** mark the overall work complete. It correctly records some discrete engineering tasks as complete or source-tree verified, while preserving critical external and data-trust gates as open. Do not mark the active sprint, Phase 0, or Phase 1 complete.

Latest Actions observed during this handover: Lint and Quality Gate succeeded on commit `e7a2e483`. The canonical sprint tracker records a prior same-SHA checkpoint for Quality Gate, Lint and Browser Smoke; verify the latest three workflows against the current exact `main` SHA after any code changes. Passing CI is not proof of production deployment or authoritative data review.

## 2. Status reconciliation

| Scope | Recorded status | Handover decision |
|---|---|---|
| P0-S1 — exact-subroute closure | Complete with explicit blocked candidates | Keep complete only for the scoped implementation; AU subclass 189 and Italy Flussi remain research-required where evidence gaps persist |
| P0-S2 — pathway evidence audit | Audit complete; source work ongoing | Do not mark evidence/promotion work complete |
| P0-S3 — data/recommendation quality gate | Source-tree verified | Verified only at the recorded tested SHA |
| P0-S4 — browser/source-tree gate | Source-tree verified | Does not establish live production behavior |
| P0-S5 — deployment verification / Phase 0 exit | Active / externally blocked | OPEN |
| P1-S1 — country source refresh | Manifest complete; outcomes recorded for 26/26, 25 official alternatives inspected; human sign-off and Russia jurisdiction confirmation open | IN PROGRESS |
| P1-REQ — structured requirements | Open | 12 declarations across 5 pathways; 51/56 pathways remain without structured declarations |
| P1-ROUTE — recommendation quality | Open | Add evidence mismatch/staleness, missing-input, boundary, alternative and no-match tests |
| P1-SEO | Open | Origin-dependent canonical URLs wait for confirmed production origin |
| P1-PRIV — privacy/compliance/accessibility | Open | Live consent/security, retention, legal review and browser accessibility/performance remain |
| P1-REV — monetization | Foundations only; not live | Keep activation and lead delivery gated |
| Phase 0 | Foundations complete; exit blocked | NOT COMPLETE |
| Phase 1 | Partially complete; ongoing | NOT COMPLETE |
| Phase 2 | Core exists; decision quality incomplete | NOT COMPLETE |
| Phase 3 | Partially delivered; cleanup open | NOT COMPLETE |
| Phase 4 | Foundations only | NOT COMPLETE |
| Phase 5 | Preparation only; not live | NOT COMPLETE |
| Phase 6 | Deferred / not started as a scale phase | Not started |

## 3. Next sprint objective

Complete P1-S1 only when the 26 country-level official source anchors have individually documented review outcomes and the dataset metadata is reconciled safely. The current `dataset.asOf=2026-09-05` must remain unchanged until the review criteria pass.

### Ordered work

1. **P1-S1.1 — generate manifest:** derive all country IDs/names/registered URLs from the current `src/data/countries.json`; generate a machine-readable manifest; assert 26 unique IDs and no missing URLs; capture baseline validation/freshness output.
2. **P1-S1.2 — review anchors:** inspect each registered official authority/source; record checked date, redirect/access status, relevant official page, material changes, affected evidence IDs, reviewer and next review date. Preserve blockers where a source cannot be verified.
3. **P1-S1.3 — reconcile metadata:** only after all 26 reviews have auditable outcomes, decide whether `dataset.asOf`, `retrievedAt` or `reviewAfter` can change. Do not infer pathway evidence freshness from a country landing-page check. Keep unsupported aggregate costs, rates and timelines null.
4. **P1-S1.4 — verify and update docs:** run data validation, evidence freshness, tests, build/generated-output verification, lint and browser smoke. Record exact tested SHA and workflow URLs in the active sprint, execution status, phase status and release record.

Detailed source-by-source checklist: [NEXT_SPRINT_P1_DATA_REFRESH.md](NEXT_SPRINT_P1_DATA_REFRESH.md).

## 4. Parallel P0-S5 external release gate

Continue in parallel when project-owner/provider evidence is available:

- Confirm authoritative hosting project and production hostname from provider account/project settings.
- Reconcile Worker `myglobalroute`, Cloudflare build label `globalroute`, and Netlify configuration without guessing or changing DNS/provider settings by inference.
- Verify deployed SHA and compare live assets and country/pathway registries with the intended source.
- Run `npm run deploy:verify` and representative direct-route/calculator/recommendation smoke tests against the confirmed origin.
- Inspect live CSP/security headers and obtain owner-level branch protection/ruleset and required-check evidence.

Do not claim Phase 0 exit until every gate has evidence.

## 5. Exit criteria and completion rules

- [ ] Machine-readable 26-country manifest committed and validated.
- [ ] 26/26 country anchors have auditable outcomes; unresolved sources have explicit blockers.
- [ ] Metadata dates changed only when supported by the review evidence.
- [ ] No unsupported country-level costs, approval rates or timelines introduced.
- [ ] Data validation, freshness checks, tests, build verification, lint and browser smoke pass on the same exact SHA, or unavailable checks are explicitly marked **Not Tested**.
- [ ] Active sprint, task checklist, phase tracker and execution status agree on completed/open items.
- [ ] Next handover names the remaining tasks and links to evidence.

A checklist being prepared is not completion. A current review-date inventory is not proof that sources were reopened. A passing CI run is not proof of production readiness.

## 6. Immediate next action

Start with P1-S1.1: inspect the current registry, generate the manifest and baseline output, then review sources in registry order. Keep P0-S5 open and continue independent P1-REQ/P1-ROUTE work without promoting unsupported pathways. Do not close the sprint or phase until exit criteria are demonstrated.


## Execution addendum — 2026-10-11
- P1-S1.1: manifest generated from the live registry; generator and tests added.
- P1-S1.2: 26/26 outcomes recorded. 25 relevant official pages/alternatives inspected; Luxembourg official alternatives are recorded; Russia remains blocked pending mission-jurisdiction confirmation. Human sign-off required.
- Austria and Czechia anchors updated to official government entry points. No dataset-wide freshness date advanced and no unsupported aggregates added.
- Route-quality tests preserve unknown requirements and reject missing country references/research-required recommendations.
- GitHub reports `main` unprotected and no rulesets. Production origin, deployed SHA and live security headers need owner/provider evidence.
- Acceptance pending all three workflows passing on the same final SHA. Release remains **NO-GO**.


## Structured requirements addendum — 2026-10-11
- Added three evidence-backed declarations: UK Student admission offer, New Zealand Fee Paying Student annual living-funds threshold with scoped caveats, and Ireland Critical Skills job offer.
- Total: 12 declarations across 5/56 pathways; 51 remain unstructured. Missing requirements remain unknown. P1-REQ is still open.


## Source-review refinement — 2026-10-11
- Luxembourg: official third-country immigration pages are recorded as alternatives; consider replacing the generic redirecting country anchor after human sign-off.
- Russia: official Russian MFA consular guidance found is Denmark-mission-specific. Verify the correct mission/source for the target applicant jurisdiction; keep this blocker open.
- 25/26 entries have relevant official pages or alternatives inspected; all machine-assisted observations still require human sign-off.
