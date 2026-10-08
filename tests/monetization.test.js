const Monetization = require('../src/js/monetization');

describe('monetization configuration', () => {
  test('keeps ad inventory configuration-driven', () => {
    expect(Monetization.getAdSlot('ad_article_top')).toEqual(expect.objectContaining({
      pageTypes: ['blog', 'guide']
    }));
  });

  test('requires consent and excludes recommendation workflows from display ads', () => {
    expect(Monetization.canRenderAd('ad_article_top', 'blog', false)).toBe(false);
    expect(Monetization.canRenderAd('ad_article_top', 'blog', true)).toBe(true);
    expect(Monetization.canRenderAd('ad_article_top', 'find-my-route', true)).toBe(false);
    expect(Monetization.canRenderAd('ad_calculator_result', 'calculator', true)).toBe(true);
  });

  test('supports contextual partner slots without payout-based ranking', () => {
    expect(Monetization.canRenderPartner('partner_education', 'pathway')).toBe(true);
    expect(Monetization.canRenderPartner('partner_education', 'search')).toBe(false);
    expect(Monetization.getPartnerSlot('partner_education').categories).toContain('education');
  });

  test('rejects unknown inventory', () => {
    expect(Monetization.getAdSlot('unknown')).toBeNull();
    expect(Monetization.getPartnerSlot('unknown')).toBeNull();
  });
});

  test('uses explicit page-type contracts', () => {
    expect(Monetization.canRenderAd('ad_article_top', 'blog', true)).toBe(true);
    expect(Monetization.canRenderAd('ad_article_top', 'country', true)).toBe(false);
    expect(Monetization.canRenderAd('ad_country_mid', 'country', true)).toBe(true);
    expect(Monetization.canRenderAd('ad_homepage_secondary', 'home', true)).toBe(true);
  });
