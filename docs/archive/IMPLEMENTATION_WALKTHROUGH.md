# Implementation Walkthrough — Remaining Production Tasks
## Created: 2026-10-25 | Status: Ready for execution

> 13 remaining tasks across HIGH / MEDIUM / LOW priority.
> Each task has exact file targets, the precise change needed, and a best-practice note.
> Execute in order. Run `npm test` after each phase.

---

## Audit findings (pre-walkthrough scan)

| Finding | Actual state |
|---|---|
| CSS `?v=2` references | None found — H1 is already resolved |
| Instagram `mymypathway` typo | Not found in any HTML file — H4 is already resolved |
| `og:image` meta tag | Missing from ALL HTML pages |
| `robots.txt` | Exists but has no `Sitemap:` directive |
| `sitemap.xml` | Exists but has stale `find-my-route` URL (renamed to `find-mypathway`) |
| `404.html` | Does not exist |
| Newsletter form | Fake `onsubmit` handler — no real capture |
| Calculator empty state | `no-results` div exists but only fires when budget filter returns 0 — no message when all `trueCost` are null |
| `about-section` class | Used in `disclaimer.html`, `terms.html`, `privacy.html` — 3 pages vs `.prose` on 15 |
| `og:image` | Zero pages have it |
| Organization schema | Missing from `src/index.html` |
| PWA manifest | Missing from `public/` |
| Favicon PNG fallback | Missing from all `<head>` blocks |
| Social links on contact | Unverified note present — needs decision |

**Revised task list after audit:**
- H1 ✅ already done (no `?v=2` found)
- H4 ✅ already done (no `mymypathway` found)
- H5 OPEN — contact page social note
- M1 OPEN — OG image on all pages
- M2 OPEN — sitemap: fix stale URL + add `Sitemap:` to robots.txt
- M3 OPEN — robots.txt `Sitemap:` directive (fold into M2)
- M4 OPEN — calculator: add explanatory state when all costs are null
- M5 OPEN — newsletter: remove fake form OR wire real capture
- M6 OPEN — create 404 page
- M7 OPEN — blog category hero check (already page-header — verify)
- L1 OPEN — favicon PNG fallback in all `<head>`
- L2 OPEN — `public/manifest.json`
- L3 OPEN — Organization JSON-LD on homepage
- L5 OPEN — consolidate `about-section` → `prose` (3 pages)

---

## Phase A — Quick wins (< 5 min each, do first)

### A1 — Fix sitemap stale URL + add Sitemap directive to robots.txt

**Why:** `find-my-route` was renamed to `find-mypathway`. Google will crawl the wrong URL. robots.txt has no `Sitemap:` line so crawlers won't auto-discover it.

**File:** `public/sitemap.xml`
Change:
```xml
<loc>https://mypathway2global.org.uk/pages/find-my-route</loc>
```
To:
```xml
<loc>https://mypathway2global.org.uk/pages/find-mypathway</loc>
```

Also add USA to sitemap (new country page):
```xml
  <url>
    <loc>https://mypathway2global.org.uk/pages/countries/US/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

**File:** `public/robots.txt`
Replace the comment block with:
```
User-agent: *
Allow: /
Disallow: /data/

Sitemap: https://mypathway2global.org.uk/sitemap.xml
```

---

### A2 — Remove social unverified note from contact page (H5)

**Why:** "Social profiles are not yet verified" is a trust signal in the wrong direction. Either the handles are real or they're not listed.

**File:** `src/pages/contact.html`

**Decision:** Remove the unverified social block entirely. Keep email as the only confirmed channel. Replace with a clean "Other channels" note.

Replace:
```html
<h2>Other channels</h2>
<ul>
  <li>Twitter / X: @mypathway2globalapp</li>
  <li>LinkedIn: linkedin.com/company/mypathway2global</li>
