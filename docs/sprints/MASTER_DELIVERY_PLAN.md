# Global Route — Master Phase & Sprint Delivery Plan

**Status:** Active delivery map  
**Baseline:** 14 September 2026  
**Scope:** Current Phase 0 through final Phase 6 / Scale exit

This is the master delivery sequence for the remaining lifecycle. It preserves the original product blueprint while converting every phase into explicit delivery sprints with dependencies and exit gates.

## Delivery rules

1. Execute the current phase before advancing its exit gate.
2. **Sprint counts are intentionally variable by phase.** A phase receives as many sprints as its actual complexity, dependency structure and verification burden require; there is no artificial fixed sprint count per phase.
3. Sprints may contain concurrent workstreams, but evidence, legal-data, security and production gates remain sequential where required.
4. A task is complete only when implementation, documentation and verification are complete.
5. A blocked task is never silently marked complete; record the blocker and carry it forward.
6. P0/P1/P2 describe priority, not phase number.
7. P1/P2 work may be planned early but must not displace unresolved P0 release blockers.
8. Preserve the original Global Route blueprint: country → pathway → evidence → cost/timing → recommendation → next action.

## Sprint-sizing rationale

- **Phase 0 — 5 sprints:** highest immediate complexity because data closure, recommendation safety, browser release checks and real production verification are separate gates.
- **Phase 1 — 4 sprints:** evidence foundation can be closed through audit, normalization, freshness controls and one foundation exit audit.
- **Phase 2 — 4 sprints:** product-core work naturally separates explanation, comparison, recommendation hardening and release audit.
- **Phase 3 — 4 sprints:** editorial trust, programmatic SEO, high-intent discovery and acquisition measurement are distinct workstreams.
- **Phase 4 — 4 sprints:** privacy, accessibility, security and compliance each require independent verification.
- **Phase 5 — 4 sprints:** retention, partnerships, monetization and growth measurement have different implementation and governance gates.
- **Phase 6 — 5 sprints:** scale adds personalization, policy intelligence, premium intelligence, B2B/API and a final platform audit; these are materially broader and should not be compressed merely to match earlier phases.

The plan can gain additional sprints if a phase discovers material work that cannot safely fit an existing sprint. It can also close earlier if all of its gates are genuinely satisfied. Sprint count is a delivery-control mechanism, not a target.

---

# PHASE 0 — Production Integrity / P0

**Current phase.** Goal: establish a trustworthy, reproducible and deployable production baseline.

### Sprint P0-S1 — Exact Pathway Closure — ACTIVE
- AU-189 financial/material verification
- NZ Points final promotion validation
- NZ Skilled Work Experience red/amber + wage/evidence regression
- NZ Trades & Technician occupation/qualification matrix + regression
- Austria Other Key Workers document/points/promotion validation
- Italy 2026 Flussi employer/quota/compensation/applicant evidence matrices

**Checkpoint:** NZ Skilled Work Experience and Trades & Technician route matrices are now documented from current INZ instructions. Machine-testable occupation/wage regressions and final promotion validation remain open. AU-189 remains blocked on the explicit financial/material gap; Austria and Italy remain on their documented promotion gates.

**Exit:** every promoted exact route passes exact-scope evidence gates; unresolved routes remain research-required.

### Sprint P0-S2 — Remaining-Country Evidence Closure
- Audit all research-required canonical pathways
- Prioritize high-value routes
- Add authoritative dated evidence
- Resolve umbrella vs exact legal subroute distinctions
- Promote only routes satisfying material-field gates

**Exit:** every remaining research-required route has either a promotion package or an explicit documented material evidence gap.

### Sprint P0-S3 — Data & Recommendation Quality Gate
- data validation
- evidence registry and boundary tests
- recommendation safety tests
- canonical registry reconciliation
- build/generated-output verification
- lint/static checks

**Exit:** validated tree and safe recommendation behavior with recorded verification.

### Sprint P0-S4 — Browser & Release Gate
- Browser/E2E representative route flows
- deep links/assets
- calculator
- Find My Route
- generated SEO/accessibility checks
- release-facing runtime audit

