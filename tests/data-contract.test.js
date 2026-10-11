const countries = require('../src/data/countries.json');
const pathways = require('../src/data/pathways.json');

describe('migration data contract', () => {
  test('contains the complete 26-country registry', () => {
    expect(countries.countries).toHaveLength(26);
    expect(new Set(countries.countries.map(c => c.id)).size).toBe(26);
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
});
