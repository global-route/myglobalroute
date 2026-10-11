# Active Sprint — Production Integrity & Migration Intelligence

**Reconciled:** 2026-10-11 | **Branch:** `main` | **Verified implementation SHA:** `e7ccd592b703d62867267ddb5573b73a2d2bc0ea` | **Current documentation/CI head:** `933ca27d1542083078de104e2ac3550d8fde59c5`  
**Status:** P0-S5 active and externally blocked; data and route-quality work continues concurrently  
**Release:** **NO-GO**

## Verified checkpoint

- Quality Gate [PASS](https://github.com/global-route/myglobalroute/actions/runs/38116957166) — 17 suites / 113 tests; 0 dependency vulnerabilities; data validation passed; build integrity and SEO/A11y checked 168 generated HTML files.
- Lint [PASS](https://github.com/global-route/myglobalroute/actions/runs/38116957132).
- Browser Smoke [PASS](https://github.com/global-route/myglobalroute/actions/runs/38116957147).
- All three runs completed on the same current `main` SHA `933ca27d1542083078de104e2ac3550d8fde59c5`; implementation changes in the tested tree are through `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`.
- 26 countries; 56 pathways (52 publishable / 4 research_required); 193 evidence records.
- Latest recorded freshness report: 193 current / 0 overdue / 0 missing / 0 invalid.
- 9 structured requirement declarations across 2 pathways (UK Skilled Worker and Canada study); 54/56 pathways have no structured declarations.
- `countries.json` `dataset.asOf=2026-09-05` is stale; do not bump it without reviewing the 26 source anchors.

## Current task board

| ID | Task | Status | Next action / exit condition |
|---|---|---|---|
| P0-S1 | Exact-subroute closure | **Complete with explicit blocked candidates** | Four promoted subroutes align to canonical records; AU subclass 189 and Italy Flussi remain research_required until exact-source gaps close |
| P0-S2 | Audit pathway evidence gaps | **Audit complete; source work ongoing** | Four canonical pathways remain research_required; refresh claims as sources/policy require, never promote by count |
| P0-S3 | Data/recommendation quality gate | **Source-tree verified** | Validators, freshness, tests, build integrity and SEO/A11y pass on assessed SHA |
| P0-S4 | Browser/source-tree gate | **Source-tree verified** | Browser Smoke passes; production behavior remains separate |
| P0-S5 | Deployment verification / Phase 0 exit | **Active / blocked** | Confirm host, domain, deployed SHA, live CSP, production smoke and owner branch rules |
| P1-DATA | Country-source freshness | **Open / next** | Review all 26 source anchors before changing `retrievedAt`, `reviewAfter` or `dataset.asOf` |
| P1-REQ | Structured requirements | **Open / active** | Add exact-source conditional requirements to priority routes; test date/family/region/exceptions |
| P1-ROUTE | Recommendation quality | **Open** | Test stale/mismatched evidence, insufficient funds, missing profile, alternatives, exceptions and no-match states |
| P1-SEO | Editorial/technical SEO | **Open** | Clean legacy links/metadata; absolute canonicals and sitemap wait for confirmed origin |
| P1-PRIV | Privacy/compliance/accessibility | **Open** | Data lifecycle, consent, legal review and real-browser accessibility/performance |
| P1-REV | Monetization readiness | **Foundations only; not live** | Provider approval, consent, disclosures and reconciliation before activation |

## Execution order

1. **P0-S5 external gate:** owner confirms provider/project/custom domain; reconcile Worker `myglobalroute`, observed Cloudflare build label `globalroute`, and Netlify config without renaming or DNS changes by inference.
2. Capture deployed SHA and compare live registries/assets with source; run `npm run deploy:verify` and route/calculator smoke tests against the confirmed origin.
3. Inspect actual live CSP/security headers and obtain owner-level branch-protection/ruleset plus required-check evidence.
4. **P1-S1 data refresh:** work through `NEXT_SPRINT_P1_DATA_REFRESH.md` country by country; preserve dates and `dataset.asOf` until the checklist has auditable outcomes for all 26 anchors.
5. **P1-REQ/P1-ROUTE:** add exact-source conditional requirements and route evaluation tests, then verify all three workflows on one SHA.
6. Continue SEO/privacy/accessibility/monetization readiness without guessing host identity or activating providers.

## Acceptance rules

- Re-run all three CI workflows on the same SHA after changes.
- Implementation requires docs and tests; a task is not complete merely because a file exists.
- Do not treat the 26-country registry as fully researched, or absent requirements as no requirements.
- Do not promote research-required routes without current exact-scope primary evidence.
- Do not claim production readiness or activate monetization based on CI alone.


## Current-head verification — 2026-10-11

Current main SHA: `933ca27d1542083078de104e2ac3550d8fde59c5` (documentation/checklist update); verified implementation SHA: `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`. Quality Gate PASS (17 suites / 113 tests): https://github.com/global-route/myglobalroute/actions/runs/38116957166. Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38116957132. Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38116957147. Registry: 26 countries, 56 pathways (52 publishable / 4 research_required), 193 evidence records; freshness inventory 193 current / 0 overdue / 0 missing / 0 invalid review dates. CI warns that country dataset metadata `dataset.asOf=2026-09-05` is 36 days old. The source inventory checklist is prepared, but the 26 registered country anchors have not all been substantively reviewed. Phase 0 is NOT complete; P0-S5 remains externally blocked on authoritative production host/domain, deployed SHA, live CSP/security headers, production smoke and owner-level branch protection.

## Ordered next work

1. P0-S5 external release gate: confirm provider/project/domain, deployed revision, live security headers and branch rules; do not infer the host.
2. P1-S1 source refresh: execute NEXT_SPRINT_P1_DATA_REFRESH.md across all 26 registry entries; do not advance dates before actual source review.
3. P1-REQ: expand exact-source conditional requirements and tests for effective date, family size, region, costs and exceptions.
4. P1-ROUTE: add route-safety tests for missing inputs, stale/mismatched evidence, alternatives and no-match.
5. Keep Phase 0/1 open until documented exit gates are genuinely met.
