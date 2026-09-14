# Release Verification — 2026-09-13

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The repository has previously passed the Quality Gate, browser smoke and lint; the latest evidence/pathway commits require fresh CI verification. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **25 pathways are now promoted to `publishable` with explicit `evidenceIds`; 27 remain `research_required`.**
- The evidence tree now contains **90 records** across the primary registry and dated addenda.
- The latest waves promoted Finland Study, Sweden Standard Work Permit, Norway Skilled Worker with an Employer in Norway and Italy Higher-Education Study after route-scope review.
- The pathway policy explicitly requires pathway-record scope to match evidence scope.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Previous Playwright browser smoke passed all four core page tests.
- Previous Quality Gate passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Previous lint run passed.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.
- P0 issue #3 tracks legal sub-route semantics so route-specific evidence cannot be used to overstate a broad pathway.

## Current verification state
- **Prior Repository Quality Gate:** PASS.
- **Prior Browser smoke:** PASS — 4/4 core page tests.
- **Prior Lint:** PASS.
- **Latest commit CI:** NOT YET VERIFIED — the latest evidence/pathway/documentation commits need a fresh workflow run.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 25 publishable pathways, 27 still research-required.

## Remaining release blockers
1. Add regression tests preventing broad pathway promotion when evidence covers a narrower legal sub-route.
2. Continue primary-source evidence batches for the remaining research-required pathways.
3. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
4. Run deployed-site verification against that verified origin.
5. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
6. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
7. Re-run and record the complete quality/browser/lint verification against the latest commit.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
