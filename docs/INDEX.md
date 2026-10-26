# MyPathway2Global — Documentation Index

> **Updated:** 2026-10-25 | **Production:** `https://mypathway2global.org.uk`
> **Tests:** 18/18 suites, 139/139 passing | **Commit:** `756196f`

---

## Start here

| Doc | What it is |
|---|---|
| [Active Sprint](sprints/ACTIVE_SPRINT.md) | Current task board, priority order, owner actions |
| [Phase Status](project/PHASE_STATUS.md) | Phase 0–9 completion state, open gates |
| [Production Readiness Tasks](sprints/PRODUCTION_READINESS_TASKS.md) | All 23 tasks — 23/23 complete |
| [Implementation Walkthrough](sprints/IMPLEMENTATION_WALKTHROUGH.md) | Audit findings, exact changes, best practices |

---

## Reference

| Doc | What it is |
|---|---|
| [Architecture](reference/ARCHITECTURE.md) | System overview, tech stack, data schema |
| [Design Blueprint](reference/DESIGN_BLUEPRINT.md) | Authoritative CSS/design reference (schengenvisainfo.com crawl) |
| [Data Trust Standard](reference/DATA_TRUST_STANDARD.md) | Evidence model, metric classes, approval-rate policy |
| [Evidence Schema](reference/EVIDENCE_SCHEMA.md) | Evidence record fields and validation rules |
| [Blog Post Blueprint](reference/BLOG_POST_BLUEPRINT.md) | Template and standards for new blog posts |
| [SEO Architecture](reference/SEO_ARCHITECTURE.md) | Canonical tags, OG/Twitter, schema markup strategy |
| [Tech Stack](reference/TECH_STACK.md) | Eleventy, Cloudflare Workers, Jest |
| [Deployment](reference/DEPLOYMENT.md) | Wrangler deploy, verify, rollback |
| [Privacy & Security](reference/PRIVACY_SECURITY_COMPLIANCE.md) | CSP, consent, GDPR/PECR notes |

---

## Data

| Doc | What it is |
|---|---|
| [Country Source Manifest](data/country-source-review-manifest.json) | 27-country source review status — needs human sign-off |

---

## Monetization

| Doc | What it is |
|---|---|
| [Monetization Roadmap](monetization/MONETIZATION_ROADMAP.md) | M0 complete, M1 partial, M2 blocked on publisher ID |
| [Ad Placement Map](monetization/AD_PLACEMENT_MAP.md) | Which slots go on which pages |
| [AdSense Strategy](monetization/ADSENSE_STRATEGY.md) | Application checklist, placement rules, revenue model |

---

## Guides

| Doc | What it is |
|---|---|
| [Contributing](guides/CONTRIBUTING.md) | How to add countries, pathways, evidence records |
| [Quick Start](guides/QUICK_START.md) | Dev setup in 5 minutes |

---

## Sprint history

| Doc | What it is |
|---|---|
| [Enhancement Tasks](sprints/ENHANCEMENT_TASKS.md) | 12 enhancement tasks — 12/12 complete |
| [UI Spotlight Plan](sprints/UI_SPOTLIGHT_PLAN.md) | UI assessment and action plan |
| [Master Delivery Plan](sprints/MASTER_DELIVERY_PLAN.md) | Full project delivery timeline |
| [Archive](archive/) | Superseded sprint and task documents |

---

## Key numbers (2026-10-25)

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 61 (55 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 17 across 7 categories |
| Sitemap URLs | 57 (pages + country pages + blog posts) |
| Test suites | 18/18 PASS |
| Tests | 139/139 PASS |
| OG image coverage | 21/21 static pages + blog template |
| Schema markup | Organization + WebSite on homepage; Article + Breadcrumb on blog posts |
| 404 page | ✅ |
| PWA manifest | ✅ (image asset pending) |
| Ad revenue | £0 — blocked on AdSense application |

---

## Owner actions outstanding

| Action | Blocks |
|---|---|
| Create `public/assets/og-default.png` (1200×630px) | Social sharing cards |
| Create `public/assets/icons/favicon.png` (32×32 + 180×180px) | Favicon fallback, PWA install |
| Human sign-off on 27 country source anchors | `dataset.asOf` update |
| Apply for AdSense | Revenue activation |
| Legal review of privacy/disclaimer/terms | Phase 4 close |
| Live ARIA audit (4 core pages) | Phase 0 close |
