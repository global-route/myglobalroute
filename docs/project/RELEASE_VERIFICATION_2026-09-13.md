# Release Verification — 2026-09-13 / continued 2026-09-14

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The repository has previously passed the Quality Gate, browser smoke and lint; the latest evidence/pathway/test/documentation commits require fresh CI verification. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **27 pathways are now promoted to `publishable` with explicit `evidenceIds`; 25 remain `research_required`.**
- The evidence tree now contains **96 records** across the primary registry and dated addenda.
- The latest continuation wave promoted Japan Student and Japan Engineer/Specialist in Humanities/International Services only after exact-route evidence coverage.
- Japan Student financial evidence is recorded as documentary proof of ability to cover expenses rather than an invented universal yen threshold.
- Japan Engineer financial evidence records the official remuneration-pay-parity rule rather than inventing a universal salary floor.
- Current Canada Federal Skilled Worker Program eligibility and proof-of-funds evidence is staged, but the canonical pathway remains unpromoted until its source/name scope is changed from the Express Entry umbrella to FSWP.
- The pathway policy explicitly requires pathway-record scope to match evidence scope.
- Regression coverage now resolves every publishable evidence ID, enforces country/pathway scope equality, and checks material-field completeness.
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
- **Latest commit CI:** NOT YET VERIFIED — the latest evidence/pathway/test/documentation commits need a fresh workflow run.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 27 publishable pathways, 25 still research-required.

## Remaining release blockers
1. Transition the staged Canada FSWP candidate by narrowing the pathway record before attaching its evidence IDs.
2. Continue primary-source evidence batches for the remaining research-required pathways.
3. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
4. Run deployed-site verification against that verified origin.
5. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
6. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
7. Re-run and record the complete quality/browser/lint verification against the latest commit.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
