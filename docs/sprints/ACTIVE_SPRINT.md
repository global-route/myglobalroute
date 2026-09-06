# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is now trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Completed in this sprint

- [x] Fix generated data runtime path (`/src/data` → `/data`).
- [x] Remove duplicate calculator business logic and align calculator UI/engine.
- [x] Improve timeline range parsing and currency normalization.
- [x] Replace unsafe substring search with Fuse-compatible search/fallback and escaping.
- [x] Remove destructive gzip/SPA rewrite deployment risks.
- [x] Repair package metadata.
- [x] Add evidence-gated migration data validation.
- [x] Replace unsupported approval-rate/cost/timeline claims with an evidence-gated 26-country registry.
- [x] Add pathway-level data model covering 26 countries and 52+ pathway records.
- [x] Add a primary-source evidence registry with review dates and confidence.
- [x] Add canonical route recommendation engine with a hard publishability/evidence safety gate.
- [x] Add an evidence-gated Find My Route product surface.
- [x] Add unit tests for data contracts, evidence records and route ranking.
- [x] Add CI quality gate for dependency audit, data validation, tests and build.
- [x] Add privacy/security/compliance baseline and public privacy/disclaimer/terms pages.
- [x] Strengthen homepage SEO metadata, canonical, Open Graph and WebSite structured data.
- [x] Add robots.txt and sitemap.xml.

## P0 remaining / verification gates

### Authoritative migration intelligence
- [ ] Verify every remaining pathway's material requirements from primary sources.
- [x] Establish field-level evidence objects: source, claim, effective date, retrieved date, jurisdiction, methodology, confidence and review date.
- [ ] Promote records from `research_required` → `publishable` only after complete evidence review.
- [ ] Add official fee/funds/eligibility/timeline facts only where the authority publishes them.
- [x] Keep approval rates null where no credible methodology-disclosed official dataset exists.

### Product integration
- [x] Build the first Find My Route UI around the canonical engine.
- [x] Make recommendations explainable and evidence-gated.
- [ ] Wire pathways into the country explorer and dedicated pathway pages.
- [x] Keep unverified pathways out of viable recommendations.

### Quality / production
- [ ] Run CI or equivalent local verification: data validation, tests, build, lint and dependency audit.
- [ ] Add generated-output assertions and browser smoke/E2E coverage.
- [ ] Add accessibility/SEO automated checks.
- [ ] Verify the deployed hostname serves this repository. Current `https://myglobalroute.com` does **not** serve this repository and is therefore a production-release blocker.
- [ ] Verify canonical hostname, HTTPS, sitemap, robots, deep links, data endpoint and calculator after deployment.

## P1 after P0

- Programmatic country/pathway SEO with unique evidence-backed pages.
- Comparison UX and route recommendation polish.
- Privacy-aware analytics/consent controls.
- CSP refinement based on actual third-party inventory.
- Newsletter, affiliate and partnership infrastructure.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.

## Execution order

`Evidence schema → primary-source verification → publishable pathway data → product integration → tests/E2E → deployment verification → SEO scale → growth`
