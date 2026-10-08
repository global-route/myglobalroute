const Commercial = require('../src/js/commercial');

describe('commercial presentation boundary', () => {
  test('exports disclosure and tracked-link component factories', () => {
    expect(typeof Commercial.createDisclosure).toBe('function');
    expect(typeof Commercial.createPartnerLink).toBe('function');
  });

  test('does not manufacture a partner link without the verified affiliate runtime', () => {
    expect(Commercial.createPartnerLink({
      partnerId: 'x',
      placementId: 'partner_education',
      label: 'Continue',
      pageType: 'pathway'
    })).toBeNull();
  });
});
