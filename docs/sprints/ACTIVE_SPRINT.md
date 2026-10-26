# Active Sprint — Growth & Polish

> **Updated:** 2026-10-25 | **Branch:** `main` | **Commit:** `756196f`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 18/18 suites, 139/139 passing

---

## Sprint goal

All production readiness tasks complete. Platform is clean, SEO-ready, and trust-consistent.
Next focus: schema depth, route engine inputs, analytics wiring, and revenue activation.

---

## Completed this session (2026-10-25)

| Task | Status |
|---|---|
| Production readiness: all 23 tasks | ✅ Complete |
| 27-country registry + USA pathways (61 total) | ✅ Complete |
| og:image + twitter:image on all 21 pages + blog template | ✅ Complete |
| Favicon PNG fallback + apple-touch-icon + manifest link on all pages | ✅ Complete |
| Organization + WebSite JSON-LD on homepage | ✅ Complete |
| sitemap.xml — stale URL fixed, USA added, 17 blog posts added | ✅ Complete |
| robots.txt — Sitemap: directive added | ✅ Complete |
| public/manifest.json created | ✅ Complete |
| src/pages/404.html created | ✅ Complete |
| Calculator null-cost explanatory state | ✅ Complete |
| Fake newsletter form → honest callout | ✅ Complete |
| Contact page: unverified social block removed | ✅ Complete |
| about-section → prose consolidated (3 pages) | ✅ Complete |
| Implementation walkthrough doc created | ✅ Complete |
| CHANGELOG, PHASE_STATUS, INDEX, ACTIVE_SPRINT updated | ✅ Complete |

---

## Active task board

| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-S1 | Add FAQPage schema to `faq.html` | Code | **Open** | JSON-LD added, Google Rich Results Test passes |
| S3-S2 | Add Article schema to `blog-post.njk` | Code | **Done** | Article + Breadcrumb schema already in template |
| S3-S3 | Add BreadcrumbList schema to `countries.njk` | Code | **Open** | JSON-LD added to Eleventy template |
| S3-S4 | Sitemap with lastmod | Code | **Done** | All 57 URLs in sitemap.xml with lastmod dates |
| S3-E1 | Add budget/income/experience inputs to Find MyPathway | Code | **Open** | Profile inputs wired to route engine |
| S3-A1 | Wire `route_search_started` analytics event | Code | **Open** | 2 `track()` calls added, verified in Sabilytics |
| S3-R1 | Apply for AdSense | Owner | **Open** | Publisher ID received |
| S3-R2 | Populate `public/ads.txt` | Owner | **Open** | Real publisher ID in ads.txt |
| S3-R3 | Activate AdSense script on blog/playbook pages | Code | **Blocked on S3-R1** | Script live, consent-gated |
| S3-R4 | Unhide ad slots | Code | **Blocked on S3-R3** | Slots visible, labeled "Advertisement" |
| S3-T1 | ARIA audit — 4 core pages | Owner | **Open** | 0 critical/serious axe violations |
| S3-T2 | Legal review — privacy/disclaimer/terms | Owner | **Open** | Solicitor sign-off |
| S3-T3 | Country source sign-off (27 entries) | Owner | **Open** | `humanSignOff: true` on all 27 manifest entries |
| S3-T4 | Update `dataset.asOf` | Owner | **Blocked on S3-T3** | After manifest sign-off |
| S3-C1 | Write 3 new country audits (Australia, France, Netherlands) | Owner | **Open** | Published, evidence-gated, source-linked |
| S3-C2 | Set up email capture (Mailchimp/ConvertKit) | Owner | **Open** | Real form live, privacy page updated |
| S3-I1 | Create OG image asset | Owner | **Open** | `public/assets/og-default.png` 1200×630px |
| S3-I2 | Create favicon PNG asset | Owner | **Open** | `public/assets/icons/favicon.png` 32×32 + 180×180px |

---

## Content backlog

### Missing country audits (high priority)
| Country | Traffic potential | Status |
|---|---|---|
| Australia | High | Not started |
| France | High | Not started |
| Netherlands | Medium | Not started |
| Ireland | Medium | Not started |
| New Zealand | Medium | Not started |

### Missing case studies
- More success stories from different countries
- Rejection analysis for specific pathways

### Missing guides
- IELTS preparation guide
- Document authentication by country
- Scholarship application timelines

---

## Blog content inventory (17 posts)

