# Global Route Data Trust Standard

**Status:** Active engineering standard  
**Effective:** September 5, 2026

## Purpose

Global Route is a migration-intelligence product, not a generic content site. Country and pathway facts must therefore be traceable, dated and distinguishable from editorial judgement.

## Required model

Every production migration metric should ultimately map to:

`country → pathway → metric → value → source → publication/effective date → verified date → methodology → confidence → review date`

## Metric classes

- **Official fact:** directly supported by a government, embassy, immigration authority, university or other primary authority.
- **Derived estimate:** calculated from explicitly documented inputs.
- **Editorial assessment:** Global Route's interpretation; never presented as an official statistic.
- **User strategy:** practical guidance that may depend on the user's profile.

## Approval-rate policy

Approval rates, especially applicant-nationality-specific rates, must not be shown as authoritative unless the underlying authority publishes the relevant denominator and methodology. Otherwise label them as estimates, state the evidence period and confidence, and provide the source.

## Cost policy

Do not collapse proof-of-funds, tuition, living costs, fees, insurance, travel and contingency into one unexplained number. The product should distinguish:

1. **Required funds** — what the pathway requires the applicant to demonstrate/pay.
2. **Estimated relocation budget** — realistic planning estimate.
3. **Scenario assumptions** — variables that can materially change the result.

## Freshness

Data with legal, visa, fee, exchange-rate or processing-time implications must carry a verification date and review cadence. Stale data is a product defect, not merely an editorial issue.

## Current dataset gate

The current country file is an incomplete blueprint dataset. It must not be represented as a complete 26-country evidence database until the missing countries and provenance fields are populated through research and review.

## Implementation sequence

1. Preserve existing country content while adding schema/provenance fields.
2. Introduce pathway-level records instead of country-only aggregates.
3. Add automated schema validation.
4. Research the remaining countries from primary sources.
5. Add freshness/confidence checks to CI.
6. Only then promote country metrics into recommendation rankings.
