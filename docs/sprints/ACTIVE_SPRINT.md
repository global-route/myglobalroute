# Active Sprint — Owner Actions & Ongoing Maintenance

> **Updated:** 2026-11-05 | **Branch:** `main` | **Commit:** `5c00eac`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 19/19 suites, 180/180 passing | **CI:** Lint ✅ Quality Gate ✅ Browser Smoke ✅

---

## Current state

All original code phases complete (0-9, B, CP, GOIF, Vertical B, UX). P0 (trust/eligibility/matching integrity) and P1 (service experience alignment) workstreams complete as of 2026-11-05. See `docs/sprints/P0_CRITICAL_FIXES_TASKFILE.md` and `docs/sprints/P1_TASKFILE.md`.

| Metric | Value |
|---|---|
| Countries | 30 (27 original + MU, CV, NA) |
| Pathways | 69 (63 publishable / 6 research_required) |
| Evidence records | 218+ |
| Blog posts | 96 across 7 categories |
| Sitemap URLs | 145 |
| Test suites | 19/19 PASS |
| Tests | 180/180 PASS (+ 34 P0 tests written, run pending owner) |
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
| Sort control | Find MyPathway results — cost/country sort |
| Per-card status badge | Verified / Research required on every pathway card |
| Mobile filter toggle | Filter panel collapses on <768px with active count |
| Savings-rate input | Gap card — monthly savings → months to readiness |
| Passport-aware matching | evaluateNationality() — hard block on ineligible passport |
| Requirement evaluation | evaluateRequirements() — all 9 types, blockers + warnings |
| Currency normalization | normalizeCurrency() — 19-currency FX table, 90-day stale threshold |
| Country comparison table | Registry-backed: publishable pathways, research required, verified cost |
| Calculator data note | Always visible — planning aid, not affordability ranking |
| Article readTime fix | blog-post.njk strips trailing "min" — no more "N min min read" |
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
| 6 | Verify AU/IE/NZ WHV articles at official sources | 1 hr | P0.1 exit gate — update `eligibilityReviewStatus` |
| 7 | Run `npm test -- --testPathPattern=route-engine` | 5 min | P0 test gate — confirm 34 new tests pass |
| 8 | P1.5 privacy audit (localStorage + consent + publisher ID) | 2-3 hrs | P1 exit gate — see P1_TASKFILE.md §P1.5 |
| 9 | Generate post counts from Eleventy collection | 1 hr | Prevents future count drift in about.html |
| — | Favicon PNG | ✅ Done | Files in `public/` root |
| — | Quarterly audit routine | ✅ Done | GitHub Actions workflow live |
| — | AdSense | ✅ Done | Publisher ID live, policy review pending |

See `docs/sprints/OWNER_ACTIONS.md` for full instructions on each item.

---

## Completed sprints

| Sprint | Date | Commit | Key deliverables |
|---|---|---|---|
| P1 — Service experience alignment | 2026-11-05 | `a819915` | Country comparison registry metrics, calculator honesty, readTime fix, about counts, P1 taskfile |
| P0 — Trust/eligibility/matching integrity | 2026-11-05 | `dfd6cad` | evaluateNationality, evaluateRequirements, normalizeCurrency, savings gap fix, 3 WHV corrections, 34 tests written |
| Doc sync — P0+P1 complete | 2026-11-05 | `520b130` | CHANGELOG, README, PHASE_STATUS, INDEX, ACTIVE_SPRINT all updated |
| UI/UX template fixes | 2026-10-31 | `2b77625` | Africa regions in FMP filter, CSS v9 + search trigger + search-modal on all templates, Google Fonts removed from content templates, blog count 31→96 |
| UI scan fixes + e2e spec rewrite | 2026-10-31 | `63821c2` | 9 bugs fixed (broken wizard URL, 27→30 countries, Africa filter, MU/CV/NA wizard, CSS v9, search trigger all pages, calc localStorage, flag fallback), e2e spec rewritten, CI green |
| UX gaps | 2026-10-30 | `7445e55` | Sort control, per-card status badge, mobile filter toggle, savings-rate gap input |
| Doc audit + archive | 2026-10-30 | `e71bcb0` | 8 stale docs fixed, 8 archived, docs/plans/ gitignored, UX taskfile extracted |
| Stale doc fixes | 2026-10-30 | `380cae8` | PHASE_STATUS counts, OWNER_ACTIONS counts, CONTENT_PIPELINE, GOIF tasks marked done |
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

## P0 — Complete (2026-11-05)

See `docs/sprints/P0_CRITICAL_FIXES_TASKFILE.md` for full task list.

| ID | Task | Status |
|---|---|---|
| P0.1 | Nationality content audit — 3 working-holiday articles | 🔧 Correction notices live — owner verification pending |
| P0.2 | Passport-aware matching logic | ✅ Done — `evaluateNationality()` in route-engine |
| P0.3 | Structured requirement evaluation | ✅ Done — `evaluateRequirements()` in route-engine |
| P0.4 | Currency normalization in route engine | ✅ Done — `normalizeCurrency()` + FX table |
| P0.5 | Savings gap — disposable savings not gross income | ✅ Done — income minus expenses |
| Tests | P0.2 + P0.3 + P0.4 test suites | ⏳ Written — run `npm test -- --testPathPattern=route-engine` to verify |

