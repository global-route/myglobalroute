# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

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
- [x] Expand primary-source evidence coverage for UK, Canada, Australia, Ireland, New Zealand, Finland, Luxembourg and Austria.
- [x] Add canonical route recommendation engine with a hard publishability/evidence safety gate.
- [x] Add an evidence-gated Find My Route product surface.
- [x] Expose Find My Route from the primary navigation/homepage.
- [x] Add unit tests for data contracts, evidence records and route ranking.
- [x] Add CI quality gate for dependency audit, data validation, tests and build.
- [x] Align Netlify runtime with CI on Node 20.
- [x] Add privacy/security/compliance baseline and public privacy/disclaimer/terms pages.
- [x] Add robots.txt and sitemap.xml infrastructure (hostname verification still required).

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
- [ ] Replace/remove stale absolute SEO URLs once the authoritative production hostname is confirmed.

### Current verification note — 2026-09-06
- GitHub Actions workflow is present, but no workflow run is exposed for the latest main commits in this session; therefore CI is **Not Tested — no run available**.
- The current evidence registry contains 14 primary-source records. The 26-country registry remains intentionally evidence-required rather than falsely publishable.
- No pathway has been promoted to `publishable` merely because an official landing page exists; material claims still require field-level evidence.

## P1 after P0

- Programmatic country/pathway SEO with unique evidence-backed pages.
- Comparison UX and route recommendation polish.
- Privacy-aware analytics/consent controls.
- CSP refinement based on actual third-party inventory.
- Newsletter, affiliate and partnership infrastructure.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.

## Execution order

`Primary-source verification → publishable pathway data → country/pathway integration → generated-output tests → E2E/accessibility/SEO → deployment verification → SEO scale → growth`
