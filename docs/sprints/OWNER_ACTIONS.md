# Owner Actions — MyPathway2Global

> **Updated:** 2026-10-29 | Nothing here is blocked on code. All items require you.

---

## Status summary

| # | Item | Effort | Blocks |
|---|---|---|---|
| 1 | OG image | 20 min | Social share cards broken on every page |
| 2 | Mailchimp action URL | 10 min | Email signups go nowhere |
| 3 | ARIA audit | 30 min | Accessibility gate — share results, I fix violations |
| 4 | Country source sign-off (30 entries) | 1-2 hrs | `dataset.asOf` update |
| 5 | Legal review | Solicitor | Trust gate for affiliate/lead revenue |
| — | Favicon PNG | ✅ Done | Files live in `public/` root |
| — | Quarterly audit routine | ✅ Done | GitHub Actions workflow live |
| — | AdSense | ✅ Done | Publisher ID live, Google policy review pending |

---

## 1. OG image — social share cards are broken

Every page has `og:image` pointing to `/assets/og-default.png` but the file does not exist. Every share on WhatsApp, Twitter and LinkedIn shows a broken image placeholder.

**What to create:**
- File: `public/assets/og-default.png`
- Size: 1200 × 630 px
- Design: navy `#10316b` background, white "MyPathway2Global" wordmark, tagline "Evidence-gated migration intelligence for African talent"

**Fastest tool:** Canva (free). Create a blank 1200×630 canvas, set background to `#10316b`, add white text. Export as PNG. 20 minutes.

**Where to put it:** Drop the file at `public/assets/og-default.png`. Then run:
```bash
npm run build && npx wrangler deploy
```

