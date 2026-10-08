# AdSense Strategy

**Status:** Planned / implementation-ready

## Objective
Use Google AdSense as a baseline monetization layer for informational traffic while protecting MyGlobalRoute's core route-discovery experience.

Google defines RPM as estimated earnings divided by impressions/page views/queries, multiplied by 1,000 depending on the RPM metric.

## Recommended starting model

| Surface | AdSense |
|---|---|
| Blog | ON |
| Guides | ON |
| Country pages | ON, restrained |
| Pathway pages | ON, restrained |
| Country explorer | Limited |
| Calculator results | Limited/test |
| Find My Route | OFF during workflow |
| Calculator inputs | OFF |
| Search | OFF/very limited |
| Forms | OFF |
| Checkout | OFF |
| Privacy/terms | OFF |

## Formats
Potential formats:
- responsive in-page ads;
- Multiplex/recommendation-style units where eligible;
- mobile anchor experiments;
- other Auto Ads formats only after UX testing.

Do not enable every format simultaneously. Start with a controlled baseline and measure revenue against engagement.

## Placement principles
Ads must:
- be visually distinguishable from editorial content;
- not resemble navigation;
- not resemble route recommendations;
- not sit directly beside high-risk interactive controls;
- not interrupt essential form completion;
- not create accidental-click pressure.

## Consent
MyGlobalRoute is inherently international. Google requires a Google-certified CMP integrated with IAB TCF when serving personalised ads to users in the EEA, UK and Switzerland.

Implementation must include:
- consent-state detection;
- privacy messaging;
- non-personalized/limited-ad handling where appropriate;
- documented provider disclosures;
- consent event analytics;
- a process for policy updates.

Google provides its own CMP option and also maintains a list of certified third-party CMPs.

## Account and technical setup
1. AdSense publisher account.
2. Site ownership/eligibility verification.
3. Actual publisher ID.
4. AdSense site configuration.
5. AdSense code.
6. ads.txt containing the publisher relationship supplied by Google.
7. Privacy/consent configuration.
8. Revenue analytics.
9. Invalid-traffic monitoring.

Never commit guessed publisher IDs.

## Revenue model
Ad RPM = estimated earnings / ad impressions × 1,000.

Page RPM = estimated earnings / page views × 1,000.

RPM is a measurement metric, not a guaranteed rate.

## Experimentation
Test:
- ad density;
- placement position;
- mobile vs desktop;
- page type;
- traffic geography;
- anchor usage;
- Multiplex usage.

Guardrails:
- route completion;
- bounce/engagement;
- Core Web Vitals;
- accessibility;
- accidental interaction signals;
- SEO performance.

Revenue wins that materially damage product engagement should be rejected.

## Production gate
Do not activate live AdSense until:
- authoritative deployment origin is confirmed;
- privacy/consent architecture is ready;
- production smoke verification passes;
- publisher account is genuinely approved;
- publisher ID is supplied from the real account.
