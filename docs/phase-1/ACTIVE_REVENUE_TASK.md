# Active Revenue Task — P1-REV Commercial Measurement & Readiness

> Cross-sprint status and release sequencing are governed by [`docs/project/HANDOVER_RECONCILIATION_2026-10-09.md`](../project/HANDOVER_RECONCILIATION_2026-10-09.md). Revenue implementation is concurrent work, not a release bypass.

**Phase:** P1-REV  
**Status:** Foundation implemented; verification and external launch gates remain  
**Execution relationship:** Concurrent preparation with P0-S5, never a substitute for release verification.

## Completed in the current implementation

- [x] Provider-neutral event contract and privacy-safe dimensions.
- [x] Explicit analytics consent UI and persisted grant/deny state.
- [x] Shared analytics loader on core static and generated product pages.
- [x] Configuration-driven ad and partner slot registry.
- [x] Page-level ad-slot hosts for blog, homepage, country, pathway and calculator-result surfaces.
- [x] Ad rendering is gated on explicit analytics consent and approved page type.
- [x] Find My Route has no display-ad host; recommendation workflow remains excluded.
- [x] Empty commercial registry; no invented/live partner is advertised.
- [x] Redirect boundary rejects missing, unknown, unverified, stale or invalid HTTPS destinations.
- [x] Commercial registry validator checks IDs, status/category allowlists, disclosure, review dates, expiry and HTTPS destinations.
- [x] Unit and browser coverage added for registry governance, consent choice and recommendation-workflow ad exclusion.
- [x] Validation included in the repository's aggregate `npm run verify` command.

## Remaining acceptance work

- [ ] Run and inspect the latest CI after the current implementation commits; record exact head and results.
- [ ] Confirm browser tests cover both allow and decline paths and that consent changes refresh the eligible slot hosts.
- [ ] Add provider-specific click/impression/revenue reconciliation only after a real provider is selected and configured.
- [ ] Define qualified-lead consent, delivery, acceptance/rejection and reconciliation before collecting or routing leads.
- [ ] Verify the actual deployed runtime/bundling behavior of the Netlify function; deployment provider and production origin are not yet reconciled.
- [ ] Complete AdSense account/site approval, real publisher ID, CMP review and `ads.txt` only after the authoritative production origin is independently verified.
- [ ] Complete production performance/accessibility and third-party inventory checks before activating paid placements.

## Commercial firewall

Revenue signals must never change pathway eligibility, evidence status or route ranking. Commercial inventory must be visibly distinguishable from official migration guidance, use contextual relevance rather than payout-only ranking, and never receive sensitive migration-profile data. No live advertising or partner activation is implied by the presence of slot hosts.

## Next execution order

1. Inspect completed workflows and rerun current-head checks; record the exact SHA and outcomes.
2. Complete consent grant/decline, persistence, slot refresh, fake-ad exclusion and Find My Route browser assertions.
3. Verify commercial redirect runtime compatibility against the hosting platform only after its identity is confirmed.
4. Keep lead qualification/governance separate; do not collect or route leads before consent and secure delivery controls exist.
5. Keep provider activation blocked until origin, privacy and account prerequisites are verified.
