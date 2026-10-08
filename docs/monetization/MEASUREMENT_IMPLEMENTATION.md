# Revenue Measurement Implementation Contract

**Phase:** P1-REV  
**Task:** REV-01 Measurement Foundation  
**Status:** Implemented foundation; provider activation remains consent/deployment gated.

## Source of truth

The runtime measurement contract lives in:

- `src/js/analytics.js`
- `tests/analytics.test.js`

Application code must use `GlobalRoute.Analytics.track()`; it must not call a provider directly.

## Event taxonomy

The central contract currently permits:

- `route_search_started`
- `route_recommendation_generated`
- `pathway_viewed`
- `calculator_started`
- `calculator_completed`
- `official_source_clicked`
- `ad_impression`
- `partner_impression`
- `partner_clicked`
- `lead_started`
- `lead_submitted`
- `subscription_started`
- `subscription_cancelled`

Provider-specific advertising events remain gated until the provider and consent architecture are approved.

## Allowed dimensions

Only non-sensitive dimensions are accepted:

- `page_type`
- `country_id`
- `pathway_id`
- `placement_id`
- `partner_id`
- `acquisition_source`
- `device_class`
- `experiment_id`
- `consent_state`
- `source_id`
- `revenue_source_id`

Unknown dimensions are rejected rather than silently forwarded.

## Privacy contract

The measurement layer rejects payloads containing fields associated with:

- identity or passport information;
- documents;
- contact information;
- birth/date information;
- nationality;
- salary, income, expenses or savings;
- tokens, cookies or IP addresses.

The contract does not use reversible encoding or pseudo-hashing as a substitute for privacy. In particular, raw email data must never be converted into a client-side "hash" and sent to analytics.

## Consent behavior

Default state: `unknown`.

Events are not emitted until consent is explicitly `granted`. Denied or withdrawn consent prevents emission.

The contract exposes a provider adapter boundary. GA4 can be attached through `createGA4Provider()`, but the repository does not activate a live measurement ID or silently grant consent.

## Commercial firewall

Analytics dimensions identify product/revenue context but never influence:

- evidence status;
- pathway eligibility;
- route ranking;
- official-source authority;
- country/pathway publication status.

Partner or revenue attribution must remain downstream of route truth.

## Acceptance status

- [x] Central event naming/schema implemented.
- [x] Shared event dispatch replaces direct application-level provider calls.
- [x] Route/pathway/placement identifiers use explicit non-sensitive dimensions.
- [x] Partner attribution has deterministic identifiers.
- [x] Consent is an explicit prerequisite for emission.
- [x] Sensitive/unapproved payload validation is covered by tests.
- [ ] Revenue reconciliation with external platform reports — requires a configured production provider.
- [ ] Production consent/CMP verification — external production gate.
- [ ] Browser smoke verification — run through CI after this change.
- [ ] Production analytics activation — intentionally not part of REV-01.

## Next

REV-02 is the next implementation task: configuration-driven monetization and placement components. REV-04 affiliate foundation can proceed concurrently. AdSense activation remains blocked by the production-origin, publisher and consent gates.
