const countries = require('../src/data/countries.json');
const pathways = require('../src/data/pathways.json');

describe('migration data contract', () => {
  test('contains the complete 30-country registry', () => {
    expect(countries.countries).toHaveLength(30);
    expect(new Set(countries.countries.map(c => c.id)).size).toBe(30);
  });

  test('does not publish unsupported approval, cost or timeline claims', () => {
    for (const country of countries.countries) {
      expect(country.officialRate).toBeNull();
      expect(country.africanRate).toBeNull();
      expect(country.trueCost).toBeNull();
      expect(country.timeline).toBeNull();
      expect(country.source.url).toMatch(/^https:\/\//);
    }
  });



  test('Canada study living-funds requirements preserve family-size and regional scope', () => {
    const canadaStudy = pathways.pathways.find(pathway => pathway.id === 'CA-study');
    const thresholds = canadaStudy.requirements.filter(requirement => requirement.id.startsWith('CA-study-minimum-living-funds-family-'));
    expect(thresholds.map(requirement => requirement.value)).toEqual([23448, 29192, 35888, 43572, 49419, 55736, 62054]);
    expect(thresholds.map(requirement => requirement.conditions.familySize)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    for (const requirement of thresholds) {
      expect(requirement.conditions.applicationDateFrom).toBe('2026-09-01');
      expect(requirement.conditions.region).toMatch(/except Quebec/);
      expect(requirement.conditions.componentsIncluded).toContain('living expenses');
      expect(requirement.conditions.componentsExcluded).toEqual(expect.arrayContaining(['tuition fees', 'transportation']));
    }
    expect(thresholds.every(requirement => /Tuition and transportation are excluded/i.test(requirement.notes))).toBe(true);
  });

  test('promoted exact subroutes resolve to matching publishable canonical pathways', () => {
    const subroutes = require('../src/data/pathway-subroutes.json').subroutes;
    const canonicalById = new Map(pathways.pathways.map(pathway => [pathway.id, pathway]));
    const promoted = subroutes.filter(subroute => subroute.status === 'promoted');
    expect(promoted.length).toBeGreaterThan(0);
    for (const subroute of promoted) {
      const canonical = canonicalById.get(subroute.id);
      expect(canonical).toBeDefined();
      expect(canonical.status).toBe('publishable');
      expect(canonical.countryId).toBe(subroute.countryId);
      expect(canonical.type).toBe(subroute.type);
      expect(canonical.evidenceIds.length).toBeGreaterThan(0);
    }
  });

  test('research-required exact subroutes are not simultaneously publishable canonical routes', () => {
    const subroutes = require('../src/data/pathway-subroutes.json').subroutes;
    const canonicalById = new Map(pathways.pathways.map(pathway => [pathway.id, pathway]));
    for (const subroute of subroutes.filter(item => item.status === 'research_required')) {
      expect(canonicalById.get(subroute.id)?.status).not.toBe('publishable');
    }
  });

  test('every pathway maps to a known country and has provenance', () => {
    const ids = new Set(countries.countries.map(c => c.id));
    expect(pathways.pathways.length).toBeGreaterThanOrEqual(52);
    for (const pathway of pathways.pathways) {
      expect(ids.has(pathway.countryId)).toBe(true);
      expect(pathway.sourceAuthority).toBeTruthy();
      expect(pathway.sourceUrl).toMatch(/^https:\/\//);
    }
  });

  const ASYMMETRY_CATEGORIES = ['tech_engineering', 'academic_research', 'regional_skilled_gap', 'remote_freelance'];
  const CAPITAL_TIERS = ['tier_1_funded', 'tier_2_moderate', 'tier_3_standard'];

  test('asymmetry_category values are within the allowed enum when present', () => {
    for (const pathway of pathways.pathways) {
      if (pathway.asymmetry_category !== undefined) {
        expect(ASYMMETRY_CATEGORIES).toContain(pathway.asymmetry_category);
      }
    }
  });

  test('capital_tier values are within the allowed enum when present', () => {
    for (const pathway of pathways.pathways) {
      if (pathway.capital_tier !== undefined) {
        expect(CAPITAL_TIERS).toContain(pathway.capital_tier);
      }
    }
  });

  test('GOIF seed pathways are present with correct metadata', () => {
    const goifIds = ['AU-dama-regional', 'IT-dsu-need-blind', 'JP-tokyo-tech-accelerator', 'PT-d3-highly-qualified', 'MU-premium-visa', 'CV-remote-work-visa', 'NA-digital-nomad-visa'];
    for (const id of goifIds) {
      const p = pathways.pathways.find(pw => pw.id === id);
      expect(p).toBeDefined();
      expect(ASYMMETRY_CATEGORIES).toContain(p.asymmetry_category);
      expect(CAPITAL_TIERS).toContain(p.capital_tier);
    }
  });
});
