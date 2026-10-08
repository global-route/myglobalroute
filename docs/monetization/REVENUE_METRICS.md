# Revenue Metrics

**Status:** Planned

## North-star revenue model
Traffic → Engaged users → Route intent → Commercial intent → Lead/referral → Paid conversion → Retention → Revenue.

## Acquisition metrics
- Users
- Sessions
- Organic users
- Organic landing pages
- Country/page traffic
- Returning users
- Acquisition source
- Search-to-route-engine rate

## Product intent metrics
- Find My Route starts
- Find My Route completions
- Route recommendations
- Pathway views
- Calculator starts
- Calculator completions
- Evidence/source clicks
- Official-source clicks
- Save/share events when implemented

## Advertising metrics
- Ad impressions
- Viewability where available
- Estimated earnings
- Ad RPM
- Page RPM
- Fill/coverage where available
- Revenue by page type
- Revenue by geography
- Revenue per session

Google's RPM metrics normalize revenue; impression RPM is estimated earnings divided by impressions × 1,000. citeturn0search1turn0search4

## Affiliate metrics
- Partner impressions
- Partner clicks
- Click-through rate
- Qualified clicks
- Leads
- Approved leads
- Commission per conversion
- EPC
- Conversion rate
- Revenue by partner
- Revenue by pathway

## Lead metrics
Lead Conversion Rate = qualified leads / eligible commercial-intent users.

Track:
- lead acceptance;
- lead rejection;
- lead-to-sale;
- revenue per qualified lead;
- revenue per visitor.

## Subscription metrics
- Free users
- Trial starts
- Paid users
- New MRR
- Expansion MRR
- Contraction MRR
- Churned MRR
- Net New MRR
- ARPU
- monthly logo churn
- revenue churn
- LTV
- CAC
- LTV:CAC

## Partner metrics
- active partners;
- partner MRR;
- average partner MRR;
- leads per partner;
- revenue per partner;
- partner retention;
- partner utilization;
- sponsored-placement revenue.

## Guardrail metrics
Revenue cannot be optimized in isolation. Monitor:
- page speed/Core Web Vitals;
- accessibility;
- route completion;
- evidence-source engagement;
- bounce/engagement;
- ad-related layout shift;
- complaints;
- invalid traffic;
- privacy/consent errors.

## Recommended event taxonomy
- route_search_started
- route_recommendation_generated
- pathway_viewed
- calculator_started
- calculator_completed
- official_source_clicked
- ad_impression
- partner_impression
- partner_clicked
- lead_started
- lead_submitted
- subscription_started
- subscription_cancelled

Never send unnecessary sensitive migration-profile information to advertising analytics.

## Reporting cadence
### Daily
Operational anomalies and revenue tracking.

### Weekly
Acquisition, intent, ads and partner performance.

### Monthly
MRR bridge, revenue mix, retention, unit economics and experiments.

### Quarterly
Pricing, partner portfolio, advertising strategy and product monetization review.