### Country Audits (6)
| Post | URL |
|---|---|
| Germany Visa from Nigeria 2026 | `/blog/country-audits/germany/germany-visa-from-nigeria-2026/` |
| Canada Visa from Nigeria 2026 | `/blog/country-audits/canada/canada-visa-from-nigeria-2026/` |
| UK Visa from Nigeria 2026 | `/blog/country-audits/uk/uk-visa-from-nigeria-2026/` |
| Italy Visa from Nigeria 2026 | `/blog/country-audits/italy/italy-visa-from-nigeria-2026/` |
| Portugal Visa from Nigeria 2026 | `/blog/country-audits/portugal/portugal-visa-from-nigeria-2026/` |
| USA Visa from Nigeria 2026 | `/blog/country-audits/usa/usa-visa-from-nigeria-2026/` |

### Student Playbooks (2)
| Post | URL |
|---|---|
| Italy DSU Scholarship Complete Guide | `/blog/playbooks/student/italy-dsu-scholarship-complete-guide/` |
| UK Masters True Cost 2026 | `/blog/playbooks/student/uk-masters-true-cost-2026/` |

### Professional Playbooks (2)
| Post | URL |
|---|---|
| Canada Express Entry 2026 | `/blog/playbooks/professional/canada-express-entry-2026/` |
| Germany Chancenkarte Visa 2026 | `/blog/playbooks/professional/germany-chancenkarte-visa-2026/` |

### Business Playbooks (1)
| Post | URL |
|---|---|
| US LLC Setup from Africa 2026 | `/blog/playbooks/business/us-llc-setup-from-africa-2026/` |

### Case Studies (2)
| Post | URL |
|---|---|
| Chisom: Nigeria to Canada Software Engineer | `/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer/` |
| Visa Rejection Patterns African Applicants 2026 | `/blog/case-studies/rejection-analysis/visa-rejection-patterns-african-applicants-2026/` |

### Guides (3)
| Post | URL |
|---|---|
| How to Write Visa Motivation Letter 2026 | `/blog/guides/applications/how-to-write-visa-motivation-letter-2026/` |
| Document Authentication Nigeria Visa 2026 | `/blog/guides/documentation/document-authentication-nigeria-visa-2026/` |
| How to Fund German Blocked Account from Nigeria 2026 | `/blog/guides/financial/how-to-fund-german-blocked-account-from-nigeria-2026/` |

### Policy Updates (1)
| Post | URL |
|---|---|
| Canada SDS Program Cancelled January 2026 | `/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026/` |

---

## Priority order

1. **S3-I1 + S3-I2** — image assets (owner, unblocks OG cards and favicon)
2. **S3-S1 + S3-S3** — schema depth (30 min code, compounds in search)
3. **S3-E1** — route engine profile inputs (product differentiation)
4. **S3-A1** — analytics wiring (funnel visibility)
5. **S3-R1 → S3-R4** — revenue (owner action first, then code)
6. **S3-T1 → S3-T4** — trust closure (owner actions)
7. **S3-C1 → S3-C2** — content scale (owner actions)

---

## Production snapshot

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 61 (55 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 17 across 7 categories |
| Sitemap URLs | 57 |
| Test suites | 18/18 PASS |
| Tests | 139/139 PASS |
| OG image coverage | 21/21 pages + blog template (image asset pending) |
| Schema markup | Organization + WebSite on homepage; Article + Breadcrumb on blog posts |
| 404 page | ✅ |
| PWA manifest | ✅ (image asset pending) |
| Ad revenue | £0 — blocked on AdSense application |

---

## Useful commands

```bash
npm run build                        # build to dist/
npx wrangler deploy                  # deploy to Cloudflare Workers
npm test                             # 18/18 suites
node scripts/verify-build.js         # build integrity check
```

---

## Owner actions (no code blocked)

- **OG image:** Create `public/assets/og-default.png` — 1200×630px, navy `#10316b` bg, white "MyPathway2Global" wordmark
- **Favicon PNG:** Export `public/assets/icons/favicon.png` from existing SVG — 32×32px + 180×180px
- **AdSense:** Apply at https://adsense.google.com — use `mypathway2global.org.uk`
- **Country sign-off:** Open `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 27 entries
- **Legal review:** Privacy, disclaimer, terms pages
- **ARIA audit:** Chrome DevTools → axe extension on homepage, Find MyPathway, Calculator, any country page