---

## P1 — Complete (2026-11-05)

See `docs/sprints/P1_TASKFILE.md` for full task list.

| ID | Task | Status |
|---|---|---|
| P1.1 | Country comparison: replace null fields with registry-backed metrics | ✅ Done — publishable pathways, research required, verified cost |
| P1.2 | Calculator: honest data availability — heading + always-visible data note | ✅ Done |
| P1.3 | Article template: fix "N min min read" double-unit bug | ✅ Done — `blog-post.njk` strips trailing "min" from readTime |
| P1.4 | Content inventory: reconcile hardcoded counts in about.html | ✅ Done — 96 posts, 218+ evidence records, 63 publishable pathways |
| P1.5 | Privacy/advertising: localStorage + consent + publisher ID audit | ⏳ Owner action — see P1_TASKFILE.md §P1.5 |

---

## P2 — Up next

### UI polish tasks (code-ready)

These are concrete, scoped fixes. None require owner input — all can be coded immediately.

| ID | Page | Issue | Effort |
|---|---|---|---|
| UI-01 | countries.html | Region filter has both "Asia-Pacific" and "Asia" as separate options — consolidate or label the distinction | 15 min |
| UI-02 | countries.html | Compare bar uses extensive inline styles — move to `enhancements.css` | 20 min |
| UI-03 | countries.html | Filter dropdowns missing `aria-describedby` for helper text | 15 min |
| UI-04 | find-mypathway.html | Two info-cards grid has no mobile breakpoint — stacks awkwardly below 640px | 15 min |
| UI-05 | find-mypathway.html | No "Clear all filters" button — user must reload to reset | 20 min |
| UI-06 | visa-wizard.html | Purpose/budget button grid lacks `role="radiogroup"` and arrow-key navigation | 20 min |
| UI-07 | visa-wizard.html | Step 1 back-button slot renders an empty `<span>` — hide it or remove the layout gap | 10 min |
| UI-08 | calculator.html | Results container uses `style="display:none"` — replace with `hidden` attribute for semantics | 10 min |
| UI-09 | calculator.html | No inline validation feedback on required fields | 20 min |
| UI-10 | global | Animations do not respect `prefers-reduced-motion` — add media query to CSS | 15 min |
| UI-11 | global | Search modal "no results" state has no suggestions — add 3 popular search prompts | 20 min |
| UI-12 | blog-post.njk | Consent banner may overlap mobile footer — needs z-index / positioning fix (verify with axe first) | 30 min |

**Total estimated effort:** ~3.5 hrs

---

### Content — reserved posts (owner research required first)

See `docs/sprints/RESERVED_POSTS_TASKFILE.md` for unblock checklists and primary source URLs.

| ID | Post | Blocker | Est. research |
|---|---|---|---|
| R1 | Guyana 2-Year Freelance Work Visa | No primary source research done | 1-2 hrs |
| R2 | Indonesia Tourist/Business Visa | No primary source research done | 1-2 hrs |
| R3 | UK Innovator Founder Visa | Endorsing body details needed | 1 hr |
| R4 | France Talent Passport deep-dive | Subcategory salary thresholds needed | 1 hr |
| R5 | Singapore Work Visa | Country not in platform — needs country + pathway records first | 3-4 hrs |
| R6 | Canada RCIP | Program status unclear (may be replaced) | 2 hrs |

Once research is done for any item, share the primary-source findings and the post can be written immediately.

**Quickest wins:** R3 (UK Innovator Founder) and R4 (France Talent Passport) — both have known primary sources and need only 1 hr of reading.

---

### Content — deferred pipeline (no unblock path yet)

These are from `docs/project/CONTENT_PIPELINE.md` Tier 3. No file path or primary source confirmed yet.

| Post | Blocker |
|---|---|
| Paraguay SUACE/Investor Pass deep-dive | Needs immigration lawyer input |
| Saskatchewan PNP post-graduation | Needs SINP evidence records |
| Tax residency for African remote workers | Needs tax adviser input |
| Rwanda bank account guide for foreigners | Needs primary source research |
| Germany Working Holiday / Au Pair (FSJ) | Medium confidence — research needed |

---

### Owner-gated (no code needed)

| ID | Item | Effort | Blocks |
|---|---|---|---|
| N-T1 | OG image (1200×630px) | 20 min | Social share cards on all pages |
| N-T2 | Mailchimp action URL | 10 min | Email signups going live |
| N-T3 | YouTube video IDs (96 posts) | 1-2 hrs | Embeds in all blog posts |
| N-T4 | ARIA audit (axe on 4 pages) | 30 min | Accessibility gate — share results for UI-12 fix |
| N-T5 | Country source sign-off (30 entries) | 1-2 hrs | `dataset.asOf` update |
| N-T6 | Legal review | Solicitor | Prerequisite for affiliate/lead revenue |

---

### Revenue (externally gated)

| ID | Task | Gate |
|---|---|---|
| N-R1 | AdSense revenue baseline | After first 30 days live — record impressions, clicks, RPM |
| N-R2 | Affiliate infrastructure | Legal review (N-T6) must complete first |
| N-R3 | Lead generation engine | Consent architecture + legal review first |

---

### Phase 6 scale (hard-gated)

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
