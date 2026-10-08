# P1 Revenue Sprint — Foundation & Commercial Readiness

**Status:** Planned / ready for execution  
**Phase:** P1-REV  
**Relationship:** Can run preparation work concurrently with final P0-S5 deployment closure.

## Sprint objective

Move monetization from documentation into measurable, configurable implementation without activating production advertising prematurely.

## Sprint sequence

### S1 — Measurement
- [x] REV-01 event contract
- [x] analytics helper/schema
- [x] route/pathway attribution boundary
- [x] partner placement attribution dimensions
- [x] privacy-safe payload tests
- [x] implementation contract documented
- [ ] external provider/reconciliation verification

### S2 — Monetization configuration — NEXT

- [ ] ad slot registry
- [ ] partner slot registry
- [ ] page-type rules
- [ ] route-workflow exclusions
- [ ] experiment flags
- [ ] consent-aware rendering contract

### S3 — Affiliate foundation
- [ ] partner registry schema
- [ ] partner qualification state
- [ ] tracked-link abstraction
- [ ] disclosure component
- [ ] click/revenue reconciliation

### S4 — AdSense readiness
- [ ] production origin verified
- [ ] consent/CMP gate verified
- [ ] publisher ID supplied
- [ ] ads.txt generated from real publisher details
- [ ] first controlled placements
- [ ] performance/accessibility verification

### S5 — Lead foundation
- [ ] qualified-lead definition
- [ ] consent capture
- [ ] lead schema
- [ ] partner matching
- [ ] acceptance/rejection states
- [ ] revenue reconciliation

## Sprint exit criteria

- Measurement is implemented and tested.
- Monetization slots are configuration-driven.
- Affiliate infrastructure can support a verified partner.
- AdSense is either safely launched or explicitly blocked by an external gate.
- Lead architecture is ready or implemented.
- MRR reporting has a source-of-truth model.
- Active sprint and release verification documents reflect actual implementation state.

## Guardrail

P0 production verification remains independent. Completing this sprint does not constitute production release approval.
