# Release Verification — 2026-09-28 (Historical checkpoint)

> **Superseded for current status by [Release Verification — 2026-10-08](RELEASE_VERIFICATION_2026-10-08.md).** This file preserves the evidence recorded at the September checkpoint; its statements about current head, revenue next steps and CI are historical and must not be used as the current status.

## Current result
**Release remains blocked on production deployment verification.** P0-S1 through P0-S4 are complete. The source tree, data registry, unit tests, build output, SEO/accessibility, lint, and browser E2E smoke all pass on the current head. Production origin verification (P0-S5) is the sole remaining release gate.

## Confirmed
- 26 countries / 56 pathways in the canonical migration registry.
- **52 pathways publishable; 4 remain research-required with documented evidence gaps.**
- 193 evidence records — 56/56 pathways evidenced and materially covered.
- 4 explicitly-blocked pathways: AU-skilled, NZ-skilled, RU-study, RU-work — all carry scopeNote documenting the specific blocker.
- No broad canonical pathway has been promoted using narrower child-route evidence.
- NZ has 5 pathways: NZ-student + 3 SMC child routes (points-based, skilled-work-experience, trades-technician) + NZ-skilled umbrella (research_required, scope-prohibited).
- AT has 3 pathways: AT-study + AT-rwr-other-key-workers + AT-red-white-red umbrella.
- IT-work umbrella is publishable; IT-flussi subroute remains research_required (financial-requirement gap).
- AU-189 subroute remains research_required (visa-specific financial-verification gap).
- Candidate registry records promoted status for NZ SMC x3 and AT-rwr-other-key-workers; AU-189 and IT-flussi carry explicit missingMaterialFields.
- @playwright/test pinned to 1.44.1 — last version with mac12 Chromium support; chromium-1117 binary confirmed cached.

## Verification gates — P0-S3 + P0-S4

| Gate | Result | Detail |
|------|--------|--------|
| `npm run data:validate` | PASS | 56 pathways, 193 records, 52 publishable |
| `npm test` (Jest) | PASS | 31/31 |
| `npm run build` | PASS | 147 files written |
| `npm run build:verify` | PASS | |
| `npm run seo:a11y:verify` | PASS | 168 HTML files |
| `npm run lint` | PASS | 0 errors, 33 warnings (all runtime globals — non-blocking) |
| `npm run test:e2e` (Playwright) | PASS | 4/4 — homepage, find-my-route, calculator, countries |

E2E run: 16.3s, 2 workers, Chromium 129.0 (playwright build v1117), local dev server reused.

## Lint warnings — disposition
33 warnings, 0 errors. All are `no-undef` on runtime globals (`gtag`, `Fuse`, `adsbygoogle`, `CalculatorModule`, `SearchModule`) loaded via `<script>` tags outside ESLint's module scope. Non-blocking for release; tracked for P1 ESLint config cleanup.

## Current verification state
- **P0-S3 Data/Quality Gate:** PASS ✅
- **P0-S4 Browser/E2E Gate:** PASS ✅
- **Latest commit CI:** NOT VERIFIED — GitHub Actions status not confirmed against current head.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin unverified.
- **SEO absolute-origin restoration:** deferred until deployment origin verified.

## Remaining release blockers
1. Identify the authoritative Netlify project/site and production hostname; do not use historical `*.netlify.app` documentation as proof.
2. Verify deployed commit matches current `main` head.
3. Run production smoke: deep links, assets, calculator, recommendations.
4. Restore canonical/Open Graph/sitemap absolute URLs only after origin is independently verified.
5. Audit CSP against actual deployed third-party inventory.
6. Resolve repository hardening issue #2 (unprotected `main` branch, public repo visibility).
7. Reconcile roadmap, active sprint and release verification; record explicit P0 exit.

## Important distinction
Green source-tree CI and browser E2E smoke prove the generated site passes automated checks against a local dev server. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate (P0-S5).

## Monetization phase added

The repository now contains a dedicated **P1-REV Revenue & Monetization** implementation phase. The monetization documentation is no longer a standalone concept: it is connected to a phase, implementation plan and executable sprint.

Current revenue implementation status:
- Documentation architecture: COMPLETE.
- Phase/implementation plan: COMPLETE.
- First implementation task: REV-01 Measurement Foundation — NEXT.
- Production advertising: NOT ACTIVE.
- MRR: no current recurring-revenue claim; model is defined but there is no validated live MRR in this release record.

This phase must not weaken P0 production verification or evidence/route neutrality.
