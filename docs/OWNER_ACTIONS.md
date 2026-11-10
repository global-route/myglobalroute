# Owner Actions — MyPathway2Global
**Updated:** 2026-11-10 | **Commit:** `a437640`
**All code tasks are complete. Everything below is owner-gated.**

---

## Priority order

| # | Action | Effort | Unlocks |
|---|---|---|---|
| 1 | WAA: Resend account + Worker deploy | 20 min | Agent lead delivery (email channel) |
| 2 | WAA: First agent credentials + agents.json | 1-2 hrs | Full WAA feature live end-to-end |
| 3 | OG image (1200x630px) | 20 min | Social share cards on all pages |
| 4 | Mailchimp action URL | 10 min | Email capture live |
| 5 | ARIA audit (axe, 4 pages) | 30 min | Accessibility gate |
| 6 | Working-holiday article verification (AU/IE/NZ) | 1 hr | P0 correction banners resolved |
| 7 | Country source sign-off (31 entries) | 1-2 hrs | dataset.asOf update, Phase 1 complete |
| 8 | Legal review (privacy/disclaimer/terms) | Solicitor | Affiliate + lead revenue gate |
| 9 | AdSense revenue baseline | After 30 days live | Phase 5 reconciliation |
| 10 | Mailchimp URL in blog.html | 10 min | Newsletter capture live |

---

## Action 1 — WAA: Resend account + Worker deploy
**Effort:** 20 min | **Unlocks:** email lead delivery to agents

