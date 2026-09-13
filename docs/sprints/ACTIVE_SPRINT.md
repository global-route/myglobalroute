# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- 80 evidence records are currently validated.
- 17 pathways are publishable; 35 remain research-required.
- Latest Quality Gate `34734636320` and latest post-docs Quality Gate `34734742638` passed.
- Latest browser smoke `34734636297` passed 4/4 core page tests.
- Latest lint `34734742628` passed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

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
- [x] Restore two pathway records for every country: 26 countries / 52 pathways.
- [x] Add a primary-source evidence registry with review dates and confidence.
- [x] Expand dated primary-source evidence across the priority country waves, including Sweden, Finland, Luxembourg, Austria, Switzerland and Portugal.
- [x] Promote 17 pathways only after explicit material evidence review and `evidenceIds` attachment.
- [x] Make the validator consume dated evidence addenda without weakening the primary-source gate.
- [x] Add canonical route recommendation engine with a hard publishability/evidence safety gate.
- [x] Exclude zero-fit routes from ranked recommendations.
- [x] Align route-engine unit tests with the hard safety gate and numeric blockers.
- [x] Add an evidence-gated Find My Route product surface and primary-navigation entry point.
- [x] Add unit tests for data contracts, evidence records and route ranking.
- [x] Correct the Jest command so CI executes the intended test suite.
- [x] Remove bundled Netlify CLI from the application dependency graph after audit remediation.
- [x] Add CI quality gate for dependency audit, data validation, tests and build.
- [x] Add generated-output integrity checks for required routes/data, detail pages and core internal deep links.
- [x] Add generated-output assertion for evidence addenda.
- [x] Add generated country and pathway detail-page integrity assertions.
- [x] Restore root homepage/public passthrough generation in Eleventy.
- [x] Add generated `/blog/` research index.
- [x] Add a core-route SEO/accessibility smoke gate and execute it successfully in CI.
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
- [x] Execute successful CI Quality Gates through dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke.
- [x] Move CI to Node 24 and align Netlify configuration with Node 24.
- [x] Add real Playwright browser-smoke infrastructure and four core page smoke tests.
- [x] Add manual production-smoke workflow requiring an explicitly supplied authoritative origin.
- [x] Add deployed-site verification that discovers all generated country/pathway routes from the deployed registry.
- [x] Consolidate duplicate repository-visibility issue tracking; issue #1 is closed as a duplicate of #2.

## P0 remaining / verification gates

### Authoritative migration intelligence
- [ ] Verify every remaining pathway's material requirements from primary sources.
- [x] Establish field-level evidence objects: source, claim, effective date, retrieved date, jurisdiction, methodology, confidence and review date.
- [ ] Promote remaining records from `research_required` → `publishable` only after complete evidence review.
- [ ] Add official fee/funds/eligibility/timeline facts only where the authority publishes them.
- [x] Keep approval rates null where no credible methodology-disclosed official dataset exists.
- [x] Complete the priority Germany/France/Spain evidence batch and continue dated country batches.
- [x] Attach `evidenceIds` and complete minimum material-field coverage for the 17 currently promoted pathways.
- [ ] Attach the latest Sweden/Luxembourg evidence IDs after pathway-file validation and promote those exact-route records.
- [ ] Refine Finland Work to the exact employed-person/TTOL route before promotion.
- [ ] Review Austria Red-White-Red and New Zealand Skilled for legal sub-route scope before broader promotion.
- [ ] Add regression tests preventing a broad pathway from becoming publishable when evidence only covers a narrower legal sub-route.

### Product integration
- [x] Build the first Find My Route UI around the canonical engine.
- [x] Make recommendations explainable and evidence-gated.
- [x] Wire the country explorer to the canonical country registry.
- [x] Build dedicated country/pathway detail presentation with source/evidence trails.
- [x] Keep unverified pathways out of viable recommendations and calculator results.

### Quality / production
- [x] Add CI/local verification commands for data validation, tests, build, generated-output integrity and lint.
- [x] Add generated-output assertions.
- [x] Execute current Quality Gate successfully.
- [x] Execute current generated SEO/accessibility smoke verification successfully.
- [x] Execute browser smoke successfully: 4/4 tests.
- [x] Execute lint successfully.
- [ ] Identify the authoritative Netlify project/domain and verify the deployed hostname serves this repository. No hostname will be guessed.
- [ ] Verify canonical hostname, HTTPS, sitemap, robots, deep links, data endpoint and calculator after deployment.
- [ ] Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.

## P1 after P0

- Programmatic country/pathway SEO hardening after production origin verification.
- Comparison UX and route recommendation polish.
- Legacy blog/category link cleanup and full editorial-page SEO audit.
- Privacy-aware analytics/consent controls.
- CSP refinement based on actual third-party inventory.
- Newsletter, affiliate and partnership infrastructure.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.

## Execution order

`Evidence schema → primary-source verification → material-field coverage → exact-route pathway semantics → publishable pathway data → product integration → tests/E2E → deployment verification → SEO scale → growth`
