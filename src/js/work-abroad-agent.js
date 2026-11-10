/* Work Abroad Agent Engine — occupation-driven work routing wizard */
(function () {
  'use strict';

  if (document.body?.dataset?.pageType !== 'work-abroad-agent') return;

  const OCCUPATION_OPTIONS = {
    skilled: [
      { value: 'software_it',   label: 'Software / IT' },
      { value: 'engineering',   label: 'Engineering' },
      { value: 'healthcare',    label: 'Healthcare / Nursing' },
      { value: 'finance',       label: 'Finance / Accounting' },
      { value: 'teaching',      label: 'Teaching / Education' },
      { value: 'other_skilled', label: 'Other skilled profession' }
    ],
    trades: [
      { value: 'trades', label: 'Trades (electrician, plumber, carpenter, welder, mechanic)' }
    ],
    semi_skilled: [
      { value: 'hospitality', label: 'Hospitality / Food service' },
      { value: 'care_work',   label: 'Care work / Support worker' },
      { value: 'agriculture', label: 'Agriculture / Farm work' },
      { value: 'retail',      label: 'Retail / Customer service' }
    ],
    unskilled: [
      { value: 'domestic_worker', label: 'Domestic worker / Housekeeper' },
      { value: 'construction',    label: 'Construction / General labour' },
      { value: 'factory',         label: 'Factory / Manufacturing' },
      { value: 'logistics',       label: 'Logistics / Warehouse' }
    ]
  };

  const HIGH_RISK_CATEGORIES = new Set(['domestic_worker', 'construction', 'factory', 'logistics']);

  const SAFETY_GATE_ITEMS = [
    'I have NOT been asked to pay a recruitment fee upfront',
    'I have seen a written job description with salary stated',
    'I know the employer\'s name and can verify they exist',
    'I understand I can leave the job if conditions are unsafe',
    'I have read the worker rights guide for this country'
  ];

  const STORAGE_KEY = 'mp2g_waa_state';
  const TOTAL_STEPS = 4;

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

  const progressFill  = document.getElementById('waa-progress-fill');
  const progressLabel = document.getElementById('waa-progress-label');
  const progressBar   = document.querySelector('.wizard-progress');
  const resultsEl     = document.getElementById('waa-results');
  const resultsBody   = document.getElementById('waa-results-body');

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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

  function populateOccupations(skillLevel) {
    const sel = document.getElementById('waa-occupation');
    if (!sel) return;
    sel.innerHTML = '<option value="">Select your occupation</option>';
    const options = OCCUPATION_OPTIONS[skillLevel] || [];
    options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.value; o.textContent = opt.label;
      sel.appendChild(o);
    });
    if (options.length === 1) {
      sel.value = options[0].value;
      state.answers.occupationCategory = options[0].value;
      const nextBtn = document.querySelector('#waa-step-2 .waa-next');
      if (nextBtn) nextBtn.disabled = false;
    }
    if (state.answers.occupationCategory) sel.value = state.answers.occupationCategory;
  }

  // ── Agent matching ─────────────────────────────────────────────────────────
  function matchAgents(agents, passportCountry, destCountryId, occupationCategory, skillLevel) {
    const corridor = `${passportCountry}-${destCountryId}`;
    return agents.filter(a => {
      if (a.verificationStatus !== 'verified') return false;
      const [origin] = corridor.split('-');
      const corridorMatch = a.corridors.some(c => {
        const [co, cd] = c.split('-');
        return (co === origin || co === '*') && (cd === destCountryId || cd === '*');
      });
      const occMatch = a.occupationCategories.includes(occupationCategory);
      const skillMatch = a.skillLevels.includes(skillLevel);
      return corridorMatch && occMatch && skillMatch;
    }).sort((a, b) => {
      const tierOrder = { featured: 0, lead: 1, free: 2 };
      return (tierOrder[a.tier] ?? 9) - (tierOrder[b.tier] ?? 9);
    }).slice(0, 3);
  }

  // ── Engine ─────────────────────────────────────────────────────────────────
  async function runEngine() {
    resultsBody.innerHTML = '<div class="loading-skeleton loading-skeleton-card"></div>'.repeat(3);

    window.GlobalRoute?.Analytics?.track('waa_search_started', {
      skillLevel: state.answers.skillLevel,
      occupation: state.answers.occupationCategory
    });

    let demandData, pathwayData, countryData, agentData;
    try {
      [demandData, pathwayData, countryData, agentData] = await Promise.all([
        fetch('/data/occupation-demand.json').then(r => r.json()),
        fetch('/data/pathways.json').then(r => r.json()),
        fetch('/data/countries.json').then(r => r.json()),
        fetch('/data/agents.json').then(r => r.json())
      ]);
    } catch {
      resultsBody.innerHTML = `<p class="evidence-note">Unable to load data. Please refresh and try again.</p>`;
      return;
    }

    const { skillLevel, occupationCategory, passportCountry } = state.answers;
    const records   = demandData.records   || [];
    const pathways  = pathwayData.pathways || [];
    const countries = countryData.countries || [];
    const agents    = agentData.agents     || [];

    const countryMap = new Map(countries.map(c => [c.id, c]));
    const pathwayMap = new Map(pathways.map(p => [p.id, p]));

    const matched = records.filter(r =>
      r.skillLevel === skillLevel && r.occupationCategory === occupationCategory
    );
    const demandOrder = { high: 0, medium: 1, low: 2 };
    matched.sort((a, b) => (demandOrder[a.demandLevel] ?? 9) - (demandOrder[b.demandLevel] ?? 9));

    let html = '';

    if (HIGH_RISK_CATEGORIES.has(occupationCategory)) {
      html += renderSafetyCallout(occupationCategory);
    }

    if (!matched.length) {
      html += renderNoMatch(skillLevel, occupationCategory);
    } else {
      html += `<p class="evidence-note" style="margin-bottom:1.5rem;">Showing ${matched.length} countr${matched.length !== 1 ? 'ies' : 'y'} with documented demand for your occupation. Demand data is from official shortage lists and government labour market sources. Verify current requirements before acting.</p>`;
      html += matched.map(r => {
        const matchedAgents = matchAgents(agents, passportCountry, r.countryId, occupationCategory, skillLevel);
        return renderDemandCard(r, countryMap, pathwayMap, matchedAgents, occupationCategory);
      }).join('');
    }

    html += `<p style="margin-top:2rem;font-size:0.875rem;color:var(--color-neutral-500);">
      Want to filter by budget or study goal? <a href="/pages/find-mypathway.html">Use Find MyPathway &rarr;</a>
    </p>`;

    resultsBody.innerHTML = html;
    wireIntakeForms();
  }

  // ── Render helpers ─────────────────────────────────────────────────────────
  function renderDemandCard(record, countryMap, pathwayMap, matchedAgents, occupationCategory) {
    const country     = countryMap.get(record.countryId);
    const pathway     = record.visaRoute ? pathwayMap.get(record.visaRoute) : null;
    const countryName = country ? country.name : record.countryId;
    const flag        = country?.flag || '';

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

    const agentSection = matchedAgents.length
      ? matchedAgents.map(a => renderAgentCard(a, record.countryId, occupationCategory)).join('')
      : `<div class="waa-agent-placeholder">
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

  function renderAgentCard(agent, destCountryId, occupationCategory) {
    const featuredBadge = agent.tier === 'featured'
      ? '<span class="waa-agent-badge-featured">Featured</span>' : '';
    const isHighRisk = HIGH_RISK_CATEGORIES.has(occupationCategory);

    const safetyGate = isHighRisk ? `
      <div class="waa-safety-gate" id="gate-${esc(agent.id)}-${esc(destCountryId)}">
        <p class="waa-safety-gate-title">Before connecting — confirm all of the following:</p>
        <ul class="waa-safety-gate-list">
          ${SAFETY_GATE_ITEMS.map((item, i) =>
            `<li><input type="checkbox" id="gate-chk-${esc(agent.id)}-${i}" data-gate="${esc(agent.id)}-${esc(destCountryId)}"> <label for="gate-chk-${esc(agent.id)}-${i}">${esc(item)}</label></li>`
          ).join('')}
        </ul>
      </div>` : '';

    return `<div class="waa-agent-card" data-agent-id="${esc(agent.id)}" data-dest="${esc(destCountryId)}">
      <div class="waa-agent-card-header">
        <p class="waa-agent-name">${esc(agent.name)} ${featuredBadge}</p>
      </div>
      <p class="waa-agent-meta">Handles: ${esc((agent.corridors || []).join(', '))}</p>
      ${safetyGate}
      <button type="button" class="btn btn-primary waa-connect-btn"
              data-agent-id="${esc(agent.id)}"
              data-dest="${esc(destCountryId)}"
              ${isHighRisk ? 'disabled' : ''}>
        Connect with this agent
      </button>
      <form class="waa-intake-form" hidden
            data-agent-id="${esc(agent.id)}"
            data-dest="${esc(destCountryId)}"
            data-agent-email="${esc(agent.contactEmail || '')}">
        <label>Full name <input type="text" name="name" required autocomplete="name"></label>
        <label>Email address <input type="email" name="email" required autocomplete="email"></label>
        <label>WhatsApp number <input type="tel" name="whatsapp" required autocomplete="tel"></label>
        <label class="waa-checkbox">
          <input type="checkbox" name="no_fees_paid" required>
          I have not paid any agent fees yet
        </label>
        <label class="waa-checkbox">
          <input type="checkbox" name="referral_understood" required>
          I understand this is a referral, not a guarantee of employment
        </label>
        <button type="submit" class="btn btn-primary">Send my details to agent</button>
        <p class="waa-form-disclaimer">Your details are shared only with this agent. <a href="/pages/privacy.html">Privacy policy</a></p>
      </form>
      <p class="waa-agent-disclaimer">Referral only — not an endorsement. Verify independently before paying any fees.</p>
    </div>`;
  }

  function renderSafetyCallout(category) {
    const messages = {
      domestic_worker: 'Domestic work abroad carries significant risks. Workers in private homes have limited oversight. Before proceeding: verify your employer is registered with the destination country\'s labour authority, ensure you have a signed contract in a language you understand, and do not pay recruitment fees. Red flag: any agent offering a Qatar or Saudi domestic worker visa in less than 2 weeks is not using the official process — official processing takes 3-6 weeks minimum.',
      construction:    'Construction work abroad carries risks including wage theft, document confiscation and unsafe conditions. Verify your employer is registered, ensure you have a signed contract, and do not pay recruitment fees.',
      factory:         'Factory and manufacturing work abroad can involve long hours and limited worker protections in some countries. Verify your employer is registered and ensure you have a signed contract before travelling.',
      logistics:       'Warehouse and logistics work in Gulf countries carries risks including document confiscation and wage theft. Verify your employer is registered with the relevant labour authority and ensure you have a signed contract before travelling.'
    };
    return `<div class="waa-safety-callout" role="alert">
      <strong>Before you proceed — worker safety information</strong>
      <p>${esc(messages[category] || 'Verify your employer and contract before travelling.')}</p>
      <p style="margin-top:0.5rem;font-size:0.8rem;">Red flags: being asked to pay a recruitment fee, employer refusing to provide a written contract, vague job description, pressure to decide quickly.</p>
    </div>`;
  }

  function renderNoMatch(skillLevel, occupation) {
    return `<div style="padding:2rem 0;">
      <p>No demand records found for <strong>${esc(occupation.replace(/_/g, ' '))}</strong> at <strong>${esc(skillLevel.replace(/_/g, ' '))}</strong> level yet. We are expanding the demand registry.</p>
      <p style="margin-top:0.75rem;">In the meantime, try <a href="/pages/find-mypathway.html">Find MyPathway</a> to browse all verified work routes, or <a href="/blog/">read our work visa guides</a>.</p>
      <p style="margin-top:0.75rem;font-size:0.85rem;color:var(--color-neutral-500);">If an agent has suggested a country not shown here, research it carefully before paying any fees. Some countries are promoted by agents without any documented labour demand for your occupation.</p>
    </div>`;
  }

  // ── Intake form wiring (runs after results render) ─────────────────────────
  function wireIntakeForms() {
    // Safety gate checkboxes — enable connect button when all checked
    resultsBody.querySelectorAll('.waa-safety-gate-list input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', () => {
        const gateId = chk.dataset.gate;
        const allChecked = [...resultsBody.querySelectorAll(
          `.waa-safety-gate-list input[data-gate="${gateId}"]`
        )].every(c => c.checked);
        const btn = resultsBody.querySelector(
          `.waa-connect-btn[data-agent-id="${gateId.split('-')[0]}"][data-dest="${gateId.split('-').slice(1).join('-')}"]`
        );
        if (btn) btn.disabled = !allChecked;
      });
    });

    // Connect button — toggle intake form
    resultsBody.querySelectorAll('.waa-connect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const agentId = btn.dataset.agentId;
        const dest    = btn.dataset.dest;
        const form    = resultsBody.querySelector(
          `.waa-intake-form[data-agent-id="${agentId}"][data-dest="${dest}"]`
        );
        if (!form) return;
        form.hidden = !form.hidden;
        btn.textContent = form.hidden ? 'Connect with this agent' : 'Cancel';
        if (!form.hidden) form.querySelector('input[type="text"]')?.focus();

        window.GlobalRoute?.Analytics?.track('agent_connect_clicked', {
          agentId, dest,
          skillLevel: state.answers.skillLevel,
          occupation: state.answers.occupationCategory
        });
      });
    });

    // Form submit
    resultsBody.querySelectorAll('.waa-intake-form').forEach(form => {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const agentId    = form.dataset.agentId;
        const dest       = form.dataset.dest;
        const agentEmail = form.dataset.agentEmail;

        const payload = {
          name:      form.querySelector('[name="name"]').value.trim(),
          email:     form.querySelector('[name="email"]').value.trim(),
          whatsapp:  form.querySelector('[name="whatsapp"]').value.trim(),
          skillLevel:   state.answers.skillLevel,
          occupation:   state.answers.occupationCategory,
          passport:     state.answers.passportCountry,
          availability: state.answers.availability,
          corridor:  `${state.answers.passportCountry}-${dest}`,
          agentId,
          _replyto:  form.querySelector('[name="email"]').value.trim(),
          _subject:  `Work abroad lead — ${state.answers.passportCountry}→${dest} ${state.answers.occupationCategory}`
        };

        // Formspree endpoint — one per agent, keyed by agentId
        // Owner must set data-formspree-id on the form or configure per agent
        const formspreeId = form.dataset.formspreeId || agentEmail;
        if (!formspreeId) {
          showFormResult(form, false, 'Agent contact not configured yet. Please check back soon.');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send my details to agent';
          return;
        }

        try {
          const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            showFormResult(form, true, 'Your details have been sent. The agent will contact you within 48 hours via email or WhatsApp.');
            window.GlobalRoute?.Analytics?.track('agent_lead_submitted', {
              agentId, dest,
              skillLevel: state.answers.skillLevel,
              occupation: state.answers.occupationCategory
            });
          } else {
            showFormResult(form, false, 'Something went wrong. Please try again or contact us directly.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send my details to agent';
          }
        } catch {
          showFormResult(form, false, 'Network error. Please check your connection and try again.');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send my details to agent';
        }
      });
    });
  }

  function showFormResult(form, success, message) {
    const existing = form.parentElement.querySelector('.waa-form-success, .waa-form-error');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = success ? 'waa-form-success' : 'waa-form-error';
    div.textContent = message;
    if (success) form.hidden = true;
    form.parentElement.insertBefore(div, form.nextSibling);
  }

  // ── Tile button wiring ─────────────────────────────────────────────────────
  function wireTileGroup(stepEl, selector, hiddenId, onSelect) {
    const btns = [...stepEl.querySelectorAll(selector)];
    btns.forEach((btn, i) => {
      btn.setAttribute('role', 'radio');
      const key = hiddenId === 'waa-skill-level' ? 'skillLevel' : 'availability';
      const isSelected = state.answers[key] === btn.dataset.value;
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('tabindex', (isSelected || (!state.answers[key] && i === 0)) ? '0' : '-1');
      if (isSelected) btn.classList.add('selected');

      btn.addEventListener('click', () => {
        btns.forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-checked', 'false'); b.setAttribute('tabindex', '-1'); });
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');
        btn.setAttribute('tabindex', '0');
        const hidden = document.getElementById(hiddenId);
        if (hidden) hidden.value = btn.dataset.value;
        onSelect(btn.dataset.value);
      });

      btn.addEventListener('keydown', e => {
        const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1
                  : (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = btns[(i + dir + btns.length) % btns.length];
        next.focus(); next.click();
      });
    });
  }

  // ── Wire each step ─────────────────────────────────────────────────────────
  function wireSteps() {
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
      saveState(); showStep(2);
    });

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
    if (!e.target.closest('.waa-restart')) return;
    state.answers = { skillLevel: '', occupationCategory: '', passportCountry: '', availability: '' };
    state.step = 1;
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    document.querySelectorAll('.wizard-purpose-btn, .wizard-budget-btn').forEach(b => {
      b.classList.remove('selected'); b.setAttribute('aria-checked', 'false');
    });
    ['waa-skill-level', 'waa-availability', 'waa-occupation', 'waa-passport'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    showStep(1);
  });

  // ── Init ───────────────────────────────────────────────────────────────────
  wireSteps();
  if (saved?.answers?.skillLevel) populateOccupations(saved.answers.skillLevel);
  const initStep = saved?.step >= 1 && saved?.step <= TOTAL_STEPS ? saved.step : 1;
  showStep(initStep);

})();
