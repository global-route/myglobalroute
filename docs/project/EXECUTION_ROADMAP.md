# Global Route — Master Execution Roadmap

**Version:** 2.4.0  
**Status:** Active execution  
**Reconciled:** October 11, 2026

> The original Global Route vision is preserved. Execution priority is corrected from the repository's actual state: production integrity and trustworthy migration intelligence precede content and growth scaling.

## Product north star

**Given a user's profile, goal and budget, identify realistic global mobility routes, explain cost and timing, show the evidence and risks, and give the user a useful next action.**

The blog remains an acquisition/education layer. Country + pathway + evidence + cost + recommendation is the product core.

## Phase 0 — Production Integrity (P0)

### Delivered foundations

- [x] Correct Eleventy runtime data path.
- [x] Restore root homepage/public passthrough generation.
- [x] Remove duplicate calculator business logic.
- [x] Normalize calculator currency conversion and timeline range parsing.
- [x] Harden data-controlled DOM output.
- [x] Establish canonical search module with Fuse.js-compatible implementation and fallback.
- [x] Remove destructive gzip build behavior.
- [x] Remove global SPA rewrite from the static multi-page deployment.
- [x] Repair package metadata and remove unverified production-origin metadata.
- [x] Remove bundled Netlify CLI from the audited application dependency graph.
- [x] Add country/pathway/evidence data validation.
- [x] Add unit/data/build verification commands and generated-output integrity checks.
- [x] Add generated SEO/accessibility smoke gate to the verification pipeline.
- [x] Align Netlify build/deploy-preview/branch-deploy runtime configuration to Node 24.

### Remaining delivery sprints

The remaining P0 work is decomposed in `docs/sprints/P0_DELIVERY_PLAN.md` and tracked in `docs/sprints/ACTIVE_SPRINT.md`.

- [x] **P0-S1 — Exact Pathway Closure:** 4 routes promoted (NZ SMC x3, Austria Other Key Workers); Italy Flussi and AU-189 explicitly blocked with documented evidence gaps.
- [x] **P0-S2 — Remaining-Country Evidence Closure audit:** current registry reconciled to 56 pathways (52 publishable / 4 research_required); each remaining pathway has explicit evidence gaps. Ongoing source maintenance continues under Phase 1.
- [x] **P0-S3 — Data / Recommendation Quality Gate:** same-head checks passed at 1284684c18a7fa311cd62c52875b38d62a354a0b (17 suites / 113 tests; build and SEO/A11y checks included).
- [ ] **P0-S4 — Browser / Release Gate:** browser/E2E, deep links, calculator/recommendation flows and generated SEO/accessibility verification.
- [ ] **P0-S5 — Deployment Verification & P0 Exit (ACTIVE / BLOCKED):** authoritative host/domain, deployed SHA, live CSP/security headers, production smoke and owner-level branch protection remain unverified.

**Exit gate:** reproducible build, validated data shape, passing tests, working deep links, verified production origin, production smoke, appropriate security/SEO configuration and no known critical runtime defects.

## Phase 1 — Migration Intelligence Foundation (P0)

### Required data model

`country → pathway → metric → value → source → effective date → verified date → methodology → confidence → review date`

- [x] Publish `reference/DATA_TRUST_STANDARD.md`.
- [x] Establish field-level provenance records with source, claim, jurisdiction, dates, methodology, confidence and review date.
- [x] Separate publishability from evidence coverage and expose evidence trails in pathway pages.
- [x] Distinguish required evidence from unsupported estimates; approval rates/costs/timelines remain null where not evidenced.
- [x] Establish material-field requirements by pathway type.
- [x] Add 26-country evidence-gated registry without fabricating missing data.
- [x] Maintain 56 canonical pathway records across 26 countries.
- [x] Add dated field-level primary-source evidence across registry and addenda.
- [x] Establish exact legal subroute candidate architecture outside the canonical 52.
- [ ] Complete material-field evidence audit for remaining pathways.
- [ ] Review generic pathways that represent multiple legal sub-routes.
- [ ] Expand evidence batches until the highest-value pathways can safely become publishable.
- [ ] Establish production freshness/review automation beyond local validation.

