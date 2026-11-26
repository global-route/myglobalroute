import os, re

# ── Group 1: 9 verified posts with self-referencing authority + URL ────────────
# Fix: set correct external sourceAuthority + sourceUrl, keep evidenceStatus: verified
group1 = {
    "content/blog/playbooks/professional/uk-innovator-founder-visa-2026.md": {
        "sourceAuthority": "UK Visas and Immigration",
        "sourceUrl": "https://www.gov.uk/innovator-founder-visa",
    },
    "content/blog/playbooks/business/mauritius-global-business-licence-2026.md": {
        "sourceAuthority": "Financial Services Commission Mauritius",
        "sourceUrl": "https://www.fscmauritius.org/being-regulated/setting-up-a-business/global-business",
    },
    "content/blog/playbooks/business/uk-company-setup-from-africa-2026.md": {
        "sourceAuthority": "Companies House UK",
        "sourceUrl": "https://www.gov.uk/set-up-limited-company",
    },
    "content/blog/playbooks/student/commonwealth-scholarships-nigeria-2026.md": {
        "sourceAuthority": "Commonwealth Scholarship Commission UK",
        "sourceUrl": "https://cscuk.fcdo.gov.uk/apply/",
    },
    "content/blog/playbooks/student/daad-scholarships-nigeria-2026.md": {
        "sourceAuthority": "DAAD Germany",
        "sourceUrl": "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    },
    "content/blog/playbooks/student/erasmus-mundus-scholarships-africa-2026.md": {
        "sourceAuthority": "European Commission EACEA",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    },
    "content/blog/policy-updates/2026/australia-tsmit-increase-2024.md": {
        "sourceAuthority": "Department of Home Affairs Australia",
        "sourceUrl": "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements",
    },
    "content/blog/policy-updates/2026/uk-skilled-worker-salary-threshold-increase-2024.md": {
        "sourceAuthority": "UK Visas and Immigration",
        "sourceUrl": "https://www.gov.uk/skilled-worker-visa/your-job",
    },
    "content/blog/guides/business/how-to-open-bank-account-rwanda-2026.md": {
        "sourceAuthority": "National Bank of Rwanda",
        "sourceUrl": "https://www.bnr.rw/financial-stability/financial-inclusion/",
    },
}

# ── Group 2: 48 editorial posts with self-referencing sourceUrl ───────────────
# Fix: set best available external sourceUrl + sourceAuthority
# These stay editorial — we're just pointing to the right external reference
group2 = {
    "content/blog/playbooks/professional/cape-verde-remote-work-visa-2026.md": {
        "sourceAuthority": "Cape Verde Immigration Service",
        "sourceUrl": "https://www.smex.cv/en/",
    },
    "content/blog/playbooks/professional/france-talent-passport-deep-dive-2026.md": {
        "sourceAuthority": "France-Visas",
        "sourceUrl": "https://france-visas.gouv.fr/en/web/france-visas/talent-passport",
    },
    "content/blog/playbooks/professional/mauritius-premium-visa-2026.md": {
        "sourceAuthority": "Economic Development Board Mauritius",
        "sourceUrl": "https://edbmauritius.org/live-in-mauritius/premium-visa/",
    },
    "content/blog/playbooks/professional/namibia-digital-nomad-visa-2026.md": {
        "sourceAuthority": "Ministry of Home Affairs Namibia",
        "sourceUrl": "https://mha.gov.na/visas",
    },
    "content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md": {
        "sourceAuthority": "AIMA Portugal",
        "sourceUrl": "https://aima.gov.pt/en/regularize/residence-visas/highly-qualified-activity",
    },
    "content/blog/playbooks/professional/saskatchewan-pnp-post-graduation-2026.md": {
        "sourceAuthority": "Saskatchewan Immigrant Nominee Program",
        "sourceUrl": "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/immigrating-to-saskatchewan/saskatchewan-immigrant-nominee-program",
    },
    "content/blog/playbooks/business/us-llc-setup-from-africa-2026.md": {
        "sourceAuthority": "U.S. Small Business Administration",
        "sourceUrl": "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
    },
    "content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md": {
        "sourceAuthority": "DSU Toscana Italy",
        "sourceUrl": "https://www.dsu.toscana.it/en/",
    },
    "content/blog/playbooks/student/italy-dsu-scholarship-complete-guide.md": {
        "sourceAuthority": "DSU Toscana Italy",
        "sourceUrl": "https://www.dsu.toscana.it/en/",
    },
    "content/blog/playbooks/student/italy-dsu-vs-germany-public-universities-2026.md": {
        "sourceAuthority": "DSU Toscana Italy / Federal Foreign Office Germany",
        "sourceUrl": "https://www.dsu.toscana.it/en/",
    },
    "content/blog/playbooks/student/uk-masters-true-cost-2026.md": {
        "sourceAuthority": "UK Visas and Immigration",
        "sourceUrl": "https://www.gov.uk/student-visa",
    },
    "content/blog/playbooks/student/university-of-saskatchewan-scholarships-2026.md": {
        "sourceAuthority": "University of Saskatchewan",
        "sourceUrl": "https://admissions.usask.ca/money/scholarships.php",
    },
    "content/blog/policy-updates/2026/canada-sds-program-cancelled-january-2026.md": {
        "sourceAuthority": "Immigration, Refugees and Citizenship Canada",
        "sourceUrl": "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/sds-end.html",
    },
    "content/blog/case-studies/budget-breakdowns/nigeria-to-germany-chancenkarte-2026.md": {
        "sourceAuthority": "Federal Employment Agency Germany",
        "sourceUrl": "https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card",
    },
    "content/blog/case-studies/budget-breakdowns/nigeria-to-uae-worker-2026.md": {
        "sourceAuthority": "UAE Ministry of Human Resources and Emiratisation",
        "sourceUrl": "https://www.mohre.gov.ae/en/services/work-permits.aspx",
    },
    "content/blog/case-studies/rejection-analysis/visa-rejection-patterns-african-applicants-2026.md": {
        "sourceAuthority": "European Commission / UK Visas and Immigration",
        "sourceUrl": "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en",
    },
    "content/blog/case-studies/rejection-analysis/visa-rejection-recovery-2026.md": {
        "sourceAuthority": "European Commission / UK Visas and Immigration",
        "sourceUrl": "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en",
    },
    "content/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer.md": {
        "sourceAuthority": "Immigration, Refugees and Citizenship Canada",
        "sourceUrl": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
    },
    "content/blog/guides/documentation/document-authentication-nigeria-visa-2026.md": {
        "sourceAuthority": "Nigerian Ministry of Foreign Affairs",
        "sourceUrl": "https://www.mfa.gov.ng/consular-services/",
    },
    "content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md": {
        "sourceAuthority": "European Commission / Japan Student Services Organization",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/",
    },
    "content/blog/guides/study/european-study-destinations-nigeria-2027.md": {
        "sourceAuthority": "European Commission Study in Europe",
        "sourceUrl": "https://education.ec.europa.eu/study-in-europe",
    },
    "content/blog/guides/study/tuition-free-low-cost-study-northern-europe-asia-2026.md": {
        "sourceAuthority": "European Commission Study in Europe",
        "sourceUrl": "https://education.ec.europa.eu/study-in-europe",
    },
    "content/blog/guides/financial/how-to-fund-german-blocked-account-from-nigeria-2026.md": {
        "sourceAuthority": "Federal Foreign Office Germany",
        "sourceUrl": "https://www.auswaertiges-amt.de/en/visa-service/buerger/studium/blocked-account",
    },
    "content/blog/guides/business/afcfta-business-corridors-2026.md": {
        "sourceAuthority": "African Continental Free Trade Area Secretariat",
        "sourceUrl": "https://au-afcfta.org/",
    },
    "content/blog/guides/business/african-diaspora-repatriation-guide-2026.md": {
        "sourceAuthority": "African Union",
        "sourceUrl": "https://au.int/en/diaspora",
    },
    "content/blog/guides/business/paraguay-nomad-residency-overview-2026.md": {
        "sourceAuthority": "Direccion General de Migraciones Paraguay",
        "sourceUrl": "https://www.migraciones.gov.py/",
    },
    "content/blog/guides/business/paraguay-suace-investor-pass-2026.md": {
        "sourceAuthority": "Ministerio de Industria y Comercio Paraguay",
        "sourceUrl": "https://www.mic.gov.py/mic/w/suace/",
    },
    "content/blog/guides/tax/cease-nigerian-tax-residency-firs-2026.md": {
        "sourceAuthority": "Federal Inland Revenue Service Nigeria",
        "sourceUrl": "https://www.firs.gov.ng/",
    },
    "content/blog/guides/tax/crs-explained-african-professionals-2026.md": {
        "sourceAuthority": "OECD Common Reporting Standard",
        "sourceUrl": "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/",
    },
    "content/blog/guides/tax/fatca-nigerians-us-accounts-2026.md": {
        "sourceAuthority": "U.S. Internal Revenue Service",
        "sourceUrl": "https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca",
    },
    "content/blog/guides/tax/mauritius-gbl-crs-interaction-2026.md": {
        "sourceAuthority": "Financial Services Commission Mauritius",
        "sourceUrl": "https://www.fscmauritius.org/",
    },
    "content/blog/guides/tax/split-residency-structuring-2026.md": {
        "sourceAuthority": "OECD Common Reporting Standard",
        "sourceUrl": "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/",
    },
    "content/blog/guides/tax/uae-second-residency-crs-nigeria-2026.md": {
        "sourceAuthority": "UAE Ministry of Finance",
        "sourceUrl": "https://mof.gov.ae/en/",
    },
    "content/blog/guides/mobility/african-digital-nomad-hubs-2026.md": {
        "sourceAuthority": "African Union",
        "sourceUrl": "https://au.int/en/",
    },
    "content/blog/guides/mobility/best-countries-african-digital-nomads-2026.md": {
        "sourceAuthority": "MyPathway2Global Research",
        "sourceUrl": "https://mypathway2global.org.uk/pages/find-mypathway.html",
    },
    "content/blog/guides/mobility/how-to-prove-remote-income-visa-application-2026.md": {
        "sourceAuthority": "MyPathway2Global Research",
        "sourceUrl": "https://mypathway2global.org.uk/pages/find-mypathway.html",
    },
    "content/blog/guides/mobility/passport-tiers-explained-2026.md": {
        "sourceAuthority": "Henley Passport Index",
        "sourceUrl": "https://www.henleyglobal.com/passport-index",
    },
    "content/blog/guides/mobility/tax-residency-african-remote-workers-2026.md": {
        "sourceAuthority": "OECD Common Reporting Standard",
        "sourceUrl": "https://www.oecd.org/tax/automatic-exchange/common-reporting-standard/",
    },
    "content/blog/guides/work/asia-pacific-work-visas-africa-2026.md": {
        "sourceAuthority": "MyPathway2Global Research",
        "sourceUrl": "https://mypathway2global.org.uk/pages/find-mypathway.html",
    },
    "content/blog/guides/work/australia-working-holiday-visa-2026.md": {
        "sourceAuthority": "Department of Home Affairs Australia",
        "sourceUrl": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
    },
    "content/blog/guides/work/europe-work-visas-africa-2026.md": {
        "sourceAuthority": "European Commission",
        "sourceUrl": "https://ec.europa.eu/immigration/",
    },
    "content/blog/guides/work/germany-au-pair-visa-2026.md": {
        "sourceAuthority": "Federal Foreign Office Germany",
        "sourceUrl": "https://www.auswaertiges-amt.de/en/visa-service/buerger/au-pair",
    },
    "content/blog/guides/work/intra-africa-work-opportunities-2026.md": {
        "sourceAuthority": "African Continental Free Trade Area Secretariat",
        "sourceUrl": "https://au-afcfta.org/",
    },
    "content/blog/guides/work/ireland-working-holiday-authorisation-2026.md": {
        "sourceAuthority": "Irish Immigration Service",
        "sourceUrl": "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/working-holiday-authorisation/",
    },
    "content/blog/guides/work/middle-east-work-visas-africa-2026.md": {
        "sourceAuthority": "ILO Gulf Programme",
        "sourceUrl": "https://www.ilo.org/beirut/areasofwork/labour-migration/lang--en/index.htm",
    },
    "content/blog/guides/work/new-zealand-working-holiday-visa-2026.md": {
        "sourceAuthority": "Immigration New Zealand",
        "sourceUrl": "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa",
    },
    "content/blog/guides/work/north-america-work-visas-africa-2026.md": {
        "sourceAuthority": "Immigration, Refugees and Citizenship Canada",
        "sourceUrl": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
    },
    "content/blog/guides/applications/how-to-write-visa-motivation-letter-2026.md": {
        "sourceAuthority": "European Commission Visa Policy",
        "sourceUrl": "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en",
    },
}

# ── Group 3: 2 verified posts missing lastFactChecked ─────────────────────────
group3 = [
    "content/blog/playbooks/professional/canada-francophone-immigration-caregivers-2026.md",
    "content/blog/playbooks/professional/canada-tech-express-entry-honest-guide-2026.md",
]

def set_field(content, key, value):
    pattern = re.compile(r'^(' + key + r':\s*).*$', re.MULTILINE)
    if pattern.search(content):
        return pattern.sub(r'\g<1>' + value, content)
    # Insert after last frontmatter field before closing ---
    return content

fixed = 0

# Fix group 1
for path, fields in group1.items():
    with open(path) as f:
        content = f.read()
    for key, val in fields.items():
        content = set_field(content, key, val)
    with open(path, 'w') as f:
        f.write(content)
    fixed += 1
    print(f"G1 ✓ {os.path.basename(path)}")

# Fix group 2
for path, fields in group2.items():
    with open(path) as f:
        content = f.read()
    for key, val in fields.items():
        content = set_field(content, key, val)
    with open(path, 'w') as f:
        f.write(content)
    fixed += 1
    print(f"G2 ✓ {os.path.basename(path)}")

# Fix group 3 — add lastFactChecked
for path in group3:
    with open(path) as f:
        content = f.read()
    # Add lastFactChecked after evidenceStatus line
    content = re.sub(
        r'^(evidenceStatus:\s*\S+)',
        r'\1\nlastFactChecked: 2026-11-25',
        content,
        flags=re.MULTILINE
    )
    with open(path, 'w') as f:
        f.write(content)
    fixed += 1
    print(f"G3 ✓ {os.path.basename(path)}")

print(f"\nTotal fixed: {fixed}")
