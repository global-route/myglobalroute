# Active Sprint — Growth & 10/10

> **Updated:** 2026-10-24 | **Branch:** `main` | **Release:** GO — production live

**Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
**Latest SHA:** `e43fcad` | **Tests:** 18/18 suites, 139/139 passing | **CI:** paused by user direction

---

## Sprint goal

Move from a complete, verified product to a competitive, revenue-generating platform.
All infrastructure is done. This sprint is about signal, trust and money.

---

## Active task board

| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-R1 | Apply for AdSense | Owner | **Open** | Publisher ID received |
| S3-R2 | Populate `public/ads.txt` | Owner | **Open** | `task revenue:ads-txt PUBLISHER_ID=...` |
| S3-R3 | Activate AdSense script on blog/playbook pages | Code | **Blocked on S3-R1** | `task revenue:activate-adsense` |
| S3-R4 | Unhide ad slots | Code | **Blocked on S3-R3** | `task revenue:unhide-ad-slots` |
| S3-S1 | Add FAQPage schema to faq.html | Code | **Open** | `task seo:add-faq-schema` + build + deploy |
| S3-S2 | Add Article schema to blog-post.njk | Code | **Open** | `task seo:add-article-schema` + build + deploy |
| S3-S3 | Add BreadcrumbList schema to countries.njk | Code | **Open** | `task seo:add-breadcrumb-schema` + build + deploy |
| S3-S4 | Regenerate sitemap with lastmod dates | Code | **Open** | `task seo:sitemap-lastmod` + deploy |
| S3-E1 | Add budget/income/experience inputs to Find My Route | Code | **Open** | `task engine:add-profile-inputs` + test + deploy |
| S3-A1 | Wire route_search_started event | Code | **Open** | `task analytics:audit` → add 2 track() calls |
| S3-T1 | ARIA audit — 4 core pages | Owner | **Open** | 0 critical/serious axe violations |
| S3-T2 | Legal review — privacy/disclaimer/terms | Owner | **Open** | Solicitor sign-off |
| S3-T3 | Country source sign-off (26 entries) | Owner | **Open** | `humanSignOff: true` on all 26 manifest entries |
| S3-T4 | Update `dataset.asOf` | Owner | **Blocked on S3-T3** | After manifest sign-off |
| S3-C1 | Write 3 new country audits (UK, Australia, Italy depth) | Owner | **Open** | Published, evidence-gated, source-linked |
| S3-C2 | Set up email capture (Mailchimp) | Owner | **Open** | `task content:email-capture-setup` |

---

## Priority order this sprint

1. **S3-S1 → S3-S4** — schema + sitemap (code, 1–2 hours, compounds immediately in search)
2. **S3-E1** — route engine profile inputs (code, 1 hour, product differentiation)
3. **S3-A1** — analytics wiring (code, 30 min, funnel visibility)
4. **S3-R1 → S3-R4** — revenue (owner action first, then code)
5. **S3-T1 → S3-T4** — trust closure (owner actions)
6. **S3-C1 → S3-C2** — content scale (owner actions)

---

## Production snapshot

| Metric | Value |
|---|---|
| Countries | 26 |
| Pathways | 59 (55 publishable / 4 research_required) |
| Evidence records | 193+ |
| Blog posts | 17 across 7 categories |
| Test suites | 18/18 PASS |
| Tests | 139/139 PASS |
| Canonical tags | All 183 generated HTML files |
| Analytics | Sabilytics live on all pages |
| Schema markup | None yet — S3-S1/S2/S3 |
| Ad revenue | £0 — blocked on AdSense application |

---

## Useful commands

```bash
task ten-out-of-ten        # full checklist
task verify                # full pre-release pipeline
task seo:schema-audit      # see what's missing schema markup
task engine:test-profile   # test route engine with a full profile
task analytics:audit       # see which events are unwired
task revenue:status        # monetization readiness
```

---

## Owner actions (no code blocked)

- **AdSense:** apply at https://adsense.google.com — use `mypathway2global.org.uk`
- **Country sign-off:** open `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 26 entries
- **Legal review:** see `task trust:legal-review-checklist`
- **ARIA audit:** open Chrome DevTools → axe extension on homepage, Find My Route, Calculator, any country page
- **Content:** see `task seo:content-gaps` for the prioritised keyword list
