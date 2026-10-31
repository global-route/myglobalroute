# MyPathway2Global — System Architecture & Platform Blueprint

**Document Version:** 2.4.0  
**Audit Cycle:** Q4 2026 / 2027 Strategic Horizon  
**Target Architecture:** Evidence-Gated Migration & Mobility Engine  

---

## 1. Executive Summary & Core Platform Vision

**MyPathway2Global** is an independent, primary-source-driven mobility intelligence platform designed to eliminate agent speculation, unverified success claims, and high-capital traps for African students, skilled professionals, remote workers, and entrepreneurs.

### The Problem Space
* **Agent Information Asymmetry:** Migration agencies often push high-commission private university routes or generic regional applications regardless of applicant suitability.
* **Capital Traps:** Applicants waste thousands of dollars on non-refundable visa application fees due to unverified proof-of-funds (POF) holding periods or obscured salary floors.
* **Dead-End Routes:** Many popular temporary visas lack predictable legal pathways to permanent residence (PR) or long-term settlement.

### The Solution Framework
The platform operates as a clean, document-first intelligence engine that cross-references user financial profiles, qualifications, and family sizes against **55+ primary-source verified pathway records** across Europe, North America, Asia-Pacific, and Intra-Africa trade corridors.

---

## 2. Core Architecture: The 4-Filter Gatekeeping Framework

Every migration pathway ingested into the database must pass through four strict verification filters before being surfaced to end users:

```
                    [ Raw Opportunity Signal ]
                                │
                                ▼
        +----------------------------------------------+
        |  FILTER 1: Proof-of-Funds & Capital Realism  |
        +----------------------------------------------+
                                │ (Passes Capital Threshold)
                                ▼
        +----------------------------------------------+
        |  FILTER 2: Selection & Quota Asymmetry       |
        +----------------------------------------------+
                                │ (Passes Friction Audit)
                                ▼
        +----------------------------------------------+
        |  FILTER 3: PR / Residency Conversion Vector  |
        +----------------------------------------------+
                                │ (Passes Settlement Feasibility)
                                ▼
        +----------------------------------------------+
        |  FILTER 4: Primary-Source Provenance Audit   |
        +----------------------------------------------+
                                │ (Passes Official Verification)
                                ▼
                [ Ingest into Registry Engine ]
```

### Gate 1: Proof-of-Funds (POF) Realism
* **Tier 1 (Funded / Low Upfront):** Stipend-backed scholarships, need-blind university grants (e.g., Italy DSU), startup accelerator sponsorships. Net liquid cash required: **< $2,500 USD**.
* **Tier 2 (Moderate / No Blocked Account Trap):** Salary-backed visas, flexible liquid savings, or regional income thresholds (e.g., Germany Chancenkarte, Portugal D3). Net liquid cash required: **$2,500 – $8,000 USD**.
* **Tier 3 (High Capital / Standard):** Rigid blocked accounts, upfront private tuition, or high settlement balances (e.g., Canada Study Permit, UK Masters). Net liquid cash required: **> $8,000 USD**.

### Gate 2: Selection & Quota Asymmetry
Evaluates whether a route is trapped in overcrowded national pools (e.g., general Express Entry draws > 500 CRS points) or benefits from **regional concessions** (e.g., Australian DAMAs, Canada Rural Community Immigration Pilot, regional French Talent Passports).

### Gate 3: PR & Residency Conversion Vector
Evaluates whether temporary status offers a direct, predictable legal path to long-term settlement (e.g., Stamp 4 PR in Ireland after 2 years on Critical Skills) versus non-converting temporary visas.

### Gate 4: Primary-Source Provenance Audit
Every record requires an active primary government URL (e.g., `make-it-in-germany.com`, `homeaffairs.gov.au`, `ircc.canada.ca`, `aima.gov.pt`), an explicit publishing authority tag, and a timestamp specifying when the policy was last fact-checked.

---

## 3. UI/UX Design System — "Classic & Basic" (Document Style)

To ensure high performance across low-bandwidth African mobile networks and maintain an authoritative, editorial feel, the platform avoids complex visual clutter in favor of a clean, document-first layout inspired by **MDN Web Docs, GitBook, and Stripe Documentation**.

