# Active Sprint — Owner Actions & Ongoing Maintenance

> **Updated:** 2026-10-30 | **Branch:** `main` | **Commit:** `b8ce4ed`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 19/19 suites, 180/180 passing

---

## Current state

All code phases complete (0-9, B, CP, GOIF, Vertical B). No code tasks are blocked. Remaining work is owner actions and ongoing content maintenance only.

| Metric | Value |
|---|---|
| Countries | 30 (27 original + MU, CV, NA) |
| Pathways | 69 (63 publishable / 6 research_required) |
| Evidence records | 218+ |
| Blog posts | 96 across 7 categories |
| Sitemap URLs | 145 |
| Test suites | 19/19 PASS |
| Tests | 180/180 PASS |
| GOIF pathways | 7 tagged (asymmetry_category + capital_tier) |
| remote_freelance | 3 pathways — MU, CV, NA |
| PR-route tagged | 11 pathways — CA, AU×3, NZ×4, IE, FR, PT |
| Nomad tagged | 6 pathways — DE, PT, ES, MU, CV, NA |
| Region filter | 10 regions in Find MyPathway |
| ⌘K search | Modal search across countries, pathways, posts — all pages |
| pSEO pages | pathways-funded-study.html + pathways-regional-skilled.html |
| localStorage cache | goif_pathways_v1 (24h TTL) |
| Service Worker | Live (`public/sw.js`) |
| Save My Plan export | Live (client-side JSON, Find MyPathway) |
| Stale requirements | 0 — last refreshed 2026-10-30 |
| OG image | All pages tagged (image asset pending owner) |
| Ad revenue | £0 — AdSense policy review pending |
| Email capture | Form live — Mailchimp action URL pending owner |

---

## Owner actions (nothing here is blocked on code)

| # | Item | Effort | Blocks |
|---|---|---|---|
| 1 | OG image (1200×630px) | 20 min | Social share cards on all pages |
| 2 | Mailchimp action URL | 10 min | Email capture going live |
| 3 | ARIA audit (axe on 4 pages) | 30 min | Accessibility gate — share results for code fixes |
| 4 | Country source sign-off (30 entries) | 1-2 hrs | `dataset.asOf` update |
| 5 | Legal review (privacy/disclaimer/terms) | Solicitor | Trust gate |
| — | Favicon PNG | ✅ Done | Files in `public/` root |
| — | Quarterly audit routine | ✅ Done | GitHub Actions workflow live |
| — | AdSense | ✅ Done | Publisher ID live, policy review pending |

See `docs/sprints/OWNER_ACTIONS.md` for full instructions on each item.

---

## Completed sprints

| Sprint | Date | Commit | Key deliverables |
|---|---|---|---|
| Vertical B + ⌘K search | 2026-10-29 | `e87f15c` | 3 African nomad countries, 3 remote_freelance pathways, 4 blog posts, region filter, PR filter, ⌘K search modal |
| 12 country audits + N-P4/P5/C9/C10 | 2026-10-29 | `68c88d4` | FI SE NO CH LU HU LT IS PL MT CZ CN audits, WebPage schema, footer links, AfCFTA + diaspora guides |
| Opportunity research sprint | 2026-10-29 | latest | NZ-aewv pathway, USask scholarship post, Paraguay overview, UniCal DSU mention |
| Partners page + about/contact rewrite | 2026-10-30 | `48b2401` | partners.html (3-tier model, trust firewall), about rewritten as org, contact 3 paths |
| Emoji/em-dash cleanup + YAML fix | 2026-10-30 | `2be2d42` | All 90 posts cleaned, FAQ YAML indentation repaired |
| CRS/tax series (3 posts) | 2026-10-30 | `7bb44bc` | CRS explained, UAE second residency, split residency structuring |
| 6 new posts + data refresh | 2026-10-30 | `b8ce4ed` | MU/CV/NA country audits, FATCA, cease FIRS residency, GBL+CRS |
| Region + PR filters | 2026-10-29 | `e871731` | Target Region select, pr-route filter, IE/FR/PT pr-route tags, doc updates |
| Data freshness | 2026-10-29 | `6d29814` | 37 stale effectiveDate fields refreshed |
| GOIF S3-1 + S4 | 2026-10-29 | `d5ce2b0` | Gap card GOIF fields, 2 pSEO pages, localStorage cache, 3 tests |
| GOIF S1 + S2 | 2026-10-29 | `441b9fe` | 4 seed pathways, route type filter, funded badge, 4 blog posts |
| Content Platform Sprint | 2026-10-28 | — | Ireland/Spain audits, comparative playbooks, audit badges, SW, export, stale script |
| N-P2/P3 + 4 country audits | 2026-10-28 | — | FMP extension routes, evidence trail, Austria/NZ/Japan/South Korea audits |
| Production Readiness | 2026-10-25 | — | 23 tasks — 27-country registry, USA pathways, OG tags, 404, manifest |

---

## Next sprint candidates

### Priority 1 - Owner-gated (no code needed)
| ID | Task | Effort | Notes |
|---|---|---|---|
| N-T1 | OG image | 20 min | 1200x630px, navy `#10316b` bg - see OWNER_ACTIONS.md |
| N-T2 | Mailchimp URL | 10 min | Replace placeholder in `src/pages/blog.html` - see OWNER_ACTIONS.md |
| N-T3 | YouTube video IDs (96 posts) | 1-2 hrs | Replace YOUTUBE_PLACEHOLDER comments - see OWNER_ACTIONS.md |
| N-T4 | ARIA audit | 30 min | Run axe on 4 pages, share results - see OWNER_ACTIONS.md |
| N-T5 | Country source sign-off (30) | 1-2 hrs | `docs/data/country-source-review-manifest.json` - see OWNER_ACTIONS.md |
| N-T6 | Legal review | Solicitor | privacy/disclaimer/terms - prerequisite for affiliate/lead revenue |

### Priority 2 - Reserved posts (needs research)
See `docs/sprints/RESERVED_POSTS_TASKFILE.md` for full details.
| ID | Post | Blocker |
|---|---|---|
| R1 | Guyana freelance visa | No primary source research |
| R2 | Indonesia visa | No primary source research |
| R3 | UK Innovator Founder visa | Endorsing body details needed |
| R4 | France Talent Passport deep-dive | Subcategory details needed |
| R5 | Singapore work visa | Country not in platform, full setup needed |
| R6 | Canada RCIP | Program status unclear |

### Priority 3 - Revenue (externally gated)
| ID | Task | Notes |
|---|---|---|
| N-R1 | AdSense revenue baseline | After first 30 days live: record impressions, clicks, RPM |
| N-R2 | Affiliate infrastructure | Requires legal review (N-T6) first |
| N-R3 | Lead generation engine | Requires consent architecture + legal review |

### Priority 4 - Phase 6 Scale (hard-gated)
Do not start until Phase 5 revenue baseline exists.
- Personalisation and saved routes
- Policy-change alerts
- Premium migration intelligence tier
- B2B data / API products

---

## Useful commands

```bash
npm run build                              # build to dist/
npx wrangler deploy                        # deploy to Cloudflare Workers
npm test                                   # 19/19 suites, 180/180 tests
node scripts/verify-build.js               # build integrity check
node scripts/check-stale-pathways.js       # flag requirements >90 days old
node scripts/generate-country-source-manifest.js --write  # regenerate manifest
```
