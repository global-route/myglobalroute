# Active Sprint — Production Integrity & Migration Intelligence

> **Execution adjustment — 2026-10-17:** Testing and CI remain paused by user direction. The current production blocker is live-domain ownership/DNS configuration rather than code functionality: Wrangler is failing to attach `vrenum.app` because Cloudflare reports externally managed DNS records.

**Reconciled:** 2026-10-18 | **Branch:** `main`
**Release:** **NO-GO**
**Current blocker:** Cloudflare custom-domain attachment for `vrenum.app` is failing because DNS is externally managed; production host identity and owner-side deployment configuration remain unresolved.
**Relevant verification:** historical source-tree checks remain recorded from 2026-10-11; no fresh same-SHA validation is available because CI remains paused.

## Current decision

Continue only the owner-side deployment and evidence tasks that can be completed without guessing the production environment. Do not release, do not claim live production readiness, and do not treat historical green checks as proof of live deployment.

## Current task board

| ID | Task | Status | Remaining exit condition |
|---|---|---|---|
| P0-S1 | Exact-subroute closure | **Complete with explicit blocked candidates** | AU subclass 189 and Italy Flussi remain research-required until exact-scope evidence closes their gaps |
| P0-S2 | Audit pathway evidence gaps | **Audit complete; source work ongoing** | Maintain evidence freshness; do not promote based on record count |
| P0-S3 | Data/recommendation quality gate | **Historically verified** | Keep validation and tests green as data changes; do not claim new validation without a fresh run |
| P0-S4 | Browser/source-tree gate | **Historically verified** | CI/browser smoke is not proof of production behavior |
| P0-S5 | Deployment verification / Phase 0 exit | **Blocked by external DNS / custom-domain ownership** | Cloudflare is rejecting the custom-domain attach to `vrenum.app` because DNS is externally managed. Owner must fix DNS ownership or use a different hostname. Then confirm live SHA, run production smoke, audit CSP/security headers, and verify branch rules. |
| P1-S1.1 | Machine-readable country manifest | **Complete** | Manifest and evidence outcomes are committed; source review still requires human sign-off |
| P1-S1.2 | Country source-anchor review | **Human sign-off recorded for LU/RU** | Luxembourg updated to direct immigration portal; Russia national authority and consular scope confirmed |
| P1-S1.3 | Dataset metadata reconciliation | **Open** | Update `dataset.asOf` after full manifest sign-off sync |
| P1-REQ | Structured requirements | **Active** | 49 declarations across 35 of 56 pathways (Central Europe batch added); 21 remain unstructured |
| P1-ROUTE | Recommendation quality | **Active** | Continue stale/mismatched evidence, alternatives, missing-input, and no-match regression work |
| P1-SEO | Editorial/technical SEO | **Implementation advanced; open** | Canonical origin remains blocked until production host is confirmed; legacy metadata and editorial cleanup remain open |
| P1-PRIV | Privacy/compliance/accessibility | **Implementation advanced; open** | Consent/contact/provider behavior still unvalidated; legal review and live-browser checks remain open |
| P1-REV | Monetization readiness | **Foundations only; not live** | Provider approval, consent, disclosures and revenue reconciliation remain required |

## Current production blocker

The live deployment failure is explicit and reproducible:
- `wrangler deploy` succeeds in asset upload, but the custom-domain trigger fails because `vrenum.app` has externally managed DNS records.
- Cloudflare responds with `code: 100117` and rejects the custom-domain attach.
- This means the project cannot complete a live deployment until the underlying host/DNS ownership is corrected by the owner or an alternate hostname is used.

## Next task

### 🔴 P0-S5-1 — Resolve the production hostname ownership and Cloudflare routing configuration

Owner-side actions required:
1. Confirm whether `vrenum.app` is the intended production hostname.
2. If yes, remove or transfer the externally managed DNS records so Cloudflare can own the custom domain.
3. If not, select the correct hostname and configure the Pages/Worker binding for that host.
4. Re-run the deploy and verify the live SHA and response headers.

Once this is fixed, continue:
5. Run `PRODUCTION_URL=https://<host> npm run deploy:verify`
6. Audit CSP and security headers
7. Confirm branch protection
8. Close Phase 0

## Phase 1 follow-up

After the production host is fixed and verified:
- complete the Russia/Luxembourg human sign-off
- update `dataset.asOf` only after review is accepted
- expand structured requirement declarations for the remaining pathways

**Sprint status: production deployment is externally blocked by custom-domain/DNS ownership. Release remains NO-GO until the host is confirmed and verified.**


## P1-UI — Classic UI redesign and full route audit (planned; not tested)

**Plan:** `docs/product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md`

The redesign workstream is added without displacing P0 production integrity or Phase 1 evidence quality. First enumerate the actual generated routes and inspect current templates, CSS, scripts, and data contracts. Treat reported screenshot issues as **reported — recheck** until reproduced; distinguish confirmed defects from audit-required items.

| Work item | Status | Exit condition |
|---|---|---|
| P1-UI-A — Route/screen inventory and evidence-backed visual audit | **Planned** | Every generated route and shared state is mapped; findings have evidence, severity, confidence, and user impact |
| P1-UI-B — Figma-ready design foundations and shared shell | **Planned** | Tokens, typography, spacing, icon rules, shared navigation/footer, focus and responsive states specified |
| P1-UI-C — Core migration journeys | **Planned** | Homepage, country discovery/detail, route finder/results, calculator and comparison states specified against real data contracts |
| P1-UI-D — Editorial/support route consistency | **Planned** | Blog/research duplication, article data/template/style agreement, supporting routes, metadata and error states audited |
| P1-UI-E — Final visual/accessibility handoff | **Blocked on testing pause for verification** | Viewport and keyboard evidence captured; outstanding findings explicit; tests/CI only resume if user permits |

**Execution constraints:** User direction remains to skip testing/CI. Mark implementation changes **Not Tested**; do not claim accessibility conformance, passing checks, or production readiness. Existing custom-domain/DNS/production verification blocker remains open and release stays **NO-GO**.

## P1-UI — Classic UI redesign and full route audit (planned; not tested)

**Plan:** `docs/product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md`

The redesign workstream is added without displacing P0 production integrity or Phase 1 evidence quality. First enumerate the actual generated routes and inspect current templates, CSS, scripts, and data contracts. Treat reported screenshot issues as **reported — recheck** until reproduced; distinguish confirmed defects from audit-required items.

| Work item | Status | Exit condition |
|---|---|---|
| P1-UI-A — Route/screen inventory and evidence-backed visual audit | **Planned** | Every generated route and shared state is mapped; findings have evidence, severity, confidence, and user impact |
| P1-UI-B — Figma-ready design foundations and shared shell | **Planned** | Tokens, typography, spacing, icon rules, shared navigation/footer, focus and responsive states specified |
| P1-UI-C — Core migration journeys | **Planned** | Homepage, country discovery/detail, route finder/results, calculator and comparison states specified against real data contracts |
| P1-UI-D — Editorial/support route consistency | **Planned** | Blog/research duplication, article data/template/style agreement, supporting routes, metadata and error states audited |
| P1-UI-E — Final visual/accessibility handoff | **Blocked on testing pause for verification** | Viewport and keyboard evidence captured; outstanding findings explicit; tests/CI only resume if user permits |

**Execution constraints:** User direction remains to skip testing/CI. Mark implementation changes **Not Tested**; do not claim accessibility conformance, passing checks, or production readiness. Existing custom-domain/DNS/production verification blocker remains open and release stays **NO-GO**.
