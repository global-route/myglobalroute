# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active  
**Priority:** P0

The original Global Route blueprint remains intact. This sprint changes execution order: trust, runtime correctness and a canonical product core come before scaling the content catalogue.

## Completed in this sprint

- [x] Fix production data URL mismatch (`/src/data` → generated `/data`).
- [x] Remove duplicate calculator business logic from `app.js`.
- [x] Make calculator currency handling consistent and timeline ranges parse correctly.
- [x] Replace custom substring search with Fuse.js when available, with safe fallback.
- [x] Escape user/data-controlled search and calculator output.
- [x] Remove destructive in-place gzip from Netlify build.
- [x] Remove the global SPA rewrite that could mask generated static pages.
- [x] Repair package repository/homepage metadata.
- [x] Add `npm run data:validate` implementation.
- [x] Establish migration data trust/provenance standard.

## Remaining P0

### 1. Data trust layer
- [ ] Define JSON schema for country + pathway records.
- [ ] Add source, verified date, effective date, confidence and review date.
- [ ] Audit every existing legal/cost/approval claim.
- [ ] Research missing blueprint countries from primary sources.
- [ ] Do not publish unsupported approval-rate claims as official statistics.

### 2. Canonical product model
- [ ] Introduce pathway-level data model.
- [ ] Separate official facts, derived estimates, editorial assessments and strategy.
- [ ] Make `Find My Route` the eventual decision-engine entry point.
- [ ] Connect country pages, pathways, costs, evidence, risks and next actions.

### 3. Quality gates
- [ ] Add unit tests for calculator/search/data validation.
- [ ] Add build smoke test and generated-file assertions.
- [ ] Add accessibility and SEO checks.
- [ ] Add production smoke test for `/`, `/pages/countries.html`, `/data/countries.json` and representative deep links.

## P1 after P0

- Technical SEO: canonical, sitemap, robots, Open Graph and structured data.
- Country/pathway programmatic SEO.
- Comparison and route recommendation UX.
- Analytics with privacy/consent controls.
- Security headers/CSP refinement against the actual third-party inventory.
- Newsletter and trusted monetization.

## Definition of Done

A task is complete only when implementation exists, documentation is updated, and the relevant verification has passed. If CI is unavailable, record **Not Tested — CI unavailable** rather than claiming a pass.

## Execution order

`Data integrity → canonical architecture → tests/quality gates → evidence-backed content → recommendation engine → SEO/growth → scale`
