# Global Route Documentation Hub

**Status:** Active execution  
**Last reconciled:** October 11, 2026 — full project reassessment

Global Route's original roadmap remains the product blueprint. The execution order is now dependency-aware: production integrity and trustworthy migration intelligence precede content and growth scaling.

## Start here

### Project / product
1. `project/PROJECT_ASSESSMENT.md` — current health, risks and open work.
2. `project/PHASE_STATUS.md` — canonical status across all phases.
3. `project/EXECUTION_ROADMAP.md` — master roadmap and phase dependencies.
4. `sprints/ACTIVE_SPRINT.md` — current executable task list.
5. `reference/DATA_TRUST_STANDARD.md` — non-negotiable data/evidence rules.

### Developers
1. `guides/QUICK_START.md`
2. `reference/ARCHITECTURE.md`
3. `reference/DEPLOYMENT.md`
4. `reference/DATA_TRUST_STANDARD.md`

### Content / research
1. `guides/CONTENT_STRATEGY.md`
2. `phase-3/BLOG_POSTS_GUIDE.md`
3. `reference/DATA_TRUST_STANDARD.md`

## Current state

| Area | State | Priority |
|---|---|---|
| Runtime/data loading | Build and generated-output integrity verified in current-head CI | P0 |
| Calculator architecture | Canonical engine established; production behavior awaits live-host verification | P0 |
| Search | Canonical module + Fuse fallback | P0 |
| Static deployment config | Build configuration exists; authoritative production host remains unverified | P0 |
| Data validation | Current CI validates 26 countries, 56 pathways and 193 evidence records | P0 |
| Migration evidence/provenance | 193 records; all review dates currently valid/current; ongoing source revalidation required | P0 |
| Country coverage | 26-country registry exists; unsupported aggregate costs, timelines and approval rates remain null | P0 |
| Pathway model | 56 canonical pathways: 52 publishable, 4 research_required; promoted exact subroutes align with canonical IDs | P0 |
| Structured requirements | Schema/validator implemented; only explicitly evidenced route-specific requirements may be populated | P0 |
| SEO | Generated metadata and accessibility smoke checks pass; absolute canonicals/sitemap wait for verified origin | P1 |
| Growth/monetization | Consent and fail-closed foundations implemented; live provider activation remains blocked | P1/P2 |
| Production release | NO-GO until canonical origin, deployed SHA/content, live CSP and branch protection are verified | P0 |

## Important correction to older docs

Older sprint pages describe the project as if the main blocker were blog production. That is no longer the correct execution priority. Do not mark the 26-country database complete merely because records exist; legal, cost, approval and processing claims require provenance and freshness under the data trust standard.

Likewise, avoid using old completion percentages as a release signal. Current production readiness is determined by verified gates, not document percentages.

## Execution chain

`ROADMAP → PHASE → SPRINT → TASK → ISSUE/PR → COMMIT → VERIFICATION`

When a change lands, update the active sprint and the relevant implementation/reference document in the same delivery cycle.

## Phase strategy

### Phase A — Production Integrity (P0)
Canonical runtime, data validation, calculator/search correctness, deployment, tests and security baseline.

### Phase B — Migration Intelligence (P0)
Evidence-backed country/pathway records, provenance, freshness, confidence and policy updates.

### Phase C — Core Product (P0)
Country explorer, pathway pages, calculator, comparison and `Find My Route` recommendation engine.

### Phase D — Acquisition (P1)
Technical SEO, structured data, internal linking, programmatic country/pathway pages and analytics.

### Phase E — Trust & Compliance (P1)
Privacy, terms, disclaimers, accessibility, security hardening and transparent sourcing. See [Privacy Data Inventory — Engineering Draft](phase-4/PRIVACY_DATA_INVENTORY.md) for current source-visible flows and outstanding legal/provider gates.

### Phase F — Growth (P1)
Newsletter, referrals, partnerships and trusted affiliate infrastructure.

### Phase G — Scale (P2)
Personalization, alerts, policy-change notifications, premium intelligence and B2B/API products.

## Maintenance rule

If an older document conflicts with `ACTIVE_SPRINT.md`, `EXECUTION_ROADMAP.md` or `DATA_TRUST_STANDARD.md`, reconcile the older document instead of creating another parallel plan.


## Reassessment — 2026-10-11

Use `project/PHASE_STATUS.md` as the canonical phase tracker. Phase 0 exit is blocked; Phase 1 data trust and Phase 2 route decision quality remain incomplete; Phase 3 editorial cleanup is open; Phase 4 privacy/compliance/accessibility is partial (consent controls and an engineering data-inventory draft are committed but unvalidated); Phase 5 monetization is not live; Phase 6 scale is deferred. Current assessed SHA: `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`. See `project/PROJECT_ASSESSMENT.md` for the full backlog.
