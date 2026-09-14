# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **94 evidence records** are currently represented across the primary registry and dated addenda.
- **27 pathways are publishable; 25 remain research-required.**
- Latest known successful Quality Gate and browser-smoke runs passed before the latest evidence/promotion commits; the newest commits still require CI re-verification.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Added Finland study eligibility and finance evidence and promoted the exact study route.
- [x] Added Sweden standard work-permit eligibility and 2026 salary evidence and promoted the exact route.
- [x] Added Norway skilled-worker eligibility and employment-condition evidence and promoted the employer-in-Norway route.
- [x] Added Italy higher-education study eligibility evidence and paired it with the existing finance evidence.
- [x] Added Japan Student financial/process evidence and promoted the exact Student status route.
- [x] Added Japan Engineer/Specialist in Humanities/International Services remuneration/process evidence and promoted the exact status route.
- [x] Reconciled pathway scopes so promoted records match their evidence rather than broad legal families.
- [x] Added regression coverage that resolves every publishable evidence ID and rejects cross-pathway evidence references.
- [x] Reconciled the P0 legal-subroute review with the current **27-pathway publishable** set.
- [x] Preserved the 26-country / 52-pathway canonical registry; unsupported routes remain evidence-gated.

## Existing completed foundation

- [x] Fix generated data runtime path (`/src/data` → `/data`).
- [x] Remove duplicate calculator business logic and align calculator UI/engine.
- [x] Make calculator affordability refuse evidence-gated/unverified country costs.
- [x] Improve timeline range parsing and currency normalization.
- [x] Replace unsafe substring search with Fuse-compatible search/fallback and escaping.
- [x] Remove destructive gzip/SPA rewrite deployment risks.
- [x] Repair package metadata and remove unverified production-origin metadata.
- [x] Add evidence-gated migration data validation and primary-source registry.
- [x] Replace unsupported approval-rate/cost/timeline claims with an evidence-gated 26-country registry.
- [x] Add canonical route recommendation engine with hard evidence/publishability gates.
- [x] Add evidence-gated Find My Route, country explorer and programmatic country/pathway detail pages.
- [x] Add material evidence requirements by pathway type and promotion-candidate reporting.
- [x] Add unit, build, SEO/accessibility, lint and browser-smoke quality gates.
- [x] Add manual production-smoke and deployed-site verification workflows.
- [x] Add privacy/security/compliance baseline and public policy pages.
- [x] Consolidate repository visibility issue tracking; issue #1 is closed as a duplicate of #2.

## P0 remaining / verification gates

### Authoritative migration intelligence
- [ ] Verify every remaining pathway's material requirements from primary sources.
- [x] Establish field-level evidence objects with source, claim, effective/retrieved dates, jurisdiction, methodology, confidence and review date.
- [ ] Promote remaining records only after complete evidence review and exact-route scope matching.
- [ ] Add official fee/funds/eligibility/timeline facts only where the authority publishes them.
- [x] Keep unsupported approval rates null.
- [ ] Continue exact-route evidence batches for Italy Work and other high-value routes.
- [ ] Review Canada Express Entry, Australia Skilled, Austria Red-White-Red and New Zealand Skilled for legal sub-route scope before promotion.
- [x] Add regression tests preventing broad pathway promotion when evidence only covers a narrower legal sub-route.

### Product integration
- [x] Build Find My Route around the canonical engine.
- [x] Make recommendations explainable and evidence-gated.
- [x] Keep unverified pathways out of viable recommendations and calculator results.

### Quality / production
- [x] Add repository verification commands and generated-output assertions.
- [x] Execute prior Quality Gate successfully.
- [x] Execute prior generated SEO/accessibility smoke successfully.
- [x] Execute prior browser smoke successfully: 4/4 tests.
- [x] Execute prior lint successfully.
- [ ] Re-verify CI after the latest evidence/pathway/documentation commits.
- [ ] Identify the authoritative Netlify project/domain and verify the deployed hostname serves this repository. No hostname will be guessed.
- [ ] Verify canonical hostname, HTTPS, sitemap, robots, deep links, data endpoint and calculator after deployment.
- [ ] Resolve repository hardening issue #2: confirm intended visibility and establish appropriate `main` protection/check policy.

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

`Evidence schema → primary-source verification → material-field coverage → exact-route pathway semantics → publishable pathway data → regression tests → product integration → CI/E2E → deployment verification → SEO scale → growth`
