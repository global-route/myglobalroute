# WorkAbroadAgent — Engineering Blueprint
**Status:** WAA-1 done | WAA-2 done | WAA-3b/3c/3d done | WAA-4 done | WAA-3a blocked (owner)
**Updated:** 2026-11-10

---

## What it does in one sentence

User answers 4 questions. Platform matches them to verified agents who handle that corridor. User fills a short intake form. Agent receives the lead and contacts the user to begin their journey.

That is the entire product. Nothing more.

---

## The user journey — end to end

```
Step 1  What is your skill level?
        Skilled / Trades / Semi-skilled / General labour

Step 2  What is your occupation?
        Dropdown filtered by step 1 answer

Step 3  What passport do you hold?
        African country select

Step 4  When are you available to move?
        Ready now / 1-3 months / 3-6 months / 6-12 months

        → Platform matches profile to demand records
        → Shows country cards with visa route and demand level
        → Each card has: "Connect with an agent for this route"

Step 5  Agent intake form  ← THIS IS THE MISSING STEP
        Name
        Email
        WhatsApp number
        Confirm: I have not paid any agent fees yet (checkbox)
        Confirm: I understand this is a referral, not a guarantee (checkbox)
        Submit → lead goes to matched agent(s) for that corridor

Agent receives:
        User name, email, WhatsApp
        Corridor (e.g. NG → DE, software_it, skilled)
        Availability
        Timestamp
```

The user never leaves the platform to find an agent. The agent comes to the user via the lead.

---

## What is built vs what is missing

### Built (WAA-1 + WAA-2)
- Steps 1-4: skill level, occupation, passport, availability — all wired and working
- Demand matching engine — filters `occupation-demand.json` by skillLevel + occupationCategory
- Country result cards — flag, demand badge, visa route link, notes
- Safety callout for high-risk categories (domestic_worker, construction, factory)
- localStorage state persistence
- Agent placeholder card on every result ("Verified agents coming soon")

### Missing (WAA-3)
- Step 5: the intake form
- Agent matching logic — which agent(s) serve this corridor + occupation
- Form submission — POST to a form handler or email relay
- Agent receives lead — email notification or dashboard entry
- `agents.json` populated with at least one verified agent

### What WAA-3 is NOT
- Not a booking system
- Not a payment system
- Not a case management system
- Not a chat interface
- Not a job board

WAA-3 is a lead routing form. One form. One submit. Agent gets an email. That is it.

---

## Data flow

```
User profile (from wizard state)
  skillLevel: "skilled"
  occupationCategory: "software_it"
  passportCountry: "NG"
  availability: "3months"

  ↓

Demand matching (existing — works today)
  occupation-demand.json filtered by skillLevel + occupationCategory
  Returns: [DE-software-it, GB-software-it, IE-software-it, CA-software-it, ...]

  ↓

Agent matching (WAA-3 — to build)
  agents.json filtered by:
    corridors includes "NG-DE" or "NG-*" or "*-DE"
    occupationCategories includes "software_it"
    skillLevels includes "skilled"
    verificationStatus === "verified"
  Returns: [agent-de-tech-001, ...]

  ↓

Result card shows:
  Country + demand level + visa route
  Agent name + "Connect with this agent" button

  ↓

User clicks "Connect"
  Intake form appears (inline, same page — no redirect)
  User fills: name, email, WhatsApp, two checkboxes
  Submit

  ↓

Lead delivered to agent
  Email to agent with user profile + contact details
  Analytics event: agent_lead_submitted
```

---

## agents.json schema (what WAA-3 needs)

```json
{
  "schemaVersion": "1.0.0",
  "policy": "No agent shown until verificationStatus is verified. Verification requires: business registration, licence number where applicable, reference check, signed commercial agreement.",
  "agents": [
    {
      "id": "agent-de-tech-001",
      "name": "Agency Name",
      "corridors": ["NG-DE", "GH-DE"],
      "occupationCategories": ["software_it", "engineering"],
      "skillLevels": ["skilled"],
      "contactEmail": "agent@example.com",
      "whatsapp": "+49...",
      "licenceNumber": "...",
      "licenceAuthority": "...",
      "verifiedAt": "2026-11-09",
      "verificationStatus": "verified",
      "tier": "free"
    }
  ]
}
```

