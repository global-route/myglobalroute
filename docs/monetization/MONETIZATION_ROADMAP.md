# Monetization Roadmap

**Status:** Planned / execution roadmap

## Phase M0 — Architecture and governance
### P0
- [x] Establish monetization documentation.
- [x] Define MRR and total-revenue accounting.
- [x] Define ad placement map.
- [x] Define commercial/trust firewall.
- [x] Define revenue event taxonomy.
- [x] Define partner qualification standards.

**Exit criteria:** Revenue terminology and commercial rules are unambiguous. ✅ Complete.

## Phase M1 — Measurement foundation
### P0
- [x] Implement analytics event taxonomy.
- [x] Track route intent.
- [x] Track calculator engagement.
- [x] Track pathway/source interactions.
- [ ] Build revenue dashboard specification.
- [ ] Define monthly revenue reconciliation.

**Exit criteria:** The team can measure the complete acquisition → intent → monetization funnel.

## Phase M2 — AdSense readiness
### P0
- [ ] Confirm authoritative production domain. *(blocked: P0-S5 DNS)*
- [x] Confirm privacy/consent implementation.
- [ ] Establish Google AdSense account. *(owner action)*
- [ ] Verify site eligibility. *(owner action)*
- [ ] Obtain real publisher ID. *(owner action)*
- [ ] Configure approved ad formats.
- [x] Create ads.txt placeholder (`public/ads.txt` — must not be populated until publisher ID obtained).
- [x] Implement page-level ad exclusions.
- [ ] Run performance/accessibility checks. *(requires live browser)*
- [ ] Launch controlled ad experiment.

**Exit criteria:** AdSense operates without degrading core product workflows.

## Phase M3 — Affiliate foundation
### P1
- [ ] Identify priority partner categories.
- [ ] Build partner due-diligence checklist.
- [ ] Create disclosure language.
- [ ] Implement attribution.
- [ ] Build first contextual partner modules.
- [ ] Reconcile partner revenue.

**Exit criteria:** At least one commercially useful partner category can be monetized transparently.

## Phase M4 — Lead generation
### P1
- [ ] Define qualified lead.
- [ ] Build consent-aware lead capture.
- [ ] Build partner routing.
- [ ] Add lead status lifecycle.
- [ ] Implement accepted/rejected lead reporting.
- [ ] Build revenue-per-lead reporting.

**Exit criteria:** Commercial-intent users can be handed to qualified partners without compromising trust.

## Phase M5 — Partner subscriptions
### P2
- [ ] Define partner plans.
- [ ] Validate pricing.
- [ ] Build partner profiles.
- [ ] Build partner dashboard.
- [ ] Add billing.
- [ ] Add partner MRR reporting.
- [ ] Add churn/retention reporting.

**Exit criteria:** Recurring partner revenue is operational and measurable.

## Phase M6 — Premium consumer product
### P2
Potential features:
- advanced route comparisons;
- personalized planning workspace;
- saved routes;
- document planning;
- alerts;
- enhanced cost scenarios;
- exportable migration plan.

**Exit criteria:** A paid feature provides durable value beyond public content.

## Phase M7 — API/data revenue
### P2
Potential products:
- pathway API;
- evidence metadata API;
- migration cost intelligence;
- country/pathway availability data;
- B2B mobility intelligence.

**Exit criteria:** Data licensing/API revenue is contractually recurring and evidence governance remains intact.

## Revenue optimization order
1. Trust.
2. Measurement.
3. SEO/content traffic.
4. AdSense baseline.
5. Affiliate/referral.
6. Qualified leads.
7. Partner subscriptions.
8. Premium consumer product.
9. API/data.

## Release gates
No monetization release should bypass:
- evidence integrity;
- privacy/security;
- accessibility;
- SEO;
- production verification;
- revenue attribution;
- commercial disclosure.

## Current project blocker
The known authoritative production-origin issue remains a prerequisite for activating production advertising. Do not hardcode or assume a production hostname until independently verified.

## Definition of success
MyGlobalRoute becomes a diversified revenue business where advertising funds early growth, commercial intent produces higher-value variable revenue, and subscriptions/partner/API products progressively create durable MRR.
