# Release Verification — 2026-09-13

## Current result
**Release remains blocked, but P0 has progressed materially.** Repository quality gates are operational; the latest promotion wave is on `main`. Deployment identity, final browser/lint verification, remaining evidence promotion, and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- Seventeen pathways are currently promoted to `publishable` with explicit `evidenceIds` after route-level evidence review.
- The latest promotion wave added Canada Study, Australia Student, New Zealand Student, Austria Student, Portugal Study, Portugal Remote Work/Digital Nomad, and Switzerland Work.
- New primary-source batches cover Australia, Canada, New Zealand, Austria, Switzerland and Portugal priority routes in addition to earlier country waves.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Playwright browser-smoke infrastructure and a dedicated GitHub Actions workflow are present.
- A dedicated JavaScript lint workflow is present, with an explicit ESLint configuration added after the first lint gate failed because lint configuration was missing.
- Quality Gate run `34734549840` for the prior promotion commit passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.

## Current verification state
- A new Quality Gate run is executing for the latest ESLint configuration commit.
- A new lint run is executing for the same commit.
- Browser-smoke verification remains part of the active CI wave and must be confirmed from its resulting workflow run before release closure.

## Remaining release blockers
1. Confirm the current Quality Gate, lint and browser-smoke workflow results.
2. Continue attaching evidence IDs and promoting fully evidenced pathways after exact-route/material-field validation.
3. Review generic pathway records for legal sub-route ambiguity before broader promotion.
4. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
5. Run deployed-site verification against that verified origin.
6. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
7. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.

## Important distinction
Green repository CI is evidence that the source tree passes its automated quality gates. It is **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