**Current registry checkpoint (2026-10-11 CI-verified):** 26 countries / 56 canonical pathways; 52 publishable and 4 research_required. Four exact subroute records are marked promoted and align to canonical pathway IDs; they are not additional pathways. The two remaining explicit exact-subroute candidates (Australia subclass 189 and Italy Flussi) remain research_required outside the canonical pathway registry.

**Critical rule:** never fabricate missing data to reach the 26-country target.

## Phase 2 — Canonical Product Core (P0)

- [x] Introduce pathway-level records: 52 pathways across 26 countries.
- [x] Build country explorer around pathway entities and evidence-aware statuses.
- [x] Build programmatic country/pathway pages with eligibility/evidence/source presentation.
- [x] Make the calculator consume the canonical evidence-gated data model.
- [ ] Add country comparison.
- [x] Build `Find My Route`: profile → eligibility → ranked routes → evidence → next action.
- [x] Rank by eligibility/fit first and block unverified routes from viable recommendations.
- [x] Exclude zero-fit publishable routes from ranked recommendations.
- [ ] Expand route explanations with pathway-specific evidence, risks and next-action guidance.

## Phase 3 — Content & Acquisition (P1)

- [ ] Fact-audit existing posts against the data trust standard.
- [ ] Finish high-intent cornerstone content only after claims are verified.
- [ ] Complete legacy blog/category link cleanup and editorial-page SEO/a11y audit.
- [x] Add generated `/blog/` research index.
- [ ] Add category archives, related-content links and search UX polish.
- [ ] Implement canonical metadata, Open Graph, sitemap and robots only after the authoritative production origin is verified.
- [x] Establish programmatic country/pathway SEO foundations and generated-page metadata checks.
- [ ] Add structured data and production SEO validation.
- [ ] Measure search → route → calculator conversion.

## Phase 4 — Trust, Compliance & Accessibility (P1)

- [ ] Privacy and analytics consent model where required.
- [x] Terms and migration-information disclaimer architecture.
- [x] Source attribution for factual pathway claims.
- [ ] Full browser accessibility audit and keyboard navigation.
- [x] Security-header/CSP baseline.
- [x] Dependency/supply-chain audit defined in CI.
- [x] Dependency audit passed in CI with 0 high-severity-or-higher vulnerabilities after removing bundled Netlify CLI.

## Phase 5 — Growth (P1)

- [ ] Newsletter and return-user loop.
- [ ] Partnerships.
- [ ] Transparent affiliate infrastructure.
- [ ] Social distribution.
- [ ] Conservative/base/aggressive monetization model using measured assumptions.

## Phase 6 — Scale (P2)

- [ ] Personalization and saved routes.
- [ ] Policy-change alerts.
- [ ] Premium migration intelligence.
- [ ] B2B research/data/API products.

## Current P0 critical path

`P0-S1 exact routes → P0-S2 evidence closure → P0-S3 data/recommendation verification → P0-S4 browser/release verification → P0-S5 deployment verification → P0 exit`

## Release gate matrix

| Gate | State | Rule |
|---|---|---|
| 26-country registry | Complete | Evidence-gated; no fabricated claims |
| 56 pathways | Complete | 52 publishable; 4 research-required |
| Field-level evidence | Active | Expanding through exact-route batches |
| Exact subroute architecture | Complete | Candidates remain outside canonical 52 until promotion |
| Route engine | Complete | Hard publishability/evidence gate |
| Calculator safety | Complete | Unverified costs not actionable |
| Country/pathway pages | Complete | Source/evidence trails generated |
| Generated build verification | Passed at a53940f | Build integrity and generated detail/deep-link checks passed in Quality Gate |
| Core SEO/A11y smoke | Passed at a53940f | 168 generated HTML files checked in Quality Gate |
| CI quality gate | Passed at a53940f | 17 suites / 110 tests; current run links are recorded in release verification |
| Browser/E2E | Open | P0-S4 |
| Netlify origin | Open | Must identify actual deployment; never guess |
| Production smoke | Open | P0-S5 and blocked by origin verification |
| Canonical/sitemap restoration | Open | Blocked by authoritative origin |

## Dependency order

`Integrity → Evidence → Pathways → Recommendation → Verification → Deployment → SEO → Growth → Scale`

Content volume is intentionally not allowed to outrun data trust.

## Delivery protocol

`PLAN → IMPLEMENT → VERIFY → DOCUMENT → COMMIT → RECHECK`

