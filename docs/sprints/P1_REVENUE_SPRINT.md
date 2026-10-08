# P1 Revenue Sprint — Foundation & Commercial Readiness

**Status:** In progress  
**Phase:** P1-REV  
**Relationship:** Runs preparation work concurrently with final P0 release closure.

## Sprint objective

Move monetization from documentation into measurable, configurable implementation without activating production advertising or inventing commercial partners.

### S1 — Measurement — COMPLETE FOUNDATION
- [x] Event contract and validation.
- [x] Consent-aware dispatch.
- [x] Shared analytics loading on core surfaces.
- [x] Privacy-safe attribution.
- [ ] External provider/reconciliation verification.

### S2 — Monetization configuration — FOUNDATION COMPLETE
- [x] Ad slot registry.
- [x] Commercial/partner slot registry.
- [x] Page-type rules.
- [x] Find My Route/search exclusions.
- [x] Consent-aware ad-rendering contract.
- [ ] Wire components into page templates.
- [ ] Browser coverage.

### S3 — Affiliate foundation — FOUNDATION COMPLETE
- [x] Empty verified-entry boundary.
- [x] Deterministic tracked-path builder.
- [x] Personal-data exclusion.
- [ ] Real provider reconciliation.

### S3b — Commercial onboarding/redirect — IN PROGRESS
- [x] Safe redirect boundary.
- [x] Unknown/unverified destination rejection.
- [ ] Governed entry schema.
- [ ] Disclosure component.
- [ ] Review/expiry lifecycle.
- [ ] Click/revenue reconciliation.

### S4 — AdSense readiness — BLOCKED BY EXTERNAL GATES
- [ ] Authoritative production origin.
- [ ] Consent/CMP production verification.
- [ ] Real publisher ID.
- [ ] Real ads.txt generated from provider details.
- [ ] Controlled placements.
- [ ] Performance/accessibility verification.

### S5 — Lead foundation
- [ ] Qualified-lead definition.
- [ ] Consent capture.
- [ ] Lead schema.
- [ ] Matching and delivery.
- [ ] Acceptance/rejection states.
- [ ] Revenue reconciliation.

## Sprint exit criteria

- Measurement is implemented and tested.
- Monetization inventory is configuration-driven.
- Commercial infrastructure cannot redirect unknown/unverified entries.
- AdSense is either safely launched or explicitly blocked by an external gate.
- Lead architecture is ready or implemented.
- MRR remains independently measurable from variable advertising/referral revenue.

## Guardrail

P0 production verification remains independent. Commercial implementation does not constitute production release approval.
