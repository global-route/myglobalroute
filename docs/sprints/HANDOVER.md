# Handover — Production Integrity, Migration Intelligence & Revenue Readiness

> **Reconciliation authority:** read [`docs/project/HANDOVER_RECONCILIATION_2026-10-09.md`](../project/HANDOVER_RECONCILIATION_2026-10-09.md) first. This document is the canonical cross-handover status and ordered next-action record; refresh live main/CI/registry evidence before changing any status.

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

## Current source-tree verification — 2026-10-11

Current `main` SHA recorded at verification: `12cca13f8ddfe3c6976e29b3965435fe1bd25657`. Quality Gate, Lint and Browser Smoke all completed successfully on that exact SHA. See [`docs/project/RELEASE_VERIFICATION_2026-10-08.md`](../project/RELEASE_VERIFICATION_2026-10-08.md) for workflow links and scope. Recheck all gates if `main` advances. This is not proof of a live deployment.

## Current monetization implementation

- Provider-neutral analytics contract, explicit consent UI and shared loading are implemented.
- Ad and partner inventory is configuration-driven, with consent-gated hosts on selected pages.
- Find My Route remains excluded from display advertising.
- Commercial registry is empty; no live partner should be inferred.
- Registry validation and redirect-time status, HTTPS, review-date and expiry checks are implemented.
- Provider-specific revenue reconciliation, live AdSense setup and qualified lead delivery remain open.
- Source-tree CI is green at the recorded SHA, including browser smoke for consent and inactive ad placements; production behavior is not established by source-tree tests.

## P0-S5 — mandatory release gates

- Identify the authoritative hosting project and production hostname from account/project configuration, not historical prose alone.
- Resolve conflicting references to Cloudflare Pages/`vrenum.app` and the public `myglobalroute.com` consultancy/services site before setting canonical metadata. A public check could not retrieve `vrenum.app`; that alone does not prove it is down or establish hosting ownership.
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

1. Read `docs/project/HANDOVER_RECONCILIATION_2026-10-09.md` and inspect the latest `main` SHA plus completed Actions jobs.
2. Recheck current-head data validation, unit tests, build/generated-output checks, SEO/accessibility, lint and browser E2E if code changes; all three source-tree gates passed at `12cca13f8ddfe3c6976e29b3965435fe1bd25657` (Quality Gate: 75/75 unit tests).
3. Recompute pathway/evidence counts. Do not act on the stale P0-S2 instruction to audit 24 pathways until current registry state is verified.
4. Establish the authoritative hosting project, domain mapping and deployed SHA from provider configuration; do not infer Netlify or Cloudflare from historical notes.
5. Run production smoke and origin-dependent SEO/CSP checks only after origin confirmation.
6. Continue independent evidence-freshness and route-safety work while external hosting evidence is unavailable.
7. Keep live monetization and lead collection gated until their own prerequisites pass.

If CI is unavailable, continue independent implementation and record **Not Tested — CI unavailable**. Do not claim a green test or production pass without evidence.


## Current verification delta — 2026-10-11

