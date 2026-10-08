# Phase 1 — Revenue & Monetization

**Phase ID:** P1-REV  
**Status:** Planned / implementation-ready  
**Relationship to P0:** Revenue implementation may be prepared concurrently, but production monetization remains gated by P0-S5 deployment, privacy/security, consent and release verification.  
**Blueprint:** Preserve the evidence-first migration-intelligence product; monetization is an additional business layer, not a change to route-ranking logic.

## Objective

Turn MyGlobalRoute's traffic and migration intent into diversified revenue while protecting:
- evidence integrity;
- route neutrality;
- user trust;
- privacy;
- accessibility;
- SEO;
- performance;
- legal/commercial disclosure.

## Revenue streams

1. **AdSense / display advertising** — early variable revenue.
2. **Affiliate/referral** — contextual variable revenue.
3. **Qualified leads** — higher-value intent monetization.
4. **Sponsored partner inventory** — contracted revenue with explicit labelling.
5. **Partner subscriptions** — recurring B2B revenue.
6. **Premium consumer product** — recurring user revenue.
7. **API/data products** — recurring B2B/data revenue.

## Phase architecture

```
P0 Production Integrity
        │
        ├── deployment verification
        ├── privacy/security foundation
        └── evidence/recommendation trust
                    │
                    ▼
P1 Revenue Foundation
        │
        ├── measurement
        ├── ad inventory
        ├── affiliate infrastructure
        ├── lead infrastructure
        └── partner registry
                    │
                    ▼
P1 Revenue Launch
        │
        ├── AdSense
        ├── first affiliates
        └── qualified leads
                    │
                    ▼
P2 Recurring Revenue
        │
        ├── partner subscriptions
        ├── premium consumer product
        └── API/data
```

## Workstreams

### REV-01 — Revenue measurement
Build the event and reporting foundation before optimizing revenue.

### REV-02 — AdSense
Implement controlled advertising inventory only after production/consent gates.

### REV-03 — Affiliate
Build contextual partner links, attribution and disclosures.

### REV-04 — Lead generation
Create consent-aware qualified-lead capture and partner routing.

### REV-05 — Partner revenue
Create a verified partner registry, partner products and recurring contract model.

### REV-06 — Premium product
Define and validate recurring consumer value before building billing-heavy features.

### REV-07 — API/data
Package evidence-governed migration intelligence for B2B customers.

## Phase gates

### Gate A — Measurement ready
- event taxonomy implemented;
- revenue-source attribution defined;
- dashboards/reporting specification complete;
- no unnecessary sensitive migration data sent to advertising analytics.

### Gate B — Advertising ready
- authoritative production origin verified;
- privacy/consent controls ready;
- AdSense account/site approved;
- real publisher ID configured;
- ads.txt generated from actual publisher details;
- ad placement tests pass performance/accessibility guardrails.

### Gate C — Commercial-intent ready
- partner registry;
- due diligence;
- disclosures;
- attribution;
- qualified-lead definition;
- partner routing.

### Gate D — Recurring-revenue ready
- paid product defined;
- billing/reconciliation;
- subscription lifecycle;
- MRR reporting;
- churn/retention reporting.

## Non-negotiable commercial rules

- Commercial payments cannot determine migration eligibility.
- Commercial payments cannot determine canonical route ranking.
- Sponsored content must be labelled.
- Affiliate relationships must be disclosed.
- Unsupported immigration claims cannot be used as advertising copy.
- Partner claims require verification.
- Government sources must remain distinguishable from commercial services.
- Revenue experiments must not degrade core product flows.

## Definition of Done

Phase 1 is complete when at least one variable revenue stream is operating with reliable attribution and governance, one recurring-revenue product has been validated or launched, and the revenue system can report revenue separately from MRR.

Production activation still requires all applicable P0 and privacy/security gates.
