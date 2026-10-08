# Revenue Implementation Plan

**Phase:** P1-REV  
**Status:** Ready for execution

## Execution order

### REV-01 — Measurement foundation — P0/P1 bridge
**First implementation task.**

Build:
- event constants/schema;
- page/surface identifiers;
- revenue-source identifiers;
- partner placement identifiers;
- route/pathway attribution;
- consent state handling;
- analytics reporting contract.

**Do not** send sensitive migration answers, documents or personal identity data to advertising analytics.

**Done when:** events can distinguish content traffic, route intent, commercial clicks, leads and recurring conversions without exposing unnecessary personal data.

### REV-02 — Monetization configuration — FOUNDATION IMPLEMENTED
Build configuration-driven:
- ad slots;
- partner slots;
- page-type exclusions;
- workflow exclusions;
- experiment flags;
- consent-aware rendering.

**Done when:** monetization inventory can be changed without hardcoding business logic into every page.

### REV-03 — AdSense integration
After Gate B:
- publisher configuration;
- approved ad code;
- ads.txt;
- article/country/pathway slots;
- exclusion rules;
- revenue event/reporting;
- performance monitoring.

**Done when:** controlled AdSense traffic is live without harming route completion or performance.

### REV-04 — Affiliate infrastructure
- partner registry;
- tracked links;
- placement IDs;
- disclosure component;
- click attribution;
- partner revenue reconciliation.

**Done when:** a verified partner can be launched end-to-end.

### REV-05 — Qualified lead engine
- lead schema;
- consent;
- qualification;
- partner matching;
- delivery;
- acceptance/rejection;
- payout/revenue reconciliation.

**Done when:** a qualified lead can be securely routed and financially reconciled.

### REV-06 — Partner subscription MVP
- partner accounts/profile;
- plans;
- billing;
- entitlement;
- dashboard;
- partner MRR;
- churn reporting.

**Done when:** a partner can pay for a recurring product and the amount is reflected in MRR.

### REV-07 — Premium consumer MVP
Prioritize features that create recurring value:
- saved routes;
- advanced comparison;
- migration planning workspace;
- alerts;
- exportable plan.

**Done when:** customer research validates willingness to pay and the MVP has measurable retention.

### REV-08 — API/data MVP
- API authentication;
- evidence-aware response model;
- usage tracking;
- recurring contracts;
- documentation;
- data freshness controls.

**Done when:** an external customer can consume governed migration intelligence under a recurring contract.

## Technical principles

- No revenue logic inside evidence/eligibility calculations.
- No partner ranking based solely on payout.
- Use stable placement IDs.
- Use configuration over duplicated page code.
- Keep revenue data separable from migration-profile data.
- Keep MRR accounting independent from advertising estimates.
- Make all commercial content auditable.
