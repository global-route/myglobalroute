# WAA Active Task — Agent Notification Infrastructure
**Updated:** 2026-11-11 | **Status:** Owner-gated — awaiting agent credentials + deploy
**Latest commit:** `85b016b` | Worker: `workers/agent-lead.js` built, not yet deployed

---

## Current deploy blocker

`upload.assets.cloudflare.com` is not resolving via DNS (confirmed via Google 8.8.8.8 and Cloudflare 1.1.1.1). This is a wrangler 4.x issue with the asset upload endpoint.

**Fix — downgrade wrangler to v3:**
```bash
npm install --save-dev wrangler@3
npx wrangler deploy
```

Wrangler 3 uses a different upload endpoint that resolves correctly. Once deployed, upgrade back if needed.

---

## What is built and ready

| Component | File | Status |
|---|---|---|
| Cloudflare Worker (fan-out to Slack/Telegram/WhatsApp/Email) | `workers/agent-lead.js` | Built — not deployed |
| agents.json schema v1.1.0 with notification fields | `src/data/agents.json` | Updated |
| work-abroad-agent.js posts to `/api/agent-lead` | `src/js/work-abroad-agent.js` | Updated |
| work-abroad-agent.html in sitemap | `public/sitemap.xml` | Added |
| wrangler.jsonc deployment note | `wrangler.jsonc` | Updated |

---

## What the Worker does

User submits intake form → POST to `/api/agent-lead` → Worker validates → fans out simultaneously to:

1. **Slack** — instant message to agent's Slack channel via incoming webhook
2. **Telegram** — message to agent's Telegram bot/group via Bot API
3. **WhatsApp** — message to agent's WhatsApp number via WhatsApp Business Cloud API
4. **Email** — always-on fallback via Resend API to agent's contact email

All four channels fire in parallel. If any one succeeds, the lead is delivered. Email is always attempted regardless.

---

## What you need to provide per agent

For each agent you onboard, collect ALL of the following. Nothing goes live until `verificationStatus` is set to `verified`.

### Required (every agent)
| Field | What it is | Example |
|---|---|---|
| `name` | Agency full name | "Yellowlane Global" |
| `contactEmail` | Email address for lead delivery | agent@yellowlane.com |
| `corridors` | Origin-destination pairs they serve | `["NG-DE", "GH-DE", "NG-*"]` |
| `occupationCategories` | Occupation types they handle | `["software_it", "healthcare"]` |
| `skillLevels` | Skill levels they handle | `["skilled", "trades"]` |
| `tier` | Commercial tier | `"free"` / `"lead"` / `"featured"` |
| `licenceNumber` | Business registration or licence number | CAC/BN/1234567 |
| `licenceAuthority` | Issuing body | "Corporate Affairs Commission Nigeria" |

### Notification channels (at least one required)

**Slack**
| Field | What to ask the agent | Where they get it |
|---|---|---|
| `notifications.slackWebhookUrl` | "Create an incoming webhook in your Slack workspace and share the URL" | Slack → Settings → Integrations → Incoming Webhooks → Add New |

**Telegram**
| Field | What to ask the agent | Where they get it |
|---|---|---|
| `notifications.telegramBotToken` | "Create a Telegram bot via @BotFather and share the token" | Message @BotFather on Telegram → /newbot |
| `notifications.telegramChatId` | "Share the chat ID of the group or channel where leads should go" | Add @userinfobot to the group → it replies with the chat ID |

**WhatsApp**
| Field | What to ask the agent | Where they get it |
|---|---|---|
| `notifications.whatsappNumber` | "Share the WhatsApp Business number in E.164 format" | e.g. +2348012345678 |

Note: WhatsApp delivery requires the platform to have a WhatsApp Business Cloud API account (see Worker secrets below). If the agent only has a personal WhatsApp, use Telegram or Slack instead — the Cloud API cannot message personal numbers without opt-in.

---

## Cloudflare Worker secrets to set (owner — one-time)

Run these commands once before deploying the worker:

```bash
npx wrangler secret put RESEND_API_KEY
# → paste your Resend API key (get from resend.com — free tier: 3,000 emails/month)

npx wrangler secret put LEADS_FROM_EMAIL
# → paste: leads@mypathway2global.org.uk
# (must be a verified sender domain in Resend)

# Only needed if using WhatsApp Business Cloud API:
npx wrangler secret put WHATSAPP_API_TOKEN
# → paste your Meta WhatsApp Business Cloud API token

npx wrangler secret put WHATSAPP_PHONE_ID
# → paste your WhatsApp Business phone number ID
```

