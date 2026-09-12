# Global Route — Master Execution Roadmap

**Version:** 2.3.0  
**Status:** Active execution  
**Reconciled:** September 12, 2026

> The original Global Route vision is preserved. Execution priority is corrected from the repository's actual state: production integrity and trustworthy migration intelligence precede content and growth scaling.

## Product north star

**Given a user's profile, goal and budget, identify realistic global mobility routes, explain cost and timing, show the evidence and risks, and give the user a useful next action.**

The blog remains an acquisition/education layer. Country + pathway + evidence + cost + recommendation is the product core.

## Phase 0 — Production Integrity (P0)

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
- [x] Execute the CI quality pipeline successfully: audit, data validation, tests, build, generated-output verification and core SEO/A11y smoke.
- [x] Align Netlify build/deploy-preview/branch-deploy runtime configuration to Node 24.
- [ ] Browser/E2E verification of generated routes.
- [ ] Identify authoritative Netlify deployment and production hostname.
- [ ] Production smoke verification of deep links/assets/data/calculator.
- [ ] Audit CSP against the actual deployed third-party inventory.

**Exit gate:** reproducible build, validated data shape, passing tests, working deep links, verified production origin and no known critical runtime defects.

## Phase 1 — Migration Intelligence Foundation (P0)

### Required data model

`country → pathway → metric → value → source → effective date → verified date → methodology → confidence → review date`

- [x] Publish `reference/DATA_TRUST_STANDARD.md`.
- [x] Establish field-level provenance records with source, claim, jurisdiction, dates, methodology, confidence and review date.
- [x] Separate publishability from evidence coverage and expose evidence trails in pathway pages.
- [x] Distinguish required evidence from unsupported estimates; approval rates/costs/timelines remain null where not evidenced.
- [x] Establish material-field requirements by pathway type.
- [x] Add 26-country evidence-gated registry without fabricating missing data.
- [x] Add 52 pathway records across 26 countries.
- [x] Add 56 field-level primary-source evidence records across registry and dated addenda.
- [x] Promote ten pathways only after minimum material-field coverage and explicit `evidenceIds`.
- [ ] Complete material-field evidence audit for remaining pathways.
- [ ] Review generic pathways that represent multiple legal sub-routes.
- [ ] Expand evidence batches until the highest-value pathways can safely become publishable.
- [ ] Establish production freshness/review automation beyond local validation.

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

`Primary-source batches → material-field audit → pathway-specific legal-subroute review → publishable promotion → browser/E2E → Netlify origin verification → production smoke → canonical/SEO restoration → P0 exit`

## Release gate matrix

| Gate | State | Rule |
|---|---|---|
| 26-country registry | Complete | Evidence-gated; no fabricated claims |
| 52 pathways | Complete | 10 publishable; 42 remain `research_required` |
| Field-level evidence | Active | 56 records; expanding |
| Publishable pathways | Partial | 10 currently promoted |
| Route engine | Complete | Hard publishability/evidence gate |
| Calculator safety | Complete | Unverified costs not actionable |
| Country/pathway pages | Complete | Source/evidence trails generated |
| Generated build verification | Passed | Latest confirmed CI baseline |
| Core SEO/A11y smoke | Passed | Latest confirmed CI baseline |
| CI quality gate | Passed | Audit + validation + tests + build + verification |
| Browser/E2E | Open | Required before release |
| Netlify origin | Open | Must identify actual deployment; never guess |
| Production smoke | Open | Blocked by origin verification |
| Canonical/sitemap restoration | Open | Blocked by authoritative origin |

## Dependency order

`Integrity → Evidence → Pathways → Recommendation → Verification → Deployment → SEO → Growth → Scale`

Content volume is intentionally not allowed to outrun data trust.

## Delivery protocol

`PLAN → IMPLEMENT → VERIFY → DOCUMENT → COMMIT → RECHECK`

A task is not complete because a file exists. Legal/data claims require evidence; code requires verification; deployment requires a production smoke test. If CI is unavailable, record **Not Tested — CI unavailable** rather than claiming a pass.
