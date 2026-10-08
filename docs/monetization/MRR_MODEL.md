# MRR Model

**Status:** Planned

## Definition
Monthly Recurring Revenue (MRR) is the normalized monthly value of active recurring contracts/subscriptions.

MRR is not the same as total monthly revenue.

## Core formula
MRR = User Subscription MRR + Partner MRR + API/Data MRR + Other Qualifying Recurring Contracts.

## Excluded from MRR by default
- AdSense;
- one-off referral commissions;
- one-time lead fees;
- one-off sponsorships;
- one-time consulting;
- payment processing pass-throughs;
- taxes collected on behalf of authorities;
- refunds/chargebacks.

These belong in total revenue reporting, not recurring revenue.

## Total monthly revenue
Total Monthly Revenue = MRR + Variable Advertising + Referral + Lead + Sponsorship + Other Revenue.

## Subscription MRR
Subscription MRR = active paid subscribers × normalized monthly price.

Annual plans should be normalized as annual contract value divided by 12. Only active, collectible recurring contracts count.

## Partner MRR
Potential partner plans:
- verified provider profile;
- lead-management dashboard;
- premium partner placement;
- analytics;
- API access;
- route-intelligence tools.

Partner MRR = sum of active partner monthly contract values.

## API/Data MRR
API/Data MRR = sum of active API/data contracts.

Usage-based revenue should be separately reported unless the contract has a committed recurring minimum.

## Illustrative example
- 1,000 users × $5/month = $5,000 user MRR.
- 50 partners × $100/month = $5,000 partner MRR.
- 10 API customers × $250/month = $2,500 API MRR.

MRR = $12,500.

If the same month produces $1,200 AdSense, $2,000 referrals and $800 leads, total monthly revenue is $16,500 but MRR remains $12,500.

## MRR movements
### New MRR
MRR created by new customers/contracts.

### Expansion MRR
Additional MRR from existing customers.

### Contraction MRR
Recurring value lost through downgrades.

### Churned MRR
Recurring value lost through cancellation.

### Reactivation MRR
Recurring value returned by previously churned customers.

### Net New MRR
New + Expansion + Reactivation − Contraction − Churn.

## MRR health
Track:
- MRR;
- Net New MRR;
- MRR growth rate;
- logo churn;
- revenue churn;
- expansion rate;
- ARPU;
- LTV;
- CAC;
- LTV:CAC;
- gross margin.

## Forecasting
Use conservative, base and upside scenarios for:
- traffic;
- ad RPM;
- referral conversion;
- lead value;
- subscription conversion;
- partner count;
- churn.

Never present assumptions as guaranteed revenue.

## Critical distinction
Traffic does not equal MRR.

A high-traffic site can have low MRR if it has no recurring product. MyGlobalRoute should deliberately build recurring products while using advertising/referrals as earlier-stage monetization.
