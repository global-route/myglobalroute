# Global Route — Master Execution Roadmap

**Version:** 2.0.0  
**Status:** Active execution  
**Reconciled:** September 5, 2026

> The original Global Route vision is preserved. Execution priority is corrected from the repository's actual state: production integrity and trustworthy migration intelligence precede content and growth scaling.

## Product north star

**Given a user's profile, goal and budget, identify realistic global mobility routes, explain cost and timing, show the evidence and risks, and give the user a useful next action.**

The blog remains an acquisition/education layer. Country + pathway + evidence + cost + recommendation is the product core.

## Phase 0 — Production Integrity (P0)

- [x] Correct Eleventy runtime data path.
- [x] Remove duplicate calculator business logic.
- [x] Normalize calculator currency conversion and timeline range parsing.
- [x] Harden data-controlled DOM output.
- [x] Establish canonical search module with Fuse.js-compatible implementation and fallback.
- [x] Remove destructive gzip build behavior.
- [x] Remove global SPA rewrite from the static multi-page deployment.
- [x] Repair package metadata.
- [x] Add initial country-data validation command.
- [ ] Add unit/data/build tests.
- [ ] Validate generated production routes/assets.
- [ ] Audit CSP against actual third-party inventory.

**Exit gate:** reproducible build, validated data shape, passing tests, working deep links and no known critical runtime defects.

## Phase 1 — Migration Intelligence Foundation (P0)

### Required data model

`country → pathway → metric → value → source → effective date → verified date → methodology → confidence → review date`

- [x] Publish `reference/DATA_TRUST_STANDARD.md`.
- [ ] Add provenance fields to records.
- [ ] Separate official facts, derived estimates, editorial assessment and user strategy.
- [ ] Distinguish required funds from estimated relocation budget.
- [ ] Audit legal, fee, processing-time and approval-rate claims.
- [ ] Establish freshness/review checks.
- [ ] Research missing blueprint countries from primary sources.

**Critical rule:** never fabricate missing data to reach the 26-country target.

## Phase 2 — Canonical Product Core (P0)

- [ ] Introduce pathway-level records.
- [ ] Build country explorer around pathway entities.
- [ ] Build pathway pages for eligibility, cost, timeline, evidence, risks and next action.
- [ ] Make the calculator consume the canonical data model.
- [ ] Add country comparison.
- [ ] Build `Find My Route`: profile → eligibility → ranked routes → evidence → next action.
- [ ] Rank by eligibility/fit first, then cost/timeline; expose confidence rather than hiding uncertainty.

## Phase 3 — Content & Acquisition (P1)

- [ ] Fact-audit existing posts against the data trust standard.
- [ ] Finish high-intent cornerstone content only after claims are verified.
- [ ] Add category archives, related-content links and search UX.
- [ ] Implement canonical metadata, Open Graph, sitemap and robots.
- [ ] Add structured data and programmatic country/pathway SEO.
- [ ] Measure search → route → calculator conversion.

## Phase 4 — Trust, Compliance & Accessibility (P1)

- [ ] Privacy and analytics consent model where required.
- [ ] Terms and migration-information disclaimer architecture.
- [ ] Source attribution for factual claims.
- [ ] Accessibility audit and keyboard navigation.
- [ ] Security-header/CSP review.
- [ ] Dependency/supply-chain audit.

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

## Dependency order

`Integrity → Evidence → Pathways → Recommendation → SEO → Growth → Scale`

Content volume is intentionally not allowed to outrun data trust.

## Delivery protocol

`PLAN → IMPLEMENT → VERIFY → DOCUMENT → COMMIT → RECHECK`

A task is not complete because a file exists. Legal/data claims require evidence; code requires verification; deployment requires a production smoke test. If CI is unavailable, record **Not Tested — CI unavailable** rather than claiming a pass.
