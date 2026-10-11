# Active Sprint — Production Integrity & Migration Intelligence

**Reconciled:** 2026-10-11 | **Branch / SHA:** `main` / `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`  
**Status:** P0-S5 active and externally blocked; data and route-quality work continues concurrently  
**Release:** **NO-GO**

## Verified checkpoint

- Quality Gate [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182546)
- Lint [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182590)
- Browser Smoke [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182545)
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

1. Confirm provider/project/custom domain from account settings; reconcile Worker `myglobalroute`, observed Cloudflare build label `globalroute`, and Netlify config.
2. Capture deployed SHA and compare live registries/assets with this source head.
3. Run `npm run deploy:verify` and route/calculator smoke tests against confirmed origin.
4. Inspect actual live CSP/security headers.
5. Obtain owner-level branch protection/ruleset and required-check evidence.
6. Source-review all 26 country records before refreshing metadata.
7. Expand conditional route requirements and route evaluation tests.
8. Continue SEO/privacy/accessibility/monetization readiness without guessing host identity or activating providers.

## Acceptance rules

- Re-run all three CI workflows on the same SHA after changes.
- Implementation requires docs and tests; a task is not complete merely because a file exists.
- Do not treat the 26-country registry as fully researched, or absent requirements as no requirements.
- Do not promote research-required routes without current exact-scope primary evidence.
- Do not claim production readiness or activate monetization based on CI alone.
