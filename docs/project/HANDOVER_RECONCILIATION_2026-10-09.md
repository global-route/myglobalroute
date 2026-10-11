# Handover Reconciliation — 2026-10-09

## Purpose and authority

This record reconciles the prior handovers, active sprint, P0 delivery plan, revenue task and release records. It is a planning/control document, not evidence that tests passed or production is healthy.

**Authoritative status rule:** the current GitHub `main` head, current registry contents, completed CI runs and hosting-provider deployment records outrank old prose and historical commit SHAs. Refresh all evidence before changing a status to verified.

## Current release decision

**Source-tree CI is GREEN; production release and live monetization remain NO-GO until their respective external gates are evidenced.**

At `c1670297f7e4846cb1ffd35a955e78f2da678e50`, Quality Gate passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017870)), Lint passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017906)), and Browser Smoke passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017883)). These runs verify source-tree behavior only; they do not establish the production origin or deployed SHA. Recheck if `main` advances.

## Reconciled workstreams

### P0-S5 — Deployment verification and release exit (active, blocked)

Required:
- Identify hosting provider, project/site, domain mapping and deployment owner from provider-account or deployment configuration.
- Verify the deployed commit SHA and expected app content.
- Run production verification only against the confirmed, reachable origin.
- Verify deep links, static assets, country/pathway JSON, calculator and route recommendations.
- Restore canonical/Open Graph/sitemap absolute URLs only after the production origin is confirmed.
- Audit CSP and third-party inventory against the actual deployed environment.
- Resolve repository-hardening issue #2, including appropriate main-branch protections/checks and an explicit visibility decision.

Historical references to Cloudflare Pages/`vrenum.app`, public `myglobalroute.com` content, or a Netlify Function do not independently establish the production host. Do not guess the origin.

### P0-S3 / P0-S4 — Revalidate on current main

Previously recorded September passes are historical. Run and record, against one explicit SHA:
- data/evidence/pathway validation;
- unit tests and route-safety/promotion-boundary tests;
- build and generated-output verification;
- SEO/accessibility checks and lint;
- browser E2E including consent grant/decline, persisted choice, no fake ad without a provider, and Find My Route ad exclusion.

For each gate record PASS, FAIL, or NOT TESTED with command/workflow URL, SHA and concise evidence. Do not convert a queued, in-progress, missing or empty status into PASS.

### Migration-intelligence data baseline

The current `src/data/pathways.json` file was directly recounted during this review: 56 pathways, 52 `publishable`, 4 `research_required`, spanning 26 distinct country IDs. Four records have empty/missing evidence-ID arrays. This is a source-file recount, not a successful execution of the repository's validator; treat the full evidence boundary as unverified until `npm run data:validate` passes on a recorded SHA. The evidence registry has now been independently recounted from all 29 JSON files: 18 records in `primary-source-verified.json` plus 175 records across 28 addenda files, for **193 total records**. The Quality Gate data-validation step also passed on the recorded CI SHA.

**Plan correction:** older P0-S2 prose that says to audit 24 research-required pathways conflicts with the later recorded 52/4 state. Do not execute a 24-pathway backlog from stale prose. Recompute current pathway status; then prioritize only actual unresolved candidates and evidence freshness gaps. Preserve nulls and research-required status when exact-scope primary evidence is missing.

### P1-REV — Revenue readiness (concurrent; not a release bypass)

Implemented foundations recorded: provider-neutral analytics contract, consent UI/persistence, configurable placement hosts, empty commercial registry, validation and fail-closed redirect checks. Current-head/browser verification remains pending. No live ad provider, approved partner, actual revenue or MRR is implied.

Keep ad/partner activation and lead collection blocked until the actual origin, consent/privacy, provider approval, runtime compatibility, secure delivery and reconciliation gates are satisfied. Commercial payout must not influence pathway eligibility, evidence state or route ranking.

## Ordered next actions

1. Inspect the latest `main` SHA and current Actions workflow/job results.
2. Re-run/fix current-head CI and browser coverage; update the release record with actual outcomes.
3. Regenerate country/pathway/evidence counts and reconcile stale backlog figures in the P0 plan.
4. Obtain authoritative hosting-project/domain/deployed-SHA evidence; if access is unavailable, keep this blocker explicit while completing independent code/data tasks.
5. Execute production smoke, origin-dependent SEO and CSP checks only after origin verification.
6. Continue evidence freshness, route-engine boundary tests and other independent migration-intelligence tasks.
7. Update this handover, active sprint and release record after each verified delivery wave.

## Status vocabulary

