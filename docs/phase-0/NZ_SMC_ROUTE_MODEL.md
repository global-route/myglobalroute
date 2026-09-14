# P0 — New Zealand SMC Route Model

**Status:** Active implementation design  
**Date:** 2026-09-14

## Objective

Represent the current Skilled Migrant Category (SMC) as separate legal routes instead of allowing the generic `NZ-skilled` umbrella to inherit evidence from materially different pathways.

Immigration New Zealand currently describes three SMC pathways: Points-based, Skilled Work Experience, and Trades and Technician. The product must evaluate each independently. citeturn0search2turn0search6

## Canonical route model

The existing `NZ-skilled` record remains a research umbrella. The next canonical records should be:

- `NZ-smc-points-based`
- `NZ-smc-skilled-work-experience`
- `NZ-smc-trades-technician`

The parent umbrella must never be promoted merely because one or more child routes are evidenced.

## Skilled Work Experience

The current official guidance describes this as a work-experience-led residence route. The standard case requires at least five years of directly relevant work experience, including at least two years of skilled work experience in New Zealand. Occupation-list status can add materially different requirements: amber-list occupations have additional wage/work-experience requirements and red-list occupations are excluded from this pathway. citeturn0search0turn0search10

The current wage table records the applicable SMC threshold and the 1.1x/1.2x multipliers for the Skilled Work Experience pathway; the data model should preserve the effective date rather than treating a wage as timeless. citeturn0search7

## Trades and Technician

The current route requires an eligible occupation, a relevant Level 4-or-higher qualification and post-qualification work experience, including New Zealand skilled work experience. INZ's current route page specifies at least 2.5 years of relevant post-qualification experience plus an additional 1.5 years of qualifying skilled work experience in New Zealand. International qualifications generally require an IQA; New Zealand qualifications have a separate credit rule. citeturn0search2turn0search3

The official policy announcement also confirms that the 120-credit requirement for overseas Trade and Technician qualifications was removed from 24 August 2026, while New Zealand qualifications retain the 120-credit rule. This distinction must remain route- and jurisdiction-specific in evidence. citeturn0search1

## Shared SMC gates

Every child route still needs its own evidence for shared material requirements such as skilled employment/job offer, applicable wage, English, health/character and the application/EOI process. The shared facts may reuse the same authoritative source, but evidence records must retain the exact child `pathwayId` once canonical child IDs exist. citeturn0search2turn0search9

## Important distinction

**Shared law does not mean shared pathway identity.** A fact can be legally common to multiple SMC routes while the route's eligibility test remains different. The evidence model should therefore allow the same source URL to support multiple records, but never allow a record scoped to `NZ-smc-skilled-work-experience` to satisfy `NZ-smc-trades-technician` automatically.

## Promotion gate

A child route can be promoted only after:

1. canonical pathway ID exists;
2. eligibility evidence is exact-route scoped;
3. financial/wage evidence is current and effective-dated;
4. application/process evidence is exact-route scoped;
5. occupation-list and qualification exceptions are represented where material;
6. evidence IDs resolve to the same country and child pathway;
7. data validation passes;
8. automated tests and build verification pass.

Until then, the candidate registry is authoritative for planning only and `NZ-skilled` remains `research_required`.
