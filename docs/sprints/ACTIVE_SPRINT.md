# Active Sprint — Owner Actions & Ongoing Maintenance

> **Updated:** 2026-10-29 | **Branch:** `main` | **Commit:** `e87f15c`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 19/19 suites, 180/180 passing

---

## Current state

All code phases complete (0-9, B, CP, GOIF, Vertical B). No code tasks are blocked. Remaining work is owner actions and ongoing content maintenance only.

| Metric | Value |
|---|---|
| Countries | 30 (27 original + MU, CV, NA) |
| Pathways | 68 (62 publishable / 6 research_required) |
| Evidence records | 216 (18 primary + 198 addenda) |
| Blog posts | 50 across 7 categories |
| Sitemap URLs | 101 |
| Test suites | 19/19 PASS |
| Tests | 180/180 PASS |
| GOIF pathways | 7 tagged (asymmetry_category + capital_tier) |
| remote_freelance | 3 pathways — MU, CV, NA |
| PR-route tagged | 10 pathways — CA, AU×3, NZ×3, IE, FR, PT |
| Nomad tagged | 6 pathways — DE, PT, ES, MU, CV, NA |
| Region filter | 10 regions in Find MyPathway |
| ⌘K search | Modal search across countries, pathways, posts — all pages |
| pSEO pages | pathways-funded-study.html + pathways-regional-skilled.html |
| localStorage cache | goif_pathways_v1 (24h TTL) |
| Service Worker | Live (`public/sw.js`) |
| Save My Plan export | Live (client-side JSON, Find MyPathway) |
| Stale requirements | 0 — last refreshed 2026-10-29 |
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
| Region + PR filters | 2026-10-29 | `e871731` | Target Region select, pr-route filter, IE/FR/PT pr-route tags, doc updates |
| Data freshness | 2026-10-29 | `6d29814` | 37 stale effectiveDate fields refreshed |
| GOIF S3-1 + S4 | 2026-10-29 | `d5ce2b0` | Gap card GOIF fields, 2 pSEO pages, localStorage cache, 3 tests |
| GOIF S1 + S2 | 2026-10-29 | `441b9fe` | 4 seed pathways, route type filter, funded badge, 4 blog posts |
| Content Platform Sprint | 2026-10-28 | — | Ireland/Spain audits, comparative playbooks, audit badges, SW, export, stale script |
| N-P2/P3 + 4 country audits | 2026-10-28 | — | FMP extension routes, evidence trail, Austria/NZ/Japan/South Korea audits |
| Production Readiness | 2026-10-25 | — | 23 tasks — 27-country registry, USA pathways, OG tags, 404, manifest |

---

## Next sprint candidates

### Priority 1 — Owner-gated (no code needed)
| ID | Task | Effort | Notes |
|---|---|---|---|
| N-T1 | ARIA audit — 4 core pages | 30 min | Run axe on homepage, Find MyPathway, Visa Wizard, Calculator; share results |
| N-T2 | Legal review | Solicitor | privacy/disclaimer/terms sign-off |
| N-T3 | OG image | 20 min | 1200×630px, navy `#10316b` bg, white wordmark |
| N-T4 | Mailchimp URL | 10 min | Replace placeholder in `src/pages/blog.html` |
| N-D2 | Country source sign-off (30 entries) | 1-2 hrs | `docs/data/country-source-review-manifest.json` → set `humanSignOff: true` |

### Priority 2 — Content gaps (code-ready)
| ID | Task | Notes |
|---|---|---|
| N-C8 | 12 missing country audit blog posts | FI, SE, NO, LU, HU, LT, IS, PL, MT, CH, CZ, CN — all have publishable pathways, no blog post |
| N-C9 | AfCFTA business corridors | Rwanda, Mauritius (business), Ghana, Kenya — Vertical B expansion |
| N-C10 | Diaspora repatriation guide | December campaign — blueprint Vertical B item |

### Priority 3 — Product (code-ready)
| ID | Task | Notes |
|---|---|---|
| N-P4 | WebPage JSON-LD on pSEO pages | Add to pathways-funded-study.html + pathways-regional-skilled.html |
| N-P5 | Footer nav link to pSEO pages | Add "Funded Routes" to footer Explore section |
| N-P6 | Sidebar layout | Blueprint section 3 — document-style left sidebar on Find MyPathway; significant layout change |

### Priority 4 — Revenue
| ID | Task | Notes |
|---|---|---|
| N-R1 | AdSense revenue baseline | After first 30 days live: record impressions, clicks, RPM |
| N-R2 | Affiliate infrastructure | Requires legal review first |

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