`tier`: `free | lead | featured`
- `free` — listed, no referral fee
- `lead` — platform charges per qualified lead (commercial agreement required)
- `featured` — priority position in results, labelled "Featured" (commercial agreement required)

`corridors` format: `"NG-DE"` = Nigeria to Germany. `"NG-*"` = Nigeria to any country. `"*-DE"` = any origin to Germany. Match logic handles wildcards.

---

## WAA-3 implementation — exactly what to build

### 1. Agent matching function (add to `work-abroad-agent.js`)

```js
function matchAgents(agents, corridor, occupationCategory, skillLevel) {
  return agents.filter(a => {
    if (a.verificationStatus !== 'verified') return false;
    const corridorMatch = a.corridors.some(c =>
      c === corridor || c === `${corridor.split('-')[0]}-*` || c === `*-${corridor.split('-')[1]}`
    );
    const occMatch = a.occupationCategories.includes(occupationCategory);
    const skillMatch = a.skillLevels.includes(skillLevel);
    return corridorMatch && occMatch && skillMatch;
  });
}
```

### 2. Intake form (inline HTML, rendered into result card)

Rendered by `renderAgentCard()` when a verified agent exists for the corridor.

```html
<div class="waa-agent-card">
  <p class="waa-agent-name">{agent.name}</p>
  <p class="waa-agent-corridors">Handles: {corridors}</p>
  <button type="button" class="btn btn-primary waa-connect-btn"
          data-agent-id="{agent.id}">
    Connect with this agent
  </button>
  <form class="waa-intake-form" hidden data-agent-id="{agent.id}">
    <label>Full name <input type="text" name="name" required></label>
    <label>Email <input type="email" name="email" required></label>
    <label>WhatsApp number <input type="tel" name="whatsapp" required></label>
    <label class="waa-checkbox">
      <input type="checkbox" name="no_fees_paid" required>
      I have not paid any agent fees yet
    </label>
    <label class="waa-checkbox">
      <input type="checkbox" name="referral_understood" required>
      I understand this is a referral, not a guarantee of employment
    </label>
    <button type="submit" class="btn btn-primary">Send my details to agent</button>
    <p class="waa-form-disclaimer">
      Your details are shared only with this agent.
      <a href="/pages/privacy.html">Privacy policy</a>
    </p>
  </form>
</div>
```

"Connect with this agent" button toggles the form visible. Form submit sends the lead.

### 3. Form submission

Two options — owner decides which:

**Option A — Formspree (no backend needed)**
- Form action: `https://formspree.io/f/{form_id}`
- Agent receives email with all fields
- Free tier: 50 submissions/month. Paid: unlimited.
- Zero infrastructure. Works today.

**Option B — Cloudflare Worker endpoint**
- POST to `/api/agent-lead`
- Worker validates fields, emails agent via SendGrid/Mailgun
- More control, more setup

Recommendation: Start with Formspree per agent. One form ID per agent. When volume justifies it, move to Cloudflare Worker.

### 4. Analytics events (add to existing `analytics.js` calls)

```js
// When user clicks "Connect with this agent"
GlobalRoute.Analytics.track('agent_connect_clicked', {
  agentId, corridor, occupationCategory, skillLevel
});

// When form is submitted successfully
GlobalRoute.Analytics.track('agent_lead_submitted', {
  agentId, corridor, occupationCategory, skillLevel
});
```

---

## Multi-agent handling

When multiple verified agents serve the same corridor:

- Show all matched agents as separate cards
- `featured` tier agents appear first, labelled "Featured"
- `lead` and `free` tier agents appear below in alphabetical order
- Maximum 3 agents shown per corridor to avoid choice paralysis
- If no verified agent exists for a corridor: show the existing placeholder ("Verified agents coming soon")

---

## What the agent receives (lead email format)

```
Subject: New work abroad lead — NG→DE Software/IT

Profile:
  Skill level: Skilled professional
  Occupation: Software / IT
  Passport: Nigeria
  Availability: 1-3 months

Contact:
  Name: [user name]
  Email: [user email]
  WhatsApp: [user whatsapp]

Confirmed:
  No fees paid yet: Yes
  Referral understood: Yes

Submitted: 2026-11-09 14:32 UTC
Source: mypathway2global.org.uk/pages/work-abroad-agent.html
```

