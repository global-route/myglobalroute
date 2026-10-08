# Active Revenue Task — P1-REV Commercial Measurement & Readiness

**Phase:** P1-REV  
**Status:** REV-01 complete; REV-02 and REV-04 foundations implemented; wiring/production gates remain  
**Depends on:** Existing analytics/runtime foundation, privacy/security review  
**Blocks:** Reliable AdSense, governed commercial launches and MRR optimization

## Current implementation

- [x] Central privacy-aware event contract.
- [x] Explicit consent UI with persisted grant/deny state.
- [x] Shared analytics loader on core static and generated product pages.
- [x] Calculator and route surfaces use the shared contract.
- [x] Configuration-driven ad and commercial slot registry.
- [x] Empty commercial registry boundary; no hypothetical live partners.
- [x] Controlled redirect boundary that rejects unknown/unverified entries.
- [x] Tests for analytics, monetization configuration and redirect safety.

## Remaining acceptance work

- [ ] Wire visible ad/partner components to registry-controlled slots.
- [ ] Add browser coverage for consent and commercial placement exclusions.
- [ ] Add governed commercial-entry schema and review/expiry lifecycle.
- [ ] Add click/revenue reconciliation against an actual provider.
- [ ] Verify external provider behavior in production.
- [ ] Complete AdSense publisher/CMP/ads.txt gates only after authoritative origin is verified.

## Commercial firewall

Revenue signals must never change pathway eligibility, evidence status or route ranking. Commercial inventory must be distinguishable from official migration guidance and must not receive sensitive migration-profile data.

## Next execution order

1. REV-02 component wiring + browser coverage.
2. REV-04 governed commercial-entry lifecycle + disclosure.
3. REV-03 AdSense integration boundary and provider-readiness checks.
4. P0 production-origin, branch-protection and pathway-scope hardening.
