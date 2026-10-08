# P1 Revenue Sprint — Foundation & Commercial Readiness

**Status:** Implementation foundations delivered; sprint remains open for verification and provider-dependent work  
**Phase:** P1-REV  
**Relationship:** Preparation may run concurrently with P0-S5. It does not authorize production monetization or release.

## Sprint objective

Move monetization from documentation into a measurable, configurable and fail-closed implementation without activating production advertising or inventing commercial partners.

### S1 — Measurement — FOUNDATION IMPLEMENTED

- [x] Provider-neutral event contract and payload validation.
- [x] Explicit consent-aware dispatch and persistence.
- [x] Shared analytics loading on core static and generated surfaces.
- [x] Privacy-safe attribution dimensions; migration-profile data is excluded.
- [ ] Verify current CI and reconcile analytics events with an actual provider before revenue claims are made.

### S2 — Monetization configuration — COMPONENT HOSTS WIRED

- [x] Ad slot registry and page-type rules.
- [x] Partner slot registry.
- [x] Find My Route/search workflow display-ad exclusions.
- [x] Consent-gated hosts wired to homepage, blog, country, pathway and calculator-result surfaces.
- [x] Consent choice triggers monetization refresh.
- [ ] Verify both consent decisions and all placement exclusions in browser tests.
- [ ] Complete performance/accessibility review before any provider script is enabled.

### S3 — Affiliate foundation — SAFE BASELINE

- [x] Empty verified-entry boundary; no hypothetical partner is live.
- [x] Deterministic attribution-path builder.
- [x] Sensitive profile data excluded from attribution.
- [x] Unknown/unverified commercial redirects rejected.
- [x] Runtime redirect checks require a current review date, future expiry and credential-free HTTPS destination.
- [ ] Add provider-specific click/revenue reconciliation after a real partner is selected.

### S3b — Commercial onboarding/redirect — GOVERNANCE IMPLEMENTED, NOT LIVE

- [x] Registry validation for status/category, unique slug IDs, disclosure, HTTPS destination, review date and expiry.
- [x] Validation added to the aggregate verification command.
- [ ] Verify current CI and Netlify function bundling/runtime compatibility.
- [ ] Add actual provider reconciliation and documented partner review ownership.
- [ ] Activate no entry until contractual, legal, security and operational review is complete.

### S4 — AdSense readiness — BLOCKED BY EXTERNAL GATES

- [ ] Independently verify authoritative production origin and deployment owner.
- [ ] Confirm consent-management requirements and production behavior.
- [ ] Obtain real publisher/site approval and publisher ID.
- [ ] Generate `ads.txt` only from verified provider instructions.
- [ ] Verify actual placements, performance and accessibility.
- [ ] Do not add guessed identifiers or load ad scripts in this sprint.

### S5 — Lead foundation — NOT STARTED

- [ ] Define qualified lead and eligibility/quality rules.
- [ ] Define separate informed consent, privacy notice and retention.
- [ ] Define minimum data schema and avoid collecting profile details not required for a specific lead.
- [ ] Define partner matching, secure delivery and acceptance/rejection states.
- [ ] Define reconciliation for accepted leads and actual revenue.

## Sprint exit criteria

- Measurement and placement behavior pass current unit/browser CI.
- Registry and redirect remain fail-closed for invalid, unknown, stale and unverified entries.
- Provider reconciliation is documented as **not available until a real provider exists**, not represented as complete.
- AdSense is either safely launched after all external gates or explicitly blocked by them.
- Lead collection is not enabled until governance, consent, delivery and reconciliation are implemented.
- MRR remains independently measurable from variable advertising/referral revenue.
- P0 production verification remains independently tracked and is not marked complete by this sprint.

## Guardrail

No provider activation, publisher ID, partner URL, revenue result or production pass may be invented. A green source-tree CI run is not production verification.