Agent responds directly to user via email or WhatsApp. Platform is not in the conversation after lead delivery.

---

## What happens after the lead — agent's responsibility

The platform's job ends at lead delivery. The agent's job begins:

1. Contact user within 48 hours (this becomes a commercial agreement term)
2. Conduct candidate assessment (documents, qualifications, eligibility)
3. Advise on visa route and process
4. If proceeding: sign service agreement with user
5. Process application

The platform does not manage this process. It does not track application status. It does not handle disputes. That is out of scope for WAA-3.

---

## Trust constraints (unchanged — non-negotiable)

- No agent shown without `verificationStatus: verified`
- Safety callout fires before results for high-risk categories (domestic_worker, construction, factory, logistics)
- Intake form has two mandatory checkboxes: no fees paid, referral understood
- Disclaimer on every agent card: "Referral only — not an endorsement. Verify independently."
- No agent referral for Belarus, Russia, or countries with active FCDO travel warnings
- Agent listings must include licence number where applicable

---

## WAA-4 — unskilled safety gate (runs parallel to WAA-3)

For `riskLevel: high` demand records, add a pre-form checklist the user must acknowledge before the intake form appears:

```
Before connecting with an agent, confirm:
[ ] I have NOT been asked to pay a recruitment fee upfront
[ ] I have seen a written job description with salary stated
[ ] I know the employer's name and can verify they exist
[ ] I understand I can leave the job if conditions are unsafe
[ ] I have read the worker rights guide for this country
```

All five boxes must be checked. "Connect with agent" button is disabled until all checked.

This is a UI gate only — it does not prevent a determined user from proceeding, but it creates a documented moment of informed consent.

---

## Implementation phases — updated

| Phase | What | Status | Blocked by |
|---|---|---|---|
| WAA-1 | Demand data + agents schema | Done | — |
| WAA-2 | Wizard steps 1-4 + result cards + safety callout | Done | — |
| WAA-3a | Populate agents.json with first verified agent | **Blocked** | Owner: agent vetting + commercial agreement |
| WAA-3b | Agent matching logic in work-abroad-agent.js | **Done** — `192ad97` | — |
| WAA-3c | Intake form + Formspree submission | **Done** — `192ad97` | — |
| WAA-3d | Analytics events for connect + submit | **Done** — `192ad97` | — |
| WAA-4 | Unskilled safety gate checklist | **Done** — `192ad97` | — |
| validate-agent-registry.js | Quality gate script | **Done** — `192ad97` | — |

WAA-3b, 3c, 3d, and WAA-4 can all be built now. They just cannot be tested end-to-end until WAA-3a (first verified agent) is done.

---

## Owner actions required (unchanged)

1. Define agent vetting checklist — what does verification require? (business registration, licence, reference, signed agreement)
2. Sign first commercial agreement with first agent — which corridor? Suggested: NG-DE tech
3. Confirm lead fee structure — what does the agent pay per qualified lead?
4. Choose form submission method — Formspree (fast, no infrastructure) or Cloudflare Worker (more control)

None of these are engineering decisions. All four are owner decisions.

---

## Files to touch in WAA-3

| File | Change |
|---|---|
| `src/data/agents.json` | Add first verified agent |
| `src/js/work-abroad-agent.js` | Add matchAgents(), renderAgentCard(), intake form wiring, form submit handler, analytics events |
| `src/css/enhancements.css` | `.waa-agent-card`, `.waa-intake-form`, `.waa-checkbox` styles |
| `src/pages/partners.html` | Add agent onboarding section — what verification requires, how to apply |
| `scripts/validate-agent-registry.js` | New script — validates agents.json schema, checks verificationStatus, corridor format, verifiedAt presence |

That is 5 files. No new pages. No new routes. No new data fetches beyond what already exists.

---

## What this is NOT (architecture guardrails)

Do not add any of the following to WAA-3:

- A separate agent dashboard or portal — out of scope
- Application status tracking — out of scope
- In-platform messaging between user and agent — out of scope
- Payment processing — out of scope
- User accounts or login — out of scope
- A separate API endpoint for agent data — not needed, agents.json is fetched client-side like all other data files
- A separate page for the intake form — the form is inline on the result card, same page

Every one of these would add complexity without adding value at this stage. The product is: wizard → match → form → lead. Keep it that way.
