# Handover Reconciliation — 2026-10-09

## Purpose and authority

This record reconciles the prior handovers, active sprint, P0 delivery plan, revenue task and release records. It is a planning/control document, not evidence that tests passed or production is healthy.

**Authoritative status rule:** the current GitHub `main` head, current registry contents, completed CI runs and hosting-provider deployment records outrank old prose and historical commit SHAs. Refresh all evidence before changing a status to verified.

## Current release decision

**Source-tree CI is GREEN; production release and live monetization remain NO-GO until their respective external gates are evidenced.**

At `12cca13f8ddfe3c6976e29b3965435fe1bd25657`, Quality Gate passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141925)), Lint passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141947)), and Browser Smoke passed ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141902)). These runs verify source-tree behavior only; they do not establish the production origin or deployed SHA. Quality Gate reports 75/75 unit tests (12 suites). Recheck if `main` advances.

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

The current `src/data/pathways.json` file was directly recounted during this review: 56 pathways, 52 `publishable`, 4 `research_required`, spanning 26 distinct country IDs. Four records have empty/missing evidence-ID arrays. The source-file recount is backed by the Quality Gate's successful data-validation step on code checkpoint `12cca13f8ddfe3c6976e29b3965435fe1bd25657`. The evidence registry has now been independently recounted from all 29 JSON files: 18 records in `primary-source-verified.json` plus 175 records across 28 addenda files, for **193 total records**. The Quality Gate data-validation step also passed on the recorded CI SHA.

**Plan correction:** older P0-S2 prose that says to audit 24 research-required pathways conflicts with the later recorded 52/4 state. Do not execute a 24-pathway backlog from stale prose. Recompute current pathway status; then prioritize only actual unresolved candidates and evidence freshness gaps. Preserve nulls and research-required status when exact-scope primary evidence is missing.

### P1-REV — Revenue readiness (concurrent; not a release bypass)

Implemented foundations recorded: provider-neutral analytics contract, consent UI/persistence, configurable placement hosts, empty commercial registry, validation and fail-closed redirect checks. Quality Gate, Lint and Browser Smoke passed on the last fully tested code checkpoint `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; no live ad provider, approved partner, actual revenue or MRR is implied.

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

- [x] Record current main SHA and current workflow results (`12cca13f8ddfe3c6976e29b3965435fe1bd25657`; Quality Gate, Lint and Browser Smoke all passed).
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


Follow-up browser diagnosis: Browser Smoke on `542bba327342e699bd2800a1865a1bd4c6bb8099` confirmed the asset mapping change restored the consent banner, then failed on two monetization assertions. The legacy `src/js/admob-loader.js` was still configured to load a placeholder AdSense publisher script, and `.ad-unit` CSS overrode the HTML `hidden` attribute. The loader now fails closed without a verified publisher, its ID check is corrected, and inactive ad/partner slots are forced hidden in CSS. These changes are in `3dcbc1e9ee3719aa4b3eac6dda1fed5ce4ef0198`, `ed3155c43532628c3f26bcb56588620680adff28`, and `fa3732f60f915758e25178597a8e0d53320f506b`. Browser Smoke subsequently passed on `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; exact run links are in the release record. Production remains NO-GO until hosting-origin/deployed-SHA verification passes.


## Current-head update — 2026-10-11