**Exit:** representative browser/runtime flows verified and release blockers resolved or explicitly documented.

### Sprint P0-S5 — Deployment Verification & Phase 0 Exit
- identify authoritative Netlify site/project/hostname
- verify deployed commit
- production smoke
- canonical/OG/sitemap restoration
- CSP audit against deployed inventory
- repository hardening issue #2 / main protection

**PHASE 0 EXIT:** reproducible build, validated data, verified production origin, production smoke, appropriate security posture, and reconciled release evidence.

---

# PHASE 1 — Migration Intelligence Foundation / P0

**Goal:** make migration intelligence authoritative, reviewable and maintainable at field/pathway level.

### Sprint P1-S1 — Material Evidence Audit
- Audit all country/pathway material fields
- Identify unsupported estimates and nulls
- Verify source authority and jurisdiction
- Verify effective/verified/review dates

**Exit:** every published material claim has adequate provenance or is explicitly unavailable.

### Sprint P1-S2 — Legal Subroute & Pathway Normalization
- Review generic/umbrella pathways
- Map exact legal subroutes
- Separate parent evidence from child evidence
- Establish promotion/demotion rules

**Exit:** canonical pathway identity is legally meaningful and recommendation-safe.

### Sprint P1-S3 — Evidence Freshness & Review System
- Review-date policy
- stale evidence detection
- source/review metadata validation
- evidence maintenance workflow

**Exit:** the dataset has a repeatable freshness/review mechanism rather than one-time verification.

### Sprint P1-S4 — Foundation Exit Audit
- Full registry reconciliation
- provenance completeness report
- evidence coverage report
- documentation reconciliation

**PHASE 1 EXIT:** authoritative, evidence-gated migration foundation with maintainable freshness controls.

---

# PHASE 2 — Canonical Product Core / P0

**Goal:** turn the intelligence foundation into the complete core user product.

### Sprint P2-S1 — Route Explanation & Evidence UX
- pathway-specific explanations
- evidence/source presentation
- risks and caveats
- next-action guidance

**Exit:** every viable route explains why it qualifies, what evidence supports it, risks, and the next action.

### Sprint P2-S2 — Comparison Experience
- country comparison
- pathway comparison
- cost/timing/evidence comparison
- unsupported-value handling

**Exit:** comparisons never imply false precision or compare unsupported metrics as facts.

### Sprint P2-S3 — Recommendation Engine Hardening
- eligibility ranking
- fit ranking
- evidence confidence
- route blocking rules
- explanation consistency

**Exit:** Find My Route is deterministic, evidence-aware and cannot recommend research-required/unsupported routes as viable.

### Sprint P2-S4 — Product Core Release Audit
- calculator integration
- country/pathway pages
- route engine
- comparison UX
- analytics events needed for product measurement

**PHASE 2 EXIT:** complete canonical product core from profile input through ranked route and next action.

---

# PHASE 3 — Content & Acquisition / P1

**Goal:** scale acquisition without outrunning data trust.

### Sprint P3-S1 — Editorial Trust Audit
- fact-audit legacy posts
- map claims to authoritative evidence
- remove/qualify stale claims
- repair internal links

**Exit:** published editorial claims meet the data trust standard.

### Sprint P3-S2 — Programmatic SEO Completion
- country/pathway metadata
- structured data
- canonical URLs
- sitemap/robots
- internal linking
- duplicate/thin-page controls

**Exit:** production SEO architecture is complete and validated against the verified origin.

### Sprint P3-S3 — High-Intent Content & Discovery
- cornerstone migration guides
- category archives
- related content
- search UX
- route-to-content and content-to-route journeys

**Exit:** acquisition content supports product discovery without duplicating pathway authority.

### Sprint P3-S4 — Acquisition Measurement
- search → route → calculator funnel
- content conversion measurement
- SEO health monitoring
- attribution QA

**PHASE 3 EXIT:** measurable, evidence-aligned acquisition system.

---

# PHASE 4 — Trust, Compliance & Accessibility / P1

**Goal:** make the product safe, transparent, accessible and operationally trustworthy.