---

## How to deploy the Worker

The current `wrangler.jsonc` serves static assets only. The agent-lead Worker needs to be deployed as a separate named Worker that handles the `/api/agent-lead` route.

**Option A — Separate Worker (recommended, cleanest)**

```bash
# Deploy the agent-lead worker as a separate named worker
npx wrangler deploy workers/agent-lead.js --name globalroute-leads --compatibility-date 2026-10-01

# Then add a route in the Cloudflare dashboard:
# Workers & Pages → globalroute-leads → Triggers → Add Route
# Route: mypathway2global.org.uk/api/agent-lead*
# Zone: mypathway2global.org.uk
```

**Option B — Single Worker with fetch handler**

Add a `main` entrypoint to `wrangler.jsonc` that handles both assets and API routes. More complex — use Option A first.

---

## How to add the first agent

1. Collect all required fields above from the agent
2. Sign commercial agreement (solicitor — see PARTNER_FRAMEWORK.md)
3. Open `src/data/agents.json`
4. Copy the `_template` object, remove `_template` and `_note` keys
5. Fill all fields, set `verificationStatus: "verified"`, set `verifiedAt` to today's date
6. Run `node scripts/validate-agent-registry.js` — must pass
7. Run `npm test` — must pass
8. Commit, push, deploy

---

## How the lead flow works end-to-end

```
User completes 4-step WAA wizard
  ↓
Clicks "Connect with this agent"
  ↓
Fills intake form: name, email, WhatsApp, 2 checkboxes
  ↓
Submits → POST /api/agent-lead
  ↓
Cloudflare Worker validates payload
  ↓
Fetches agents.json → finds matched agent by agentId
  ↓
Fans out in parallel:
  → Slack webhook (if configured)
  → Telegram Bot API (if configured)
  → WhatsApp Business Cloud API (if configured)
  → Resend email (always attempted)
  ↓
Returns { ok: true, channels: [...results] }
  ↓
User sees: "Your details have been sent. The agent will contact you within 48 hours."
  ↓
Agent receives lead on Slack/Telegram/WhatsApp/email with:
  - Corridor (e.g. NG→DE)
  - Skill level + occupation
  - Passport country
  - Availability
  - Name, email, WhatsApp
  - Confirmation: no fees paid, referral understood
  - Timestamp + source URL
  ↓
Agent contacts user directly within 48 hours
```

---

## Suggested first agent corridor

Based on field research (WAA_RESEARCH_PREP.md), the highest-value first corridor is:

**NG-DE / software_it / skilled**

Rationale:
- Germany has the highest documented demand in occupation-demand.json (Chancenkarte, shortage list)
- Nigerian IT professionals are the most active searchers on the platform
- HelpOverseas is running paid Facebook ads to this exact audience — a verified agent on this corridor is a direct counter
- Yellowlane and Liberty Track Travels both appeared in field research and serve European corridors

Second priority: **NG-CA / software_it / skilled** (Express Entry corridor — HelpOverseas competitor angle)

Third priority: **NG-QA / domestic_worker / unskilled** (highest risk, highest volume — needs a verified agent most urgently for safety reasons)

---

## Resend setup (5 minutes)

1. Go to resend.com → sign up free
2. Add domain: mypathway2global.org.uk → follow DNS verification steps
3. Create API key → copy it
4. Run `npx wrangler secret put RESEND_API_KEY` → paste key
5. Run `npx wrangler secret put LEADS_FROM_EMAIL` → type `leads@mypathway2global.org.uk`

Free tier: 3,000 emails/month, 100/day. Sufficient for early agent volume.

---

## Status summary

| Task | Owner | Blocked by |
|---|---|---|
| Set RESEND_API_KEY secret | Owner | Resend account (5 min) |
| Set LEADS_FROM_EMAIL secret | Owner | Resend domain verification |
| Deploy agent-lead Worker (Option A) | Owner | Secrets set |
| Collect first agent credentials | Owner | Commercial agreement |
| Add first agent to agents.json | Owner | Credentials + agreement |
| Run validate-agent-registry.js | Owner | agents.json populated |
| Deploy + test end-to-end | Owner | All above |
