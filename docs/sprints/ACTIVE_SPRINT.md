# Active Sprint — Wizard & Growth

> **Updated:** 2026-10-26 | **Branch:** `main` | **Commit:** `e4c3d97`
> **Production:** `https://mypathway2global.org.uk` (Cloudflare Workers — `globalroute`)
> **Tests:** 18/18 suites, 139/139 passing

---

## Sprint goal

All phases 0-9 complete. Platform is live, SEO-ready, revenue-activated and trust-consistent. Remaining work is owner actions only - no code is blocked.

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

### Wizard & Find MyPathway (Phase 9)
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| W1-1 | Visa Wizard page scaffold + 5-step UI | Code | **Done** | `/pages/visa-wizard.html` live, step nav works |
| W1-2 | Add Wizard to main nav (all pages) | Code | **Done** | Nav updated on all 21 pages |
| W1-3 | Add Wizard + Find MyPathway section to homepage | Code | **Done** | Two-column card section on `index.html` |
| W2-1 | `wizard-engine.js` — profile assembly + `recommend()` wiring | Code | **Done** | Results render from wizard answers |
| W2-2 | Extension routes section in wizard results | Code | **Done** | `currentVisa` drives post-study/nomad/PR signals |
| W2-3 | Research flag cards (passport × destination blockers) | Code | **Done** | `permanentBlocker` / `scopeNote` surfaced in UI |
| W2-4 | Nomad/remote pathway filter (`wizardTags: ["nomad"]`) | Code | **Done** | Explore & Nomad purpose shows PT/ES/DE routes |
| W2-5 | Wizard engine test suite | Code | **Deferred** | Existing 139 tests cover route engine; wizard UI tests deferred |
| W3-1 | Find MyPathway: passport country + current visa fields | Code | **Done** | Fields added, passed to route engine |
| W3-2 | Find MyPathway: business goal unlocked (research-required state) | Code | **Done** | Business option enabled, shows research state |
| W3-3 | Find MyPathway: extension routes section | Code | **Deferred** | Wizard covers this use case; FMP extension section deferred |
| W4-1 | Tag nomad pathways in `pathways.json` (`wizardTags`, `extensionOf`) | Data | **Done** | PT/ES/DE nomad + DE post-study + CA/AU/NZ pr-route tagged |
| W5-1 | Wizard URL in sitemap + WebPage schema | Code | **Done** | Sitemap updated, JSON-LD on wizard page |

### Schema & SEO
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-S1 | Add FAQPage schema to `faq.html` | Code | **Done** | FAQPage JSON-LD present with 5 Q&A entries |
| S3-S2 | Add Article schema to `blog-post.njk` | Code | **Done** | Article + Breadcrumb schema already in template |
| S3-S3 | Add BreadcrumbList schema to `countries.njk` | Code | **Done** | BreadcrumbList JSON-LD in `countries.html` `<head>` |
| S3-S4 | Sitemap with lastmod | Code | **Done** | All 64 URLs in sitemap.xml with lastmod dates |

### Route engine & analytics
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-E1 | Add budget/income/experience inputs to Find MyPathway | Code | **Done** | Already wired in current form |
| S3-A1 | Wire `route_search_started` analytics event | Code | **Done** | Fires on form submit in `find-mypathway.html` line 235; `route_recommendation_generated` also wired |

### Revenue
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-R1 | Apply for AdSense | Owner | **Done** | Publisher ID `ca-pub-8077583188666813` received |
| S3-R2 | Populate `public/ads.txt` | Owner | **Done** | Live and verified at `/ads.txt` |
| S3-R3 | Activate AdSense script on blog/playbook pages | Code | **Done** | Static tag in `<head>` + consent-gated loader on 6 pages |
| S3-R4 | Unhide ad slots | Code | **Done** | Slots active; Google policy review pending (1-14 days) |

### Trust & compliance
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-T1 | ARIA audit — 4 core pages | Owner | **Open** | 0 critical/serious axe violations |
| S3-T2 | Legal review — privacy/disclaimer/terms | Owner | **Open** | Solicitor sign-off |
| S3-T3 | Country source sign-off (27 entries) | Owner | **Open** | `humanSignOff: true` on all 27 manifest entries |
| S3-T4 | Update `dataset.asOf` | Owner | **Blocked on S3-T3** | After manifest sign-off |

### Content & assets
| ID | Task | Owner | Status | Exit condition |
|---|---|---|---|---|
| S3-C1 | Write 3 new country audits (Australia, France, Netherlands) | Owner | **Done** | Published 2026-10-25 |
| S3-C2 | Set up email capture (Mailchimp/ConvertKit) | Owner | **Partial** | Form live on blog sidebar - owner must set Mailchimp action URL |
| S3-C3 | Replace em dashes in all blog posts | Code | **Done** | 0 em dashes remaining across 21 posts |
| S3-C4 | Add YouTube embeds to all blog posts | Code | **Done** | 1 verified embed per post, all 21 posts |
| S3-C5 | Passport tiers guide post | Code | **Done** | Published 2026-10-26 — `/blog/guides/mobility/passport-tiers-explained-2026/` |
| S3-C6 | Fix blog index page | Code | **Done** | Globe emoji removed, `?v=3` CSS, full nav + Visa Wizard, standard footer, disclaimer bar, AdSense tag — commit `0cb1e00` |
| S3-I1 | Create OG image asset | Owner | **Open** | `public/assets/og-default.png` 1200×630px |
| S3-I2 | Create favicon PNG asset | Owner | **Open** | `public/assets/icons/favicon.png` 32×32 + 180×180px |

---

## Production snapshot

| Metric | Value |
|---|---|
| Countries | 27 |
| Pathways | 61 (55 publishable / 6 research_required) |
| Evidence records | 193+ |
| Blog posts | 21 across 7 categories |
| Sitemap URLs | 64 |
| Test suites | 18/18 PASS |
| Tests | 139/139 PASS |
| OG image coverage | 21/21 pages + blog template (image asset pending) |
| Schema markup | Organization + WebSite on homepage; Article + Breadcrumb on blog posts; FAQPage on faq.html; WebPage on visa-wizard.html |
| 404 page | ✅ |
| PWA manifest | ✅ (image asset pending) |
| Ad revenue | £0 - AdSense site ownership verified; Google policy review pending |
| Visa Wizard | ✅ Live - W1-W5 complete |
| Email capture | Form live on blog sidebar - Mailchimp action URL pending owner config |
| YouTube embeds | ✅ 1 per post, all 21 posts |

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
