const Analytics = require('../src/js/analytics');

describe('privacy-aware analytics contract', () => {
  beforeEach(() => {
    Analytics.setProvider(null);
    Analytics.setConsent('unknown');
  });

  test('defines the revenue and product-intent event taxonomy centrally', () => {
    expect(Analytics.EVENTS).toEqual(expect.arrayContaining([
      'route_search_started',
      'route_recommendation_generated',
      'calculator_started',
      'calculator_completed',
      'official_source_clicked',
      'partner_clicked',
      'subscription_started',
      'subscription_cancelled'
    ]));
  });

  test('blocks events until consent is explicitly granted', () => {
    const emit = jest.fn();
    Analytics.setProvider({ emit });
    expect(Analytics.track('calculator_started', { page_type: 'calculator' }).reason).toBe('consent_required');
    expect(emit).not.toHaveBeenCalled();

    Analytics.setConsent('granted');
    expect(Analytics.track('calculator_started', { page_type: 'calculator' }).accepted).toBe(true);
    expect(emit).toHaveBeenCalledWith('calculator_started', expect.objectContaining({
      page_type: 'calculator',
      consent_state: 'granted'
    }));
  });

  test('rejects sensitive or unapproved dimensions', () => {
    expect(Analytics.validateEvent('lead_started', {
      page_type: 'calculator',
      email: 'person@example.com'
    }).valid).toBe(false);

    expect(Analytics.validateEvent('lead_started', {
      page_type: 'calculator',
      passport_number: 'P123'
    }).valid).toBe(false);

    expect(Analytics.validateEvent('lead_started', {
      page_type: 'calculator',
      unknown_dimension: 'value'
    }).valid).toBe(false);
  });

  test('accepts deterministic route and placement identifiers', () => {
    const result = Analytics.validateEvent('partner_clicked', {
      page_type: 'pathway',
      country_id: 'DE',
      pathway_id: 'DE-study',
      placement_id: 'partner_route_next_step',
      partner_id: 'partner-example',
      revenue_source_id: 'affiliate-example'
    });
    expect(result.valid).toBe(true);
    expect(result.payload.pathway_id).toBe('DE-study');
  });

  test('rejects unknown events', () => {
    expect(Analytics.track('user_profile_exported', {}).reason).toBe('unknown_event');
  });
});