- `main` code checkpoint `12cca13f8ddfe3c6976e29b3965435fe1bd25657`: Quality Gate, Lint and Browser Smoke all passed at `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; Quality Gate reports 75/75 unit tests.
- Evidence records independently recounted: 193 records across the primary registry and 28 addenda files.
- Route engine now requires evidence IDs and HTTPS source provenance at runtime and blocks a known positive funds threshold when budget is missing, invalid, or insufficient.
- Production verifier now checks app identity, critical assets, direct 2xx routes and equality of deployed country/pathway registries to the checked-out source.
- Production origin and deployed SHA remain unverified. Netlify and Cloudflare configuration both exist in the repository; this is not proof of which provider owns production. Do not run the manual Production Smoke workflow until the authoritative origin is confirmed.

## Route-matching integrity correction — 2026-10-11

The canonical registry has 52 publishable pathway records with evidence IDs and HTTPS source URLs, but all 26 country records remain evidence_required because aggregate country costs/timelines/rates are still unverified. The route engine previously used country status as a hard veto for every route, conflating country-wide aggregate data with exact-pathway evidence. That veto has been removed; pathway status/provenance remains mandatory, and no country-level values are inferred.

The schema has no machine-readable route-level budget, income, experience or language thresholds, and no business pathways (30 work / 26 study records). The Find My Route UI therefore no longer asks for budget/income/experience values it cannot use, labels results as goal matches rather than eligibility decisions, disables the uncovered business option, and avoids arbitrary rankings when no goal is selected. E2E coverage was added.

**New code verification is pending** until Quality Gate, Lint and Browser Smoke pass on the same new SHA. The prior green SHA is not evidence for these later changes. Production origin/deployed SHA, CSP review and branch hardening remain separate release blockers.

## Latest verified source-tree head — 2026-10-11

`main` head: `c224696bdc4487dd17a7b9b28304f4ad25012f34`.

- [Quality Gate PASS](https://github.com/global-route/myglobalroute/actions/runs/38105471129)
- [Lint PASS](https://github.com/global-route/myglobalroute/actions/runs/38105471109)
- [Browser Smoke PASS](https://github.com/global-route/myglobalroute/actions/runs/38105471079)

The browser smoke assertion was corrected to inspect the native `option.disabled` property, avoiding a Playwright matcher false failure. All three workflows pass on the same head. This is not production verification. Continue with exact-route authoritative data, then verify host/project and deployed commit; do not invent missing financial, language or experience thresholds. Repository issue #2 remains open and visibility must not be changed without project-owner confirmation.


## Evidence refresh delta — 2026-10-11

The current `GB-skilled-worker` structured requirement evidence was rechecked against the two official GOV.UK pages on 2026-10-11. The standard salary baseline remains £41,700 per year or the occupation-specific going rate, whichever is higher; the record retains lower-threshold and transitional caveats. Only those two records were refreshed (`retrievedAt=2026-10-11`, `reviewAfter=2026-11-10`). Other records were not implicitly refreshed. The source-tree Quality Gate, Lint and Browser Smoke passed on pre-refresh code SHA e3bc6ee0b56178b3f9b4a1fb2b6616ee28edb47e; the evidence-only commit must still complete current-head CI. Production host/deployed SHA, CSP and branch-hardening gates remain unresolved; release stays NO-GO.


## Readiness-report integrity follow-up — 2026-10-11

The next code increment separates valid overdue evidence from missing/invalid review dates in the readiness report, including impossible calendar dates. This avoids silently omitting malformed freshness metadata from the review queue. Regression tests are added; current-head Quality Gate, Lint and Browser Smoke are required before marking the increment verified. This is a diagnostic enhancement, not a substitute for strict data validation or source re-verification.


## Current checkpoint — 2026-10-11

Cloudflare's GitHub integration reports a successful Workers production build check on current source SHA 4ecdbf0e0abd411b59b546251ea1569cef43a998 ([check run](https://github.com/global-route/myglobalroute/runs/114384348240)). This confirms a production build integration, but it does not by itself establish the authoritative public hostname or prove that the public site's content and registries match that SHA. Run this verifier only after the origin is independently confirmed. The repository is public; branch protection status remains unverified because the available integration received HTTP 403 for the protection endpoint.


## Evidence freshness inventory — 2026-10-11

Use `npm run evidence:freshness` to inventory every primary/addendum evidence record by country, route, field, source URL and review status. Statuses are current, overdue, missing review date and invalid review date. The report is part of `npm run verify`; it does not refresh evidence automatically. Refresh dates only after direct official-source review, preserve unknowns, and keep unsupported country-level metrics unfilled. Prioritize structured-requirement dependencies and stale material claims on publishable routes, then work through remaining countries in a tracked queue.


## Production verification guard — 2026-10-11

The production verifier now requires an HTTPS origin and rejects HTTP before network requests. Cloudflare's production build check is available for the current repository SHA, but authoritative hostname and deployed-content equality are not yet established. Repository is public; branch protection remains unverified because the GitHub integration cannot read branch protection settings (HTTP 403). Do not close issue #2 or mark release GO until owner-level branch settings and live-host verification are complete.


## CI freshness-inventory wiring — 2026-10-11

Corrected .github/workflows/quality.yml: the evidence-readiness step now runs both `npm run requirements:readiness` and `npm run evidence:freshness`. The previous Quality Gate was green (17 suites, 108 tests), but log inspection showed the newly added inventory command had not been called by the workflow because CI invokes individual steps instead of `npm run verify`. The new head must pass all three workflows; inspect the Quality Gate log to confirm the inventory actually runs.


## Evidence refresh batch 2 — Sweden and Norway — 2026-10-11

Official source review refreshed four overdue Sweden/Norway records, including the Swedish study maintenance threshold (SEK 10,656/month for 2026 applications), the 15-hour weekly work limit for bachelor's/master's study permits granted on/after 2026-06-11 (with exceptions), post-study job-seeker permit conditions, and Norway's programme-dependent study permit/financial requirements. Retrieval and review dates were changed only for these checked records; no universal Norway funds amount was inferred. The freshness inventory's pre-batch baseline was 22 overdue records across 10 countries; rerun the report after this commit to obtain the updated counts.


## Evidence refresh batch 3 — Austria, Finland and Portugal — 2026-10-11

Official-source review refreshed five overdue records and aligned the duplicate Finnish study-finance record: Austria's 20-hour student work permit condition and 12-month graduate job-search extension; Finland's EUR 800/month / EUR 9,600 student maintenance requirement and study-permit scope; and Portugal's remote-work residence document requirements. Only reviewed records had their retrieval/review dates changed; no threshold was inferred from a document checklist. The freshness inventory and full CI must be rerun on the resulting head.


## Evidence refresh batch 4 — Japan, Luxembourg, New Zealand and Sweden — 2026-10-11

Official-source review refreshed five overdue records: Japan Student and Engineer/Specialist status scope; Luxembourg third-country salaried-worker authorisation sequence; New Zealand's 2026 skilled-residence policy changes; and Sweden's June 2026 work-permit policy, including salary transitions, comprehensive health insurance and employer-condition grounds. The Luxembourg student work-rights record is intentionally left overdue because the available English page was last updated in 2023 and the current rule was not independently confirmed. The evidence-freshness inventory and CI must be checked on the final head.


## Evidence refresh batch 5 — Luxembourg student rules — 2026-10-11

The previously held Luxembourg student work-rights record was refreshed after reviewing the current official French Guichet.lu page updated 2026-10-01. The claim now states the 15-hour weekly average limit and enumerated exceptions, and scopes post-study eligibility to qualifying graduates of a five-year university cycle who apply before their student permit expires. This supersedes the earlier handover note that the record remained overdue pending current-source confirmation.


## Remaining evidence blockers — 2026-10-11

After refreshing the current Luxembourg student rule page and aligning the duplicate Swedish study-maintenance evidence, two records still require source review: `NO-work-offer-verification-2026-09-07` and `PT-working-routes-2026-09-07`. Direct retrieval of the official UDI confirmation page returned HTTP 403; the AIMA work-route index timed out. Do not change either review deadline or infer that the source is unchanged. Use an accessible official page, an official downloadable notice, or keep both explicitly overdue. Re-run `npm run evidence:freshness` after this commit and use CI output as the authoritative inventory.


## Handover update — 2026-10-11 (P1-S1 execution)
- Machine-readable manifest created: `docs/data/country-source-review-manifest.json`.
- 26/26 anchors have outcomes; 24 official entry points/alternatives inspected. Luxembourg redirects to a general citizens page and needs a specific migration entry point. Russia remains a manual verification blocker. Human sign-off required.
- Austria and Czechia source URLs updated to official pages; only these per-country retrieval dates changed. Dataset-wide `asOf` unchanged.
- Added manifest generator/check, tests and verify-pipeline integration; added route-safety regression tests without inferring missing thresholds.
- GitHub reports `main` unprotected and rulesets empty. Host/provider, deployed SHA, live CSP/security headers and production smoke remain unverified.
- Do not mark P1-S1 complete until sign-off and same-SHA CI are recorded. Release remains **NO-GO**.


## Public-origin check — 2026-10-11

- Public origin check on 2026-10-11: `https://myglobalroute.com/` serves a visa-consultancy site branded “Global Routes,” with service charges and consultation pages, not the Global Route migration-intelligence application described by this repository. Do **not** assume it is this repo's production origin or set canonicals to it without owner confirmation.
- `https://vrenum.app/` was not accessible through the public-page inspection tool; that is inconclusive and does not prove the host is down.


## Structured requirements delta — 2026-10-11
- Three evidence-backed declarations added to UK Student, New Zealand Fee Paying Student and Ireland Critical Skills.
- Current coverage: 12 declarations across 5 of 56 pathways; 51 remain unstructured. Missing requirement data remains unknown.
- Validation regression checks exact-pathway evidence and scoped New Zealand funds conditions. P1-REQ remains open.
