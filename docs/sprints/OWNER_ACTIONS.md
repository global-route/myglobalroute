# Owner Actions — MyPathway2Global

> **Updated:** 2026-10-28 | Nothing here is blocked on code. All items require you.

---

## Status summary

| # | Item | Effort | Blocks |
|---|---|---|---|
| 1 | Favicon PNG | 5 min | Browser tab icon, PWA homescreen icon |
| 2 | OG image | 20 min | Social share cards on all pages |
| 3 | Mailchimp action URL | 10 min | Email capture going live |
| 4 | ARIA audit | 30 min | Accessibility gate |
| 5 | Country source sign-off | 1-2 hrs | `dataset.asOf` update |
| 6 | Legal review | Solicitor | Trust gate |
| 7 | Quarterly audit routine | ✅ Done | GitHub Actions workflow live — `.github/workflows/stale-pathways.yml` |
| — | AdSense | **Done** | Publisher ID `ca-pub-8077583188666813` live, slots active, policy review pending |

---

## 1. Favicon PNG — browser tab and homescreen icon missing

The site references `/assets/icons/favicon.png` but only an SVG exists. The browser tab icon and PWA homescreen icon (iOS/Android) are broken.

**What to create:**
- File: `public/assets/icons/favicon.png`
- Export two sizes from the existing SVG: 32 × 32 px and 180 × 180 px
- The 180 × 180 px version is used as the Apple touch icon

**Tools:** Export from the existing SVG in Figma, Inkscape, or macOS Preview. 5 minutes.

---

## 2. OG image — social share cards are broken

Every page has `og:image` pointing to `/assets/og-default.png` but the file does not exist. Every share on WhatsApp, Twitter and LinkedIn shows a broken image.

**What to create:**
- File: `public/assets/og-default.png`
- Size: 1200 × 630 px
- Design: navy `#10316b` background, white "MyPathway2Global" wordmark, optional tagline "Evidence-gated migration intelligence"

**Tools:** Canva, Figma, or any image editor. 20 minutes.

**To verify after deploy:** paste any page URL into [opengraph.xyz](https://opengraph.xyz) to confirm the image renders.

---

## 3. Email capture — Mailchimp action URL

The email signup form is live on the blog sidebar but posts to a placeholder URL. Submissions go nowhere.

**What to do:**
1. Log in to Mailchimp
2. Go to Audience → Signup forms → Embedded forms
3. Copy the `action` attribute from the generated form HTML — looks like `https://yourlist.us1.list-manage.com/subscribe/post?u=xxx&id=yyy`
4. Open `src/pages/blog.html`
5. Replace the placeholder action URL with your real one
6. Run `npm run build && npx wrangler deploy`

---

## 4. ARIA audit — accessibility gate

**What to do:**
1. Install the [axe DevTools extension](https://www.deque.com/axe/devtools/) in Chrome (free tier is sufficient)
2. Open each of these pages in Chrome:
   - `https://mypathway2global.org.uk/`
   - `https://mypathway2global.org.uk/pages/find-mypathway.html`
   - `https://mypathway2global.org.uk/pages/visa-wizard.html`
   - `https://mypathway2global.org.uk/pages/calculator.html`
3. Run the axe scan on each page
4. Note any Critical or Serious violations
5. Share the results — I'll fix any code-level issues

Goal: zero Critical/Serious violations (WCAG 2.1 AA). Takes about 30 minutes.

---

## 5. Country source sign-off (27 entries)

The evidence integrity gate requires a human to confirm each country's source trail before `dataset.asOf` can be updated.

**What to do:**
1. Open `docs/data/country-source-review-manifest.json`
2. For each of the 27 entries, verify the `sourceUrl` is live and `sourceAuthority` is correct
3. Set `"humanSignOff": true` on each verified entry
4. Tell me when done — I'll update `dataset.asOf` in `src/data/countries.json`

---

## 6. Legal review — privacy, disclaimer, terms

The three legal pages document current product intent. They are not a substitute for jurisdiction-specific legal advice.

**What to do:**
- Have a solicitor or qualified legal adviser review:
  - `src/pages/privacy.html`
  - `src/pages/disclaimer.html`
  - `src/pages/terms.html`
- Note any required changes and share them — I'll update the pages

---

## 7. Quarterly audit routine — done

GitHub Actions workflow created at `.github/workflows/stale-pathways.yml`. Runs every Monday at 09:00 UTC. Opens a GitHub Issue listing stale entries when any pathway requirement `effectiveDate` is older than 90 days. No further owner action required.
