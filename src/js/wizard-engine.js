/* Visa Wizard Engine — step state machine + profile assembly + results rendering */
(function () {
  'use strict';

  if (document.body?.dataset?.pageType !== 'visa-wizard') return;

  // ── State ──────────────────────────────────────────────────────────────────
  const WIZARD_STORAGE_KEY = 'mp2g_wizard_state';

  function loadWizardState() {
    try { return JSON.parse(localStorage.getItem(WIZARD_STORAGE_KEY) || 'null'); } catch (e) { return null; }
  }

  function saveWizardState() {
    try { localStorage.setItem(WIZARD_STORAGE_KEY, JSON.stringify({ step: state.step, answers: state.answers })); } catch (e) {}
  }

  const saved = loadWizardState();
  const state = {
    step: saved?.step || 1,
    answers: Object.assign({ passportCountry: '', destinationCountry: '', purpose: '', currentVisa: 'none', budgetRange: '' }, saved?.answers || {})
  };

  const TOTAL_STEPS = 5;

  // Budget range → number for route engine
  const BUDGET_MAP = { '4999': 4999, '15000': 15000, '30000': 30000, '50000': 50000 };

  // Purpose → route engine goal
  const PURPOSE_GOAL_MAP = { study: 'study', work: 'work', nomad: 'work', any: 'any' };

  // Nomad wizard tag — pathways tagged with this are surfaced for nomad/explore purpose
  const NOMAD_TAG = 'nomad';

  // Extension signals by current visa type
  const EXTENSION_TAGS = {
    student:   'post-study',
    tourist:   'tourist-switch',
    work:      'pr-route',
    residence: 'pr-route'
  };

  // Known research blockers by destination (from pathways.json permanentBlocker)
  const RESEARCH_BLOCKERS = {
    RU: 'Evidence gaps exist for this destination for African passport holders — SWIFT banking restrictions and reduced embassy capacity create unresolvable verification issues as of 2026.',
    US: 'USA pathways are in active research. Financial requirements and process documentation are not yet fully verified. Official sources are linked below.'
  };

  // ── DOM refs ───────────────────────────────────────────────────────────────
  const progressFill  = document.getElementById('wizard-progress-fill');
  const progressLabel = document.getElementById('wizard-progress-label');
  const progressBar   = document.querySelector('.wizard-progress');
  const resultsEl     = document.getElementById('wizard-results');
  const resultsBody   = document.getElementById('wizard-results-body');

  // ── Helpers ────────────────────────────────────────────────────────────────
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function showStep(n) {
    document.querySelectorAll('.wizard-step').forEach(el => { el.hidden = true; });
    const el = document.getElementById(`step-${n}`);
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

  // ── Step validation ────────────────────────────────────────────────────────
  function validateStep(stepEl) {
    const nextBtn = stepEl.querySelector('.wizard-next');
    if (!nextBtn) return true;
    const field = nextBtn.dataset.validates;
    if (!field) return true;
    const val = state.answers[field] || document.getElementById(field)?.value || '';
    return val.trim() !== '';
  }

  // ── Engine ─────────────────────────────────────────────────────────────────
  async function runEngine() {
    resultsBody.innerHTML = '<div class="skeleton skeleton-card" style="margin-bottom:1rem;"></div>'.repeat(3);

    window.GlobalRoute?.Analytics?.track('wizard_completed', { purpose: state.answers.purpose, destination: state.answers.destinationCountry });

    let countries, pathways;
    try {
      [{ countries }, { pathways }] = await Promise.all([
        fetch('/data/countries.json').then(r => r.json()),
        fetch('/data/pathways.json').then(r => r.json())
      ]);
    } catch (e) {
      resultsBody.innerHTML = `<p class="evidence-note">Unable to load pathway data. Please refresh and try again.</p>`;
      return;
    }

    const { purpose, destinationCountry, currentVisa, budgetRange, passportCountry } = state.answers;
    const budget = BUDGET_MAP[budgetRange] || 0;
    const goal   = PURPOSE_GOAL_MAP[purpose] || 'any';

    // Filter pathways by destination if selected
    const scopedPathways = destinationCountry && destinationCountry !== 'any'
      ? pathways.filter(p => p.countryId === destinationCountry)
      : pathways;

    // For nomad purpose: filter to pathways tagged 'nomad', else use goal
    let primaryPathways = scopedPathways;
    if (purpose === 'nomad') {
      primaryPathways = scopedPathways.filter(p => Array.isArray(p.wizardTags) && p.wizardTags.includes(NOMAD_TAG));
      // If no tagged nomad pathways yet, fall back to work type with a note
      if (!primaryPathways.length) primaryPathways = scopedPathways.filter(p => p.type === 'work');
    }

    const profile = { goal: purpose === 'nomad' ? 'work' : goal, budget, familySize: 1 };

    const { matches, alternatives, zeroFitExplanations } = window.GlobalRoute.RouteEngine.recommend(
      profile, countries, primaryPathways, 6
    );

    // Research blocker for destination
    const blockerNote = destinationCountry && RESEARCH_BLOCKERS[destinationCountry]
      ? renderBlockerCard(destinationCountry, RESEARCH_BLOCKERS[destinationCountry], countries)
      : '';

    // Extension routes
    const extensionTag = EXTENSION_TAGS[currentVisa];
    const extensionPathways = extensionTag
      ? pathways.filter(p =>
          Array.isArray(p.wizardTags) && p.wizardTags.includes(extensionTag) &&
          p.status === 'publishable' &&
          (!destinationCountry || destinationCountry === 'any' || p.countryId === destinationCountry)
        )
      : [];

    // Nomad note
    const nomadNote = purpose === 'nomad'
      ? `<div class="wizard-info-note"><strong>Explore &amp; Nomad:</strong> These are countries with published, evidence-gated remote work or job-search visa routes. "Welcomed" means a structured pathway exists — not a subjective ranking.</div>`
      : '';

    // Render
    let html = nomadNote + blockerNote;

    if (matches.length) {
      html += `<h3 style="margin-bottom:var(--spacing-md);">Pathway matches</h3>`;
      html += `<p class="evidence-note">Goal matches only — not eligibility assessments. Confirm current requirements at the official source before acting.</p>`;
      html += matches.map(renderMatchCard).join('');
    } else if (goal === 'any' || purpose === 'any') {
      html += renderNoGoalState(countries, pathways, destinationCountry);
    } else {
      html += renderNoMatchState(alternatives, zeroFitExplanations);
    }

    if (extensionPathways.length) {
      html += renderExtensionSection(extensionPathways, countries, currentVisa);
    }

    html += `<p style="margin-top:var(--spacing-xl);font-size:0.875rem;color:var(--color-neutral-500);">
      Want to filter by career or study goal? <a href="/pages/find-mypathway.html">Use Find MyPathway &rarr;</a>
    </p>`;

    resultsBody.innerHTML = html;
  }

  // ── Render helpers ─────────────────────────────────────────────────────────
  function renderMatchCard(match) {
    const reqs = Array.isArray(match.pathway.requirements) ? match.pathway.requirements : [];
    const reqItems = reqs.slice(0, 3).map(r => {
      const label = r.field ? r.field.replace(/_/g, ' ') : 'requirement';
      const val = r.kind === 'boolean' ? 'required' : (r.currency ? `${r.currency} ${r.value}` : r.value);
      return `<li>${esc(label)}: ${esc(String(val))}</li>`;
    }).join('');
    const staleWarn = match.stale
      ? `<p style="color:var(--color-warning);font-size:0.8rem;margin-bottom:0.5rem;">Some requirements may be outdated — verify at the official source.</p>`
      : '';
    return `<article class="wizard-result-card">
      <div class="wizard-result-header">
        <span style="font-size:1.5rem;" aria-hidden="true">${esc(match.country.flag || '')}</span>
        <h3>${esc(match.country.name)} — ${esc(match.pathway.name)}</h3>
      </div>
      ${staleWarn}
      ${reqItems ? `<ul class="route-requirements">${reqItems}</ul>` : ''}
      <a href="${esc(match.pathway.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="wizard-source-link">Review official source &rarr;</a>
    </article>`;
  }

  function renderBlockerCard(countryId, message, countries) {
    const country = countries.find(c => c.id === countryId);
    const name = country ? country.name : countryId;
    return `<div class="wizard-blocker-card">
      <strong>Research required — ${esc(name)}</strong>
      <p>${esc(message)}</p>
    </div>`;
  }

  function renderExtensionSection(pathways, countries, currentVisa) {
    const countryMap = new Map(countries.map(c => [c.id, c]));
    const cards = pathways.map(p => {
      const country = countryMap.get(p.countryId);
      if (!country) return '';
      return `<li><a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(country.name)} — ${esc(p.name)}</a></li>`;
    }).join('');
    const label = currentVisa === 'student' ? 'Post-study routes'
      : currentVisa === 'tourist' ? 'Possible in-country transitions'
      : 'Onward residence routes';
    return `<section class="wizard-extension-section" aria-labelledby="ext-heading">
      <h3 id="ext-heading">${esc(label)}</h3>
      <p class="wizard-extension-note">Possible next steps based on your current visa. Rules vary — verify with the official authority before acting.</p>
      <ul class="link-list">${cards}</ul>
    </section>`;
  }

  function renderNoGoalState(countries, pathways, destinationCountry) {
    // Top 3 countries by publishable pathway count
    const counts = {};
    pathways.filter(p => p.status === 'publishable').forEach(p => {
      counts[p.countryId] = (counts[p.countryId] || 0) + 1;
    });
    const top = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id, count]) => {
        const c = countries.find(x => x.id === id);
        return c ? `<li><a href="/pages/countries/${encodeURIComponent(id)}/">${esc(c.flag || '')} ${esc(c.name)}</a> — ${count} publishable pathway${count !== 1 ? 's' : ''}</li>` : '';
      }).join('');
    return `<div style="padding:var(--spacing-xl) 0;">
      <p>Here are the countries with the most verified pathways. Select a purpose above to narrow results, or use <a href="/pages/find-mypathway.html">Find MyPathway</a> to filter by goal.</p>
      <ul class="link-list">${top}</ul>
    </div>`;
  }

  function renderNoMatchState(alternatives, explanations) {
    const altHtml = alternatives.length
      ? `<ul class="link-list">${alternatives.map(a => `<li><strong>${esc(a.country.name)} — ${esc(a.pathway.name)}</strong>: ${esc(a.blocker)}</li>`).join('')}</ul>`
      : '';
    const expHtml = explanations.length
      ? `<details style="margin-top:1rem;"><summary style="cursor:pointer;font-weight:600;">Why each pathway was excluded (${explanations.length})</summary><ul style="margin-top:0.75rem;">${explanations.map(e => `<li><strong>${esc(e.name)}</strong>: ${esc(e.reason)}</li>`).join('')}</ul></details>`
      : '';
    return `<div style="padding:var(--spacing-xl) 0;">
      <p>No publishable pathways passed the evidence gate for your inputs. Try a higher budget range or a different destination.</p>
      ${altHtml}${expHtml}
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:var(--spacing-lg);">
        <button type="button" class="btn btn-secondary wizard-restart">Start again</button>
        <a href="/pages/countries.html" class="btn btn-primary">Browse countries</a>
      </div>
    </div>`;
  }

  // ── Event wiring ───────────────────────────────────────────────────────────
  function wireStep(stepEl) {
    // Select fields — sync to state
    stepEl.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', () => {
        state.answers[sel.name] = sel.value;
        const nextBtn = stepEl.querySelector('.wizard-next');
        if (nextBtn && nextBtn.dataset.validates === sel.name) {
          nextBtn.disabled = !sel.value;
        }
      });
      // Restore value if returning to step
      if (state.answers[sel.name]) sel.value = state.answers[sel.name];
    });

    // Purpose tile buttons
    stepEl.querySelectorAll('.wizard-purpose-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        stepEl.querySelectorAll('.wizard-purpose-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.answers.purpose = btn.dataset.value;
        document.getElementById('purpose').value = btn.dataset.value;
        const nextBtn = stepEl.querySelector('.wizard-next');
        if (nextBtn) nextBtn.disabled = false;
      });
      if (state.answers.purpose === btn.dataset.value) btn.classList.add('selected');
    });

    // Budget tile buttons
    stepEl.querySelectorAll('.wizard-budget-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        stepEl.querySelectorAll('.wizard-budget-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.answers.budgetRange = btn.dataset.value;
        document.getElementById('budgetRange').value = btn.dataset.value;
        const submitBtn = document.getElementById('wizard-submit');
        if (submitBtn) submitBtn.disabled = false;
      });
      if (state.answers.budgetRange === btn.dataset.value) btn.classList.add('selected');
    });

    // Next button
    stepEl.querySelector('.wizard-next')?.addEventListener('click', () => {
      if (!validateStep(stepEl)) return;
      // Sync select values to state before advancing
      stepEl.querySelectorAll('select').forEach(sel => { state.answers[sel.name] = sel.value; });
      saveWizardState();
      showStep(state.step + 1);
    });

    // Back button
    stepEl.querySelector('.wizard-back')?.addEventListener('click', () => {
      saveWizardState();
      showStep(state.step - 1);
    });
  }

  // Submit
  document.getElementById('wizard-submit')?.addEventListener('click', () => {
    // Sync final step selects
    document.querySelectorAll('#step-5 select').forEach(sel => { state.answers[sel.name] = sel.value; });
    saveWizardState();
    showResults();
  });

  // Restart buttons (delegated — results may not exist yet)
  document.addEventListener('click', e => {
    if (e.target.closest('.wizard-restart')) {
      state.answers = { passportCountry: '', destinationCountry: '', purpose: '', currentVisa: 'none', budgetRange: '' };
      state.step = 1;
      try { localStorage.removeItem(WIZARD_STORAGE_KEY); } catch (e) {}
      // Reset UI
      document.querySelectorAll('.wizard-purpose-btn, .wizard-budget-btn').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.wizard-step select').forEach(sel => { sel.value = sel.options[0]?.value || ''; });
      document.getElementById('purpose').value = '';
      document.getElementById('budgetRange').value = '';
      document.querySelector('#step-3 .wizard-next') && (document.querySelector('#step-3 .wizard-next').disabled = true);
      document.getElementById('wizard-submit') && (document.getElementById('wizard-submit').disabled = true);
      showStep(1);
    }
  });

  // Wire all steps
  document.querySelectorAll('.wizard-step').forEach(wireStep);

  // Init — restore from saved state or start at step 1
  const initStep = saved?.step && saved.step >= 1 && saved.step <= TOTAL_STEPS ? saved.step : 1;
  showStep(initStep);

})();
