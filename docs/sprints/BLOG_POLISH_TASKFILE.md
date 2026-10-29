# Blog Polish Taskfile
**Created:** 2026-10-29
**Purpose:** Track YouTube embed and FAQ gaps across all 54 blog posts

---

## Status

| Task | Posts | Status |
|---|---|---|
| Add FAQs to 21 older posts | 21 | ✅ Done |
| Add YouTube placeholder to 24 new posts | 24 | ✅ Done — placeholder comment inserted |
| Owner: replace placeholders with real YouTube video IDs | 24 | ⏸ Owner action |

---

## Owner action — YouTube video IDs needed

The 24 posts below have a `<!-- YOUTUBE_PLACEHOLDER -->` comment in the body where a YouTube embed should go. Replace each placeholder with a real embed using this format:

```html
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen loading="lazy" title="DESCRIPTIVE TITLE"></iframe>
</div>
```

After adding all video IDs, run:
```bash
npm run build && npx wrangler deploy
```

### Posts needing YouTube video IDs

**Country Audits (12):**
- `content/blog/country-audits/china/china-visa-from-nigeria-2026.md`
- `content/blog/country-audits/czechia/czechia-visa-from-nigeria-2026.md`
- `content/blog/country-audits/finland/finland-visa-from-nigeria-2026.md`
- `content/blog/country-audits/hungary/hungary-visa-from-nigeria-2026.md`
- `content/blog/country-audits/iceland/iceland-visa-from-nigeria-2026.md`
- `content/blog/country-audits/lithuania/lithuania-visa-from-nigeria-2026.md`
- `content/blog/country-audits/luxembourg/luxembourg-visa-from-nigeria-2026.md`
- `content/blog/country-audits/malta/malta-visa-from-nigeria-2026.md`
- `content/blog/country-audits/norway/norway-visa-from-nigeria-2026.md`
- `content/blog/country-audits/poland/poland-visa-from-nigeria-2026.md`
- `content/blog/country-audits/sweden/sweden-visa-from-nigeria-2026.md`
- `content/blog/country-audits/switzerland/switzerland-visa-from-nigeria-2026.md`

**Professional Playbooks (5):**
- `content/blog/playbooks/professional/australia-dama-regional-stream-2026.md`
- `content/blog/playbooks/professional/cape-verde-remote-work-visa-2026.md`
- `content/blog/playbooks/professional/mauritius-premium-visa-2026.md`
- `content/blog/playbooks/professional/namibia-digital-nomad-visa-2026.md`
- `content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md`

**Student Playbooks (2):**
- `content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md`
- `content/blog/playbooks/student/university-of-saskatchewan-scholarships-2026.md`

**Guides (5):**
- `content/blog/guides/business/afcfta-business-corridors-2026.md`
- `content/blog/guides/business/african-diaspora-repatriation-guide-2026.md`
- `content/blog/guides/business/paraguay-nomad-residency-overview-2026.md`
- `content/blog/guides/mobility/african-digital-nomad-hubs-2026.md`
- `content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md`
