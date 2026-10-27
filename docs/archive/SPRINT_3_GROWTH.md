# Sprint 3 — Growth & 10/10 Task Spec

> **Sprint:** 3 | **Started:** 2026-10-24 | **Goal:** schema, engine depth, revenue unblock, trust closure

---

## S3-S1 — FAQPage schema markup

**Why:** Google shows expandable Q&A in search results for pages with FAQPage schema. Zero extra content needed — the FAQ page already exists.

**How:**
```bash
task seo:add-faq-schema && npm run build && npx wrangler deploy
```

**Verify:** paste the live FAQ URL into https://search.google.com/test/rich-results

**Exit:** schema present in built `dist/pages/faq/index.html`, rich results test passes.

---

## S3-S2 — Article schema on all blog posts

**Why:** Article schema enables rich results (date, author) in Google. Covers all 17 existing posts and every future post automatically via the template.

**How:**
```bash
task seo:add-article-schema && npm run build && npx wrangler deploy
```

**Exit:** `<script type="application/ld+json">` with `@type: Article` in every built blog post.

---

## S3-S3 — BreadcrumbList schema on country pages

**Why:** Produces sitelinks in SERPs (`Global Route > Countries > Germany`). Covers all 26 generated country pages via the template.

**How:**
```bash
task seo:add-breadcrumb-schema && npm run build && npx wrangler deploy
```

---

## S3-S4 — Sitemap with lastmod dates

**Why:** Current sitemap has no `<lastmod>`. Google uses it to prioritise crawl budget. Country pages get lastmod from their most recent requirement `effectiveDate` — a genuine signal.

**How:**
```bash
task seo:sitemap-lastmod && npx wrangler deploy
```

**Verify:** `curl https://mypathway2global.org.uk/sitemap.xml | grep lastmod | head -5`

---

## S3-E1 — Budget, income and experience inputs on Find My Route

**Why:** The engine already scores these three fields. The form doesn't collect them. This is the biggest product gap — the engine is built, the UI just doesn't use it.

**How:**
```bash
task engine:add-profile-inputs && npm run build && npx wrangler deploy
```

**Manual verify in browser:**
- Study + budget 5000 + family 1 → should block pathways above that threshold with specific reason
- Work + experience 0 → should block pathways with minExperienceYears > 0
- Check zero-fit explanations reference the specific threshold value

---

## S3-A1 — Wire route_search_started and route_recommendation_generated

**Why:** Without these, there is no funnel visibility. Sabilytics tracks pageviews but not whether the product is working.

**What to add** in `find-my-route.html` inside the form submit handler:

```js
// immediately after: const profile = Object.fromEntries(new FormData(form).entries());
window.GlobalRoute?.Analytics?.track('route_search_started', { page_type: 'find-my-route' });

// immediately after: const { matches, alternatives, missingInput, zeroFitExplanations } = ...
if (!missingInput) {
  window.GlobalRoute?.Analytics?.track('route_recommendation_generated', { page_type: 'find-my-route' });
}
```

`track()` only fires if analytics consent is granted — the gate is already in place.

---

## S3-R1 — Apply for AdSense (owner)

1. Go to https://adsense.google.com
2. Add site: `mypathway2global.org.uk`
3. Add the verification tag AdSense provides to `src/index.html <head>` and deploy
4. Wait for approval (1–14 days)

**Content requirements already met:** 17 original posts, 26 country pages, privacy/disclaimer/terms present.

**Rules:** no ads on Find My Route, Calculator or country pages. Max 3 units per blog post.

---

## S3-R2 — Populate ads.txt (owner + code)

After AdSense approval:
```bash
task revenue:ads-txt PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
npm run build && npx wrangler deploy
```

---

## S3-R3 + S3-R4 — Activate AdSense and unhide slots (code)

After ads.txt is live:
```bash
task revenue:activate-adsense PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
task revenue:unhide-ad-slots
npm run build && npx wrangler deploy
task revenue:verify-placement   # confirm 0 slots on tool pages
```

---

## S3-T1 — ARIA audit (owner — requires browser)

1. Install axe DevTools Chrome extension: https://www.deque.com/axe/devtools/
2. Run on: homepage, Find My Route, Calculator, any country page
3. Fix all critical and serious violations before marking done

**Known likely issues:**
- Countries grid container needs `aria-live="polite"` on filter results
- Compare bar — keyboard accessible, focus management when panel opens
- New Find My Route inputs (S3-E1) — confirm all labels are associated

---

## S3-T2 — Legal review (owner)

```bash
task trust:legal-review-checklist
```

Priority: privacy policy must name Sabilytics as a data processor and confirm cookieless. Disclaimer must state: not legal advice, not financial advice, no approval guarantee.

---

## S3-T3 — Country source sign-off (owner)

1. Open `docs/data/country-source-review-manifest.json`
2. For each of 26 entries, open `registeredUrl` in a browser and confirm it is live and correct
3. Set `"humanSignOff": true`, add `"signOffDate"` and `"signOffBy"`
4. Run `task data:country-manifest:write` to regenerate

---

## S3-C1 — New country audits (owner)

Priority order:
1. UK Skilled Worker visa from Nigeria 2026
2. Australia skilled visa points test for Nigerians
3. Italy student visa Nigeria step-by-step

Structure: `task content:blog-post-template`

Every cost needs: currency, amount, date, source URL. Every requirement links to the official government page.

---

## S3-C2 — Email capture (owner)

```bash
task content:email-capture-setup
```

Value proposition: *"Get notified when visa requirements change for your target country. We only email when official sources update."*

---

## Definition of done — Sprint 3

- [ ] S3-S1 FAQPage schema live
- [ ] S3-S2 Article schema on all blog posts
- [ ] S3-S3 BreadcrumbList on country pages
- [ ] S3-S4 Sitemap with lastmod dates
- [ ] S3-E1 Budget/income/experience inputs on Find My Route
- [ ] S3-A1 route_search_started event wired
- [ ] S3-R1 AdSense application submitted
- [ ] S3-R2 ads.txt populated with real publisher ID
- [ ] S3-R3/R4 AdSense live on blog/playbook pages only
- [ ] S3-T1 0 critical/serious ARIA violations
- [ ] S3-T2 Legal review complete
- [ ] S3-T3 All 26 country sources signed off
- [ ] S3-C1 3 new country audits published
- [ ] S3-C2 Email capture live