A task is not complete because a file exists. Legal/data claims require evidence; code requires verification; deployment requires a production smoke test. If CI is unavailable, record **Not Tested — CI unavailable** rather than claiming a pass.


### Current-head reconciliation — 2026-10-11

The current Quality Gate, Lint and Browser Smoke must all pass on the same SHA before the source-tree lane is considered verified. The verified data checkpoint at `a53940fc6ed02a5c1660ae3bcd0d2df98d220b30` reports 26 countries, 56 pathways (52 publishable / 4 research_required), 193 evidence records, 0 overdue review dates, 0 missing review dates and 0 invalid review dates. Country-level aggregate cost/timeline/approval-rate values remain null until field-level evidence is collected. Production remains blocked on authoritative hostname/deployment SHA, live security headers and branch protection.


### Latest delivery verification — 2026-10-11 — `6aebb9b0feddecbcf5b8c635e5648d934eb34453`

All required source-tree workflows passed on this SHA: Quality Gate [38112873368](https://github.com/global-route/myglobalroute/actions/runs/38112873368), Lint [38112873379](https://github.com/global-route/myglobalroute/actions/runs/38112873379), and Browser Smoke [38112873378](https://github.com/global-route/myglobalroute/actions/runs/38112873378). Quality Gate passed 17 suites / 110 tests, dependency audit found 0 vulnerabilities, and generated build/SEO-A11y checks passed. The 193-record evidence inventory has no overdue/missing/invalid review dates, but country dataset metadata remains 36 days old and needs a real 26-source review. Structured requirements now have 9 declarations across 2/56 pathways (2 UK Skilled Worker fields plus 7 Canada study family-size thresholds); 54 pathways remain unstructured, so keep this gap explicit. Production remains NO-GO pending host/deployed-SHA/security/branch-hardening evidence.


### Conditional requirement tranche — 2026-10-11 — `6569cfd5dba4e519d34461ec47ba14ed7d10e5ca`

The requirement schema now validates conditional metadata for application date, family size, region and included/excluded cost components. Canada study has seven separately scoped living-expense amounts for family sizes 1–7 outside Quebec and applications on/after 2026-09-01, sourced to IRCC. Amounts exclude tuition and transportation; Quebec and the >7 family-size increment remain separately scoped/not represented as fixed thresholds. All three workflows passed on this SHA: Quality Gate [38113089851](https://github.com/global-route/myglobalroute/actions/runs/38113089851), Lint [38113089859](https://github.com/global-route/myglobalroute/actions/runs/38113089859), Browser Smoke [38113089864](https://github.com/global-route/myglobalroute/actions/runs/38113089864). Quality Gate passed 17 suites / 113 tests. Country dataset `asOf` metadata is still 36 days old; source-by-source review is the next data freshness task. Production remains NO-GO until deployment and security gates pass.


## Full reassessment — 2026-10-11 — `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`

This update supersedes earlier status claims for current delivery. Quality Gate [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182546), Lint [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182590), and Browser Smoke [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182545) all passed on this SHA. Current registry: 26 countries; 56 pathways (52 publishable / 4 research_required); 193 evidence records; 9 structured requirement declarations across 2 pathways. The latest recorded freshness report has 193 current, 0 overdue, 0 missing and 0 invalid review dates, but country dataset `asOf=2026-09-05` remains stale and needs a source-by-source review. Phase 0 exit is blocked by host/domain/deployed-SHA/live-header/branch-protection evidence. Phase 1 data completeness and Phase 2 structured decision quality remain incomplete. See `docs/project/PHASE_STATUS.md` and `docs/project/PROJECT_ASSESSMENT.md`.


## Current-head status and next sprint — 2026-10-11

Same-SHA source-tree gates pass at 1284684c18a7fa311cd62c52875b38d62a354a0b: Quality Gate https://github.com/global-route/myglobalroute/actions/runs/38115941501 (17 suites / 113 tests), Lint https://github.com/global-route/myglobalroute/actions/runs/38115941407, Browser Smoke https://github.com/global-route/myglobalroute/actions/runs/38115941416. This verifies P0-S3 and the source-tree portion of P0-S4 only. P0-S5 and Phase 0 remain open. The next independently executable sprint is docs/sprints/NEXT_SPRINT_P1_DATA_REFRESH.md; its source-by-source checklist must be completed before country dataset dates change.
