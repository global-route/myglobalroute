# Release Verification — 2026-09-13 / continued 2026-09-14

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The repository has previously passed the Quality Gate, browser smoke and lint; the latest evidence/pathway/test/documentation commits require fresh CI verification. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **28 pathways are now promoted to `publishable` with explicit `evidenceIds`; 24 remain `research_required`.**
- The evidence tree contains **98 records** across the primary registry and dated addenda after the Canada FSWP evidence addition.
- The latest continuation wave promoted Japan Student, Japan Engineer/Specialist in Humanities/International Services, and Canada Federal Skilled Worker Program only after exact-route evidence coverage.
- Japan Student financial evidence is recorded as documentary proof of ability to cover expenses rather than an invented universal yen threshold.
- Japan Engineer financial evidence records the official remuneration-pay-parity rule rather than inventing a universal salary floor.
- Canada Federal Skilled Worker Program evidence is now attached to the canonical `CA-federal-skilled-worker` pathway id, with eligibility and proof-of-funds evidence scoped to that exact route.
- The pathway policy explicitly requires pathway-record scope to match evidence scope.
- Regression coverage resolves every publishable evidence ID, enforces country/pathway scope equality, and checks material-field completeness.
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
- **Latest commit CI:** NOT YET VERIFIED — the latest Canada evidence correction and documentation changes need fresh workflow verification.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 28 publishable pathways, 24 still research-required.

## Remaining release blockers
1. Continue primary-source evidence batches for the remaining research-required pathways, prioritizing exact route scope over breadth.
2. Narrow Australia Skilled to an exact visa class before promotion; the official program is a family of temporary, provisional and permanent skilled visas.
3. Narrow New Zealand Skilled to an exact current SMC/work-to-residence sub-route and model the 24 August 2026 changes without collapsing multiple pathways into one record.
4. Narrow Austria Red-White-Red to an exact sub-route.
5. Narrow Italy Work to an exact work authorization class.
6. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
7. Run deployed-site verification against that verified origin.
8. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
9. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
10. Re-run and record the complete quality/browser/lint verification against the latest commit.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
