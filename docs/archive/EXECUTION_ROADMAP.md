# Global Route — Master Execution Roadmap

**Version:** 2.5.0
**Status:** Active execution
**Reconciled:** 2026-10-25

> Last verified implementation/data checkpoint: `756196f` (2026-10-25). Tests: 18/18 suites, 139/139 passing.

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
- [x] **P0-S2 — Remaining-Country Evidence Closure audit:** current registry reconciled to 59 pathways (55 publishable / 4 research_required); each remaining pathway has explicit evidence gaps. Ongoing source maintenance continues under Phase 1.
- [x] **P0-S3 — Data / Recommendation Quality Gate:** same-head checks passed on verified same-SHA checkpoint 95f960c081367305dea0144034d48a4ab7892426 (17 suites / 113 tests; 0 dependency vulnerabilities; build and SEO/A11y checks included). Verified implementation baseline: 95f960c081367305dea0144034d48a4ab7892426.
- [x] **P0-S4 — Source-tree Browser / Release Gate:** Browser Smoke, generated deep links, build integrity and SEO/accessibility verification passed on the assessed source SHA; live production verification remains P0-S5.
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
- [x] Add 27-country evidence-gated registry without fabricating missing data.
- [x] Maintain 61 canonical pathway records across 27 countries.
- [x] Add dated field-level primary-source evidence across registry and addenda.
- [x] Establish exact legal subroute candidate architecture outside the canonical 52.
- [x] Complete material-field evidence audit for remaining pathways.
- [x] Review generic pathways that represent multiple legal sub-routes.
- [x] Expand evidence batches until the highest-value pathways can safely become publishable.
- [ ] Establish production freshness/review automation beyond local validation.

**Current registry checkpoint (2026-10-25):** 27 countries / 61 canonical pathways; 55 publishable and 6 research_required. All 55 publishable pathways have structured requirements[]. 6 research_required all have permanentBlocker or scopeNote.

## Phase 2 — Canonical Product Core (P0)

- [x] Introduce pathway-level records: 59 canonical pathways across 26 countries.
- [x] Build country explorer around pathway entities and evidence-aware statuses.
- [x] Build programmatic country/pathway pages with eligibility/evidence/source presentation.
- [x] Make the calculator consume the canonical evidence-gated data model.
- [x] Add country comparison. *(Phase 2 — open)*
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

- [x] Implement separate analytics and advertising consent choices, persistent preference access, and advertising-consent gating for ad slots (latest changes unvalidated; do not treat as a legal compliance sign-off).
- [ ] Confirm privacy and analytics consent model with qualified legal review for applicable jurisdictions and actual provider configuration.
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
| 27-country registry | Complete | Evidence-gated; no fabricated claims |
| 61 pathways | Complete | 55 publishable; 6 research-required; all 55 have requirements[] |
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


> Verification history and CI checkpoint records are in `CHANGELOG.md`. Use `PHASE_STATUS.md` for current phase status.

> Verification history and CI checkpoint records are in `CHANGELOG.md`. Use `PHASE_STATUS.md` for current phase status.
