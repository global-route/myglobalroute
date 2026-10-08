# MyGlobalRoute Revenue Architecture

**Status:** Planned / implementation-ready

## Purpose
MyGlobalRoute should monetize migration intent without compromising evidence quality, route usability, user trust or editorial independence.

The architecture separates recurring revenue (MRR) from variable monthly revenue such as AdSense and referral commissions.

### Core principle
> Monetize attention lightly; monetize verified migration intent more deeply.

## Revenue layers

| Layer | Revenue type | Priority | Primary surface |
|---|---|---:|---|
| AdSense | Variable advertising | P0 | Blog, guides, country/pathway content |
| Affiliate/referral | Variable/commission | P1 | High-intent route next steps |
| Qualified leads | Variable/contracted | P1 | Route recommendations and partner handoffs |
| Sponsored placements | Contracted | P1 | Clearly labelled partner modules |
| Premium user product | Recurring | P2 | Advanced route intelligence |
| Partner subscriptions | Recurring | P2 | Professional/business portal |
| API/data access | Recurring | P2 | B2B/API |

## Revenue hierarchy
1. Traffic acquisition: SEO, direct, referral and social.
2. Trust: authoritative evidence, provenance and transparent limitations.
3. Intent capture: Find My Route, pathway pages and calculators.
4. Commercial matching: relevant partners/services.
5. Recurring products: premium tools, partner plans and API/data.
6. Advertising: baseline monetization of informational inventory.

Advertising must never determine route ranking, evidence status or eligibility claims.

## Revenue vs MRR
MRR = subscription MRR + partner MRR + API/data MRR + other qualifying recurring contracts.

Total monthly revenue = MRR + AdSense + referral commissions + lead fees + sponsorships + other revenue.

Do not classify unpredictable AdSense or one-off referral payments as MRR.

## Product surfaces

### High monetization
- Blog
- Long-form migration guides
- Country information pages
- Pathway information pages
- Comparison/research pages

### Controlled monetization
- Country explorer
- Route result pages
- Calculator result pages

### Excluded or minimal monetization
- Find My Route questionnaire
- Calculator input interface
- Search interface
- Forms
- Authentication/account pages
- Checkout/payment pages
- Privacy/terms/disclaimer pages
- Error pages

## Trust firewall
Commercial revenue must never:
- promote an unsupported migration route;
- alter pathway ranking;
- suppress adverse evidence;
- fabricate approval rates;
- imply government endorsement;
- present sponsored content as official government information.

Sponsored and affiliate relationships must be clearly disclosed.

## Revenue architecture

Traffic → Content/Tools → Evidence-backed route intelligence → Intent → Advertising / Referral / Lead / Sponsorship / Premium-B2B → Recurring + variable revenue.

## Implementation principles
- Configuration-driven ad slots.
- Page-type exclusions.
- Consent-aware ad loading.
- Analytics events for revenue surfaces.
- Partner attribution IDs.
- Revenue source ledger.
- Monthly cohort reporting.
- No hardcoded publisher IDs or partner IDs.
- No production monetization until authoritative deployment origin is verified.

## Dependencies
- authoritative production hostname;
- privacy policy and applicable consent controls;
- analytics event taxonomy;
- AdSense account/approval where applicable;
- ads.txt publisher record supplied by the actual AdSense account;
- partner agreements and disclosures;
- fraud/invalid-traffic monitoring;
- revenue reconciliation process.

## Success definition
Monetization succeeds when it increases revenue without reducing route completion, trust, accessibility, SEO quality or evidence integrity.
