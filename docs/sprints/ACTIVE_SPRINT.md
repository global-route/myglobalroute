# Active Sprint — Owner Actions & Ongoing Maintenance

> **Updated:** 2026-10-29 | **Branch:** `main` | **Commit:** `d5ce2b0`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 19/19 suites, 180/180 passing

---

## Current state

All code phases complete (0-9, B, CP, GOIF). No code tasks are blocked. Remaining work is owner actions and ongoing content maintenance only.

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 65 (59 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 35 across 7 categories |
| Sitemap URLs | 80+ |
| Test suites | 19/19 PASS |
| Tests | 180/180 PASS |
| Service Worker | Live (`public/sw.js`) |
| Save My Plan export | Live (client-side JSON, Find MyPathway) |
| Stale pathway audit | 0 stale — 37 fields refreshed 2026-10-29 |
| GOIF schema | 4 seed pathways with asymmetry_category + capital_tier + regional_concessions |
| GOIF gap card | Tier badge + concessions + playbook CTA live in Find MyPathway |
| GOIF pSEO pages | pathways-funded-study.html + pathways-regional-skilled.html live |
| localStorage cache | goif_pathways_v1 (24h TTL) in Find MyPathway + both pSEO pages |
| OG image coverage | All pages + blog template (image asset pending owner) |
| Schema markup | Organization + WebSite on homepage; Article + Breadcrumb + FAQPage on blog posts; WebPage on visa-wizard.html |
| Ad revenue | £0 — AdSense site ownership verified; Google policy review pending |
| Email capture | Form live on blog sidebar — Mailchimp action URL pending owner config |

---

## Owner actions (nothing here is blocked on code)

| # | Item | Effort | Blocks |
|---|---|---|---|
| 1 | Favicon PNG | 5 min | Browser tab icon, PWA homescreen icon |
| 2 | OG image | 20 min | Social share cards on all pages |
| 3 | Mailchimp action URL | 10 min | Email capture going live |
| 4 | ARIA audit | 30 min | Accessibility gate |
| 5 | Country source sign-off (27 entries) | 1-2 hrs | `dataset.asOf` update |
| 6 | Legal review | Solicitor | Trust gate |
| — | Quarterly audit routine | ✅ Done | GitHub Actions workflow live — `.github/workflows/stale-pathways.yml` |
| — | AdSense | **Done** | Publisher ID `ca-pub-8077583188666813` live, policy review pending |

See `docs/sprints/OWNER_ACTIONS.md` for full instructions on each item.

---

## Completed sprints (see CHANGELOG.md for full deliveries)

| Sprint | Date | Tasks | Reference |
|---|---|---|---|
| GOIF S3-1 + S4 | 2026-10-29 | Gap card GOIF fields, 2 pSEO pages, sitemap, localStorage cache, 3 tests | `d5ce2b0` |
| GOIF S1 + S2 | 2026-10-29 | 4 seed pathways, route type filter, funded badge, 4 blog posts, sitemap | `d5f0210` |
| Content Platform Sprint | 2026-10-28 | 14 tasks — Ireland/Spain audits, comparative playbooks, audit badges, localStorage, FAQPage schema, 3 landing pages, SW, export, stale script | `CHANGELOG.md` 2026-10-28 entry |
| Data freshness + wizard tests | 2026-10-28 | 19 stale fields refreshed, 31 wizard tests, GitHub Actions stale workflow | `CHANGELOG.md` 2026-10-28 entry |
| N-P2/P3 + 4 country audits | 2026-10-28 | FMP extension routes, evidence trail + next action on cards, Austria/NZ/Japan/South Korea audits | `CHANGELOG.md` 2026-10-28 entry |
| Production Readiness | 2026-10-25 | 23 tasks | `CHANGELOG.md` 2026-10-25 entry |

---

## Next sprint candidates

### Priority 1 — Data freshness
| ID | Task | Status | Notes |
|---|---|---|---|
| N-D1 | Stale pathway requirements | ✅ Done | 37 fields refreshed 2026-10-29 across CA, IE, DE, IT, FR, HU, SE, LU, LT, IS, ES, AT, KR, CN, PL, MT, CH, CZ |
| N-D2 | Country source sign-off (27 entries) | Owner | Open `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 27 |

### Priority 2 — Trust & compliance (owner-gated)
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-T1 | ARIA audit — 4 core pages | Owner | Run axe DevTools on homepage, Find MyPathway, Visa Wizard, Calculator |
| N-T2 | Legal review — privacy/disclaimer/terms | Owner | Solicitor sign-off required |
| N-T3 | Consent UI validation in real browser | Owner | Confirm analytics/advertising toggles, ad slots hidden when consent off |
| N-T4 | Live CSP audit | Owner | Compare `public/_headers` CSP against actual scripts per page |
| N-T5 | Quarterly audit routine | ✅ Done | GitHub Actions workflow live |

### Priority 3 — Content expansion
| ID | Task | Notes |
|---|---|---|
| N-C5 | AfCFTA / intra-Africa corridor content | Blueprint Vertical B — Rwanda, Mauritius, Ghana, Kenya business hubs |
| N-C6 | African digital nomad hub audits | Mauritius Premium Visa, Cape Verde Remote Work, Namibia Digital Nomad |
| N-C7 | GOIF Sprint 2 playbooks | Australia DAMA, Italy DSU need-blind, Asian/Nordic accelerators, Portugal D3 — markdown content exists, needs editorial review |

### Priority 4 — Product (code-ready)
| ID | Task | Notes |
|---|---|---|
| N-P4 | WebPage schema on pSEO pages | Add JSON-LD WebPage markup to pathways-funded-study.html + pathways-regional-skilled.html |
| N-P5 | Nav link for pSEO pages | Add "Funded Routes" entry to footer Explore section |
| N-P6 | GOIF remote_freelance pathways | Research + ingest digital nomad routes with asymmetry_category: remote_freelance |

### Priority 5 — Revenue & growth
| ID | Task | Notes |
|---|---|---|
| N-R1 | AdSense revenue reconciliation baseline | After first 30 days live: record impressions, clicks, RPM |
| N-R2 | Mailchimp action URL | Replace placeholder in `src/pages/blog.html` |
| N-R3 | Affiliate infrastructure | Requires legal review before any lead flow activates |

---

## Useful commands

```bash
npm run build                              # build to dist/
npx wrangler deploy                        # deploy to Cloudflare Workers
npm test                                   # 19/19 suites, 180/180 tests
node scripts/verify-build.js               # build integrity check
node scripts/check-stale-pathways.js       # flag pathway requirements >90 days old
```
