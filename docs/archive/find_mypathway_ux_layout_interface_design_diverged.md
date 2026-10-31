# Find MyPathway — Interface & Layout Specifications

## Overview
This document outlines the visual wireframe layout blueprint, zero-match gap analysis interactions, trust badge status indicators, and accessibility specifications for the `Find MyPathway` interface on **MyPathway2Global**.

---

## Wireframe & Layout Blueprint

```
+-----------------------------------------------------------------------------------+
|  HEADER: Global Navigation (Logo, Countries, Wizard, Calculator, Blog, About)    |
+-----------------------------------------------------------------------------------+
|  HERO BANNER                                                                     |
|  "Filter 55+ Evidence-Gated Pathways by Goal, Budget & Family Size"               |
|  [ Micro-badge: 100% Sourced from Official Government Portals ]                   |
+-----------------------------------------------------------------------------------+
|  MAIN LAYOUT: 2-Column Responsive Split                                           |
|                                                                                   |
|  +-------------------------------------+  +------------------------------------+  |
|  | LEFT COLUMN: Filter Sidebar (35%)   |  | RIGHT COLUMN: Results Stream (65%) |  |
|  |                                     |  |                                    |  |
|  |  1. Goal Selection                  |  |  Top Status Bar:                   |  |
|  |     ( ) Study  (*) Work  ( ) Nomad  |  |  Showing 14 verified pathways      |  |
|  |                                     |  |  [Sort by: Cost (Low-High) v]      |  |
|  |  2. Maximum Budget Slider           |  |------------------------------------|  |
|  |     [$0 --------|------------- $25k]|  |  PATHWAY CARD 1                    |  |
|  |     Current: $12,500                |  |  [DEU] Germany · Skilled Work      |  |
|  |                                     |  |  Opportunity Card (Chancenkarte)   |  |
|  |  3. Family & Dependents             |  |  Funds: $11,200 | Experience: 2+ yrs|  |
|  |     [x] Include Dependents          |  |  🟢 Verified Primary (Audited Sep '26) |  |
|  |                                     |  |  [ View Provenance ↗ ] [ Details ] |  |
|  |  4. Target Region                   |  |------------------------------------|  |
|  |     [x] Europe  [ ] North America   |  |  PATHWAY CARD 2                    |  |
|  |                                     |  |  ...                               |  |
|  |  [ Reset Filters ]                  |  |                                    |  |
|  +-------------------------------------+  +------------------------------------+  |
+-----------------------------------------------------------------------------------+
|  FOOTER: Disclaimers & Legal Disclosures                                          |
+-----------------------------------------------------------------------------------+
```

---

## Zero-Match Gap Analysis Interactions

When filter combinations return zero exact matches (e.g., maximum budget slider set below minimum visa threshold), the system replaces the empty state with a proactive **Near-Miss / Gap Analysis Engine**:

1. **Header Display:**  
   `"No exact matches under your current budget ($3,000)."`
2. **Proximity Calculation Display:**
   * **Closest Matched Route:** Italy DSU Student Route
   * **Minimum Threshold:** $5,200
   * **Calculated Gap:** $2,200
3. **Actionable Timeline Feedback:**  
   > *"You are **$2,200 short** of the nearest verified pathway. Based on your current monthly savings rate ($400/mo), you will reach this funding threshold in **5.5 months**."*
4. **Primary Recovery Actions:**
   * `[ Expand Budget Radius ]`
   * `[ View Low-Upfront / Scholarship Pathways ]`
   * `[ Recalculate Timeline in Budget Calculator ]`

---

## Trust Badge Classifications

Every single pathway result card MUST display one of three evidence indicators in its visual header:

| Status Badge | CSS Indicator | Display Text & Behavior |
|---|---|---|
| **Primary Verified** | `.badge-verified` (Green) | `🟢 Official Primary Source Verified` — Sourced directly from current official government portal guidelines with working provenance link. |
| **Partially Verified** | `.badge-warning` (Yellow) | `🟡 Partially Verified` — Core requirements established, but local embassy processing fees or regional financial thresholds are fluctuating. |
| **Research Required** | `.badge-blocked` (Red/Dark) | `⛔ Policy Review in Progress` — Policy undergoing legislative changes in destination country; hidden from default search recommendations. |

---

## Accessibility & Mobile Performance Specifications (ARIA)

1. **Responsive Accordion Toggle:** On viewport widths `< 768px`, the left filter sidebar automatically collapses into a sticky top modal trigger button (`[ Filter Pathways (3 Active) ]`).
2. **Dynamic Live Regions:** The pathway result stream uses `aria-live="polite"` to dynamically inform screen readers when filter criteria update without re-focusing (e.g., *"Filter updated. 14 verified pathways found."*).
3. **Touch Target Sizing:** All radio buttons, checkboxes, slider handles, and provenance links adhere to a minimum interactive target size of `48px x 48px`.
4. **Offline Local Storage Sync:** Filter inputs bind to `window.localStorage` on every change event. In the event of network dropouts across high-latency mobile networks, user inputs are retained and re-hydrated seamlessly upon page refresh.