### Step 1 — Create Resend account
1. Go to [resend.com](https://resend.com) and sign up (free)
2. Add domain: `mypathway2global.org.uk`
3. Follow the DNS verification steps (add TXT/CNAME records in your DNS provider)
4. Wait for verification (usually under 5 minutes)
5. Go to API Keys → Create API Key → copy it

### Step 2 — Set Worker secrets
Run these in your terminal from the project root:

```bash
npx wrangler secret put RESEND_API_KEY
# paste your Resend API key when prompted

npx wrangler secret put LEADS_FROM_EMAIL
# type: leads@mypathway2global.org.uk
```

### Step 3 — Deploy the notification Worker
```bash
npx wrangler deploy workers/agent-lead.js --name globalroute-leads --compatibility-date 2026-10-01
```

### Step 4 — Add the route in Cloudflare dashboard
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Workers & Pages → `globalroute-leads` → Settings → Triggers
3. Add Route: `mypathway2global.org.uk/api/agent-lead*`
4. Zone: `mypathway2global.org.uk`
5. Save

### Step 5 — Verify
```bash
curl -X POST https://mypathway2global.org.uk/api/agent-lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","whatsapp":"+2348000000000","agentId":"nonexistent","corridor":"NG-DE","no_fees_paid":true,"referral_understood":true}'
# Expected: {"error":"Agent not found or not verified"} — confirms Worker is live
```

---

## Action 2 — WAA: First agent credentials + agents.json
**Effort:** 1-2 hrs | **Unlocks:** WAA feature fully live end-to-end

### Step 1 — Choose first agent corridor
Recommended first corridor: **NG-DE / software_it / skilled**
- Highest documented demand in the platform
- Nigerian IT professionals are the most active audience
- Directly counters HelpOverseas paid Facebook ads targeting the same users

Second priority: **NG-CA / software_it / skilled**
Third priority: **NG-QA / domestic_worker / unskilled** (highest risk — needs verified agent most urgently)

### Step 2 — Collect from the agent (due diligence checklist)

Before adding any agent, confirm ALL of the following:

**Business verification**
- [ ] Business registration number (CAC number for Nigerian agencies, or equivalent)
- [ ] Registered business name matches trading name
- [ ] Physical office address (not just a WhatsApp number)
- [ ] At least one verifiable reference (past client or partner organisation)

**Regulatory check**
- [ ] If claiming to provide Canadian immigration advice: verify RCIC number at [college-ic.ca](https://college-ic.ca/protecting-the-public/find-an-immigration-consultant)
- [ ] If claiming UK immigration advice: verify OISC registration at [gov.uk/find-an-immigration-adviser](https://www.gov.uk/find-an-immigration-adviser)
- [ ] If no regulated jurisdiction applies: confirm they are acting as a referral agent only, not providing legal advice

**Red line check — disqualify immediately if any of these are true**
- [ ] They have published "visa in 3-5 days" claims for routes where official processing is longer
- [ ] They have published approval rate statistics (no immigration authority publishes these)
- [ ] They charge upfront fees before any visa outcome
- [ ] They cannot provide a written service agreement to clients
- [ ] They appear in the Wakanow Affiliates Telegram group making unverified claims

**Notification credentials to collect**
- [ ] Contact email (required — email is always-on fallback)
- [ ] Slack incoming webhook URL (optional — see walkthrough below)
- [ ] Telegram bot token + chat ID (optional — see walkthrough below)
- [ ] WhatsApp Business number in E.164 format e.g. +2348012345678 (optional)

### Step 3 — Get Slack webhook from agent
Send the agent these instructions:
> "To receive leads on Slack: go to your Slack workspace → Settings & Administration → Manage Apps → search 'Incoming WebHooks' → Add to Slack → choose the channel where you want leads → copy the Webhook URL and send it to us."

### Step 4 — Get Telegram bot token + chat ID from agent
Send the agent these instructions:
> "To receive leads on Telegram:
> 1. Open Telegram and message @BotFather
> 2. Send /newbot — follow the prompts to create a bot, copy the token it gives you
> 3. Add the bot to the group or channel where you want leads
> 4. Also add @userinfobot to that group — it will reply with the chat ID (a number like -1001234567890)
> 5. Send us: the bot token and the chat ID"

### Step 5 — Add agent to agents.json
Open `src/data/agents.json`. Copy the `_template` object, remove `_template` and `_note` keys, fill all fields:

```json
{
  "id": "agent-ng-de-tech-001",
  "name": "Agency Full Name",
  "corridors": ["NG-DE", "GH-DE"],
  "occupationCategories": ["software_it", "engineering"],
  "skillLevels": ["skilled"],
  "verificationStatus": "verified",
  "verifiedAt": "2026-11-10",
  "tier": "free",
  "contactEmail": "agent@agencyname.com",
  "notifications": {
    "slackWebhookUrl": "https://hooks.slack.com/services/...",
    "telegramBotToken": "123456789:AAF...",
    "telegramChatId": "-1001234567890",
    "whatsappNumber": "+2348012345678"
  },
  "licenceNumber": "CAC/BN/1234567",
  "licenceAuthority": "Corporate Affairs Commission Nigeria",
  "formspreeId": null
}
```

### Step 6 — Validate and deploy
```bash
node scripts/validate-agent-registry.js
# must pass with 0 errors

npm test
# must pass 214/214

npm run build
node scripts/verify-build.js

npx wrangler deploy
```

### Step 7 — Test end-to-end
1. Go to `https://mypathway2global.org.uk/pages/work-abroad-agent.html`
2. Select: Skilled professional → Software/IT → Nigeria → Ready now
3. Confirm Germany appears in results with the agent card
4. Click "Connect with this agent"
5. Fill the form with a test name/email/WhatsApp
6. Submit
7. Confirm the agent receives the lead on Slack/Telegram/WhatsApp/email within 60 seconds

---

## Action 3 — OG image
**Effort:** 20 min | **Unlocks:** social share cards on all 26 pages

Create a 1200×630px image:
- Background: `#10316b` (dark navy)
- White wordmark: "MyPathway2Global"
- Subtitle: "Evidence-gated migration intelligence for African talent"
- Save as: `public/assets/og-default.png`

Then run `npx wrangler deploy` to push the asset.

---

## Action 4 — Mailchimp action URL
**Effort:** 10 min | **Unlocks:** email capture on blog page

1. Log into Mailchimp → Audience → Signup forms → Embedded forms
2. Copy the form action URL (looks like `https://yourlist.us1.list-manage.com/subscribe/post?u=...&id=...`)
3. Open `src/pages/blog.html`
4. Find the newsletter form `<form>` tag
5. Replace the placeholder `action` attribute with your Mailchimp URL
6. Run `npm run build && npx wrangler deploy`

---

## Action 5 — ARIA audit
**Effort:** 30 min | **Unlocks:** accessibility gate, share results for code fixes

1. Install axe DevTools browser extension (Chrome or Firefox)
2. Run on these 4 pages and record all violations:
   - `https://mypathway2global.org.uk/`
   - `https://mypathway2global.org.uk/pages/find-mypathway.html`
   - `https://mypathway2global.org.uk/pages/visa-wizard.html`
   - `https://mypathway2global.org.uk/pages/calculator.html`
3. Share the violation list — code fixes will be made in the next sprint

---

## Action 6 — Working-holiday article verification (AU/IE/NZ)
**Effort:** 1 hr | **Unlocks:** removes correction banners from 3 articles

Three articles have amber correction banners live because Nigerian eligibility for working-holiday visas was unverified at time of writing.

For each article, check the official source and update the frontmatter:

| Article | Official source to check |
|---|---|
| Australia Working Holiday Visa 2026 | [immi.homeaffairs.gov.au](https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462) |
| Ireland Working Holiday Authorisation 2026 | [irishimmigration.ie](https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/working-holiday-authorisation/) |
| New Zealand Working Holiday Visa 2026 | [immigration.govt.nz](https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa) |

For each article, open the `.md` file in `content/blog/guides/work/` and update the frontmatter:

- If Nigeria IS listed as eligible: set `eligibilityReviewStatus: verified-eligible` and remove the correction banner callout
- If Nigeria is NOT listed: set `eligibilityReviewStatus: verified-ineligible` and update the banner to a permanent ineligibility notice

Then: `npm run build && npx wrangler deploy`

---

## Action 7 — Country source sign-off (31 entries)
**Effort:** 1-2 hrs | **Unlocks:** Phase 1 complete, dataset.asOf update

Open `docs/data/country-source-review-manifest.json`. For each of the 31 country entries:
1. Visit the `primarySourceUrl` listed
2. Confirm the source is still live and the data matches what is in `src/data/pathways.json`
3. Set `humanSignOff: true` on the entry
4. Update `reviewedAt` to today's date

When all 31 are signed off:
```bash
node scripts/generate-country-source-manifest.js --write
npm run build && npx wrangler deploy
```

---

## Action 8 — Legal review
**Effort:** Solicitor | **Unlocks:** affiliate revenue, lead generation, partner agreements

Send `src/pages/privacy.html`, `src/pages/disclaimer.html`, and `src/pages/terms.html` to a solicitor for review. Also send `docs/monetization/PARTNER_FRAMEWORK.md` for the commercial agreement template.

This is a prerequisite for:
- Any affiliate link revenue
- Any paid agent referral fees
- Any partner commercial agreements
- The WAA lead fee structure (Action 2 tier upgrade from `free` to `lead`)

---

## Action 9 — AdSense revenue baseline
**Effort:** 5 min | **Unlocks:** Phase 5 reconciliation, Phase 6 gate

After the first 30 days of live AdSense placement, record:
- Total impressions
- Total clicks
- Average RPM
- Total revenue (GBP)

Log this in `docs/monetization/REVENUE_METRICS.md`. This baseline is the hard gate before Phase 6 (personalisation, premium tier, B2B API) begins.

---

## Action 10 — YouTube video IDs (107 posts)
**Effort:** 1-2 hrs | **Unlocks:** video embeds on all blog posts

107 blog posts have `YOUTUBE_PLACEHOLDER` comments where video embeds should go. For each post where a relevant YouTube video exists:
1. Find the video URL
2. Extract the video ID (the part after `v=` in the URL)
3. Open the `.md` file in `content/blog/`
4. Replace `<!-- YOUTUBE_PLACEHOLDER -->` with the embed

Only add embeds where a genuinely relevant video exists. Do not add unrelated videos.

---

## Up next — code tasks (no owner action needed to start)

These are the next engineering tasks in priority order. No owner action is required to begin any of them.

### UP-1 — Add 8 demand records to occupation-demand.json
**Effort:** 1 hr | **File:** `src/data/occupation-demand.json`

Add these records identified in WAA field research (full primary sources in `docs/engineering/WAA_RESEARCH_PREP.md` Section 3):

| ID | Country | Occupation | Skill | Source |
|---|---|---|---|---|
| CA-healthcare-semiskilled-francophone-2026 | CA | care_work | semi_skilled | canada.ca/francophone-community |
| CA-logistics-semiskilled-2026 | CA | logistics | semi_skilled | canada.ca/lmia |
| OM-trades-unskilled-2026 | OM | trades | trades | mol.gov.om |
| QA-trades-unskilled-2026 | QA | trades | unskilled | adlsa.gov.qa |
| GY-software-it-skilled-2026 | GY | software_it | skilled | immigration.gov.gy |
| SG-software-it-skilled-2026 | SG | software_it | skilled | mom.gov.sg |
| DE-care-work-skilled-2026 | DE | care_work | skilled | make-it-in-germany.com |
| GB-trades-skilled-2026 | GB | trades | skilled | gov.uk/skilled-worker-visa |

### UP-2 — Write W1-W5 blog posts (Tier 1 content queue)
**Effort:** 2-3 hrs each | **Files:** `content/blog/`

In order (full specs in `docs/engineering/WAA_RESEARCH_PREP.md` Section 6):

| ID | Post | File |
|---|---|---|
| W1 | Canada tech visa 2026 — the honest version | `playbooks/professional/canada-tech-express-entry-honest-guide-2026.md` |
| W2 | Canada Francophone immigration — caregivers, PSWs, hospitality | `playbooks/professional/canada-francophone-immigration-caregivers-2026.md` |
| W3 | Is the Qatar work visa real? What the NGN 3.2m offer actually means | `guides/work/qatar-work-visa-reality-check-2026.md` |
| W4 | Is Mongolia a real work destination for Nigerians? | `guides/work/mongolia-work-visa-nigeria-reality-2026.md` |
| W5 | How to know if your travel agent is legitimate | `guides/work/how-to-spot-fake-travel-agent-nigeria-2026.md` |

### UP-3 — Fix 307 redirects on .html page URLs
**Effort:** 30 min | **File:** `wrangler.jsonc` or `public/_headers`

Pages like `/pages/find-mypathway.html` return 307 → `/pages/find-mypathway`. This is a Cloudflare Workers routing behaviour. Add redirect rules or trailing-slash handling to return 200 directly on `.html` URLs.

### UP-4 — Refresh 38 stale requirements
**Effort:** 2-3 hrs | **File:** `src/data/pathway-requirements.json`

38 requirements are >90 days old. Key ones:
- IE-study / minimum_funds (496 days)
- DE-study / admission_offer (374 days)
- CZ-study + CZ-work (311 days)
- CA-federal-skilled-worker / points + experience (139 days)

Run `node scripts/check-stale-pathways.js` for the full list.