Quality Gate ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141925)), Lint ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141947)) and Browser Smoke ([run](https://github.com/global-route/myglobalroute/actions/runs/38103141902)) all passed on `12cca13f8ddfe3c6976e29b3965435fe1bd25657`. Quality Gate passed 75/75 unit tests. The evidence registry was independently recounted at 193 records across 29 JSON files. Route-engine runtime guards now require evidence IDs and HTTPS source provenance; a known positive funds threshold blocks missing/invalid/insufficient budgets. `scripts/verify-deployed-site.js` now rejects redirects for required routes and checks app identity, critical asset availability and exact equality between deployed and checked-out country/pathway registries. These are source-tree checks; authoritative hosting project, production origin, deployed SHA and live-origin smoke remain unresolved. Repository branch-protection status could not be rechecked with the available integration permissions; issue #2 remains open.

## Product-integrity audit — 2026-10-11

A direct schema audit found a material mismatch between route data and the recommendation interface:

- All 26 country records currently have dataStatus = evidence_required, because aggregate country cost/timeline/approval-rate fields remain null and unverified.
- The canonical pathway registry contains 56 records (52 publishable, 4 research_required); all 52 publishable pathways have non-empty evidence IDs and HTTPS source URLs in the source-file audit.
- The prior route engine also required country.dataStatus = publishable, which made every route ineligible despite pathway-level evidence passing. That coupled two different evidence scopes and prevented the 52 exact-pathway records from being considered.
- The route engine now evaluates pathway-level status/provenance independently from aggregate country-level fields. It must not infer country costs, timelines or approval rates from a pathway source.
- The registry has zero machine-readable minFunds, minMonthlyIncome, minExperienceYears, or language fields; pathway types currently comprise 30 work and 26 study records, with no business records. The old UI collected budget, income and experience inputs even though the current schema could not use them. Those misleading inputs have been removed; business is explicitly marked not yet covered; no-goal submissions no longer receive arbitrary rankings.
- The Find My Route UI now describes results as goal matches, not eligibility assessments, and calls out missing structured filters. An E2E test covers the goal-only flow and disclosure.

**Verification status:** the latest code commits are in GitHub Actions, but a complete green workflow set for the new route-engine/UI/E2E changes has not yet been confirmed in this handover update. Keep the new changes as pending verification until Quality Gate, Lint and Browser Smoke finish successfully on one SHA. Previous green runs on 12cca13f8ddfe3c6976e29b3965435fe1bd25657 do not verify later code.

**Next implementation task:** build a pathway-level, evidence-backed requirement schema (with explicit units, currency, jurisdiction, effective date, and evidence IDs) for finances, experience, language and other applicant-specific requirements. Enable each input only when its matching structured field has complete source provenance and passing validation. Do not substitute country-wide aggregate data or guessed thresholds.

## Structured pathway requirements — 2026-10-11

Implemented the first schema/validation layer for requirement-level matching:
- `src/data/pathway-requirement-schema.json` defines allowed requirement fields, expected types, evidence fields and anti-inference policy.
- `scripts/pathway-requirements.js` reads that schema as its source of truth and validates structured values.
- `scripts/validate-data.js` now rejects declared requirements with missing or wrong-scope evidence, invalid dates, non-HTTPS sources, jurisdiction/source mismatches, invalid money currencies/periods, or malformed numeric/language/boolean values.
- `tests/pathway-requirements.test.js` covers schema behavior and negative provenance cases.

No unverified route thresholds were added. Existing narrative claims do not automatically become numeric matcher inputs; each structured value must cite evidence attached to the exact pathway and matching evidence field. Requirement absence remains unknown, not zero or unrestricted. Currency conversion is not allowed without separate dated FX evidence.

**Verification pending:** wait for the new Quality Gate, Lint and Browser Smoke workflows to finish on the same latest main SHA, inspect any failures, and update the release record from actual results.


### Requirement schema guardrails — 2026-10-11

The structured pathway-requirements validator now reads its allowed fields/types from `src/data/pathway-requirement-schema.json` and is applied to both canonical pathways and exact subroutes. It requires exact-route evidence (no inheritance), expected evidence field, matching HTTPS source and jurisdiction, real effective dates, explicit money currency/period, correct units, and rejects evidence past its `reviewAfter` date from backing a structured match. The schema covers money, monthly income, experience, language tests, qualifications, job offers, admission offers and sponsorship.

No thresholds were guessed or bulk-converted from narrative evidence. Current source-tree verification for the newest implementation is pending; the latest Quality Gate, Lint and Browser Smoke must pass on one SHA before this lane can be called verified.

## Current-head addendum — 2026-10-11

The last verified source-code SHA is `739b4121b2ddb3460d1ed52b171cd89fcd80f046`: Quality Gate, Lint and Browser Smoke passed ([Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38106462155), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38106462131), [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38106462148)). A subsequent CI change, `c4afaae4a7f695eea19d8bed8a2930194bd0e06a`, adds the existing structured-requirement/evidence-freshness readiness report as an explicit Quality Gate step. CI for that SHA was in progress when this addendum was written; the docs-only follow-up commit may also retrigger checks, so always use live workflow status rather than this snapshot.

This report is a visibility/control improvement, not evidence refresh. The validator's last successful output on 2026-10-11 was 26 countries, 56 pathways, 193 evidence records, 56/56 pathways with some evidence and material-field coverage, 52 publishable and 4 research-required; it also emitted three subroute-status warnings. Do not equate this structural pass with current evidence freshness or legal/eligibility correctness. The readiness report should drive an exact evidence-refresh queue; do not extend review dates, infer thresholds, or promote a route without current route-scoped primary-source review.

**Next sequence:** (1) verify all three workflows on the latest `main` SHA; (2) review readiness output and prioritize expired/high-impact official-source evidence; (3) add/verify structured route requirements only when supported by exact-source evidence; (4) resolve the verified hosting project/domain/deployed SHA and complete P0-S5 production checks; (5) update this handover and release record from completed evidence, not assumptions.
