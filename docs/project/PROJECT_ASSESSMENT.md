# Global Route — Current Project Assessment

**Reconciled:** 2026-10-11 | **Branch:** main | **Last fully verified same-SHA CI checkpoint:** `95f960c081367305dea0144034d48a4ab7892426` | **Verified implementation SHA:** `95f960c081367305dea0144034d48a4ab7892426`  
**Release readiness: NO-GO for production; source-tree CI is green.**

## Executive finding

Global Route has moved beyond a static-country/blog prototype. It now has a generated multi-page product, canonical pathway registry, pathway-scoped evidence, guarded route matching, data/build/SEO checks, browser smoke automation, a structured-requirements schema, freshness reporting, and fail-closed monetization foundations.

The main remaining risks are (1) unverified production host/deployed content/security, (2) stale country-dataset metadata and claims needing source-by-source revalidation, and (3) sparse structured pathway requirements. A green build or a record marked publishable is not a personalized legal eligibility verdict.

## Verified snapshot

| Area | Current state | Meaning |
|---|---|---|
| Current source | `95f960c081367305dea0144034d48a4ab7892426` | Assessment baseline |
| Quality Gate | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38144112572) | 18 suites / 122 tests; 0 dependency vulnerabilities; manifest, build and SEO/A11y pass |
| Lint | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38144112454) | Implementation/data SHA `95f960c` |
| Browser Smoke | [PASS](https://github.com/global-route/myglobalroute/actions/runs/38144112490) | Source-tree only; not production verification |
| Country registry | 26 records | Not 26 fully verified country profiles |
| Canonical pathways | 56: 52 publishable / 4 research_required | Publishability is evidence-scope-specific |
| Evidence inventory | 193 records | Still needs ongoing source review |
| Evidence freshness | Latest recorded report: 193 current, 0 overdue, 0 missing, 0 invalid | Review dates do not prove all sources were reopened today |
| Country metadata | `dataset.asOf=2026-09-05` | 36 days old; refresh only after reviewing all 26 source anchors |
| Structured requirements | 12 declarations across 5 pathways: UK Skilled Worker, Canada study, UK Student, New Zealand Student and Ireland Critical Skills | 51/56 pathways have no structured declarations; this means unknown coverage, not no requirements |
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
- [ ] 12 declarations across 5/56 pathways (2 UK Skilled Worker + 7 Canada study family-size thresholds); 51 pathways have no structured declarations. Model alternatives/exemptions, date/region conditions, tuition/funds separation, stale-evidence behavior and route-quality cases.
- [ ] Expand route evaluation tests and ensure uncertainty is surfaced; matches must not be described as legal eligibility decisions.

## Uncompleted work, in priority order

### P0 — production release blockers
1. Confirm authoritative hosting account/project, canonical hostname and custom-domain mapping from provider configuration.
2. Reconcile Worker name `myglobalroute`, observed Cloudflare build label `globalroute`, and Netlify configuration; do not guess the live provider.
3. Capture deployed source SHA and compare live registries, assets and routes with `95f960c081367305dea0144034d48a4ab7892426`.
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


## Latest verification/status reconciliation — 2026-10-11

Implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` and CI workflow follow-up SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5` both passed Quality Gate, Lint and Browser Smoke on the same respective SHA. The manifest records outcomes for all 26 anchors; 25 relevant official pages/alternatives were inspected; Russia requires mission-jurisdiction confirmation and human sign-off remains open. `dataset.asOf=2026-09-05` is unchanged. Phase 0 exit is blocked; Phase 1 and Phase 2 remain incomplete; Phase 3/4 are partial; Phase 5 is not live; Phase 6 is deferred.


## Current delivery delta — 2026-10-11
- The README's prior "Phase 2 Complete" statement is superseded by the canonical phase tracker: Phase 2 core exists, but decision quality is incomplete.
- A machine-readable 26-country source review manifest and generator/check are committed. Source review outcomes are recorded for all 26; 25 relevant official pages/alternatives inspected, Luxembourg and Russia remain blockers, and human sign-off is required.
- Austria and Czechia country source anchors updated to official government pages; no country-wide as-of date or unsupported aggregate value was advanced.
- Recommendation regression tests explicitly preserve unknown structured requirements and suppress missing-country/research-required routes.
- P0-S5 remains blocked: GitHub reports main unprotected/no rulesets; production host, deployed SHA, live headers and smoke need owner/provider evidence. Release remains NO-GO.


## Structured requirements update — 2026-10-11
- Expanded structured requirements with evidence-backed declarations for UK Student admission, New Zealand student living-funds scope, and Ireland Critical Skills job offers.
- Coverage is now 12 declarations across 5 of 56 pathways. 51 pathways remain without structured declarations; absence is unknown, never a pass or zero.
- The full validator/test suite must pass on the final SHA before these additions are accepted. P1-REQ remains open.


## Source-review refinement — 2026-10-11
- Luxembourg official third-country immigration alternatives have been identified; the registered homepage still redirects generically.
- Russia official MFA guidance located in this pass is mission-specific to Denmark and cannot be applied to other nationalities without jurisdiction verification.
- Current source review: 25/26 entries have relevant official pages or alternatives inspected; one jurisdiction-specific blocker remains and human sign-off is required.


## Verification reconciliation — 2026-10-11
- Current verified implementation/data SHA: `95f960c081367305dea0144034d48a4ab7892426`; Quality Gate, Lint and Browser Smoke passed on this exact SHA.
- CI workflow follow-up SHA: `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; Quality Gate, Lint and Browser Smoke also passed on this exact SHA. Run links are recorded in `docs/sprints/ACTIVE_SPRINT.md` and this release record.
- Structured requirements now total 12 declarations across 5/56 pathways; 51 remain unstructured. P1-REQ remains open.
- Country-source review outcomes are recorded for all 26 anchors; relevant official pages/alternatives inspected for 25. Russia requires mission-jurisdiction confirmation for the target applicant market, and human sign-off remains required.
- Release remains **NO-GO** until P0-S5 external production evidence and human source-review sign-off are complete.
