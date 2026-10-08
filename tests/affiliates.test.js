const Affiliates = require('../src/js/affiliates');

describe('affiliate foundation', () => {
  test('starts with an empty verified partner registry', () => {
    expect(Affiliates.PARTNERS).toEqual({});
    expect(Affiliates.getPartner('unverified')).toBeNull();
  });

  test('creates deterministic tracked paths without personal data', () => {
    expect(Affiliates.buildTrackedPath({
      partnerId: 'education-example',
      placementId: 'partner_education',
      pageType: 'pathway',
      countryId: 'DE',
      pathwayId: 'DE-study',
      source: 'organic'
    })).toBe('/go/partner?partner=education-example&placement=partner_education&page=pathway&country=DE&pathway=DE-study&source=organic');
  });

  test('requires stable attribution identifiers', () => {
    expect(Affiliates.buildTrackedPath({ partnerId: 'x' })).toBeNull();
    expect(Affiliates.buildTrackedPath({ placementId: 'partner_education' })).toBeNull();
  });
});