### Sprint P4-S1 — Privacy & Consent
- privacy model
- analytics consent where required
- data minimization
- retention/handling rules

**Exit:** privacy/consent behavior is documented and implemented for actual collection flows.

### Sprint P4-S2 — Accessibility
- browser accessibility audit
- keyboard navigation
- semantic structure
- forms/calculator/recommendation UX
- contrast/focus/error states

**Exit:** critical accessibility defects resolved and remaining exceptions documented.

### Sprint P4-S3 — Security & CSP Hardening
- CSP against real dependencies
- security headers
- dependency/supply-chain review
- production configuration audit

**Exit:** security baseline is verified against the deployed application.

### Sprint P4-S4 — Compliance Exit Audit
- terms/disclaimer
- source attribution
- privacy/consent
- accessibility evidence
- security evidence

**PHASE 4 EXIT:** trust, compliance and accessibility controls verified and documented.

---

# PHASE 5 — Growth / P1

**Goal:** establish sustainable acquisition, retention and monetization without compromising trust.

### Sprint P5-S1 — Return-User Loop
- newsletter
- saved/revisit flows where appropriate
- useful update notifications

**Exit:** repeat-user mechanism is functional and privacy-aligned.

### Sprint P5-S2 — Partnerships
- partner model
- referral attribution
- partner landing flows
- governance and disclosure

**Exit:** partnership infrastructure is transparent and measurable.

### Sprint P5-S3 — Affiliate & Monetization
- transparent affiliate infrastructure
- monetization assumptions
- conservative/base/aggressive scenarios
- disclosure and trust controls

**Exit:** monetization does not distort route recommendations or factual claims.

### Sprint P5-S4 — Distribution & Growth Measurement
- social distribution
- channel measurement
- funnel optimization
- growth dashboard/operating cadence

**PHASE 5 EXIT:** measurable, transparent and sustainable growth engine.

---

# PHASE 6 — Scale / P2

**Final planned phase. Goal:** expand Global Route from a strong migration product into a scalable intelligence platform.

### Sprint P6-S1 — Personalization & Saved Routes
- profile persistence architecture
- saved routes
- personalized ranking
- privacy/security controls

**Exit:** personalization improves usefulness without weakening evidence gates or privacy controls.

### Sprint P6-S2 — Policy-Change Intelligence
- policy monitoring
- change detection
- affected-pathway mapping
- user alerts
- evidence refresh workflow

**Exit:** material policy changes can be detected, reviewed and propagated safely.

### Sprint P6-S3 — Premium Migration Intelligence
- premium route intelligence
- advanced comparisons
- deeper evidence/research views
- subscription/value model

**Exit:** premium functionality provides additional intelligence without paywalling core safety-critical facts.

### Sprint P6-S4 — B2B Research / Data / API
- API/data product architecture
- access controls
- usage limits
- licensing/terms
- customer-facing documentation
- observability and reliability

**Exit:** B2B data/API product is operationally and commercially ready.

### Sprint P6-S5 — Scale Exit / Platform Audit
- reliability and performance
- security/compliance review
- data freshness review
- recommendation integrity audit
- business/product KPI review
- architecture capacity review

**FINAL EXIT:** Global Route operates as a scalable migration-intelligence platform with trustworthy data, evidence-aware recommendations, production controls, measurable acquisition/growth and a maintainable B2B/API foundation.

---

# Final dependency chain

`P0-S1 → P0-S2 → P0-S3 → P0-S4 → P0-S5`

`→ P1-S1 → P1-S2 → P1-S3 → P1-S4`

`→ P2-S1 → P2-S2 → P2-S3 → P2-S4`

`→ P3-S1 → P3-S2 → P3-S3 → P3-S4`

`→ P4-S1 → P4-S2 → P4-S3 → P4-S4`

`→ P5-S1 → P5-S2 → P5-S3 → P5-S4`

`→ P6-S1 → P6-S2 → P6-S3 → P6-S4 → P6-S5`

The current sprint remains P0-S1. No later phase is treated as complete merely because it has been planned; each phase advances only after its sprint exit gates are actually verified.
