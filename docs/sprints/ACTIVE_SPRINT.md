# Active Sprint — Growth & Polish

> **Updated:** 2026-10-25 | **Branch:** `main` | **Release:** GO — production live
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 18/18 suites, 139/139 passing | **CI:** paused by user direction

---

## Sprint goal

Move from a complete, verified product to a competitive, revenue-generating platform.
Rebrand complete. UI transformed to content-first editorial layout. Focus now on schema, engine depth, revenue and trust closure.

---

## Completed this session (2026-10-25)

| Task | Status |
|---|---|
| Rebrand: Global Route → MyPathway2Global | ✅ Complete |
| Rebrand: Find My Route → Find MyPathway | ✅ Complete |
| File rename: find-my-route.html → find-mypathway.html | ✅ Complete |
| Homepage: content-first editorial layout | ✅ Complete |
| CSS: `.stats-inline`, `.content-section`, `.numbered-list`, `.link-list` | ✅ Complete |
| Cache busting: `?v=2` on all CSS links | ✅ Complete |
| Dark mode removal: all `prefers-color-scheme` blocks | ✅ Complete |
| Emoji removal: all UI emoji icons | ✅ Complete |
| Hero removal: all dark gradient heroes → white page headers | ✅ Complete |
| Docs: UI_SPOTLIGHT_PLAN.md created | ✅ Complete |
| Docs: README, CHANGELOG, PHASE_STATUS updated | ✅ Complete |
| Blog: BLOG_POST_BLUEPRINT.md created | ✅ Complete |
| Blog: blog-post.html template rewritten (clean editorial) | ✅ Complete |
| Blog: blog-post.css rewritten (no gradients, white header) | ✅ Complete |
| Blog: blog-post.js created (TOC, progress, share) | ✅ Complete |

---

## Active task board

| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-S1 | Add FAQPage schema to `faq.html` | Code | **Open** | `task seo:add-faq-schema` + build + deploy |
| S3-S2 | Add Article schema to `blog-post.njk` | Code | **Open** | `task seo:add-article-schema` + build + deploy |
| S3-S3 | Add BreadcrumbList schema to `countries.njk` | Code | **Open** | `task seo:add-breadcrumb-schema` + build + deploy |
| S3-S4 | Regenerate sitemap with `lastmod` dates | Code | **Open** | `task seo:sitemap-lastmod` + deploy |
| S3-E1 | Add budget/income/experience inputs to Find MyPathway | Code | **Open** | `task engine:add-profile-inputs` + test + deploy |
| S3-A1 | Wire `route_search_started` analytics event | Code | **Open** | `task analytics:audit` → add 2 `track()` calls |
| S3-R1 | Apply for AdSense | Owner | **Open** | Publisher ID received |
| S3-R2 | Populate `public/ads.txt` | Owner | **Open** | `task revenue:ads-txt PUBLISHER_ID=...` |
| S3-R3 | Activate AdSense script on blog/playbook pages | Code | **Blocked on S3-R1** | `task revenue:activate-adsense` |
| S3-R4 | Unhide ad slots | Code | **Blocked on S3-R3** | `task revenue:unhide-ad-slots` |
| S3-T1 | ARIA audit — 4 core pages | Owner | **Open** | 0 critical/serious axe violations |
| S3-T2 | Legal review — privacy/disclaimer/terms | Owner | **Open** | Solicitor sign-off |
| S3-T3 | Country source sign-off (26 entries) | Owner | **Open** | `humanSignOff: true` on all 26 manifest entries |
| S3-T4 | Update `dataset.asOf` | Owner | **Blocked on S3-T3** | After manifest sign-off |
| S3-C1 | Write 3 new country audits (UK, Australia, Italy depth) | Owner | **Open** | Published, evidence-gated, source-linked |
| S3-C2 | Set up email capture (Mailchimp) | Owner | **Open** | `task content:email-capture-setup` |

---

## Content backlog (Task 8)

### Missing country audits (high priority)
| Country | Traffic potential | Status |
|---------|------------------|--------|
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

1. **S3-S1 → S3-S4** — schema + sitemap (1–2 hrs, compounds immediately in search)
2. **S3-E1** — route engine profile inputs (1 hr, product differentiation)
3. **S3-A1** — analytics wiring (30 min, funnel visibility)
4. **S3-R1 → S3-R4** — revenue (owner action first, then code)
5. **S3-T1 → S3-T4** — trust closure (owner actions)
6. **S3-C1 → S3-C2** — content scale (owner actions)

---

## Production snapshot

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 61 (55 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 17 across 7 categories |
| Test suites | 18/18 PASS |
| Tests | 139/139 PASS |
| Build | 162 files, 0 errors |
| Rebrand | ✅ Complete (Global Route → MyPathway2Global) |
| UI transformation | ✅ Complete (content-first editorial) |
| Schema markup | Organization + WebSite on homepage; Article + Breadcrumb on blog posts |
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

- **AdSense:** apply at https://adsense.google.com — use `mypathway2global.org.uk`
- **Country sign-off:** open `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 26 entries
- **Legal review:** see `task trust:legal-review-checklist`
- **ARIA audit:** Chrome DevTools → axe extension on homepage, Find MyPathway, Calculator, any country page
