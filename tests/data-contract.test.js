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
