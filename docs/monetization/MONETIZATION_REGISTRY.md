# Monetization Registry Contract

**Phase:** P1-REV  
**Task:** REV-02  
**Status:** Foundation implemented; page-type contracts wired; live monetization remains disabled.

## Runtime source

`src/js/monetization.js` is the single configuration registry for monetization inventory.

It defines:

- display-ad slots;
- contextual partner slots;
- allowed page types;
- restricted page/workflow types;
- consent requirement for display ads.

Pages now expose explicit `data-page-type` contracts and load the shared registry. Visible provider rendering remains intentionally deferred until provider/consent production gates pass.

## Display-ad guardrails

Display ads require explicit analytics/ad consent and are excluded from:

- Find My Route;
- search;
- forms;
- account;
- checkout;
- legal;
- error surfaces.

Current configured slots:

- `ad_article_top`
- `ad_article_mid`
- `ad_article_end`
- `ad_country_mid`
- `ad_pathway_after_core`
- `ad_calculator_result`
- `ad_homepage_secondary`

The registry does not contain a publisher ID and does not load AdSense.

## Partner slots

Partner inventory is contextual and identified independently from route ranking.

Current slots:

- `partner_route_next_step`
- `partner_insurance`
- `partner_education`
- `partner_accommodation`
- `partner_relocation`

A partner cannot become eligible merely because it pays more.

## Commercial firewall

This layer must never be imported into evidence validation, pathway eligibility or route ranking as a decision signal.

The correct flow is:

**Evidence → eligibility → route recommendation → contextual commercial opportunity**

not:

**Payout → route recommendation.**

## Current implementation state

- Page-type contracts are wired for home, blog, calculator, country, pathway and Find My Route surfaces.
- Unit coverage protects slot/page-type boundaries.
- Find My Route remains excluded from display advertising.
- No live publisher ID or partner destination is stored in the repository.

## Next

REV-04: governed partner lifecycle, disclosure and reconciliation. REV-03 remains gated by production origin, consent/CMP and publisher configuration.
