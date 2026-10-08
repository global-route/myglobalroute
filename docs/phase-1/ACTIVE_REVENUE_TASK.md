# Active Revenue Task — REV-01 Measurement Foundation

**Phase:** P1-REV  
**Priority:** P0/P1 bridge  
**Status:** Next implementation task  
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

- [ ] Central event naming/schema documented.
- [ ] Events can be emitted without duplicating analytics logic across pages.
- [ ] Route/pathway identifiers remain non-personal.
- [ ] Partner placement attribution is deterministic.
- [ ] Consent state is respected.
- [ ] Revenue events can be reconciled with source/platform reports.
- [ ] Unit tests cover event payload validation.
- [ ] Build and browser smoke remain green.
- [ ] Documentation references the implemented event contract.

## Next after REV-01

1. REV-02 Monetization configuration and placement components.
2. REV-04 Affiliate foundation can proceed concurrently.
3. REV-03 AdSense activation waits for production/consent Gate B.
4. REV-05 Lead engine follows partner and consent foundations.
