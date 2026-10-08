# Active Revenue Task — REV-01 Measurement Foundation

**Phase:** P1-REV  
**Priority:** P0/P1 bridge  
**Status:** REV-01 complete; REV-02 foundation implemented — verification/production gates remain  
**Depends on:** Existing analytics/runtime foundation, privacy/security review  
**Blocks:** Reliable AdSense, affiliate, lead and MRR optimization

## Objective

Implement a privacy-aware measurement contract connecting MyGlobalRoute product intent to revenue surfaces.

## Scope

### Events
- `route_search_started`
- `route_recommendation_generated`
- `pathway_viewed`
- `calculator_started`
- `calculator_completed`
- `official_source_clicked`
- `partner_impression`
- `partner_clicked`
- `lead_started`
- `lead_submitted`
- `subscription_started`
- `subscription_cancelled`

Advertising impression events should be implemented only where the selected analytics/advertising provider permits them and consent requirements are satisfied.

## Required dimensions

Use non-sensitive dimensions such as:
- page type;
- country/pathway ID where appropriate;
- placement ID;
- partner ID;
- acquisition source;
- device class;
- experiment ID;
- consent state.

Do not transmit:
- passport/identity information;
- uploaded documents;
- unnecessary personal contact data;
- detailed sensitive migration answers to advertising platforms.

## Acceptance criteria

- [x] Central event naming/schema documented and implemented.
- [x] Events use the shared analytics contract rather than direct provider calls.
- [x] Route/pathway identifiers remain non-personal.
- [x] Partner placement attribution is deterministic.
- [x] Consent state is respected.
- [ ] Revenue events can be reconciled with source/platform reports.
- [x] Unit tests cover event payload validation.
- [ ] Build and browser smoke remain green.
- [x] Documentation references the implemented event contract.

## Next after REV-01

1. REV-02 Monetization configuration and placement components — foundation implemented; next: wire page components and browser coverage.
2. REV-04 Affiliate foundation — registry/tracking foundation implemented; next: governed partner records and redirect handler.
3. REV-03 AdSense activation waits for production/consent Gate B.
4. REV-05 Lead engine follows partner and consent foundations.
