# Owner Actions — MyPathway2Global

> **Updated:** 2026-10-25 | Nothing here is blocked on code. All items require you.

---

## 1. OG image — social share cards are broken right now

Every page has the `og:image` tag pointing to `/assets/og-default.png` but the file does not exist. Every social share (WhatsApp, Twitter, LinkedIn) shows a broken image.

**What to create:**
- File: `public/assets/og-default.png`
- Size: 1200 × 630 px
- Design: navy `#10316b` background, white "MyPathway2Global" wordmark, optional tagline "Evidence-gated migration intelligence"

**Tools:** Figma, Canva, or any image editor. 20–30 minutes.

---

## 2. Favicon PNG — browser tab and homescreen icon missing

The site references `/assets/icons/favicon.png` but only an SVG exists. Browsers fall back silently but the homescreen icon (iOS/Android) and PWA manifest icon are broken.

**What to create:**
- File: `public/assets/icons/favicon.png`
- Export two sizes from the existing SVG: 32 × 32 px and 180 × 180 px
- The 180 × 180 px version is used as the Apple touch icon

**Tools:** Export from the existing SVG in Figma, Inkscape, or macOS Preview. 5 minutes.

---

## 3. Email capture — Mailchimp action URL

The email signup form is live on the blog sidebar but posts to a placeholder URL. Submissions go nowhere until you replace it.

**What to do:**
1. Log in to Mailchimp
2. Go to Audience → Signup forms → Embedded forms
3. Copy the `action` attribute from the generated form HTML — it looks like `https://yourlist.us1.list-manage.com/subscribe/post?u=xxx&id=yyy`
4. Open `src/pages/blog.html`
5. Replace `https://assets.mailchimpusercontent.com/signup` with your real action URL
6. Run `npm run build && npx wrangler deploy`

If you use ConvertKit or another provider instead, the same principle applies — replace the action URL and method with whatever the provider gives you.

---

## 4. AdSense application

Everything is ready: ad slots are in the HTML (hidden), `public/ads.txt` has a placeholder, the consent gate is wired. The only missing piece is a publisher ID.

**What to do:**
1. Go to [https://adsense.google.com](https://adsense.google.com)
2. Apply with `mypathway2global.org.uk`
3. Once approved, get your publisher ID (format: `pub-XXXXXXXXXXXXXXXX`)
4. Update `public/ads.txt` with the real publisher ID
5. Tell me — I'll activate the script and unhide the slots in one deploy

---

## 5. ARIA audit — accessibility gate

**What to do:**
1. Install the [axe DevTools extension](https://www.deque.com/axe/devtools/) in Chrome (free tier is sufficient)
2. Open each of these four pages in Chrome:
   - `https://mypathway2global.org.uk/`
   - `https://mypathway2global.org.uk/pages/find-mypathway.html`
   - `https://mypathway2global.org.uk/pages/visa-wizard.html`
   - `https://mypathway2global.org.uk/pages/calculator.html`
3. Run the axe scan on each page
4. Note any Critical or Serious violations
5. Share the results — I'll fix any code-level issues

Takes about 30 minutes total. The goal is zero Critical/Serious violations.

---

## 6. Country source sign-off (27 entries)

The evidence integrity gate requires a human to confirm each country's source trail before `dataset.asOf` can be updated.

**What to do:**
1. Open `docs/data/country-source-review-manifest.json`
2. For each of the 27 country entries, verify the `sourceUrl` links are live and the `sourceAuthority` is correct
3. Set `"humanSignOff": true` on each entry you have verified
4. Tell me when done — I'll update `dataset.asOf`

---

## 7. Legal review — privacy, disclaimer, terms

The three legal pages are written to document current product intent. They are not a substitute for jurisdiction-specific legal advice.

**What to do:**
- Have a solicitor or qualified legal adviser review:
  - `src/pages/privacy.html`
  - `src/pages/disclaimer.html`
  - `src/pages/terms.html`
- Note any required changes and share them — I'll update the pages

---

## Status summary

| # | Item | Effort | Blocks |
|---|---|---|---|
| 1 | OG image | 20–30 min | Social share cards on all pages |
| 2 | Favicon PNG | 5 min | Browser tab icon, PWA homescreen icon |
| 3 | Mailchimp action URL | 10 min | Email capture going live |
| 4 | AdSense application | 30 min | All ad revenue |
| 5 | ARIA audit | 30 min | Accessibility gate |
| 6 | Country source sign-off | 1–2 hrs | `dataset.asOf` update |
| 7 | Legal review | Solicitor | Trust gate |

Items 1 and 2 are the highest-impact for the least effort — they fix broken social cards and the homescreen icon immediately.
