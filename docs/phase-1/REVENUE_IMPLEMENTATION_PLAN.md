# Revenue Implementation Plan

**Phase:** P1-REV  
**Status:** Foundations implemented; verification and external launch gates remain  
**Release relationship:** Independent of P0-S5. Revenue implementation does not grant production release approval.

## Execution order

### REV-01 — Measurement foundation — IMPLEMENTED; VERIFY CURRENT HEAD
Provider-neutral event schema, privacy-safe dimensions, explicit consent and shared dispatch are present. Current CI must be checked after the latest wiring changes. Actual provider reconciliation remains unavailable until a provider is selected.

### REV-02 — Monetization configuration — HOSTS WIRED; BROWSER GATE OPEN
Configuration-driven ad/partner slots and page/workflow exclusions are implemented. Ad hosts are wired to selected surfaces and consent changes refresh placements. Finish browser verification and performance/accessibility review. Do not load an ad network by default.

### REV-03 — AdSense integration — EXTERNALLY GATED
Do not activate live advertising until the authoritative production origin and owner, site/account approval, consent-management requirements, real publisher identifier and provider-generated `ads.txt` instructions are verified. No placeholder publisher IDs.

### REV-04 — Commercial/affiliate infrastructure — GOVERNANCE IMPLEMENTED; PROVIDER RECONCILIATION OPEN
An empty registry, attribution boundary, fail-closed redirect and registry lifecycle validator are present. Add provider-specific click/revenue reconciliation only after a real partner and contract exist. Commercial entries require current review metadata, expiry and HTTPS destinations.

### REV-05 — Qualified lead engine — NOT STARTED
First define the qualified-lead contract, explicit consent, data minimization, secure matching/delivery, acceptance/rejection and revenue reconciliation. Do not collect leads until these controls exist.

### REV-06 — Partner subscription MVP
Implement recurring commercial accounts, plans, billing, entitlements and MRR reporting only after partner demand is validated. Keep MRR distinct from one-off referrals and advertising.

### REV-07 — Premium consumer MVP
Validate willingness to pay for saved routes, advanced comparisons, planning workspace, alerts and exports before expanding.

### REV-08 — API/data MVP
Expose evidence-aware intelligence under authenticated recurring contracts with source provenance, freshness controls and contractual use boundaries.

## Non-negotiable technical principles

- No revenue logic inside evidence/eligibility calculations.
- No commercial ranking based solely on payout.
- Stable placement IDs and configuration over duplicated page code.
- Revenue data separable from migration-profile data.
- MRR independent from advertising/referral estimates.
- Commercial content auditable, disclosed and time-bounded.
- No live provider credentials or guessed publisher IDs in source control.
- Production deployment must be verified independently from local build/CI.
