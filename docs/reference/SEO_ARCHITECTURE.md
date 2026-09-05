# SEO Architecture

## Canonical entity model
`Country → Pathway → Evidence → Eligibility → Cost → Timeline → Risks → Next action`.

Country and pathway pages should be generated from structured data, not duplicated editorial HTML.

## Indexing rules
- Index only stable, useful country/pathway pages with unique content.
- Do not index internal data endpoints or thin research placeholders.
- Every indexable page needs one canonical URL, unique title and description, meaningful H1, internal links and source context.
- Add BreadcrumbList/Article/FAQ structured data only when the visible page actually contains the corresponding content.
- Sitemap contains canonical URLs only.
- `robots.txt` blocks the raw data directory.

## Trust-aware SEO
Search snippets must not claim “approval rate”, “guaranteed visa”, “true cost” or similar unless the rendered page has current evidence for that claim.

## Programmatic expansion
Do not generate 26 × many pages from placeholders. Promote a country/pathway only after its evidence coverage passes the data gate. This prevents thin programmatic SEO from multiplying unsupported migration claims.
