# P0 — New Zealand SMC Route Model

**Status:** Active implementation design  
**Date:** 2026-09-14

## Objective

Represent the current Skilled Migrant Category (SMC) as separate legal routes instead of allowing the generic `NZ-skilled` umbrella to inherit evidence from materially different pathways.

Immigration New Zealand currently describes three SMC pathways: Points-based, Skilled Work Experience, and Trades and Technician. The product must evaluate each independently. citeturn0search2turn0search5

## Canonical route model

The existing `NZ-skilled` record remains a research umbrella. The next canonical records should be:

- `NZ-smc-points-based`
- `NZ-smc-skilled-work-experience`
- `NZ-smc-trades-technician`

The parent umbrella must never be promoted merely because one or more child routes are evidenced.

## Points-based

The route requires 6 skilled resident points. A claimant may use **one** primary category — qualification, New Zealand occupational registration, or income — and may top it up with up to 3 points from qualifying New Zealand skilled work experience. Qualification and registration/income points cannot be mixed as separate primary categories. citeturn0search2turn0search5

For overseas qualifications, an IQA is generally required unless the qualification is on the applicable LQEA. Current rules also impose supporting-bachelor requirements for relevant Level 8/9 claims, with specific exceptions for qualifying New Zealand master's claims. Qualification and registration evidence must be represented explicitly rather than inferred from a generic profile. citeturn0search0turn0search1turn0search4

The implementation now has deterministic point-composition regression coverage. Remaining promotion blockers are the complete qualification/IQA/LQEA exception matrix, eligible occupational-registration matrix, effective-date wage validation, and final promotion validation.

## Skilled Work Experience

The current official guidance describes this as a work-experience-led residence route. The standard case requires at least five years of directly relevant work experience, including at least two years of skilled work experience in New Zealand. Occupation-list status can add materially different requirements: amber-list occupations have additional requirements and red-list occupations are excluded from this pathway. Self-employment cannot count as relevant work experience. citeturn0search0turn0search5

The data model must preserve the applicable wage threshold and effective date rather than treating a wage as timeless. The amber/red occupation matrix is therefore a material promotion dependency, not editorial metadata.

## Trades and Technician

The current INZ route requires an eligible occupation, a relevant qualification and at least four years of post-qualification work experience, including at least 18 months of skilled work experience in New Zealand. citeturn0search2

Qualification treatment is jurisdiction-sensitive: INZ confirms that the 120-credit requirement for overseas Trade and Technician qualifications was removed from 24 August 2026, while New Zealand qualifications retain a 120-credit requirement. The product must therefore keep the overseas-vs-New-Zealand distinction explicit. citeturn0search1

## Shared SMC gates

Every child route still needs its own evidence for shared material requirements such as skilled employment/job offer, applicable wage, English, health/character and the application/EOI process. The shared facts may reuse the same authoritative source, but evidence records must retain the exact child `pathwayId` once canonical child IDs exist.

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
8. automated tests and build verification pass;
9. final promotion validation confirms no unresolved material field remains.

Until then, the candidate registry is authoritative for planning only and `NZ-skilled` remains `research_required`.
