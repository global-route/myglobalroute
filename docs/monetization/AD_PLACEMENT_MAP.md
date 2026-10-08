# Ad Placement Map

**Status:** Planned

## Placement philosophy
The placement map is deliberately conservative. MyGlobalRoute is a decision-support product, not an advertising-first content farm.

### Legend
- HIGH: advertising is appropriate.
- MEDIUM: limited placements.
- LOW: minimal/test only.
- EXCLUDED: no conventional display advertising.

## Page map

| Page type | Level | Recommended locations | Notes |
|---|---|---|---|
| Homepage | LOW | Below primary product sections | Keep hero/conversion clean |
| Blog article | HIGH | After intro, mid-content, end | Highest inventory |
| Long guide | HIGH | Intro/mid/end | Respect reading flow |
| Country page | MEDIUM | Between major sections | Never beside route CTA |
| Pathway page | LOW/MEDIUM | After core evidence/requirements | Trust-first |
| Country directory | LOW | Between content groups | Avoid card confusion |
| Calculator | LOW | After result | Never beside inputs |
| Find My Route | EXCLUDED during workflow | Optional post-result commercial module | Prefer partners |
| Search | EXCLUDED | — | Ads must not resemble results |
| Forms | EXCLUDED | — | Protect completion |
| Account | EXCLUDED | — | Product surface |
| Checkout | EXCLUDED | — | Transactional |
| Privacy/Terms | EXCLUDED | — | Legal clarity |
| Error pages | EXCLUDED | — | Recovery UX |

## Blog template
Header → Article title → Introduction → AD: article-top → content → AD: article-mid → content → Related content → AD: article-end/Multiplex → Footer.

## Country template
Country header → Overview → Migration pathways → AD: country-mid → Evidence/requirements → Related guides.

## Pathway template
Pathway header → Eligibility → Financial requirements → Documents → Evidence/provenance → AD: pathway-after-core → Related pathways/guides.

## Calculator
Never place an ad:
- between an input and its control;
- directly beside the calculate button;
- between steps of a multi-step calculator.

Preferred: Inputs → Calculation → Result → AD → Related pathway.

## Find My Route
Preferred commercial sequence:
Questions → Recommendation → Requirements → Next steps → Relevant partner/referral module.

Do not use a conventional display ad to interrupt the recommendation workflow.

## Slot naming
- ad_article_top
- ad_article_mid
- ad_article_end
- ad_country_mid
- ad_pathway_after_core
- ad_calculator_result
- ad_homepage_secondary

Future partner slots:
- partner_route_next_step
- partner_insurance
- partner_education
- partner_accommodation
- partner_relocation

## Guardrail
No ad placement should cause a user to mistake:
- an advertisement for an official source;
- a sponsor for a government agency;
- a commercial recommendation for MyGlobalRoute's evidence-backed route recommendation.