</ul>
<p>Social profiles are not yet verified. Email is the confirmed contact channel.</p>
```
With:
```html
<h2>Other channels</h2>
<p>Email is the confirmed contact channel. Social profiles will be listed here once verified.</p>
```

---

### A3 — Consolidate `about-section` → `prose` (L5)

**Why:** 3 pages use `.about-section`, 15 use `.prose`. One class, one CSS rule to maintain.

**Files:** `src/pages/disclaimer.html`, `src/pages/terms.html`, `src/pages/privacy.html`

In each file, change:
```html
<article class="about-section">
```
To:
```html
<article class="prose">
```

Then in `src/css/styles.css` (or `enhancements.css`), verify `.about-section` has no unique rules that `.prose` doesn't cover. If it does, merge them into `.prose` and delete `.about-section`.

---

## Phase B — SEO & discoverability (highest ROI)

### B1 — Add `og:image` to all pages (M1)

**Why:** Without `og:image`, every social share shows a blank card. This kills click-through from Twitter/X, WhatsApp, LinkedIn.

**Best practice:** One default OG image (`1200×630px`) covers all pages. Per-page images are a nice-to-have for later.

**Step 1:** Create the image file.
Place a `1200×630` branded PNG at:
```
public/assets/og-default.png
```
Design: navy (`#10316b`) background, white "MyPathway2Global" wordmark, tagline "Evidence-gated migration intelligence for African talent."

**Step 2:** Add to every HTML `<head>` that is missing it.

The meta tag to add (after existing `og:` tags):
```html
<meta property="og:image" content="https://mypathway2global.org.uk/assets/og-default.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="https://mypathway2global.org.uk/assets/og-default.png">
```

**Files to update** (all missing `og:image`):
- `src/index.html`
- `src/pages/countries.html`
- `src/pages/find-mypathway.html`
- `src/pages/calculator.html`
- `src/pages/about.html`
- `src/pages/contact.html`
- `src/pages/faq.html`
- `src/pages/privacy.html`
- `src/pages/disclaimer.html`
- `src/pages/terms.html`
- `src/pages/student-playbook.html`
- `src/pages/professional-playbook.html`
- `src/pages/business-playbook.html`
- `src/pages/blog.html`
- All 7 `src/pages/blog-category-*.html`
- `src/templates/blog-post.njk` (use `{{ post.og_image | default('/assets/og-default.png') }}`)

**Efficient approach:** Do all static HTML files in one pass. The Eleventy template covers all blog posts.

---

### B2 — Add Organization JSON-LD to homepage (L3)

**Why:** Organization schema tells Google who you are — name, URL, logo, contact. Directly improves Knowledge Panel eligibility and brand search results.

**File:** `src/index.html`

Add inside `<head>`, after existing meta tags:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MyPathway2Global",
  "url": "https://mypathway2global.org.uk",
  "logo": "https://mypathway2global.org.uk/assets/icons/favicon.svg",
  "description": "Evidence-gated migration intelligence for African students, professionals and entrepreneurs.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@mypathway2global.org.uk",
    "contactType": "customer support"
  },
  "sameAs": []
}
</script>
```

---

### B3 — Add WebSite + SearchAction JSON-LD to homepage (bonus SEO)

**Why:** Enables Google Sitelinks Searchbox — users can search your site directly from Google results.

Add alongside B2 in `src/index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MyPathway2Global",
  "url": "https://mypathway2global.org.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mypathway2global.org.uk/pages/find-mypathway.html?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

---

## Phase C — UX fixes

### C1 — Create 404 page (M6)

**Why:** Every broken link currently hits Cloudflare's generic error. A branded 404 keeps users on the site.

**File to create:** `src/pages/404.html`

Structure (matches site design — white page-header, no hero):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- standard head: charset, viewport, title, CSS links, fonts -->
  <title>Page Not Found | MyPathway2Global</title>
  <meta name="robots" content="noindex">
  <!-- no canonical on 404 -->
</head>
<body data-page-type="error">
  <!-- standard header -->
  <main id="main" class="main">
    <div class="page-header">
      <div class="container">
        <h1>Page not found</h1>
        <p class="page-header-subtitle">The page you're looking for doesn't exist or has moved.</p>
      </div>
    </div>
    <section class="prose">
      <p>Try one of these instead:</p>
      <ul class="link-list">
        <li><a href="/pages/find-mypathway.html"><strong>Find MyPathway</strong></a> — filter evidence-gated pathways</li>
        <li><a href="/pages/countries.html"><strong>Country Directory</strong></a> — browse 27 countries</li>
        <li><a href="/blog/"><strong>Blog</strong></a> — country audits, playbooks, guides</li>
        <li><a href="/"><strong>Home</strong></a></li>
      </ul>
    </section>
  </main>
  <!-- standard disclaimer-bar + footer + scripts -->
