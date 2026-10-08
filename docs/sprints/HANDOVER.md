# Handover — Production Integrity, Migration Intelligence & Revenue Readiness

**Branch:** `main`  
**Active P0 sprint:** P0-S5 — Deployment Verification & P0 Exit  
**Concurrent implementation lane:** P1-REV — Commercial Measurement & Readiness  
**Current release record:** `docs/project/RELEASE_VERIFICATION_2026-10-08.md`

## Start here

1. Fetch the current `main` head and inspect CI before changing status claims.
2. Read `docs/sprints/P0_DELIVERY_PLAN.md`, `docs/sprints/ACTIVE_SPRINT.md`, and the current release-verification record.
3. Preserve the original evidence-first migration blueprint. No research-required route is recommendable until exact-scope promotion gates pass.
4. Continue P0-S5 even while revenue foundations are developed. A passing local build does not establish a successful live deployment.
5. Keep advertising and partner inventory inactive until origin, privacy, provider and operational prerequisites are verified.
6. Update the active task and sprint documents after each meaningful delivery wave.

## Current known product baseline

- 26 countries / 56 canonical pathways.
- Latest documented state: 52 publishable and 4 research-required with explicit evidence gaps.
- Latest documented evidence registry: 193 records.
- These are prior recorded counts, not a substitute for re-running current data validation.

## Current monetization implementation

- Provider-neutral analytics contract, explicit consent UI and shared loading are implemented.
- Ad and partner inventory is configuration-driven, with consent-gated hosts on selected pages.
- Find My Route remains excluded from display advertising.
- Commercial registry is empty; no live partner should be inferred.
- Registry validation and redirect-time status, HTTPS, review-date and expiry checks are implemented.
- Provider-specific revenue reconciliation, live AdSense setup and qualified lead delivery remain open.
- Current CI must be inspected after the latest changes; production behavior is not established by source-tree tests.

## P0-S5 — mandatory release gates

- Identify the authoritative hosting project and production hostname from account/project configuration, not historical prose alone.
- Resolve conflicting references to Cloudflare Pages/`vrenum.app` and the separate `myglobalroute.com` hostname before setting canonical metadata.
- Verify the deployed commit matches current `main`.
- Run `npm run deploy:verify` against the confirmed origin after it is reachable.
- Verify country/pathway deep links, assets, JSON data, calculator and recommendation behavior.
- Restore canonical, Open Graph and sitemap absolute URLs only after origin confirmation.
- Audit CSP against the actual deployed third-party inventory.
- Resolve issue #2 with appropriate branch protection/checks and an explicit repository visibility decision.
- Record evidence and close P0 only when every exit condition in the delivery plan passes.

## Critical distinctions

- **Evidence complete vs pathway promoted:** material evidence alone does not promote a route.
- **Source-tree CI vs production verification:** local tests cannot prove a host serves the expected commit.
- **Monetization strategy vs implementation vs revenue:** documentation, safe foundations and actual provider-verified earnings are different milestones.
- **Ad slot vs live advertisement:** slot hosts are not a reason to activate an unapproved network.
- **MRR vs variable revenue:** subscription recurring revenue remains separate from ads, one-off referral and lead payments.
- **Commercial visibility vs route ranking:** payout must not determine migration eligibility or recommendation ordering.

## Next execution sequence

1. Inspect current Actions results and run the available unit/build/data/browser checks.
2. Fix failures from consent, slot wiring, registry validation or redirect changes.
3. Confirm Netlify function bundling/runtime compatibility, but do not assume Netlify is the production host.
4. Resolve the authoritative production origin and proceed through P0-S5.
5. Complete provider-specific monetization only when actual account/partner details and consent gates exist.
6. Continue evidence freshness and targeted migration-intelligence improvements without weakening route promotion rules.

If CI is unavailable, continue independent implementation and record **Not Tested — CI unavailable**. Do not claim a green test or production pass without evidence.
