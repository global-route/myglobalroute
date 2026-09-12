# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Completed in this sprint

- [x] Fix generated data runtime path (`/src/data` → `/data`).
- [x] Remove duplicate calculator business logic and align calculator UI/engine.
- [x] Make calculator affordability refuse evidence-gated/unverified country costs.
- [x] Improve timeline range parsing and currency normalization.
- [x] Replace unsafe substring search with Fuse-compatible search/fallback and escaping.
- [x] Remove destructive gzip/SPA rewrite deployment risks.
- [x] Repair package metadata and remove unverified production-origin metadata.
- [x] Add evidence-gated migration data validation.
- [x] Replace unsupported approval-rate/cost/timeline claims with an evidence-gated 26-country registry.
- [x] Add pathway-level data model covering 26 countries and 52+ pathway records.
- [x] Add a primary-source evidence registry with review dates and confidence.
- [x] Expand primary-source evidence coverage for Finland, Luxembourg and Austria.
- [x] Expand Sweden primary-source evidence to work salary/eligibility and study maintenance.
- [x] Add primary-source evidence batches for Canada, Norway, Portugal and Japan.
- [x] Make the validator consume dated evidence addenda without weakening the primary-source gate.
- [x] Add canonical route recommendation engine with a hard publishability/evidence safety gate.
- [x] Align route-engine unit tests with the hard safety gate and numeric blockers.
- [x] Add an evidence-gated Find My Route product surface and primary-navigation entry point.
- [x] Add unit tests for data contracts, evidence records and route ranking.
- [x] Add CI quality gate for dependency audit, data validation, tests and build.
- [x] Add generated-output integrity checks for required routes/data and stale source-data references.
- [x] Add generated-output assertion for evidence addenda.
- [x] Add generated country and pathway detail-page integrity assertions.
- [x] Add a reproducible `npm run verify` quality command.
- [x] Add privacy/security/compliance baseline and public privacy/disclaimer/terms pages.
- [x] Remove stale/unverified absolute SEO origins rather than publishing incorrect canonicals.
- [x] Add robots.txt and sitemap.xml with production-origin verification gate.
- [x] Wire the 26-country registry into the country explorer with evidence-aware status/cost/rate rendering and filters.
- [x] Add programmatic country detail pages with field-level evidence trails.
- [x] Add programmatic pathway detail pages with official-source links and evidence trails.
- [x] Expose consolidated primary-source evidence to Eleventy templates without duplicating the registry.
- [x] Define material evidence requirements by pathway type (`eligibility` + `financial-requirement` minimum).
- [x] Enforce material evidence coverage before a pathway can become `publishable`.
- [x] Add a dated primary-source evidence batch for Germany, France and Spain (12 field-level records).
- [x] Add generated SEO/accessibility smoke verification for language, title, description, heading, image-alt and link-accessibility basics.
- [x] Include the SEO/accessibility smoke gate in the reproducible `npm run verify` command and CI quality workflow.
- [x] Promote six Germany/France/Spain pathways to `publishable` after minimum material-field coverage and explicit `evidenceIds` were satisfied.

## P0 remaining / verification gates

### Authoritative migration intelligence
- [ ] Verify every remaining pathway's material requirements from primary sources.
- [x] Establish field-level evidence objects: source, claim, effective date, retrieved date, jurisdiction, methodology, confidence and review date.
- [ ] Promote remaining records from `research_required` → `publishable` only after complete evidence review.
- [ ] Add official fee/funds/eligibility/timeline facts only where the authority publishes them.
- [x] Keep approval rates null where no credible methodology-disclosed official dataset exists.
- [x] Complete the priority Germany/France/Spain evidence batch; continue remaining-country batches next.
- [x] Attach `evidenceIds` and complete minimum material-field coverage for the six promoted pathways.
- [ ] Review pathway-specific nuances where one generic pathway maps to multiple legal sub-routes before broader promotion.

### Product integration
- [x] Build the first Find My Route UI around the canonical engine.
- [x] Make recommendations explainable and evidence-gated.
- [x] Wire the country explorer to the canonical country registry.
- [x] Build dedicated country/pathway detail presentation with source/evidence trails.
- [x] Keep unverified pathways out of viable recommendations and calculator results.

### Quality / production
- [x] Add CI/local verification commands for data validation, tests, build, generated-output integrity and lint.
- [x] Add generated-output assertions.
- [x] Add generated SEO/accessibility smoke gate.
- [ ] Execute CI/local verification and record the actual result.
- [ ] Add browser smoke/E2E coverage.
- [ ] Execute accessibility/SEO smoke checks against a real generated build and record the result.
- [ ] Identify the authoritative Netlify project/domain and verify the deployed hostname serves this repository. No hostname will be guessed.
- [ ] Verify canonical hostname, HTTPS, sitemap, robots, deep links, data endpoint and calculator after deployment.

## P1 after P0

- Programmatic country/pathway SEO hardening after production origin verification.
- Comparison UX and route recommendation polish.
- Privacy-aware analytics/consent controls.
- CSP refinement based on actual third-party inventory.
- Newsletter, affiliate and partnership infrastructure.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.

## Execution order

`Evidence schema → primary-source verification → material-field coverage → publishable pathway data → product integration → tests/E2E → deployment verification → SEO scale → growth`
