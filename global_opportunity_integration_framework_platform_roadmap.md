# Global Opportunity Integration Framework & Implementation Roadmap

## Executive Summary & Strategic Objective

**MyPathway2Global** is expanding its evidence-gated intelligence engine beyond traditional, high-friction migration pathways (such as standard study permits and oversubscribed skilled work draws) toward **undersaturated, high-asymmetry global opportunities**. 

This document defines:
1. **The Opportunity Evaluation Framework (The 4-Filter System):** A systematic method for vetting, scoring, and verifying niche opportunities across Technology, Research, Regional Skilled Gaps, and Remote Work.
2. **Platform Integration & Data Schemas:** How to ingest, store, and display these opportunities in `Find MyPathway`, the `Visa Wizard`, and the `Budget Calculator`.
3. **Execution Roadmap:** A phased sprint schedule to research, ingest, and publish these underpatronized opportunities across African regional markets.

---

## 1. Opportunity Evaluation Framework (The 4-Filter System)

Before any non-traditional opportunity is ingested into the database, it must pass through four strict validation filters to eliminate agent speculation and provide actionable pathways for African applicants.

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
                               │ (Passes Pathway Feasibility)
                               ▼
        +----------------------------------------------+
        |  FILTER 4: Primary-Source Provenance Verification |
        +----------------------------------------------+
                               │ (Passes Legal Verification)
                               ▼
                [ Ingest into Registry Engine ]
```

### Filter 1: Proof-of-Funds (POF) & Capital Realism
* **Evaluation Standard:** Evaluates the net upfront liquid capital required versus local African economic realities.
* **Scoring Rules:**
  * **Tier 1 (High Asymmetry / Low Capital):** Fully funded or stipend-backed (e.g., Italy DSU Grants, Erasmus Mundus, Tokyo Forge Accelerator). Net out-of-pocket setup < $2,500 USD.
  * **Tier 2 (Moderate Capital):** Requires liquid savings, but avoids fixed blocked account traps or permits lower regional thresholds (e.g., Germany Opportunity Card / Chancenkarte, Australia DAMA regional streams). Net setup $2,500–$8,000 USD.
  * **Tier 3 (High Capital / Standard):** Fixed high blocked account or high tuition thresholds (e.g., Canada Study Permits, UK Masters). Net setup > $8,000 USD.

### Filter 2: Selection & Quota Asymmetry
* **Evaluation Standard:** Measures competition density and procedural overhead.
* **Scoring Rules:**
  * **High Asymmetry (Target Opportunity):** Regional/Niche allocations, non-quota exemptions, or direct skills-to-nomination matching (e.g., Australia DAMAs, Canada RCIP, Portugal D3). Bypasses standard national pool draws.
  * **Low Asymmetry (Standard Pool):** Subject to national lotteries or inflated cutoffs (e.g., US H-1B lottery, general Express Entry draws > 500 CRS points).

### Filter 3: Permanent Residency (PR) Conversion Vector
* **Evaluation Standard:** Maps whether temporary status can legally transition into long-term residency or settlement.
* **Scoring Rules:**
  * **Direct Vector:** Provides explicit post-graduation or post-work transition rights to PR (e.g., Australian Regional 491 to 191 visa, French Talent Passport, UK Global Talent).
  * **Conditional Vector:** Requires secondary sponsorship or high income renewal hurdles (e.g., Standard Digital Nomad Visas).

### Filter 4: Primary-Source Provenance Verification
* **Evaluation Standard:** Zero third-party blogs or agent assertions permitted.
* **Verification Criteria:** Must cite active government immigration portals, university gazettes, or official program administration domains (e.g., `make-it-in-germany.com`, `homeaffairs.gov.au`, `ec.europa.eu`).

---

## 2. Platform Data Schema Integration

To integrate these research-backed opportunities into the existing `Find MyPathway` engine and database schema, we introduce extended metadata attributes: `asymmetry_category`, `capital_tier`, and `regional_concessions`.

### Extended JSON Schema Definition

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "OpportunityPathway",
  "type": "object",
  "required": [
    "pathway_id",
    "country_code",
    "route_type",
    "asymmetry_category",
    "capital_tier",
    "proof_of_funds",
    "provenance"
  ],
  "properties": {
    "pathway_id": { "type": "string" },
    "country_code": { "type": "string", "pattern": "^[A-Z]{3}$" },
    "title": { "type": "string" },
    "asymmetry_category": {
      "type": "string",
      "enum": ["tech_engineering", "academic_research", "regional_skilled_gap", "remote_freelance"]
    },
    "capital_tier": {
      "type": "string",
      "enum": ["tier_1_funded", "tier_2_moderate", "tier_3_standard"]
    },
    "regional_concessions": {
      "type": "object",
      "properties": {
        "age_limit_extension": { "type": "integer" },
        "language_score_floor_reduction": { "type": "boolean" },
        "salary_concession_percent": { "type": "number" }
      }
    },
    "proof_of_funds": {
      "type": "object",
      "required": ["amount_usd", "mechanism"],
      "properties": {
        "amount_usd": { "type": "number" },
        "mechanism": { "type": "string" }
      }
    },
    "provenance": {
      "type": "object",
      "required": ["primary_source_url", "publishing_authority", "last_audited_utc"],
      "properties": {
        "primary_source_url": { "type": "string", "format": "uri" },
        "publishing_authority": { "type": "string" },
        "last_audited_utc": { "type": "string" }
      }
    }
  }
}
```