**To verify:** Paste any page URL into [opengraph.xyz](https://opengraph.xyz) — the image should appear in the preview.

---

## 2. Email capture — Mailchimp action URL

The email signup form is live on the blog sidebar but posts to a placeholder URL. Every submission goes nowhere.

**What to do:**
1. Log in to [mailchimp.com](https://mailchimp.com)
2. Go to **Audience → Signup forms → Embedded forms**
3. Copy the `action` attribute from the generated form HTML — it looks like:
   `https://yourlist.us1.list-manage.com/subscribe/post?u=abc123&id=xyz456`
4. Open `src/pages/blog.html` and search for `list-manage.com` — replace the placeholder URL with your real one
5. Run:
```bash
npm run build && npx wrangler deploy
```

**To verify:** Submit a test email via the blog sidebar form. Check your Mailchimp audience for the new subscriber.

---

## 3. ARIA audit — accessibility gate

The site needs a live-browser accessibility scan before the accessibility gate can be marked complete. This cannot be done from code — it requires a real browser.

**What to do:**
1. Install the free [axe DevTools extension](https://www.deque.com/axe/devtools/) in Chrome
2. Open each of these four pages in Chrome:
   - `https://mypathway2global.org.uk/`
   - `https://mypathway2global.org.uk/pages/find-mypathway.html`
   - `https://mypathway2global.org.uk/pages/visa-wizard.html`
   - `https://mypathway2global.org.uk/pages/calculator.html`
3. On each page: open axe DevTools → click **Scan ALL of my page** → wait for results
4. Note any **Critical** or **Serious** violations (ignore Best Practices and Minor)
5. Share the violation list — I will fix any code-level issues

**Goal:** Zero Critical/Serious violations (WCAG 2.1 AA). Takes about 30 minutes total.

**Also check while you're there:**
- Consent banner: confirm the analytics and advertising toggles work, preferences persist on reload
- Ad slots: confirm they are hidden when advertising consent is off
- ⌘K search modal: confirm it opens, keyboard navigation works (arrows, Enter, Escape)

---

## 4. Country source sign-off (30 entries)

The evidence integrity gate requires a human to confirm each country's official source URL is live and the authority name is correct before `dataset.asOf` can be updated. This is a data trust requirement — it cannot be automated.

**What to do:**
1. Open `docs/data/country-source-review-manifest.json`
2. For each of the 30 entries, open the `registeredUrl` in a browser and confirm:
   - The page loads (not a 404 or redirect to a different domain)
   - The `authority` name matches the organisation running the page
3. For each verified entry, set `"humanSignOff": true` in the manifest file
4. Tell me when all 30 are done — I will update `dataset.asOf` in `src/data/countries.json`

**The 30 countries to check:**

| ID | Country | Authority | URL |
|---|---|---|---|
| GB | United Kingdom | UK Visas and Immigration | gov.uk/browse/visas-immigration |
| CA | Canada | Government of Canada | canada.ca/en/immigration |
| AU | Australia | Department of Home Affairs | homeaffairs.gov.au |
| NZ | New Zealand | Immigration New Zealand | immigration.govt.nz |
| IE | Ireland | Immigration Service Delivery | irishimmigration.ie |
| DE | Germany | Federal Foreign Office | auswaertiges-amt.de |
| IT | Italy | Italian Ministry of Foreign Affairs | vistoperitalia.esteri.it |
| FR | France | France-Visas | france-visas.gouv.fr |
| HU | Hungary | National Directorate-General for Aliens Policing | oif.gov.hu |
| FI | Finland | Finnish Immigration Service | migri.fi |
| SE | Sweden | Swedish Migration Agency | migrationsverket.se |
| NO | Norway | Norwegian Directorate of Immigration | udi.no |
| LU | Luxembourg | Guichet.lu | guichet.public.lu |
| LT | Lithuania | Migration Department of Lithuania | migracija.lrv.lt |
| IS | Iceland | Directorate of Immigration Iceland | island.is |
| PT | Portugal | AIMA | aima.gov.pt |
| ES | Spain | Spanish Government | inclusion.gob.es |
| AT | Austria | Austrian Government | oesterreich.gv.at |
| JP | Japan | Immigration Services Agency | moj.go.jp/isa |
| KR | South Korea | Korea Immigration Service | immigration.go.kr |
| CN | China | National Immigration Administration | en.nia.gov.cn |
| PL | Poland | Office for Foreigners | gov.pl/web/udsc-en |
| MT | Malta | Identità Malta | identita.gov.mt |
| RU | Russia | Russian Ministry of Foreign Affairs | mid.ru/en |
| CH | Switzerland | State Secretariat for Migration | sem.admin.ch |
| CZ | Czechia | Ministry of the Interior | mv.gov.cz/mvcren |
| US | United States | USCIS | uscis.gov |
| MU | Mauritius | Economic Development Board | edbmauritius.org |
| CV | Cape Verde | Cape Verde Immigration Service | sefcv.gov.cv |
| NA | Namibia | Ministry of Home Affairs | mhaiss.gov.na |

**Note on Russia:** The Russia entries (RU-study, RU-work) are permanently blocked due to geopolitical context — the source URL check is still useful to confirm the domain is accessible, but the pathways will remain `research_required` regardless.

---

## 5. Legal review — privacy, disclaimer, terms

The three legal pages document current product intent. They are not a substitute for jurisdiction-specific legal advice. Before activating affiliate links or lead generation, these pages need solicitor sign-off.

**What to do:**
- Have a solicitor or qualified legal adviser review:
  - `src/pages/privacy.html` — data collection, consent, cookies, email capture
  - `src/pages/disclaimer.html` — evidence limitations, not legal advice, no approval rate claims
  - `src/pages/terms.html` — terms of use, intellectual property, limitation of liability
- Note any required changes and share them — I will update the pages
- This is a prerequisite for activating affiliate infrastructure (REV-04) and lead generation (REV-05)

---

## Done — no further action needed

| Item | Status | Notes |
|---|---|---|
| Favicon PNG | ✅ Done | `public/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `favicon.ico` all live |
| Quarterly audit routine | ✅ Done | `.github/workflows/stale-pathways.yml` runs every Monday 09:00 UTC |
| AdSense setup | ✅ Done | Publisher ID `ca-pub-8077583188666813` live, `ads.txt` live, policy review pending Google |
| Mailchimp form (UI) | ✅ Done | Form is live on blog sidebar — just needs your action URL (item 2 above) |
| OG/Twitter meta tags | ✅ Done | Tags on all pages — just needs the image file (item 1 above) |
| Service Worker | ✅ Done | `public/sw.js` live — offline caching active |
| ⌘K search | ✅ Done | Modal search live on all pages |
| GOIF + Vertical B | ✅ Done | 7 GOIF pathways, 3 African nomad hubs, all filters live |
| 52 blog posts | ✅ Done | All 27 original countries have country audit posts |
