/* Work Abroad Agent Engine — occupation-driven work routing wizard */
(function () {
  'use strict';

  if (document.body?.dataset?.pageType !== 'work-abroad-agent') return;

  // ── Occupation options by skill level ──────────────────────────────────────
  const OCCUPATION_OPTIONS = {
    skilled: [
      { value: 'software_it',  label: 'Software / IT' },
      { value: 'engineering',  label: 'Engineering' },
      { value: 'healthcare',   label: 'Healthcare / Nursing' },
      { value: 'finance',      label: 'Finance / Accounting' },
      { value: 'teaching',     label: 'Teaching / Education' },
      { value: 'other_skilled',label: 'Other skilled profession' }
    ],
    trades: [
      { value: 'trades',       label: 'Trades (electrician, plumber, carpenter, welder, mechanic)' }
    ],
    semi_skilled: [
      { value: 'hospitality',  label: 'Hospitality / Food service' },
      { value: 'care_work',    label: 'Care work / Support worker' },
      { value: 'agriculture',  label: 'Agriculture / Farm work' },
      { value: 'retail',       label: 'Retail / Customer service' }
    ],
    unskilled: [
      { value: 'domestic_worker', label: 'Domestic worker / Housekeeper' },
      { value: 'construction',    label: 'Construction / General labour' },
      { value: 'factory',         label: 'Factory / Manufacturing' },
      { value: 'logistics',       label: 'Logistics / Warehouse' }
    ]
  };

  // ── Safety callout required for these occupation categories ────────────────
  const HIGH_RISK_CATEGORIES = new Set(['domestic_worker', 'construction', 'factory']);

  // ── State ──────────────────────────────────────────────────────────────────
  const STORAGE_KEY = 'mp2g_waa_state';

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch { return null; }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ step: state.step, answers: state.answers })); } catch {}
  }

  const saved = loadState();
  const state = {
    step: saved?.step || 1,
    answers: Object.assign(
      { skillLevel: '', occupationCategory: '', passportCountry: '', availability: '' },
      saved?.answers || {}
    )
  };

  const TOTAL_STEPS = 4;

  // ── DOM refs ───────────────────────────────────────────────────────────────
  const progressFill  = document.getElementById('waa-progress-fill');
  const progressLabel = document.getElementById('waa-progress-label');
  const progressBar   = document.querySelector('.wizard-progress');
  const resultsEl     = document.getElementById('waa-results');
  const resultsBody   = document.getElementById('waa-results-body');

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // ── Step navigation ────────────────────────────────────────────────────────
  function showStep(n) {
    document.querySelectorAll('.wizard-step').forEach(el => { el.hidden = true; });
    const el = document.getElementById(`waa-step-${n}`);
    if (el) { el.hidden = false; el.querySelector('select,button,input:not([type=hidden])')?.focus(); }
    const pct = Math.round((n / TOTAL_STEPS) * 100);
    if (progressFill)  progressFill.style.width = `${pct}%`;
    if (progressLabel) progressLabel.textContent = `Step ${n} of ${TOTAL_STEPS}`;
    if (progressBar)   progressBar.setAttribute('aria-valuenow', n);
    resultsEl.hidden = true;
    state.step = n;
  }

  function showResults() {
    document.querySelectorAll('.wizard-step').forEach(el => { el.hidden = true; });
    if (progressFill)  progressFill.style.width = '100%';
    if (progressLabel) progressLabel.textContent = 'Complete';
    resultsEl.hidden = false;
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    runEngine();
  }

  // ── Populate occupation select based on skill level ────────────────────────
  function populateOccupations(skillLevel) {
    const sel = document.getElementById('waa-occupation');
    if (!sel) return;
    sel.innerHTML = '<option value="">Select your occupation</option>';
    const options = OCCUPATION_OPTIONS[skillLevel] || [];
    options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      sel.appendChild(o);
    });
    // If only one option (e.g. trades), auto-select it
    if (options.length === 1) {
      sel.value = options[0].value;
      state.answers.occupationCategory = options[0].value;
      const nextBtn = document.querySelector('#waa-step-2 .waa-next');
      if (nextBtn) nextBtn.disabled = false;
    }
    if (state.answers.occupationCategory) sel.value = state.answers.occupationCategory;
  }

  // ── Engine ─────────────────────────────────────────────────────────────────
  async function runEngine() {
    resultsBody.innerHTML = '<div class="loading-skeleton loading-skeleton-card"></div>'.repeat(3);

    window.GlobalRoute?.Analytics?.track('waa_search_started', {
      skillLevel: state.answers.skillLevel,
      occupation: state.answers.occupationCategory
    });

    let demandData, pathwayData, countryData;
    try {
      [demandData, pathwayData, countryData] = await Promise.all([
        fetch('/data/occupation-demand.json').then(r => r.json()),
        fetch('/data/pathways.json').then(r => r.json()),
        fetch('/data/countries.json').then(r => r.json())
      ]);
    } catch {
      resultsBody.innerHTML = `<p class="evidence-note">Unable to load data. Please refresh and try again.</p>`;
      return;
    }

    const { skillLevel, occupationCategory, passportCountry } = state.answers;
    const records = demandData.records || [];
    const pathways = pathwayData.pathways || [];
    const countries = countryData.countries || [];
    const countryMap = new Map(countries.map(c => [c.id, c]));
    const pathwayMap = new Map(pathways.map(p => [p.id, p]));

    // Match demand records to profile
    const matched = records.filter(r =>
      r.skillLevel === skillLevel &&
      r.occupationCategory === occupationCategory
    );

    // Sort: high demand first
    const demandOrder = { high: 0, medium: 1, low: 2 };
    matched.sort((a, b) => (demandOrder[a.demandLevel] ?? 9) - (demandOrder[b.demandLevel] ?? 9));

    let html = '';

    // Safety callout for high-risk categories
    if (HIGH_RISK_CATEGORIES.has(occupationCategory)) {
      html += renderSafetyCallout(occupationCategory);
    }

    if (!matched.length) {
      html += renderNoMatch(skillLevel, occupationCategory);
    } else {
      html += `<p class="evidence-note" style="margin-bottom:1.5rem;">Showing ${matched.length} country${matched.length !== 1 ? 's' : ''} with documented demand for your occupation. Demand data is from official shortage lists and government labour market sources. Verify current requirements before acting.</p>`;
      html += matched.map(r => renderDemandCard(r, countryMap, pathwayMap)).join('');
    }

    html += `<p style="margin-top:2rem;font-size:0.875rem;color:var(--color-neutral-500);">
      Want to filter by budget or study goal? <a href="/pages/find-mypathway.html">Use Find MyPathway &rarr;</a>
    </p>`;

    resultsBody.innerHTML = html;
  }

  // ── Render helpers ─────────────────────────────────────────────────────────
  function renderDemandCard(record, countryMap, pathwayMap) {
    const country = countryMap.get(record.countryId);
    const pathway = record.visaRoute ? pathwayMap.get(record.visaRoute) : null;
    const countryName = country ? country.name : record.countryId;
    const flag = country?.flag || '';

    const demandBadge = {
      high:   '<span class="status-badge status-badge-publishable">High demand</span>',
      medium: '<span class="status-badge" style="background:#fef9c3;color:#a16207;">Medium demand</span>',
      low:    '<span class="status-badge" style="background:#f3f4f6;color:#6b7280;">Lower demand</span>'
    }[record.demandLevel] || '';

    const visaSection = pathway
      ? `<div style="margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid var(--color-neutral-200);">
          <p style="font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--color-neutral-500);margin-bottom:0.35rem;">Visa route</p>
          <p style="font-size:0.95rem;font-weight:600;color:var(--color-dark-navy);margin-bottom:0.25rem;">${esc(pathway.name)}</p>
          <a href="${esc(pathway.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="wizard-source-link">Review official source &rarr;</a>
        </div>`
      : `<div style="margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid var(--color-neutral-200);">
          <p style="font-size:0.875rem;color:var(--color-neutral-500);">Visa route: agent-mediated — see source for details.</p>
          <a href="${esc(record.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="wizard-source-link">Review official source &rarr;</a>
        </div>`;

    const agentSection = `<div class="waa-agent-placeholder">
      <p>Verified agents for this corridor coming soon. <a href="/pages/partners.html">Become a listed agent &rarr;</a></p>
    </div>`;

    return `<article class="wizard-result-card">
      <div class="wizard-result-header">
        <span style="font-size:1.5rem;" aria-hidden="true">${esc(flag)}</span>
        <h3>${esc(countryName)}</h3>
        ${demandBadge}
      </div>
      <p style="font-size:0.875rem;color:var(--color-neutral-600);margin:0.5rem 0;">${esc(record.notes)}</p>
      ${visaSection}
      ${agentSection}
    </article>`;
  }

  function renderSafetyCallout(category) {
    const messages = {
      domestic_worker: 'Domestic work abroad carries significant risks. Workers in private homes have limited oversight and limited ability to report problems. Before proceeding: verify your employer is registered with the destination country\'s labour authority, ensure you have a signed contract in a language you understand, and do not pay recruitment fees — legitimate employers do not charge workers.',
      construction: 'Construction work abroad carries risks including wage theft, document confiscation and unsafe conditions. Verify your employer is registered, ensure you have a signed contract, and do not pay recruitment fees.',
      factory: 'Factory and manufacturing work abroad can involve long hours and limited worker protections in some countries. Verify your employer is registered and ensure you have a signed contract before travelling.'
    };
    return `<div class="waa-safety-callout" role="alert">
      <strong>Before you proceed — worker safety information</strong>
      <p>${esc(messages[category] || 'Verify your employer and contract before travelling.')}</p>
      <p style="margin-top:0.5rem;font-size:0.8rem;">Red flags: being asked to pay a recruitment fee, employer refusing to provide a written contract, vague job description, pressure to decide quickly.</p>
    </div>`;
  }

  function renderNoMatch(skillLevel, occupation) {
    return `<div style="padding:2rem 0;">
      <p>No demand records found for <strong>${esc(occupation.replace(/_/g,' '))}</strong> at <strong>${esc(skillLevel.replace(/_/g,' '))}</strong> level yet. We are expanding the demand registry.</p>
      <p style="margin-top:0.75rem;">In the meantime, try <a href="/pages/find-mypathway.html">Find MyPathway</a> to browse all verified work routes, or <a href="/blog/">read our work visa guides</a>.</p>
    </div>`;
  }

  // ── Tile button wiring (shared pattern with wizard-engine) ─────────────────
  function wireTileGroup(stepEl, selector, hiddenId, onSelect) {
    const btns = [...stepEl.querySelectorAll(selector)];
    btns.forEach((btn, i) => {
      btn.setAttribute('role', 'radio');
      const isSelected = state.answers[hiddenId.replace('waa-','')] === btn.dataset.value ||
                         (hiddenId === 'waa-skill-level' && state.answers.skillLevel === btn.dataset.value) ||
                         (hiddenId === 'waa-availability' && state.answers.availability === btn.dataset.value);
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('tabindex', (isSelected || (!state.answers[hiddenId] && i === 0)) ? '0' : '-1');
      if (isSelected) btn.classList.add('selected');

      btn.addEventListener('click', () => {
        btns.forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-checked','false'); b.setAttribute('tabindex','-1'); });
        btn.classList.add('selected');
        btn.setAttribute('aria-checked','true');
        btn.setAttribute('tabindex','0');
        const hidden = document.getElementById(hiddenId);
        if (hidden) hidden.value = btn.dataset.value;
        onSelect(btn.dataset.value);
      });

      btn.addEventListener('keydown', e => {
        const dir = (e.key==='ArrowRight'||e.key==='ArrowDown') ? 1 : (e.key==='ArrowLeft'||e.key==='ArrowUp') ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = btns[(i + dir + btns.length) % btns.length];
        next.focus(); next.click();
      });
    });
  }

  // ── Wire each step ─────────────────────────────────────────────────────────
  function wireSteps() {
    // Step 1 — skill level tiles
    const step1 = document.getElementById('waa-step-1');
    wireTileGroup(step1, '.wizard-purpose-btn', 'waa-skill-level', val => {
      state.answers.skillLevel = val;
      state.answers.occupationCategory = '';
      const nextBtn = step1.querySelector('.waa-next');
      if (nextBtn) nextBtn.disabled = false;
    });
    step1.querySelector('.waa-next')?.addEventListener('click', () => {
      if (!state.answers.skillLevel) return;
      populateOccupations(state.answers.skillLevel);
      saveState();
      showStep(2);
    });

    // Step 2 — occupation select
    const step2 = document.getElementById('waa-step-2');
    const occSel = document.getElementById('waa-occupation');
    occSel?.addEventListener('change', () => {
      state.answers.occupationCategory = occSel.value;
      const nextBtn = step2.querySelector('.waa-next');
      if (nextBtn) nextBtn.disabled = !occSel.value;
    });
    step2.querySelector('.waa-back')?.addEventListener('click', () => { saveState(); showStep(1); });
    step2.querySelector('.waa-next')?.addEventListener('click', () => {
      if (!state.answers.occupationCategory) return;
      saveState(); showStep(3);
    });

    // Step 3 — passport select
    const step3 = document.getElementById('waa-step-3');
    const passportSel = document.getElementById('waa-passport');
    if (state.answers.passportCountry) passportSel.value = state.answers.passportCountry;
    passportSel?.addEventListener('change', () => {
      state.answers.passportCountry = passportSel.value;
      const nextBtn = step3.querySelector('.waa-next');
      if (nextBtn) nextBtn.disabled = !passportSel.value;
    });
    step3.querySelector('.waa-back')?.addEventListener('click', () => { saveState(); showStep(2); });
    step3.querySelector('.waa-next')?.addEventListener('click', () => {
      if (!state.answers.passportCountry) return;
      saveState(); showStep(4);
    });

    // Step 4 — availability tiles
    const step4 = document.getElementById('waa-step-4');
    wireTileGroup(step4, '.wizard-budget-btn', 'waa-availability', val => {
      state.answers.availability = val;
      const submitBtn = document.getElementById('waa-submit');
      if (submitBtn) submitBtn.disabled = false;
    });
    step4.querySelector('.waa-back')?.addEventListener('click', () => { saveState(); showStep(3); });
    document.getElementById('waa-submit')?.addEventListener('click', () => {
      if (!state.answers.availability) return;
      saveState(); showResults();
    });
  }

  // Restart
  document.addEventListener('click', e => {
    if (e.target.closest('.waa-restart')) {
      state.answers = { skillLevel: '', occupationCategory: '', passportCountry: '', availability: '' };
      state.step = 1;
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      document.querySelectorAll('.wizard-purpose-btn, .wizard-budget-btn').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked','false');
      });
      document.getElementById('waa-skill-level').value = '';
      document.getElementById('waa-availability').value = '';
      document.getElementById('waa-occupation').value = '';
      document.getElementById('waa-passport').value = '';
      showStep(1);
    }
  });

  // ── Init ───────────────────────────────────────────────────────────────────
  wireSteps();
  if (saved?.answers?.skillLevel) populateOccupations(saved.answers.skillLevel);
  const initStep = saved?.step && saved.step >= 1 && saved.step <= TOTAL_STEPS ? saved.step : 1;
  showStep(initStep);

})();