- **Implemented:** code/docs exist; behavior may still be unverified.
- **Verified:** the named test/check completed successfully against a recorded SHA/environment.
- **Blocked:** an identified prerequisite is unavailable; list the exact evidence needed.
- **Not tested:** no valid result exists. If CI is unavailable, use `Not Tested — CI unavailable`.
- **Historical:** previously reported result; not a claim about current main.

## Handover acceptance checklist

- [x] Record current main SHA and current workflow results (`c1670297f7e4846cb1ffd35a955e78f2da678e50`; Quality Gate, Lint and Browser Smoke all passed).
- [x] Recount pathway totals/statuses from the current source file (56 total; 52 publishable; 4 research-required; 26 country IDs).
- [x] Run repository validation and independently recompute evidence-record totals (193 records across 29 evidence JSON files; Quality Gate data-validation step passed on the recorded CI SHA).
- [ ] Reconcile P0-S2 backlog to the actual registry.
- [ ] Record verified hosting project, origin and deployed SHA, or retain the explicit blocker.
- [x] Record current-head test outcomes without inference; exact run links are in `docs/project/RELEASE_VERIFICATION_2026-10-08.md`.
- [ ] Keep production release and monetization NO-GO until all relevant gates pass.


### Validator audit finding — evidence-date integrity

A source review of `scripts/validate-data.js` found that evidence records require `retrievedAt` and `reviewAfter` to be non-empty, but the validator does not currently enforce that these values are real ISO calendar dates. It compares `reviewAfter` to the validation date using JavaScript date parsing; malformed values can therefore avoid a meaningful due-for-review warning. `effectiveDate`, when present, is also not format-validated. This is a **code-level gap identified by inspection**, not a runtime failure reproduced in tests.

**Next implementation task:** add strict calendar-date validation for required evidence dates and optional `effectiveDate`; keep expired-but-valid review dates as warnings rather than silently promoting or demoting pathways; add unit cases for malformed dates, impossible dates (for example, February 30), missing required dates, and valid dates. Then run the validator and complete verification suite on the resulting commit. Until then, current evidence freshness warnings and the full validation result remain unverified.


## Current-head verification delta — 2026-10-09

Strict ISO calendar-date validation has been implemented in `scripts/date-utils.js` and `scripts/validate-data.js`, with unit coverage in `tests/date-utils.test.js`. The Quality Gate and Lint passed on `542bba327342e699bd2800a1865a1bd4c6bb8099`; the Quality Gate includes data validation, unit tests, build, generated-output verification and SEO/accessibility checks. Browser Smoke on the prior SHA failed because two consent tests could not find the consent banner. `.eleventy.js` now maps CSS and JS to the root-relative paths used by the HTML. The retest was still in progress at the time of this update, so the browser gate remains open. Production stays NO-GO pending origin and deployed-SHA verification.


Follow-up browser diagnosis: Browser Smoke on `542bba327342e699bd2800a1865a1bd4c6bb8099` confirmed the asset mapping change restored the consent banner, then failed on two monetization assertions. The legacy `src/js/admob-loader.js` was still configured to load a placeholder AdSense publisher script, and `.ad-unit` CSS overrode the HTML `hidden` attribute. The loader now fails closed without a verified publisher, its ID check is corrected, and inactive ad/partner slots are forced hidden in CSS. These changes are in `3dcbc1e9ee3719aa4b3eac6dda1fed5ce4ef0198`, `ed3155c43532628c3f26bcb56588620680adff28`, and `fa3732f60f915758e25178597a8e0d53320f506b`. Browser Smoke subsequently passed on `c1670297f7e4846cb1ffd35a955e78f2da678e50`; exact run links are in the release record. Production remains NO-GO until hosting-origin/deployed-SHA verification passes.


## Current-head update — 2026-10-11

Quality Gate ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017870)), Lint ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017906)) and Browser Smoke ([run](https://github.com/global-route/myglobalroute/actions/runs/38103017883)) all passed on `c1670297f7e4846cb1ffd35a955e78f2da678e50`. Quality Gate passed 75/75 unit tests. The evidence registry was independently recounted at 193 records across 29 JSON files. Route-engine runtime guards now require evidence IDs and HTTPS source provenance; a known positive funds threshold blocks missing/invalid/insufficient budgets. `scripts/verify-deployed-site.js` now rejects redirects for required routes and checks app identity, critical asset availability and exact equality between deployed and checked-out country/pathway registries. These are source-tree checks; authoritative hosting project, production origin, deployed SHA and live-origin smoke remain unresolved. Repository branch-protection status could not be rechecked with the available integration permissions; issue #2 remains open.
