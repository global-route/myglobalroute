# Release Verification — 2026-09-13 / continued 2026-09-14

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The repository has previously passed the Quality Gate, browser smoke and lint; the latest evidence/pathway/test/documentation commits require fresh verification. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **28 pathways are now promoted to `publishable`; 24 remain `research_required`.**
- Canada Federal Skilled Worker Program is attached to the canonical `CA-federal-skilled-worker` pathway id with exact-route eligibility and proof-of-funds evidence.
- Exact-route evidence has now been staged for Australia subclass 189, New Zealand SMC Skilled Work Experience and Trades and Technician, Austria Other Key Workers, and Italy 2026 non-seasonal subordinate work.
- A dedicated candidate registry keeps those exact routes outside the canonical 52-pathway count until they are fully representable and promoted.
- New Zealand route modeling preserves the distinction between Points-based, Skilled Work Experience, and Trades and Technician pathways and the 24 August 2026 policy changes.
- Australia subclass 189 evidence is explicitly scoped away from the broader skilled-migration family.
- Austria Other Key Workers evidence is explicitly scoped away from the full Red-White-Red Card family.
- Italy 2026 Flussi evidence is explicitly temporal and does not generalize to all Italian work authorization.
- Regression coverage now validates the candidate registry and ensures research-stage candidates cannot masquerade as canonical publishable child routes.
- The pathway policy explicitly requires pathway-record scope to match evidence scope.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Previous Playwright browser smoke passed all four core page tests.
- Previous Quality Gate passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Previous lint run passed.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.

## Current verification state
- **Prior Repository Quality Gate:** PASS.
- **Prior Browser smoke:** PASS — 4/4 core page tests.
- **Prior Lint:** PASS.
- **Latest commit CI:** NOT YET VERIFIED — the latest exact-route evidence and documentation wave needs fresh workflow verification.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 28 publishable pathways, 24 still research-required.

## Remaining release blockers
1. Complete material evidence for Australia subclass 189 before any promotion decision.
2. Add explicit New Zealand SMC sub-route representation without corrupting the canonical 52-pathway registry, then evaluate each SMC route independently.
3. Complete material evidence for Austria Other Key Workers before promotion.
4. Complete employer/nulla-osta and applicant-side evidence for Italy 2026 non-seasonal subordinate work; preserve annual quota scope.
5. Continue exact-route evidence batches for the remaining research-required pathways, prioritizing legal scope over breadth.
6. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
7. Run deployed-site verification against that verified origin.
8. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
9. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
10. Re-run and record the complete quality/browser/lint verification against the latest commit.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