---

## 3. Database Seed File (Researched Opportunities)

Below is an ingested data record covering four high-asymmetry opportunity pathways researched across fields:

```json
[
  {
    "pathway_id": "aus_skilled_dama_regional_2026",
    "country_code": "AUS",
    "country_name": "Australia",
    "route_type": "work",
    "title": "Designated Area Migration Agreement (DAMA) Regional Stream",
    "asymmetry_category": "regional_skilled_gap",
    "capital_tier": "tier_2_moderate",
    "summary": "Employer-sponsored pathway in designated regional areas offering concessions on age caps (up to 55), English test scores, and expanded occupation lists.",
    "dependents_allowed": true,
    "min_experience_years": 1,
    "regional_concessions": {
      "age_limit_extension": 55,
      "language_score_floor_reduction": true,
      "salary_concession_percent": 10
    },
    "proof_of_funds": {
      "amount_usd": 3500,
      "original_currency": "AUD",
      "original_amount": 5300,
      "mechanism": "liquid_savings"
    },
    "provenance": {
      "primary_source_url": "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements",
      "publishing_authority": "Department of Home Affairs",
      "last_audited_utc": "2026-10-28T09:00:00Z",
      "confidence_score": "verified_primary"
    }
  },
  {
    "pathway_id": "ita_study_dsu_regional_2026",
    "country_code": "ITA",
    "country_name": "Italy",
    "route_type": "study",
    "title": "Italy DSU Regional Need-Blind Study Scholarship",
    "asymmetry_category": "academic_research",
    "capital_tier": "tier_1_funded",
    "summary": "Public higher education funding stream providing zero tuition, free campus accommodation, meal vouchers, and a €5,400–€7,000/year stipend based on family income evaluation (ISEE).",
    "dependents_allowed": false,
    "min_experience_years": 0,
    "proof_of_funds": {
      "amount_usd": 1500,
      "original_currency": "EUR",
      "original_amount": 1380,
      "mechanism": "sponsor_guarantee"
    },
    "provenance": {
      "primary_source_url": "https://www.dsu.toscana.it/",
      "publishing_authority": "Azienda DSU Toscana / MUR",
      "last_audited_utc": "2026-10-28T09:00:00Z",
      "confidence_score": "verified_primary"
    }
  },
  {
    "pathway_id": "jpn_tech_tokyo_forge_2026",
    "country_code": "JPN",
    "country_name": "Japan",
    "route_type": "business",
    "title": "Tokyo Hardware & Deep-Tech Accelerator Program",
    "asymmetry_category": "tech_engineering",
    "capital_tier": "tier_1_funded",
    "summary": "Zero-equity incubation and PoC program for international engineering teams providing grant funding, lab access, corporate backing, and Tokyo Startup Visa endorsement.",
    "dependents_allowed": true,
    "min_experience_years": 2,
    "proof_of_funds": {
      "amount_usd": 0,
      "original_currency": "JPY",
      "original_amount": 0,
      "mechanism": "sponsor_guarantee"
    },
    "provenance": {
      "primary_source_url": "https://www.metro.tokyo.lg.jp/english/",
      "publishing_authority": "Tokyo Metropolitan Government",
      "last_audited_utc": "2026-10-28T09:00:00Z",
      "confidence_score": "verified_primary"
    }
  },
  {
    "pathway_id": "prt_work_d3_highly_qualified_2026",
    "country_code": "PRT",
    "country_name": "Portugal",
    "route_type": "work",
    "title": "Portugal D3 Highly Qualified Activity Residence Visa",
    "asymmetry_category": "tech_engineering",
    "capital_tier": "tier_2_moderate",
    "summary": "Fast-track work and residence permit for tech specialists, researchers, and executives with qualifying employment contracts, leading to PR/citizenship in 5 years.",
    "dependents_allowed": true,
    "min_experience_years": 3,
    "proof_of_funds": {
      "amount_usd": 2800,
      "original_currency": "EUR",
      "original_amount": 2580,
      "mechanism": "income_threshold"
    },
    "provenance": {
      "primary_source_url": "https://aima.gov.pt/pt",
      "publishing_authority": "Agência para a Integração, Migrações e Asilo (AIMA)",
      "last_audited_utc": "2026-10-28T09:00:00Z",
      "confidence_score": "verified_primary"
    }
  }
]
```

