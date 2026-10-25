# Blog Post Blueprint

s the **Purpose:** Define the editorial standard for MyPathway2Global blog posts — productive, tool-enriched, evidence-gated content.

---

## Design Philosophy

**Classic editorial.** Single column. Generous typography. No sidebars, no widgets, no clutter.

Think newspaper feature article, not SaaS landing page.

---

## Post Structure

```
HEADER
  Category / Date / Read time
  Title (H1)
  Lead paragraph

BODY
  Quick Summary (bullet list)
  Section (H2) + content
  Section (H2) + content
  ...
  FAQ (H2)
  Official Sources (H2)

FOOTER
  Last updated
  Feedback link
  Share links
```

---

## Typography Rules

| Element | Style |
|---------|-------|
| H1 | Titillium Web 700, 2.25rem, #10316b |
| H2 | Titillium Web 600, 1.5rem, #10316b, amber underline |
| H3 | Titillium Web 600, 1.2rem, #1e3a5f |
| Body | Roboto 300, 1.05rem, #1f2937, line-height 1.8 |
| Lead | Roboto 300, 1.2rem, #4b5563 |
| Meta | Roboto 400, 0.8rem, #6b7280, uppercase |

---

## Content Rules

### Quick Summary
Every post starts with 5-7 bullets summarizing the entire article. Reader gets value in 15 seconds.

```markdown
## Quick Summary

- **Zero tuition** at public universities
- **Blocked account:** €11,208 required
- **Processing time:** 8-14 weeks
- **Post-study:** 18-month job search visa

**Bottom line:** Germany is the best budget pathway if you have €11K upfront.
```

### Tables
Use for any data with 3+ comparable items. Always include source.

```markdown
| Provider | Setup fee | Monthly fee | Source |
|----------|-----------|-------------|--------|
| Fintiba | €89 | €5.90 | [fintiba.com](https://fintiba.com) |
| Expatrio | €49 | €4.99 | [expatrio.com](https://expatrio.com) |
```

### Official Source Links
Inline where the claim is made, not just at the end.

```markdown
The blocked account requires **€11,208** ([DAAD source](https://www.daad.de/)).
```

### Step-by-Step
Numbered lists with action verbs.

```markdown
### How to apply

1. Register at [fintiba.com](https://fintiba.com)
2. Upload passport scan
3. Transfer €11,208 via Wise
4. Download confirmation certificate
```

### FAQ
Direct answers. No padding.

```markdown
## FAQ

**Can my parents fund the account?**
Yes. The funds can come from any source.

**What if my visa is refused?**
Fintiba refunds the deposit minus fees.
```

---

## Post Types

### Country Audit
Complete visa guide for a specific country.

**Sections:** Quick Summary, The Reality, Cost Breakdown, Step-by-Step, Rejection Reasons, FAQ, Sources

**Length:** 2,000-4,000 words

### Playbook
Tactical guide for a specific pathway.

**Sections:** Quick Summary, Who Qualifies, What You Get, How to Apply, Pros/Cons, FAQ, Sources

**Length:** 1,500-3,000 words

### Guide
How-to for a specific task.

**Sections:** What this covers, Step-by-step, Common mistakes, FAQ, Sources

**Length:** 800-1,500 words

### Case Study
Real story with verifiable details.

**Sections:** Profile box, The journey, Cost breakdown, Lessons, Advice

**Length:** 1,000-2,000 words

### Policy Update
Breaking news on visa changes.

**Sections:** What changed, Who's affected, What to do, Source

**Length:** 300-800 words

---

## What NOT to Include

- Generic motivational intros ("Are you dreaming of...")
- Repetitive conclusions ("We hope this helped...")
- Unverified statistics without source
- Emoji in body text
- Filler paragraphs
- Sidebar widgets
- Author bio boxes
- Newsletter popups

---

## Frontmatter

```yaml
---
layout: blog-post.njk
title: "Germany Visa from Nigeria: The 2026 Reality Check"
date: 2026-01-15
updated: 2026-07-21
category: "Country Audits"
keywords: "Germany visa Nigeria, German student visa, blocked account"
readTime: "14 min"
excerpt: "Germany's zero-tuition universities and 18-month job search visa make it one of the strongest pathways — here's what the process actually requires."
---
```

---

## File Naming

```
/content/blog/
├── country-audits/
│   └── germany/
│       └── germany-visa-from-nigeria-2026.md
├── playbooks/
│   ├── student/
│   ├── professional/
│   └── business/
├── case-studies/
│   ├── success-stories/
│   └── rejection-analysis/
├── guides/
│   ├── applications/
│   ├── documentation/
│   └── financial/
└── policy-updates/
    └── 2026/
```

---

## Quality Checklist

Before publishing:

- [ ] Quick Summary present (5-7 bullets)
- [ ] Every major claim has inline source link
- [ ] Tables have source column or footnote
- [ ] Step-by-step uses numbered lists
- [ ] FAQ answers are direct
- [ ] No generic intro/conclusion
- [ ] Update date is current
- [ ] All links working

---

*Blueprint v2.0 — October 2026*
