# Release Verification — 2026-09-13

## Current result
**Release remains blocked, but P0 has progressed materially.** Repository quality gates are operational and repeatedly green on the corrected evidence tree. Deployment identity, browser verification, complete pathway promotion and repository visibility still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- Ten pathways are currently promoted to `publishable` with explicit `evidenceIds`.
- New primary-source batches cover Australia, Canada, New Zealand, Austria, Switzerland and Portugal priority routes in addition to the earlier country waves.
- A manual production-smoke workflow now requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification now discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Local browser smoke infrastructure is now present through Playwright and a dedicated GitHub Actions workflow.
- A dedicated JavaScript lint workflow is now present.
- The latest confirmed baseline Quality Gate run before the current evidence wave passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.

## Currently executing
- Quality Gate for the latest evidence batch.
- Dedicated lint gate for the latest evidence batch.
- Browser smoke workflow for the local generated site.

## Remaining release blockers
1. Attach new evidence IDs to pathways only after exact-route and material-field validation; promote the next fully evidenced routes.
2. Review generic pathway records for legal sub-route ambiguity before broader promotion.
3. Confirm the latest Quality Gate, lint and browser-smoke workflow results.
4. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
5. Run deployed-site verification against that verified origin.
6. Resolve repository visibility issue #1 before treating the project as release-safe.
7. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.

## Important distinction
Green repository CI is evidence that the source tree passes its automated quality gates. It is **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