---

## 4. Implementation Roadmap & Timeline

```
+-----------------------------------------------------------------------------------+
| SPRINT 1: SCHEMA & ENGINE UPGRADES                                                |
| - Extend database schemas with asymmetry & capital tier metadata                  |
| - Add "High Asymmetry / Undersaturated Routes" toggle filter in Find MyPathway    |
+-----------------------------------------------------------------------------------+
                                       │
                                       ▼
+-----------------------------------------------------------------------------------+
| SPRINT 2: CONTENTING & PLAYBOOK PUBLISHING                                        |
| - Publish Australia DAMA Deep-Dive Guide                                          |
| - Publish Italy DSU Need-Blind Scholarship Playbook                              |
| - Publish Asian & Nordic Tech Accelerators Summary                                |
+-----------------------------------------------------------------------------------+
                                       │
                                       ▼
+-----------------------------------------------------------------------------------+
| SPRINT 3: UI TRUST & ZERO-MATCH GAP ENGINE INTEGRATION                            |
| - Render Tier 1 Funded badges on Pathway Cards                                    |
| - Integrate Near-Miss gap calculations in Calculator for high-capital applicants  |
+-----------------------------------------------------------------------------------+
                                       │
                                       ▼
+-----------------------------------------------------------------------------------+
| SPRINT 4: PROGRAMMATIC SEO & DISCOVERY ROLLOUT                                    |
| - Deploy pSEO routes: /pathways/asymmetry/funded-study/                           |
| - Deploy pSEO routes: /pathways/asymmetry/regional-skilled/                       |
+-----------------------------------------------------------------------------------+
```

### Detailed Milestones

| Sprint | Timeline | Deliverables | Target KPI |
|---|---|---|---|
| **Sprint 1** | Weeks 1–2 | Database schema migration; API update for `asymmetry_category` filtering; front-end filter toggles. | 100% API compatibility across desktop and mobile views. |
| **Sprint 2** | Weeks 3–4 | Research and publish 4 new deep-dive playbooks (Australia DAMA, Tokyo Hardware, Italy DSU, Portugal D3). | Cover 4 previously missing high-asymmetry pathway classes. |
| **Sprint 3** | Weeks 5–6 | Deploy "Near-Miss" gap analysis calculations; surface `Tier 1 Funded` trust badges in results stream. | Zero dead-end results on low-budget user queries. |
| **Sprint 4** | Weeks 7–8 | Launch programmatic SEO landing templates for niche categories; enable `localStorage` caching for offline mobile use. | +40% increase in organic search traffic from West and East African tech/student hubs. |
```

---

### Key Summary of the Framework
1. **The 4-Filter System:** Ensures every pathway is strictly evaluated for Proof-of-Funds realism, quota asymmetry, PR conversion velocity, and primary-source provenance.
2. **Database Integration:** Ingests research entries directly into `Find MyPathway` with dynamic tags (`tier_1_funded`, `regional_skilled_gap`, `tech_engineering`).
3. **Actionable Roadmap:** Executes backend schema updates, UI badge integrations, content playbooks, and programmatic SEO over an 8-week schedule.