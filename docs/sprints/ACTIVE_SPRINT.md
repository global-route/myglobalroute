# Active Sprint — Owner Actions & Ongoing Maintenance

> **Updated:** 2026-10-28 | **Branch:** `main` | **Commit:** `1ba24a8`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 18/18 suites, 137/137 passing

---

## Current state

All code phases complete (0-9, B, CP). No code tasks are blocked. Remaining work is owner actions and ongoing content maintenance only.

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 61 (55 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 31 across 7 categories |
| Sitemap URLs | 76+ |
| Test suites | 18/18 PASS |
| Tests | 168/168 PASS |
| Service Worker | Live (`public/sw.js`) |
| Save My Plan export | Live (client-side JSON, Find MyPathway) |
| Stale pathway audit | Script live (`scripts/check-stale-pathways.js`) — 0 stale after 2026-10-28 refresh |
| OG image coverage | All pages + blog template (image asset pending) |
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
| 7 | Quarterly audit routine | 1 hr | Choose GitHub Actions workflow or manual calendar |
| — | AdSense | **Done** | Publisher ID `ca-pub-8077583188666813` live, policy review pending |

See `docs/sprints/OWNER_ACTIONS.md` for full instructions on each item.

---

## Completed sprints (see CHANGELOG.md for full deliveries)

| Sprint | Date | Tasks | Reference |
|---|---|---|---|
| Content Platform Sprint | 2026-10-28 | 14 tasks — Ireland/Spain audits, comparative playbooks, audit badges, localStorage, FAQPage schema, 3 landing pages, SW, export, stale script | `CHANGELOG.md` 2026-10-28 entry |
| Data freshness + wizard tests | 2026-10-28 | 19 stale fields refreshed, 31 wizard tests, GitHub Actions stale workflow | `CHANGELOG.md` 2026-10-28 entry |
| N-P2/P3 + 4 country audits | 2026-10-28 | FMP extension routes, evidence trail + next action on cards, Austria/NZ/Japan/South Korea audits | `CHANGELOG.md` 2026-10-28 entry |
| Production Readiness | 2026-10-25 | 23 tasks | `CHANGELOG.md` 2026-10-25 entry |
| Enhancement Sprint | 2026-10-25 | 12 tasks | `CHANGELOG.md` 2026-10-25 entry |
| Wizard & Find MyPathway | 2026-10-25 | W1-W5 all phases | `CHANGELOG.md` 2026-10-26 entry |

---

## Next sprint candidates

### Priority 1 — Data freshness (immediate)
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-D1 | ~~Remediate 19 stale pathway requirements~~ | ✅ Done | All 19 `effectiveDate` fields refreshed to 2026-10-28 across IE, DE, FR, HU, SE, LU, LT, IS, ES, PL, MT, CZ |
| N-D2 | Country source sign-off (27 entries) | Owner | Open `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 27, then `dataset.asOf` can be updated |

### Priority 2 — Trust & compliance (owner-gated)
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-T1 | ARIA audit — 4 core pages | Owner | Run axe DevTools on homepage, Find MyPathway, Visa Wizard, Calculator; share results for code fixes |
| N-T2 | Legal review — privacy/disclaimer/terms | Owner | Solicitor sign-off required |
| N-T3 | Consent UI validation in real browser | Owner | Confirm analytics/advertising toggles, ad slots hidden when consent off |
| N-T4 | Live CSP audit | Owner | Compare `public/_headers` CSP against actual scripts per page; remove unused allowlist entries |
| N-T5 | Quarterly audit routine | ✅ Done | GitHub Actions workflow live (`.github/workflows/stale-pathways.yml`) — runs every Monday, opens issue on stale findings |

### Priority 3 — Content expansion
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-C1 | ~~Austria country audit~~ | ✅ Done | Published 2026-10-28 — RWR Card (55 pts, EUR 2,685/month) + study visa (EUR 1,217/month) |
| N-C2 | ~~New Zealand country audit~~ | ✅ Done | Published 2026-10-28 — 4 pathways: student (NZD 20,000) + 3 SMC sub-routes |
| N-C3 | ~~Japan country audit~~ | ✅ Done | Published 2026-10-28 — student visa + MEXT (JPY 117,000/month) + Engineer visa |
| N-C4 | ~~South Korea country audit~~ | ✅ Done | Published 2026-10-28 — student visa (USD 9,000) + KGSP + E-7 work visa |

### Priority 4 — Product improvements (code)
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-P1 | ~~Wizard engine test suite~~ | ✅ Done | 31 tests in `tests/wizard-engine.test.js` |
| N-P2 | ~~Find MyPathway extension routes section~~ | ✅ Done | Renders post-study/PR/tourist-switch routes below results when `currentVisa` is set |
| N-P3 | ~~Route explanations — evidence + next action~~ | ✅ Done | Each result card now shows per-requirement `effectiveDate` + source link + country-specific next step |

### Priority 5 — Revenue & growth
| ID | Task | Owner | Notes |
|---|---|---|---|
| N-R1 | AdSense revenue reconciliation baseline | Owner | After first 30 days live: record impressions, clicks, RPM, total revenue |
| N-R2 | Mailchimp action URL | Owner | Replace placeholder in `src/pages/blog.html` — email signups currently go nowhere |
| N-R3 | Affiliate infrastructure | Owner | Requires legal review before any lead flow activates |

---

## Useful commands

```bash
npm run build                              # build to dist/
npx wrangler deploy                        # deploy to Cloudflare Workers
npm test                                   # 18/18 suites
node scripts/verify-build.js               # build integrity check
node scripts/check-stale-pathways.js       # flag pathway requirements >90 days old
```
