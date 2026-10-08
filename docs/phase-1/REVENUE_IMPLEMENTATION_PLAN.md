# Revenue Implementation Plan

**Phase:** P1-REV  
**Status:** In progress

## Execution order

### REV-01 — Measurement foundation — COMPLETE
Central event schema, privacy-safe dimensions, explicit consent handling and shared dispatch are implemented.

### REV-02 — Monetization configuration — FOUNDATION COMPLETE
Configuration-driven ad/commercial slots and page/workflow exclusions are implemented. Next is template/component wiring plus browser verification.

### REV-03 — AdSense integration — GATED
Prepare the integration boundary, but do not activate live advertising until the authoritative production origin, consent/CMP readiness, publisher approval and real publisher identifier are verified.

### REV-04 — Commercial/affiliate infrastructure — FOUNDATION COMPLETE
A deterministic attribution boundary and safe redirect endpoint now exist, with an empty registry so no unverified commercial destination can be launched. Next: governed entry lifecycle, disclosure and provider reconciliation.

### REV-05 — Qualified lead engine
Build only after consent and commercial governance are production-ready.

### REV-06 — Partner subscription MVP
Build recurring commercial accounts, plans, billing, entitlements and MRR reporting.

### REV-07 — Premium consumer MVP
Prioritize saved routes, advanced comparisons, planning workspace, alerts and exports; validate willingness to pay before expanding.

### REV-08 — API/data MVP
Expose evidence-aware intelligence under authenticated recurring contracts with freshness controls.

## Non-negotiable technical principles

- No revenue logic inside evidence/eligibility calculations.
- No commercial ranking based solely on payout.
- Stable placement IDs.
- Configuration over duplicated page code.
- Revenue data separable from migration-profile data.
- MRR independent from advertising/referral estimates.
- Commercial content auditable.
- No live provider credentials or guessed publisher IDs in source control.