</body>
</html>
```

**Also update `wrangler.jsonc`** to serve this on 404:
```jsonc
"not_found_handling": {
  "not_found_response": "/pages/404.html"
}
```
Or if using Cloudflare Pages rules, add a `_redirects` or `_headers` entry.

---

### C2 — Calculator: add explanatory state when all costs are null (M4)

**Why:** The calculator currently shows results with "Not yet verified" for every cost field. Users think it's broken. It needs a clear explanation at the top.

**File:** `src/pages/calculator.html`

Find the results section and add a callout above the results grid:
```html
<div class="ns_callout" id="calculator-data-note" style="display:none">
  <p><strong>Planning aid only.</strong> Verified cost totals are not yet available for most countries — official fee schedules and living cost thresholds vary by pathway and circumstance. Use the <a href="/pages/find-mypathway.html">pathway finder</a> to see what each route actually requires.</p>
</div>
```

**File:** `src/js/app.js`

In the calculator render function, after results are populated, add:
```js
const allNullCost = results.every(c => c.trueCost?.total == null);
const note = document.getElementById('calculator-data-note');
if (note) note.style.display = allNullCost ? 'block' : 'none';
```

---

### C3 — Newsletter: remove fake form (M5)

**Why:** A form that silently does nothing is worse than no form. It erodes trust.

**Decision:** Remove the newsletter form from `src/pages/blog.html` and all blog category pages. Replace with a plain text CTA linking to the contact page.

**File:** `src/pages/blog.html`

Replace the `<div class="blog-newsletter-cta">` block with:
```html
<div class="ns_callout">
  <p><strong>Stay updated.</strong> New country audits and policy updates are published regularly. <a href="/pages/contact.html">Get in touch</a> to be notified when new guides are published.</p>
</div>
```

Apply the same replacement to all 7 `blog-category-*.html` files if they contain a newsletter form.

---

## Phase D — PWA & browser compatibility

### D1 — Add favicon PNG fallback (L1)

**Why:** SVG favicons don't render in older Chromium, Safari 14-, or any Windows taskbar pinned site. A PNG fallback costs nothing.

**Step 1:** Place a `32×32` PNG at `public/assets/icons/favicon.png` (export from the SVG).

**Step 2:** Add to `<head>` in every HTML file, after the existing SVG favicon line:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/favicon.png">
```

**Efficient approach:** Add to all files in one pass alongside the `og:image` update (Phase B1).

---

### D2 — Create PWA manifest (L2)

**Why:** Enables "Add to Home Screen" on mobile. Takes 10 minutes. Signals to Google that the site is a quality web app.

**File to create:** `public/manifest.json`
```json
{
  "name": "MyPathway2Global",
  "short_name": "MP2G",
  "description": "Evidence-gated migration intelligence for African talent.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#f2f7ff",
  "theme_color": "#10316b",
  "icons": [
    {
      "src": "/assets/icons/favicon.png",
      "sizes": "32x32",
      "type": "image/png"
    }
  ]
}
```

**Add to `<head>` in every HTML file:**
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#10316b">
```

---

## Phase E — Best practices not in original task list

These were found during the audit and are worth fixing in the same pass.

### E1 — Sitemap: blog posts are missing

The sitemap has static pages and country pages but no blog post URLs. Blog posts are the highest-traffic SEO surface.

**File:** `public/sitemap.xml`

Add a `<url>` block for each of the 17 blog posts. Pattern:
```xml
<url>
  <loc>https://mypathway2global.org.uk/blog/country-audits/germany/germany-visa-from-nigeria-2026/</loc>
  <lastmod>2026-10-25</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

All 17 blog post URLs are listed in `README.md` and `ACTIVE_SPRINT.md`.

---

### E2 — Add `<meta name="twitter:site">` to all pages

**Why:** Twitter/X card validator requires `twitter:site` for full card rendering. One line per page.

```html
<meta name="twitter:site" content="@mypathway2globalapp">
```

