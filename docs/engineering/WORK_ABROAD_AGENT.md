# WorkAbroadAgent — Engineering Plan
**Status:** Planning | **Created:** 2026-11-09 | **Target:** Sprint after content depth sprint

---

## What it is

A demand-driven work routing wizard. The user describes their skill level and occupation. The engine matches them to countries and routes where that labour is actively needed, then surfaces a registered agent or recruiter working that specific corridor.

Two user tracks:

- **Skilled** — developer, nurse, engineer, accountant, teacher. Routed to countries with documented shortages in their occupation (e.g. DE Chancenkarte for tech, AU DAMA for trades, UK Skilled Worker for healthcare).
- **Unskilled / semi-skilled** — domestic worker, carer, hospitality, construction, agriculture. Routed to countries with documented demand for that labour category and a legal pathway to enter (e.g. Qatar domestic worker, Saudi Arabia hospitality, UAE construction).

---

## How it differs from the existing Visa Wizard

| | Visa Wizard | WorkAbroadAgent |
|---|---|---|
| Entry point | Goal (study/work/nomad) | Occupation + skill level |
| Output | Matched pathways by profile | Countries where your labour is needed + agent contact |
| Agent layer | None | Core — agent is the conversion point |
| Unskilled users | Not served | First-class user |
| Revenue model | AdSense / affiliate | Agent referral fee / lead gen |

---

## User flow (proposed)

```
Step 1 — Skill level
  [ ] Skilled professional (degree or 3+ yrs experience)
  [ ] Trades / technician (certified trade)
  [ ] Semi-skilled (hospitality, care, domestic, agriculture)
  [ ] Unskilled (general labour, construction, domestic)

Step 2 — Occupation (conditional on step 1)
  Skilled:    dropdown — Software/IT, Healthcare, Engineering, Finance, Teaching, Other
  Trades:     dropdown — Electrician, Plumber, Carpenter, Mechanic, Welder, Other
  Semi/Unskilled: dropdown — Domestic worker, Carer, Hospitality, Agriculture, Construction, Other

Step 3 — Passport country
  (reuse existing 54-country African passport select)

Step 4 — Availability
  [ ] Ready now   [ ] 3-6 months   [ ] 6-12 months

Step 5 — Results
  - Country cards showing: demand level, visa route, agent name + contact
  - "Connect with agent" CTA per card
  - Disclaimer: agent referral, not immigration advice
```

---

## Data model additions needed

### 1. Occupation demand registry (`src/data/occupation-demand.json`)

```json
{
  "records": [
    {
      "id": "DE-software-engineer-2026",
      "countryId": "DE",
      "occupationCategory": "software_it",
      "skillLevel": "skilled",
      "demandLevel": "high",
      "visaRoute": "DE-opportunity-card",
      "sourceUrl": "https://www.make-it-in-germany.com/en/jobs/shortage-occupations",
      "effectiveDate": "2026-11-01",
      "notes": "IT occupations on German shortage list. Chancenkarte points route available without job offer."
    },
    {
      "id": "AU-trades-dama-2026",
      "countryId": "AU",
      "occupationCategory": "trades",
      "skillLevel": "trades",
      "demandLevel": "high",
      "visaRoute": "AU-dama-regional",
      "sourceUrl": "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements",
      "effectiveDate": "2026-11-01",
      "notes": "DAMA regional stream covers trades in designated areas. Employer sponsorship required."
    },
    {
      "id": "QA-domestic-worker-2026",
      "countryId": "QA",
      "occupationCategory": "domestic_worker",
      "skillLevel": "unskilled",
      "demandLevel": "high",
      "visaRoute": null,
      "sourceUrl": "https://www.moi.gov.qa/",
      "effectiveDate": "2026-11-01",
      "notes": "Qatar domestic worker visa. Kafala system — agent-mediated. High demand, high risk. Agent vetting required before referral."
    }
  ]
}
```

Fields:
- `occupationCategory` — maps to wizard step 2 options
- `skillLevel` — `skilled | trades | semi_skilled | unskilled`
- `demandLevel` — `high | medium | low` (from shortage lists / labour market data)
- `visaRoute` — links to existing `pathways.json` id, or `null` if agent-only route
- `effectiveDate` — when demand data was retrieved

### 2. Agent registry (`src/data/agents.json`)

```json
{
  "agents": [
    {
      "id": "agent-de-tech-001",
      "name": "<Agency Name>",
      "corridors": ["NG-DE", "GH-DE", "KE-DE"],
      "occupationCategories": ["software_it", "engineering"],
      "skillLevels": ["skilled"],
      "contactUrl": "https://...",
      "verifiedAt": "2026-11-01",
      "verificationStatus": "pending",
      "notes": "Registered German recruitment agency. Verify licence before listing."
    }
  ]
}
```

Fields:
- `corridors` — origin-destination pairs (ISO country codes)
- `verificationStatus` — `pending | verified | suspended` — only `verified` agents shown to users
- Agent is NEVER shown until `verificationStatus: verified`

