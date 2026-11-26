# Post Image Cards — Generation Task
**Created:** 2026-11-25 | **Style:** Text-based card (navy #10316b bg, white headline, amber #ffc947 accents)
**No AI-generated images. No faces. Same style as existing cards in `public/assets/blog/`.**

---

## How to generate each card

1. Open `docs/engineering/post-image-cards.html` in Firefox
2. DevTools (F12) → Responsive Design Mode → set **1200 × 630**
3. Show **one card at a time** — comment out all others with `<!-- ... -->`
4. Camera icon → saves PNG → rename to `.jpg` and place in `public/assets/blog/`
5. After adding a batch: add `image: "/assets/blog/[filename].jpg"` to the post frontmatter
6. Run `npm run build && npx wrangler deploy`

The generator file already contains the first 10 cards (P1 carousel + P2 missing files).
Add new cards to the generator file following the same HTML pattern.

---

## Card HTML pattern (copy for each new card)

```html
<div class="card">
  <div>
    <div class="wordmark">MyPathway<span>2</span>Global</div>
    <div class="category">CATEGORY LABEL</div>
  </div>
  <div class="headline">
    <h1>LINE ONE<br><em>AMBER HIGHLIGHT</em><br>LINE THREE</h1>
  </div>
  <div class="stat-strip">
    <div class="stat"><div class="stat-val">VALUE</div><div class="stat-lbl">Label</div></div>
    <div class="divider"></div>
    <div class="stat"><div class="stat-val">VALUE</div><div class="stat-lbl">Label</div></div>
    <div class="divider"></div>
    <div class="stat"><div class="stat-val">VALUE</div><div class="stat-lbl">Label</div></div>
    <div class="domain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffc947" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>mypathway2global.org.uk</div>
  </div>
</div>
```

**Headline rules:**
- Line 1: Country or topic name
- Line 2 (in `<em>`): The key number, threshold or hook — this renders in amber
- Line 3: Supporting context
- Keep each line under 32 characters

**Stat strip rules:**
- 3 stats max
- Use the most specific verified number from the post (salary threshold, visa fee, processing time, etc.)
- Last item is always the domain

---

## STATUS TRACKER

### PRIORITY 1 — Carousel slides (4 remaining)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `mauritius-all-visas-nomad-guide-2026.jpg` | Mauritius 2026: Every Visa Route | 6 routes · 156 countries visa-free · 5 yrs to residence | ⬜ Generate |
| `ireland-critical-skills-2026.jpg` | Ireland Critical Skills Permit 2026 | EUR 38,000 · 2 yrs to Stamp 4 · 0 labour market test | ⬜ Generate |
| `kafala-reform-tracker-2026.jpg` | Kafala Reform Tracker 2026 | 6 GCC states · ILO verified · 2026 updated | ⬜ Generate |
| `visa-rejection-patterns-2026.jpg` | Visa Rejection Patterns 2026 | 5 patterns · UK/EU/CA · 2026 updated | ⬜ Generate |

### PRIORITY 2 — Missing files (6)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `france-talent-passport-2026.jpg` | France Talent Passport 2026 | 10 subcategories · EUR 89k EU Blue Card · 4 yrs validity | ⬜ Generate |
| `uk-innovator-founder-2026.jpg` | UK Innovator Founder Visa 2026 | 3 yrs initial · ILR after 3 yrs · UKVI verified | ⬜ Generate |
| `australia-tsmit-2026.jpg` | Australia TSMIT Increase 2024 | AUD 73,150 · +36% increase · DHA verified | ⬜ Generate |
| `qatar-kafala-reform-2026.jpg` | Qatar Kafala Reform 2024 | 2024 reform · ILO verified · Ministry of Labour | ⬜ Generate |
| `uk-salary-threshold-2026.jpg` | UK Skilled Worker Threshold 2024 | GBP 38,700 · +48% from GBP 26,200 · UKVI verified | ⬜ Generate |
| `singapore-visa-from-nigeria-2026.jpg` | Singapore Visa from Nigeria 2026 | SGD 5,000 EP · SGD 3,150 S Pass · MOM verified | ⬜ Generate |

### PRIORITY 3 — Country Audits (27)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `kenya-visa-from-nigeria-2026.jpg` | Kenya Visa from Nigeria 2026 | Work permit · DHS verified · 2026 | ⬜ Generate |
| `saudi-arabia-visa-from-nigeria-2026.jpg` | Saudi Arabia Visa 2026 | Kafala · Nitaqat system · MHRSD verified | ⬜ Generate |
| `poland-visa-from-nigeria-2026.jpg` | Poland Visa from Nigeria 2026 | EUR 1,000/yr tuition · Employee Card · UDSC verified | ⬜ Generate |
| `guyana-visa-from-nigeria-2026.jpg` | Guyana Visa from Nigeria 2026 | 2-yr freelance permit · USD 3-10k/month · Verified | ⬜ Generate |
| `sweden-visa-from-nigeria-2026.jpg` | Sweden Visa from Nigeria 2026 | Work permit · Migrationsverket · 2026 | ⬜ Generate |
| `norway-visa-from-nigeria-2026.jpg` | Norway Visa from Nigeria 2026 | Work permit · UDI verified · 2026 | ⬜ Generate |
| `luxembourg-visa-from-nigeria-2026.jpg` | Luxembourg Visa from Nigeria 2026 | Work permit · Guichet.lu · 2026 | ⬜ Generate |
| `south-africa-visa-from-nigeria-2026.jpg` | South Africa Visa 2026 | Critical Skills · DHA verified · 2026 | ⬜ Generate |
| `mauritius-visa-from-nigeria-2026.jpg` | Mauritius Visa from Nigeria 2026 | 6 routes · EDB verified · 2026 | ⬜ Generate |
| `namibia-visa-from-nigeria-2026.jpg` | Namibia Visa from Nigeria 2026 | Digital nomad · MHA verified · 2026 | ⬜ Generate |
| `ghana-visa-from-nigeria-2026.jpg` | Ghana Visa from Nigeria 2026 | Work permit · GIS verified · 2026 | ⬜ Generate |
| `croatia-visa-from-nigeria-2026.jpg` | Croatia Visa from Nigeria 2026 | Study permit · MUP verified · 2026 | ⬜ Generate |
| `qatar-visa-from-nigeria-2026.jpg` | Qatar Visa from Nigeria 2026 | Work visa · Ministry of Labour · 2026 | ⬜ Generate |
| `oman-visa-from-nigeria-2026.jpg` | Oman Visa from Nigeria 2026 | OMR 150-350/month · mol.gov.om · 2026 | ⬜ Generate |
| `switzerland-visa-from-nigeria-2026.jpg` | Switzerland Visa from Nigeria 2026 | Work permit · SEM verified · 2026 | ⬜ Generate |
| `lithuania-visa-from-nigeria-2026.jpg` | Lithuania Visa from Nigeria 2026 | EU Blue Card EUR 19,572 · Migration Dept · 2026 | ⬜ Generate |
| `cape-verde-visa-from-nigeria-2026.jpg` | Cape Verde Visa from Nigeria 2026 | Remote work · SMEX verified · 2026 | ⬜ Generate |
| `china-visa-from-nigeria-2026.jpg` | China Visa from Nigeria 2026 | CSC scholarship · X1 student visa · NIA verified | ⬜ Generate |
| `hungary-visa-from-nigeria-2026.jpg` | Hungary Visa from Nigeria 2026 | Work permit · NDGAP verified · 2026 | ⬜ Generate |
| `bulgaria-visa-from-nigeria-2026.jpg` | Bulgaria Visa from Nigeria 2026 | Study permit · Schengen Jan 2025 · 2026 | ⬜ Generate |
| `uae-visa-from-nigeria-2026.jpg` | UAE Visa from Nigeria 2026 | Work visa · MOHRE verified · 2026 | ⬜ Generate |
| `antigua-barbuda-visa-from-nigeria-2026.jpg` | Antigua & Barbuda Visa 2026 | Work permit · Immigration Dept · 2026 | ⬜ Generate |
| `finland-visa-from-nigeria-2026.jpg` | Finland Visa from Nigeria 2026 | Work permit · Migri verified · 2026 | ⬜ Generate |
| `malta-visa-from-nigeria-2026.jpg` | Malta Visa from Nigeria 2026 | Work permit · Identita verified · 2026 | ⬜ Generate |
| `rwanda-visa-from-nigeria-2026.jpg` | Rwanda Visa from Nigeria 2026 | Work permit · DGI verified · 2026 | ⬜ Generate |
| `czechia-visa-from-nigeria-2026.jpg` | Czechia Visa from Nigeria 2026 | Work permit · MOI verified · 2026 | ⬜ Generate |
| `iceland-visa-from-nigeria-2026.jpg` | Iceland Visa from Nigeria 2026 | Work permit · EUR 1,500-2,000/month · DI verified | ⬜ Generate |

### PRIORITY 4 — Professional Playbooks (13)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `australia-dama-regional-stream-2026.jpg` | Australia DAMA Regional 2026 | Age cap 55 · TSS 482 · DHA verified | ⬜ Generate |
| `canada-francophone-caregivers-2026.jpg` | Canada Francophone Caregivers 2026 | CLB 5 French · FCIP · IRCC verified | ⬜ Generate |
| `canada-french-language-express-entry-2026.jpg` | Canada French Language Strategy | CRS 407 vs 490+ · Category draws · IRCC verified | ⬜ Generate |
| `canada-healthcare-nurses-pnp-2026.jpg` | Canada Healthcare Nurses PNP 2026 | PNP +600 CRS · NCLEX · IRCC verified | ⬜ Generate |
| `canada-pnp-tech-streams-2026.jpg` | Canada PNP Tech Streams 2026 | ON/BC/AB streams · Express Entry · IRCC verified | ⬜ Generate |
| `canada-rcip-rural-immigration-2026.jpg` | Canada RCIP Rural Immigration 2026 | 14 communities · 5,500 PR slots · IRCC verified | ⬜ Generate |
| `canada-tech-express-entry-2026.jpg` | Canada Tech Express Entry 2026 | NOC codes · CRS score · IRCC verified | ⬜ Generate |
| `cape-verde-remote-work-visa-2026.jpg` | Cape Verde Remote Work Visa 2026 | 2-yr permit · SMEX verified · 2026 | ⬜ Generate |
| `mauritius-premium-visa-2026.jpg` | Mauritius Premium Visa 2026 | 1-yr renewable · Remote workers · EDB verified | ⬜ Generate |
| `namibia-digital-nomad-visa-2026.jpg` | Namibia Digital Nomad Visa 2026 | Digital nomad · MHA verified · 2026 | ⬜ Generate |
| `portugal-d3-highly-qualified-2026.jpg` | Portugal D3 Highly Qualified 2026 | Salary threshold · AIMA verified · 2026 | ⬜ Generate |
| `saskatchewan-pnp-2026.jpg` | Saskatchewan PNP 2026 | +600 CRS points · SINP · IRCC verified | ⬜ Generate |
| `mauritius-all-visas-nomad-guide-2026.jpg` | Mauritius All Visas Guide 2026 | 6 routes · 156 countries · EDB verified | ⬜ Generate (same as P1) |

### PRIORITY 5 — Student Playbooks (5)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `commonwealth-scholarships-2026.jpg` | Commonwealth Scholarships 2026 | GBP 1,347/month · Full tuition · CSC verified | ⬜ Generate |
| `daad-scholarships-2026.jpg` | DAAD Scholarships 2026 | EUR 934/month · Zero tuition · DAAD verified | ⬜ Generate |
| `erasmus-mundus-2026.jpg` | Erasmus Mundus 2026 | EUR 1,400/month · Full funding · EC verified | ⬜ Generate |
| `italy-dsu-need-blind-2026.jpg` | Italy DSU Need-Blind 2026 | EUR 15-20k/yr · Need-blind · DSU verified | ⬜ Generate |
| `university-of-saskatchewan-2026.jpg` | University of Saskatchewan 2026 | Scholarships · International · USask verified | ⬜ Generate |

### PRIORITY 6 — Business Playbooks (4)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `antigua-barbuda-cbi-2026.jpg` | Antigua CBI 2026 | USD 230,000 · 156 countries · CIP verified | ⬜ Generate |
| `mauritius-gbl-2026.jpg` | Mauritius GBL 2026 | Global Business Licence · FSC verified · 2026 | ⬜ Generate |
| `rak-free-zone-2026.jpg` | RAK Free Zone 2026 | ~USD 900 setup · RAKEZ verified · 2026 | ⬜ Generate |
| `uk-company-setup-2026.jpg` | UK Company Setup from Africa 2026 | GBP 12 registration · Companies House · 2026 | ⬜ Generate |

### PRIORITY 7 — Case Studies (3)

| Filename | Headline | Key stat | Status |
|---|---|---|---|
| `nigeria-to-germany-chancenkarte-2026.jpg` | Nigeria to Germany: Real Budget 2026 | Chancenkarte · EUR 1,091/month · 2026 | ⬜ Generate |
| `nigeria-to-uae-worker-2026.jpg` | Nigeria to UAE: Real Budget 2026 | Work visa · AED costs · 2026 | ⬜ Generate |
| `visa-rejection-recovery-2026.jpg` | Visa Rejection Recovery 2026 | Reapply strategy · 2026 | ⬜ Generate |

### PRIORITY 8 — Guides (57)

Add cards to `post-image-cards.html` as you work through these. Use the pattern above.
Each guide card should show: topic name · key number from the post · source authority.

See `docs/project/MEDIA_REQUIREMENTS.md` for the full list of 57 guide filenames.

---

## After generating all cards for a priority group

1. Place all `.jpg` files in `public/assets/blog/`
2. Add `image: "/assets/blog/[filename].jpg"` to each post's frontmatter
3. `npm run build && npx wrangler deploy`
4. Mark rows above as ✅ Done
