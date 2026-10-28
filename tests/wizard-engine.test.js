/**
 * Wizard Engine — pure logic tests
 *
 * The wizard-engine.js is a DOM-dependent IIFE that exits early when
 * document.body.dataset.pageType !== 'visa-wizard'. These tests cover
 * the pure mappings and logic extracted from that module.
 */

// ── Constants mirrored from wizard-engine.js ──────────────────────────────
const BUDGET_MAP = { '4999': 4999, '15000': 15000, '30000': 30000, '50000': 50000 };
const PURPOSE_GOAL_MAP = { study: 'study', work: 'work', nomad: 'work', any: 'any' };
const NOMAD_TAG = 'nomad';
const EXTENSION_TAGS = {
  student:   'post-study',
  tourist:   'tourist-switch',
  work:      'pr-route',
  residence: 'pr-route',
};
const RESEARCH_BLOCKERS = {
  RU: 'Evidence gaps exist for this destination for African passport holders — SWIFT banking restrictions and reduced embassy capacity create unresolvable verification issues as of 2026.',
  US: 'USA pathways are in active research. Financial requirements and process documentation are not yet fully verified. Official sources are linked below.',
};

// ── Profile assembly (mirrors wizard runEngine logic) ─────────────────────
function assembleProfile(answers) {
  const budget = BUDGET_MAP[answers.budgetRange] || 0;
  const goal   = PURPOSE_GOAL_MAP[answers.purpose] || 'any';
  return { goal: answers.purpose === 'nomad' ? 'work' : goal, budget, familySize: 1 };
}

// ── Nomad pathway filter (mirrors wizard primaryPathways logic) ───────────
function filterNomadPathways(pathways, purpose) {
  if (purpose !== 'nomad') return pathways;
  const tagged = pathways.filter(p => Array.isArray(p.wizardTags) && p.wizardTags.includes(NOMAD_TAG));
  return tagged.length ? tagged : pathways.filter(p => p.type === 'work');
}

// ── Extension pathway filter ──────────────────────────────────────────────
function filterExtensionPathways(pathways, currentVisa, destinationCountry) {
  const tag = EXTENSION_TAGS[currentVisa];
  if (!tag) return [];
  return pathways.filter(p =>
    Array.isArray(p.wizardTags) && p.wizardTags.includes(tag) &&
    p.status === 'publishable' &&
    (!destinationCountry || destinationCountry === 'any' || p.countryId === destinationCountry)
  );
}

// ─────────────────────────────────────────────────────────────────────────────

describe('wizard engine — budget mapping', () => {
  test('maps all four budget range strings to correct numbers', () => {
    expect(BUDGET_MAP['4999']).toBe(4999);
    expect(BUDGET_MAP['15000']).toBe(15000);
    expect(BUDGET_MAP['30000']).toBe(30000);
    expect(BUDGET_MAP['50000']).toBe(50000);
  });

  test('unknown budget range falls back to 0 in profile assembly', () => {
    const profile = assembleProfile({ purpose: 'study', budgetRange: 'unknown' });
    expect(profile.budget).toBe(0);
  });

  test('empty budget range falls back to 0', () => {
    const profile = assembleProfile({ purpose: 'work', budgetRange: '' });
    expect(profile.budget).toBe(0);
  });
});

describe('wizard engine — purpose to goal mapping', () => {
  test('study maps to study goal', () => {
    expect(PURPOSE_GOAL_MAP['study']).toBe('study');
  });

  test('work maps to work goal', () => {
    expect(PURPOSE_GOAL_MAP['work']).toBe('work');
  });

  test('nomad maps to work goal (nomad uses work pathways)', () => {
    expect(PURPOSE_GOAL_MAP['nomad']).toBe('work');
  });

  test('any maps to any goal', () => {
    expect(PURPOSE_GOAL_MAP['any']).toBe('any');
  });

  test('unknown purpose falls back to any in profile assembly', () => {
    const profile = assembleProfile({ purpose: 'holiday', budgetRange: '15000' });
    expect(profile.goal).toBe('any');
  });
});

describe('wizard engine — profile assembly', () => {
  test('nomad purpose forces goal to work regardless of PURPOSE_GOAL_MAP', () => {
    const profile = assembleProfile({ purpose: 'nomad', budgetRange: '30000' });
    expect(profile.goal).toBe('work');
    expect(profile.budget).toBe(30000);
    expect(profile.familySize).toBe(1);
  });

  test('study profile assembles correctly', () => {
    const profile = assembleProfile({ purpose: 'study', budgetRange: '15000' });
    expect(profile.goal).toBe('study');
    expect(profile.budget).toBe(15000);
  });

  test('work profile assembles correctly', () => {
    const profile = assembleProfile({ purpose: 'work', budgetRange: '50000' });
    expect(profile.goal).toBe('work');
    expect(profile.budget).toBe(50000);
  });

  test('familySize is always 1 (wizard does not collect family size)', () => {
    const profile = assembleProfile({ purpose: 'study', budgetRange: '4999' });
    expect(profile.familySize).toBe(1);
  });
});

