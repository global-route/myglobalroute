# Global Route — Current Project Assessment

**Reconciled:** 2026-10-11 | **Branch:** main | **Assessed SHA:** `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`  
**Release readiness: NO-GO for production; source-tree CI is green.**

## Executive finding

Global Route has moved beyond a static-country/blog prototype. It now has a generated multi-page product, canonical pathway registry, pathway-scoped evidence, guarded route matching, data/build/SEO checks, browser smoke automation, a structured-requirements schema, freshness reporting, and fail-closed monetization foundations.

The main remaining risks are (1) unverified production host/deployed content/security, (2) stale country-dataset metadata and claims needing source-by-source revalidation, and (3) sparse structured pathway requirements. A green build or a record marked publishable is not a personalized legal eligibility verdict.

## Verified snapshot

| Area | Current state | Meaning |
|---|---|---|
| Current source | `e7ccd592b703d62867267ddb5573b73a2d2bc0ea` | Assessment baseline |
| Quality Gate | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182546) | Source-tree verification |
| Lint | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182590) | Source-tree verification |
| Browser Smoke | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38113182545) | Not production verification |
| Country registry | 26 records | Not 26 fully verified country profiles |
| Canonical pathways | 56: 52 publishable / 4 research_required | Publishability is evidence-scope-specific |
| Evidence inventory | 193 records | Still needs ongoing source review |
| Evidence freshness | Latest recorded report: 193 current, 0 overdue, 0 missing, 0 invalid | Review dates do not prove all sources were reopened today |
| Country metadata | `dataset.asOf=2026-09-05` | 36 days old; refresh only after reviewing all 26 source anchors |
| Structured requirements | 9 declarations across 2 pathways: 2 UK Skilled Worker + 7 Canada study family-size thresholds | 54/56 pathways have no structured declarations; this means unknown coverage, not no requirements |
| Aggregate country metrics | Costs, timelines and approval rates remain null/evidence-gated where unsupported | Correctly avoids fabricated estimates |
| Hosting | `wrangler.jsonc` names Worker `myglobalroute`; observed Cloudflare build service label was `globalroute`; Netlify config/functions also exist | Hosting identity unresolved; do not infer or change DNS/service names |
| Security/release | CSP configured in repo; live headers and deployed SHA not verified; branch-protection inspection returned 403 | Provider/owner evidence needed |
| Monetization | Consent, registry and fail-closed redirect foundations exist; no verified live provider/revenue | Keep activation gated |

## Completed work by phase

### Phase 0 — Production integrity foundations
- [x] Canonical runtime/build paths, generated routes and static output repaired.
- [x] Calculator/search foundations hardened; duplicate calculator logic removed.
- [x] Data/evidence validators, unit tests, build-integrity and SEO/accessibility gates implemented.
- [x] Browser Smoke and Lint pass on the assessed SHA.
- [x] Evidence freshness inventory runs in CI.
- [x] Promoted exact-subroute records are checked against matching canonical pathways and evidence coverage.
- [ ] Phase exit blocked by production host/domain, deployed SHA/content, live security headers, origin smoke and owner-level branch protection.

### Phase 1 — Migration intelligence foundation
- [x] 26-country registry, 56 canonical pathways and 193 evidence records exist.
- [x] Evidence provenance, freshness reporting and evidence-gated route statuses are implemented.
- [x] Unsupported aggregate country cost/timeline/rate values remain null.
- [ ] Country `asOf` metadata is stale; source-check all 26 records.
- [ ] Revalidate material pathway claims at exact legal scope.
- [ ] Four canonical pathways remain research_required.

### Phase 2 — Canonical product core
- [x] Find My Route / canonical matching foundations and generated source trails exist.
- [x] Zero-fit and arbitrary no-goal rankings are suppressed; country-level aggregate status is not used as a blanket veto for an evidenced pathway.
- [x] Structured requirement schema, conditional metadata validation and readiness report exist.
- [ ] Only 2/56 pathways have structured requirements; model exceptions, alternatives, dates, family size, region, tuition/funds separation and evidence freshness.
- [ ] Expand route evaluation tests and ensure uncertainty is surfaced; matches must not be described as legal eligibility decisions.

## Uncompleted work, in priority order

### P0 — production release blockers
1. Confirm authoritative hosting account/project, canonical hostname and custom-domain mapping from provider configuration.
2. Reconcile Worker name `myglobalroute`, observed Cloudflare build label `globalroute`, and Netlify configuration; do not guess the live provider.
3. Capture deployed source SHA and compare live registries, assets and routes with `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`.
4. Run `npm run deploy:verify` and smoke-test homepage, country/pathway deep links, JSON, calculator and route matching against the confirmed origin.
5. Inspect actual live CSP/security headers against the actual script/analytics/ad/partner inventory.
6. Obtain owner-level main-branch protection/ruleset and required-check evidence.
7. Keep all three CI workflows green on the same SHA after changes.

### P0 — data trust and route quality
8. Review all 26 country source anchors; update `retrievedAt`, `reviewAfter` and `dataset.asOf` only for sources actually checked.
9. Close or explicitly preserve evidence gaps for the four research-required pathways; do not promote by quota.
10. Expand structured requirements only with exact primary-source evidence and conditional rules.
11. Test stale/expired/mismatched evidence, insufficient funds, missing profile data, alternative routes, exceptions and no-match behavior.
12. Ensure every displayed requirement/recommendation maps to exact pathway evidence and source dates.

### P1 — trust, content and growth
13. Clean legacy blog/category links, duplicate/historical pages, internal links and editorial SEO/accessibility.
14. Complete privacy/data inventory, retention/deletion, consent evidence, analytics minimization, legal boundary and incident/contact ownership.
15. Verify real provider approvals/contracts, ad consent and placement behavior, commercial redirect ownership, disclosures and click/revenue reconciliation before activation.
16. Run live responsive, keyboard/accessibility, performance and CSP checks on the confirmed host.

### P2 — defer until launch controls are proven
17. Scale content, acquisition, newsletters, advanced personalization, lead marketplace, paid tiers and provider revenue reporting only after production/data/privacy gates pass.

## Important distinctions

- 26 countries ≠ 26 fully researched country profiles.
- 52 publishable pathway records ≠ 52 fully structured eligibility rules.
- Current evidence review dates ≠ proof every official source was re-opened today.
- Passing source-tree CI ≠ a verified live deployment.
- A configured monetization slot ≠ approved provider or real revenue.

**Recommended order:** resolve host and deployed identity; verify live security and production behavior; review 26 country sources; address four research-required pathways; expand structured route requirements and decision tests; complete privacy/SEO/accessibility; then activate growth. Production remains **NO-GO**.