---

## Content gaps this requires

Before launch, need blog posts covering:
- Domestic worker rights in Qatar / UAE / Saudi (legal protections, Kafala reform)
- How to verify a recruitment agent is legitimate (red flags, NAFDAC/NiMC registration)
- Trades shortage occupations in Australia 2026 (DAMA eligible list)
- Germany shortage occupation list 2026 (Engpassberufe)
- UK shortage occupation list 2026 (post-MAC review)

These are not optional — the agent wizard without this content creates liability.

---

## Revenue model

Three tiers:

1. **Free listing** — verified agents listed, no referral fee. Builds supply side.
2. **Lead referral** — user clicks "Connect with agent" → tracked referral → agent pays per qualified lead. Requires commercial agreement per agent.
3. **Featured placement** — agent pays for priority position in results for a corridor. Clearly labelled "Featured".

All three require the `commercial-registry.json` to be extended with agent entries and the `commercial.js` affiliate tracking to handle agent referral paths.

---

## Trust and safety constraints (non-negotiable)

- No agent is shown without `verificationStatus: verified`
- Unskilled / domestic worker routes must show a rights and safety callout before results (Kafala reform status, ILO conventions, red flag checklist)
- Agent listings must include licence number where applicable (NAFDAC for Nigeria, POEA for Philippines-style corridors)
- "Connect with agent" is a referral, not an endorsement — disclaimer required on every card
- No agent referral for Russia, Belarus, or any country with active travel warnings for the user's passport country

---

## Implementation phases

### Phase WAA-1 — Data foundation (no UI)
- Create `occupation-demand.json` with 10-15 seed records (DE tech, AU trades, UK healthcare, QA domestic, UAE hospitality)
- Create `agents.json` with schema only, 0 verified agents
- Write `scripts/validate-agent-registry.js` — checks verificationStatus, required fields, corridor format
- Add to quality gate

### Phase WAA-2 — Wizard UI (static, no agent layer)
- New page `src/pages/work-abroad-agent.html`
- 5-step wizard using existing wizard-engine patterns
- Results show country + demand level + visa route card
- "Agent coming soon" placeholder where agent would appear
- Add to nav and homepage

### Phase WAA-3 — Agent layer
- First verified agent onboarded
- `agents.json` gets first `verified` entry
- Results show agent card with "Connect" CTA
- Commercial tracking wired via `commercial.js`

### Phase WAA-4 — Unskilled track safety layer
- Rights and safety callout component for domestic/unskilled routes
- Kafala reform status per country
- Red flag checklist before agent referral

---

## What exists in the platform that WAA can reuse

| Existing asset | How WAA uses it |
|---|---|
| `src/data/pathways.json` | `visaRoute` field links directly to existing pathway records |
| `src/js/wizard-engine.js` | Step rendering, tile nav, roving tabindex — reuse pattern |
| `src/js/commercial.js` | Agent referral tracking via `buildTrackedPath()` |
| `src/data/commercial-registry.json` | Extend with agent entries |
| `src/js/analytics.js` | Track `work_agent_search_started`, `agent_connect_clicked` events |
| `src/css/enhancements.css` | Wizard tile styles, badge styles already exist |
| 30-country registry | Demand records map to existing country IDs |
| 63 publishable pathways | Most skilled routes already have pathway records |

---

## What the blog scan found — content already supporting WAA

Posts already live that support WAA launch:
- Germany Chancenkarte vs Canada Express Entry (skilled routing)
- Australia DAMA regional worker (trades routing)
- UK Skilled Worker Visa (healthcare/professional routing)
- UAE, Qatar, Saudi Arabia country audits (Gulf unskilled demand context)
- African Diaspora Repatriation Guide (return corridor context)

Missing (must write before WAA-3):
- Domestic worker rights in Gulf states
- How to spot a fake recruitment agent
- UK/AU/DE shortage occupation lists 2026

---

## Open questions (owner decisions needed)

1. **Agent vetting process** — who verifies agents before `verificationStatus: verified`? Owner must define the due diligence checklist (licence check, reference check, complaint history).
2. **Lead fee structure** — what does an agent pay per qualified lead? This needs a commercial agreement template before WAA-3.
3. **Unskilled track scope** — include Gulf domestic worker routes at launch, or defer until rights content is live?
4. **Corridor priority** — which 3 corridors to launch with? Suggested: NG-DE (tech), NG-AU (trades), NG-QA (domestic) — but owner decides.

---

## Sprint readiness gate

WAA-1 can start immediately — data schema only, no UI risk.
WAA-2 can start after WAA-1 data is validated.
WAA-3 is blocked until: (a) first verified agent, (b) commercial agreement template, (c) rights content live.
WAA-4 runs in parallel with WAA-3.

Do not launch WAA-3 without the safety layer for unskilled routes.