describe('wizard engine — nomad pathway filtering', () => {
  const pathways = [
    { id: 'PT-nomad', type: 'work', status: 'publishable', wizardTags: ['nomad'] },
    { id: 'ES-nomad', type: 'work', status: 'publishable', wizardTags: ['nomad', 'post-study'] },
    { id: 'DE-study', type: 'study', status: 'publishable', wizardTags: [] },
    { id: 'CA-work',  type: 'work',  status: 'publishable', wizardTags: ['pr-route'] },
  ];

  test('nomad purpose returns only pathways tagged nomad', () => {
    const result = filterNomadPathways(pathways, 'nomad');
    expect(result.map(p => p.id)).toEqual(['PT-nomad', 'ES-nomad']);
  });

  test('non-nomad purpose returns all pathways unfiltered', () => {
    const result = filterNomadPathways(pathways, 'work');
    expect(result).toHaveLength(4);
  });

  test('nomad purpose falls back to work-type pathways when no nomad tags exist', () => {
    const noTagged = [
      { id: 'DE-work', type: 'work', status: 'publishable', wizardTags: [] },
      { id: 'DE-study', type: 'study', status: 'publishable', wizardTags: [] },
    ];
    const result = filterNomadPathways(noTagged, 'nomad');
    expect(result.map(p => p.id)).toEqual(['DE-work']);
  });

  test('nomad filter does not return study-type pathways', () => {
    const result = filterNomadPathways(pathways, 'nomad');
    expect(result.every(p => p.type !== 'study')).toBe(true);
  });
});

describe('wizard engine — extension pathway filtering', () => {
  const pathways = [
    { id: 'DE-opp',  type: 'work', status: 'publishable', countryId: 'DE', wizardTags: ['post-study'] },
    { id: 'CA-pr',   type: 'work', status: 'publishable', countryId: 'CA', wizardTags: ['pr-route'] },
    { id: 'GB-pr',   type: 'work', status: 'publishable', countryId: 'GB', wizardTags: ['pr-route'] },
    { id: 'PT-sw',   type: 'work', status: 'publishable', countryId: 'PT', wizardTags: ['tourist-switch'] },
    { id: 'DE-res',  type: 'work', status: 'research_required', countryId: 'DE', wizardTags: ['post-study'] },
  ];

  test('student visa returns post-study tagged publishable pathways', () => {
    const result = filterExtensionPathways(pathways, 'student', 'any');
    expect(result.map(p => p.id)).toEqual(['DE-opp']);
  });

  test('work visa returns pr-route tagged publishable pathways', () => {
    const result = filterExtensionPathways(pathways, 'work', 'any');
    expect(result.map(p => p.id)).toContain('CA-pr');
    expect(result.map(p => p.id)).toContain('GB-pr');
  });

  test('tourist visa returns tourist-switch tagged pathways', () => {
    const result = filterExtensionPathways(pathways, 'tourist', 'any');
    expect(result.map(p => p.id)).toEqual(['PT-sw']);
  });

  test('residence visa returns pr-route tagged pathways', () => {
    const result = filterExtensionPathways(pathways, 'residence', 'any');
    expect(result.map(p => p.id)).toContain('CA-pr');
  });

  test('no current visa (none) returns empty array', () => {
    const result = filterExtensionPathways(pathways, 'none', 'any');
    expect(result).toHaveLength(0);
  });

  test('unknown visa type returns empty array', () => {
    const result = filterExtensionPathways(pathways, 'diplomatic', 'any');
    expect(result).toHaveLength(0);
  });

  test('research_required pathways are excluded from extension results', () => {
    const result = filterExtensionPathways(pathways, 'student', 'any');
    expect(result.every(p => p.status === 'publishable')).toBe(true);
  });

  test('destination filter scopes extension results to selected country', () => {
    const result = filterExtensionPathways(pathways, 'work', 'CA');
    expect(result.map(p => p.id)).toEqual(['CA-pr']);
  });

  test('destination any returns all matching extension pathways', () => {
    const result = filterExtensionPathways(pathways, 'work', 'any');
    expect(result).toHaveLength(2);
  });
});

describe('wizard engine — research blockers', () => {
  test('RU has a research blocker', () => {
    expect(RESEARCH_BLOCKERS['RU']).toBeDefined();
    expect(RESEARCH_BLOCKERS['RU']).toMatch(/SWIFT/);
  });

  test('US has a research blocker', () => {
    expect(RESEARCH_BLOCKERS['US']).toBeDefined();
    expect(RESEARCH_BLOCKERS['US']).toMatch(/active research/);
  });

  test('DE has no research blocker (publishable pathways exist)', () => {
    expect(RESEARCH_BLOCKERS['DE']).toBeUndefined();
  });

  test('CA has no research blocker', () => {
    expect(RESEARCH_BLOCKERS['CA']).toBeUndefined();
  });
});

describe('wizard engine — extension tag map completeness', () => {
  test('all four visa types have extension tags defined', () => {
    expect(EXTENSION_TAGS.student).toBe('post-study');
    expect(EXTENSION_TAGS.tourist).toBe('tourist-switch');
    expect(EXTENSION_TAGS.work).toBe('pr-route');
    expect(EXTENSION_TAGS.residence).toBe('pr-route');
  });

  test('none and other visa types have no extension tag', () => {
    expect(EXTENSION_TAGS['none']).toBeUndefined();
    expect(EXTENSION_TAGS['other']).toBeUndefined();
  });
});