```
+-----------------------------------------------------------------------------------+
| HEADER: Logo | Search Bar (⌘K) | Navigation | Primary Source Status Badge        |
+-----------------------------------------------------------------------------------+
| SIDEBAR (Left - 20%)    | MAIN DOCUMENT PANEL (Center - 80%)                      |
|                         |                                                         |
| ── Outbound Mobility    | # Germany Skilled Work — Opportunity Card (Chancenkarte) |
|   ├── Country Audits    |                                                         |
|   ├── Visa Wizard       | [ 🟢 Official Source Verified · Audited: October 2026 ] |
|   └── Gap Calculator    |                                                         |
|                         | ## Quick Summary & Key Figures                          |
| ── Inbound / Intra-AF   | - **Minimum Points Required:** 6 Points                  |
|   ├── AfCFTA Corridor   | - **Maintenance Balance:** €1,091/month (Sperrkonto)     |
|   └── Remote Nomad Hubs | - **Job Search Duration:** 18 Months                    |
|                         |                                                         |
| ── Content Index        | ## 1. Eligibility & Point System Breakdown              |
|   ├── Playbooks         | ...                                                     |
|   └── Case Studies      |                                                         |
+-----------------------------------------------------------------------------------+
| FOOTER: Legal Disclaimers · Primary Source Provenance Logs · API Status           |
+-----------------------------------------------------------------------------------+
```

### Design Tokens & Typography
* **Color Palette:**
  * Background: `#FBFBFB` (Off-white / Paper tone)
  * Sidebar: `#F4F4F5` (Neutral light gray)
  * Borders: `#E4E4E7` (Subtle zinc divider)
  * Primary Text: `#18181B` (Deep charcoal)
  * Secondary Text: `#71717A` (Muted gray)
  * Accent Badges: `#15803D` (Muted Forest Green — `Verified`), `#B45309` (Amber — `Warning`), `#DC2626` (Red — `Research Required`)
* **Typography:** `Inter` for clean document body text; `JetBrains Mono` for metadata, requirements code blocks, financial figures, and status timestamps.

---

## 4. Blog & Intelligence Content Expansion Matrix

To capture high-intent organic search volume across both **outbound migration** and **inbound/intra-African business and study mobility**, content is organized into strategic verticals:

### Vertical A: High-Intent Outbound Country Audits & Deep-Dives
1. **Ireland Critical Skills Employment Permit (`IE-critical-skills`)**
   * *Focus:* Tech, engineering, and healthcare professionals. €38,000 minimum salary threshold, fast-track Stamp 4 PR after 2 years.
2. **Spain Digital Nomad & Highly Qualified Worker Visa (`ES-nomad`)**
   * *Focus:* Remote tech workers and consultants. €2,646/month baseline (200% SMI), tax benefits under Beckham Law.
3. **Australia Regional DAMA Deep-Dive (`AUS-dama`)**
   * *Focus:* Trades, healthcare, and IT workers targeting 13 regional zones with age concessions up to 55 years old and relaxed English floors.
4. **Nordic Low-Cost Study Roundup (Sweden, Finland, Norway)**
   * *Focus:* Master's applicants seeking post-study work permits and research grants.

### Vertical B: Inbound & Intra-African Mobility Opportunities
1. **AfCFTA Business & Investor Corridors**
   * *Focus:* How foreign investors and regional founders establish headquarters in low-friction hubs (Rwanda, Mauritius, Ghana, Kenya).
2. **The December "Detour" & Diaspora Repatriation Guide**
   * *Focus:* Seasonal campaign guide helping visiting diaspora transition holiday stays into registered African businesses, land acquisition, or remote operations.
3. **African Digital Nomad & Tech Hub Frameworks**
   * *Focus:* In-depth audits of Mauritius's Premium Visa, Cape Verde's Remote Work Program, and Namibia's Digital Nomad Visa.

---

## 5. Navigation Tools & API Contracts

The platform relies on three core client-side interactive engines:

### 1. `Find MyPathway` Registry Engine
* Filters 55+ pathways across 5 input dimensions: `Goal`, `Max Budget (USD)`, `Dependents`, `Target Region`, and `Capital Tier`.

### 2. `Visa Wizard` Conditional Logic
* A 5-step wizard that evaluates passport eligibility, qualifications, and liquidity against pathway constraints before presenting top matches.

### 3. `Budget Gap Calculator` (Near-Miss Recovery)
* When a user's liquid savings fall short of the lowest matching pathway threshold, the calculator prevents dead-end results by calculating an exact savings timeline:
  $$\text{Months to Readiness} = \frac{\text{Required Funds (USD)} - \text{Liquid Savings (USD)}}{\text{Monthly Savings Rate (USD)}}$$

---

## 6. Security, Offline Resilience & Performance

1. **Local State Persistence:** All user selections inside the Visa Wizard and Gap Calculator automatically write to `window.localStorage` (`mp2g_user_filters`) to protect progress against mobile network disruptions.
2. **Offline Caching:** A lightweight Service Worker caches previously viewed country audits and pathway cards, rendering them seamlessly when connectivity is lost.
3. **Data Integrity:** Pathways unverified for over 90 days trigger automated backend flags to ensure policy changes (such as Canada's SDS cancellation) are immediately reflected.