Add alongside the `og:image` pass (Phase B1).

---

### E3 — Add `lang` attribute consistency check

All pages have `<html lang="en">` — confirmed correct. No action needed.

---

### E4 — Add `<meta name="author">` to blog posts

**File:** `src/templates/blog-post.njk`

Add inside `<head>`:
```html
<meta name="author" content="MyPathway2Global">
```

---

### E5 — ACTIVE_SPRINT.md production snapshot is stale

**File:** `docs/sprints/ACTIVE_SPRINT.md`

The "Production snapshot" table still shows 26 countries, 59 pathways. Update to 27 / 61.

---

## Execution order (optimised for batching)

```
Phase A  (quick wins, ~15 min total)
  A1 — sitemap URL fix + robots.txt Sitemap directive
  A2 — contact page: remove unverified social note
  A3 — consolidate about-section → prose (3 files)

Phase B  (SEO, ~30 min total)
  B1 — og:image on all pages  ← batch all HTML files in one pass
       also add: favicon PNG fallback (D1), manifest link (D2),
                 twitter:site (E2), apple-touch-icon (D1)
  B2+B3 — Organization + WebSite JSON-LD on homepage

Phase C  (UX, ~30 min total)
  C1 — create 404.html
  C2 — calculator explanatory state
  C3 — remove newsletter fake form

Phase D  (PWA assets, ~10 min)
  D1 — create public/assets/icons/favicon.png  (image asset — owner action)
  D2 — create public/manifest.json

Phase E  (best practices, ~20 min)
  E1 — add 17 blog posts to sitemap.xml
  E4 — add author meta to blog-post.njk
  E5 — update ACTIVE_SPRINT.md snapshot

Run: npm test  (should stay 18/18, 139/139)
Run: git add -A && git commit && git push
```

---

## Files touched summary

| File | Changes |
|---|---|
| `public/sitemap.xml` | Fix `find-my-route` URL, add USA, add 17 blog posts |
| `public/robots.txt` | Add `Sitemap:` directive |
| `public/manifest.json` | Create new |
| `public/assets/icons/favicon.png` | Create new (image asset — owner) |
| `public/assets/og-default.png` | Create new (image asset — owner) |
| `src/index.html` | og:image, favicon PNG, manifest link, Organization+WebSite JSON-LD, twitter:site |
| `src/pages/countries.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/find-mypathway.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/calculator.html` | og:image, favicon PNG, manifest link, twitter:site + data note callout |
| `src/pages/about.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/contact.html` | og:image, favicon PNG, manifest link, twitter:site + remove social note |
| `src/pages/faq.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/privacy.html` | og:image, favicon PNG, manifest link, twitter:site + about-section→prose |
| `src/pages/disclaimer.html` | og:image, favicon PNG, manifest link, twitter:site + about-section→prose |
| `src/pages/terms.html` | og:image, favicon PNG, manifest link, twitter:site + about-section→prose |
| `src/pages/student-playbook.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/professional-playbook.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/business-playbook.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/blog.html` | og:image, favicon PNG, manifest link, twitter:site + remove newsletter form |
| All 7 `blog-category-*.html` | og:image, favicon PNG, manifest link, twitter:site |
| `src/pages/404.html` | Create new |
| `src/templates/blog-post.njk` | og:image default, favicon PNG, manifest link, twitter:site, author meta |
| `src/js/app.js` | Calculator null-cost explanatory state |
| `src/css/styles.css` | Verify/merge `.about-section` into `.prose`, delete `.about-section` |
| `docs/sprints/ACTIVE_SPRINT.md` | Update production snapshot to 27/61 |

---

## Image assets needed (owner action before Phase B/D)

| Asset | Spec | Purpose |
|---|---|---|
| `public/assets/og-default.png` | 1200×630px, navy bg, white text | Social sharing card |
| `public/assets/icons/favicon.png` | 32×32px + 180×180px (apple) | Browser tab, home screen |

Both can be exported from the existing SVG favicon and a simple Figma/Canva OG template.

---

*Created: 2026-10-25*
*Covers: H5, M1–M7, L1–L3, L5 + bonus E1–E5*
*Tests must stay green: 18/18 suites, 139/139 tests*
