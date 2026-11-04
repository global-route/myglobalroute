/**
 * Find MyPathway - Route Finder Logic
 * Extracted from inline script for maintainability
 */
(function() {
  'use strict';

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  const form = document.getElementById('route-form');
  const results = document.getElementById('route-results');
  if (!form || !results) return;

  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  async function loadJson(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Unable to load ${url}`);
    return r.json();
  }

  function renderRequirements(reqs) {
    if (!Array.isArray(reqs) || !reqs.length) return '';
    const items = reqs.map(r => {
      const label = r.field ? r.field.replace(/_/g, ' ') : 'requirement';
      const val = r.kind === 'boolean' ? 'required' : (r.currency ? `${r.currency} ${r.value}` : r.value);
      return `<li>${esc(label)}: ${esc(val)}</li>`;
    }).join('');
    return `<ul class="route-requirements">${items}</ul>`;
  }

  function freshnessLabel(pathway) {
    const reqs = Array.isArray(pathway.requirements) ? pathway.requirements : [];
    const dates = reqs.map(r => r.effectiveDate).filter(Boolean).map(d => new Date(d));
    if (!dates.length) return { cls: 'badge-partial', text: 'Source verified' };
    const newest = new Date(Math.max(...dates));
    const monthsAgo = (Date.now() - newest) / (1000 * 60 * 60 * 24 * 30);
    const label = newest.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    if (monthsAgo < 3) return { cls: 'badge-verified', text: `Verified ${label}` };
    if (monthsAgo < 6) return { cls: 'badge-partial', text: `Audited ${label}` };
    return { cls: 'badge-stale', text: `Last checked ${label}` };
  }

  function renderStaleWarning() {
    return '<p class="evidence-note stale-warning">Some requirements on this pathway may be outdated. Verify against the official source before acting.</p>';
  }

  function renderMatchedTier(tier) {
    if (!tier) return '';
    const label = tier.field ? tier.field.replace(/_/g, ' ') : 'funds';
    const val = tier.currency ? `${tier.currency} ${tier.value}` : tier.value;
    const cond = tier.conditions?.familySize ? ` (family size ${tier.conditions.familySize})` : '';
    return `<p class="tier-pill">Applicable ${esc(label)}: ${esc(String(val))}${esc(cond)}</p>`;
  }

  function renderEvidenceTrail(pathway) {
    const reqs = Array.isArray(pathway.requirements) ? pathway.requirements : [];
    if (!reqs.length) return '';
    const rows = reqs.map(r => {
      const label = r.field ? r.field.replace(/_/g, ' ') : 'requirement';
      const val = r.kind === 'boolean' ? 'required' : (r.currency ? `${r.currency} ${r.value}` : r.value);
      const date = r.effectiveDate ? `<span style="color:var(--color-neutral-400);font-size:0.75rem;"> (verified ${esc(r.effectiveDate)})</span>` : '';
      const src = r.sourceUrl ? ` <a href="${esc(r.sourceUrl)}" rel="noopener noreferrer" style="font-size:0.75rem;">source</a>` : '';
      return `<li><strong>${esc(label)}:</strong> ${esc(String(val))}${date}${src}</li>`;
    }).join('');
    return `<ul class="route-requirements">${rows}</ul>`;
  }

  function renderNextAction(pathway, country) {
    const actions = {
      'DE': { study: 'Apply via the German embassy in your country. Book an appointment at vfs-germany.com. Processing: 6-12 weeks.', work: 'Submit via the German embassy. Use the Make it in Germany portal to check eligibility first.' },
      'CA': { work: 'Create an Express Entry profile at ircc.canada.ca. Invitations to apply are issued in draws - check current CRS cutoffs.' },
      'GB': { work: 'Your employer must assign a Certificate of Sponsorship (CoS) before you apply at gov.uk/skilled-worker-visa.', study: 'Your institution issues a CAS number. Apply online at gov.uk/student-visa.' },
      'AU': { study: 'Apply online via immi.homeaffairs.gov.au after receiving your CoE from your institution.', work: 'Submit an Expression of Interest via SkillSelect at immi.homeaffairs.gov.au.' },
      'IE': { work: 'Your employer applies for the permit at enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/.', study: 'Apply at inis.gov.ie after receiving your offer letter.' },
      'ES': { work: 'Apply at the Spanish consulate in your country. Processing: 20 working days after submission.', study: 'Apply at the Spanish consulate. Bring admission letter, financial proof, health insurance.' },
      'FR': { work: 'Your employer files with the DREETS. You then apply at the French consulate in your country.', study: 'Apply via Campus France in your country, then at the French consulate.' },
      'PT': { work: 'Apply at the Portuguese consulate. AIMA processes residence permits after entry.', study: 'Apply at the Portuguese consulate with your admission letter.' },
      'NZ': { work: 'Submit an Expression of Interest via Skilled Migrant Category at immigration.govt.nz.', study: 'Apply online at immigration.govt.nz/visas/fee-paying-student-visa.' },
      'AT': { work: 'Apply at the Austrian embassy in your country. Processing: 8-12 weeks.', study: 'Apply at the Austrian embassy with your admission letter and proof of funds.' },
      'JP': { work: 'Your employer files a Certificate of Eligibility with the Immigration Services Agency. You then apply at the Japanese embassy.', study: 'Your institution files a Certificate of Eligibility. Apply at the Japanese embassy in your country.' },
      'KR': { work: 'Your employer files with the Korean Immigration Service. Apply at the Korean embassy.', study: 'Apply at the Korean embassy with your admission letter and USD 9,000 in funds.' },
    };
    const countryActions = actions[country.id];
    const action = countryActions?.[pathway.type] || `Apply at the ${esc(country.name)} embassy or consulate in your country. Verify current processing times at the official source.`;
    return `<div class="next-action-block"><strong>Next step:</strong> ${action}</div>`;
  }

  function renderStatusBadge(pathway) {
    if (pathway.status === 'research_required') return '<span class="status-badge status-badge-research">Research required</span>';
    return '<span class="status-badge status-badge-publishable">Verified</span>';
  }

  function renderCard(match) {
    const badge = freshnessLabel(match.pathway);
    const fundedBadge = match.pathway.capital_tier === 'tier_1_funded'
      ? '<span class="funded-badge">&#10022; Funded</span>'
      : '';
    return `<article>
      <div class="pathway-card-header">
        <h3>${esc(match.country.name)} - ${esc(match.pathway.name)}</h3>
        <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;flex-shrink:0;">${renderStatusBadge(match.pathway)}<span class="freshness-badge ${esc(badge.cls)}">${esc(badge.text)}</span>${fundedBadge}</div>
      </div>
      ${match.stale ? renderStaleWarning() : ''}
      ${match.matchedTier ? renderMatchedTier(match.matchedTier) : ''}
      ${renderEvidenceTrail(match.pathway)}
      ${renderNextAction(match.pathway, match.country)}
      <a href="${esc(match.pathway.sourceUrl)}" rel="noopener noreferrer">Review official source - ${esc(match.pathway.sourceAuthority || match.country.name)}</a>
    </article>`;
  }

  function renderAlternatives(alternatives) {
    if (!alternatives.length) return '';
    const items = alternatives.map(a =>
      `<li>${esc(a.country.name)} - ${esc(a.pathway.name)}: <span class="evidence-note">${esc(a.blocker)}</span></li>`
    ).join('');
    return `<section aria-labelledby="alt-heading"><h2 id="alt-heading">Nearby routes - current blockers</h2><p>These pathways match your goal but did not pass the current evidence gate. The blocker is shown for each.</p><ul>${items}</ul></section>`;
  }

  // Persist + restore form inputs via localStorage
  const STORAGE_KEY = 'mp2g_fmp_inputs';
  const persistFields = ['passportCountry','goal','currentVisa','familySize','applicationDate','budget','monthlyIncome','experienceYears','asymmetry','region'];
  
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) persistFields.forEach(k => { const el = form.elements[k]; if (el && saved[k] != null) el.value = saved[k]; });
  } catch(e) {}
  
  form.addEventListener('change', () => {
    try {
      const vals = {};
      persistFields.forEach(k => { const el = form.elements[k]; if (el) vals[k] = el.value; });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vals));
    } catch(e) {}
  });

  // Mobile filter toggle
  const filterToggleBtn = document.getElementById('filter-toggle-btn');
  const filterForm = document.getElementById('route-form');
  if (filterToggleBtn && filterForm) {
    filterForm.id = 'filter-panel';
    filterToggleBtn.addEventListener('click', () => {
      const expanded = filterToggleBtn.getAttribute('aria-expanded') === 'true';
      filterToggleBtn.setAttribute('aria-expanded', String(!expanded));
      filterForm.hidden = expanded;
      const active = persistFields.filter(k => { const el = filterForm.elements[k]; return el && el.value && el.value !== 'any' && el.value !== 'none' && el.value !== '1' && el.value !== ''; }).length;
      filterToggleBtn.textContent = expanded ? 'Filter pathways' : `Filter pathways${active ? ` (${active} active)` : ''}`;
    });
    filterForm.addEventListener('change', () => {
      if (filterToggleBtn.getAttribute('aria-expanded') === 'false') {
        const active = persistFields.filter(k => { const el = filterForm.elements[k]; return el && el.value && el.value !== 'any' && el.value !== 'none' && el.value !== '1' && el.value !== ''; }).length;
        filterToggleBtn.textContent = `Filter pathways${active ? ` (${active} active)` : ''}`;
      }
    });
  }

  const submitBtn = form.querySelector('button[type="submit"]');

  async function loadPathways() {
    const KEY = 'goif_pathways_v1', TTL = 86400000;
    try {
      const cached = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (cached && Date.now() - cached.ts < TTL) return cached.data;
    } catch (_) {}
    const data = await loadJson('/data/pathways.json');
    try { localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
    return data;
  }

  // GOIF playbook links
  const GOIF_PLAYBOOK_LINKS = {
    'AU-dama-regional': '/blog/playbooks/professional/australia-dama-regional-stream-2026/',
    'IT-dsu-need-blind': '/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026/',
    'JP-tokyo-tech-accelerator': '/blog/guides/study/asian-nordic-tech-accelerators-africa-2026/',
    'PT-d3-highly-qualified': '/blog/playbooks/professional/portugal-d3-highly-qualified-2026/'
  };

  function renderConcessions(pathway) {
    const c = pathway.regional_concessions;
    if (!c) return '';
    const parts = [];
    if (c.age_limit_extension) parts.push('Age cap: ' + c.age_limit_extension);
    if (c.language_score_floor_reduction) parts.push('English floor reduced');
    if (c.salary_concession_percent) parts.push('Salary concession: ' + c.salary_concession_percent + '%');
    return parts.length ? '<p class="gap-concessions">Concessions: ' + parts.join(' · ') + '</p>' : '';
  }

  // Extension routes section
  function renderExtensionRoutes(profile, pathways, countries) {
    const EXTENSION_TAGS = { student: 'post-study', tourist: 'tourist-switch', work: 'pr-route', residence: 'pr-route' };
    const tag = EXTENSION_TAGS[profile.currentVisa];
    if (!tag) return '';
    const countryMap = new Map(countries.map(c => [c.id, c]));
    const ext = pathways.filter(p =>
      Array.isArray(p.wizardTags) && p.wizardTags.includes(tag) && p.status === 'publishable'
    );
    if (!ext.length) return '';
    const label = profile.currentVisa === 'student' ? 'Post-study routes from your current visa'
      : profile.currentVisa === 'tourist' ? 'Possible in-country transitions'
      : 'Onward residence and PR routes';
    const items = ext.map(p => {
      const c = countryMap.get(p.countryId);
      if (!c) return '';
      return `<li><a href="${esc(p.sourceUrl)}" rel="noopener noreferrer"><strong>${esc(c.name)} - ${esc(p.name)}</strong></a></li>`;
    }).filter(Boolean).join('');
    if (!items) return '';
    return `<section class="wizard-extension-section" style="margin-top:var(--spacing-2xl);" aria-labelledby="ext-routes-heading">
      <h2 id="ext-routes-heading">${esc(label)}</h2>
      <p class="evidence-note">Possible next steps based on your current visa status. In-country switching rules vary - verify with the official authority before acting.</p>
      <ul class="link-list">${items}</ul>
    </section>`;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Searching…';
    results.innerHTML = Array(3).fill('<div class="skeleton skeleton-card" style="margin-bottom:1rem;"></div>').join('');
    
    try {
      const [countries, pathways] = await Promise.all([loadJson('/data/countries.json'), loadPathways()]);
      const profile = Object.fromEntries(new FormData(form).entries());
      window.GlobalRoute?.Analytics?.track('route_search_started', { page_type: 'find-mypathway' });

      // Business goal - research-required state
      if (profile.goal === 'business') {
        results.innerHTML = `<div class="wizard-blocker-card">
          <strong>Business pathways - research in progress</strong>
          <p>Structured business immigration pathways (investor visas, entrepreneur routes, intra-company transfers) require additional evidence verification before they can be recommended. They are not yet in the evidence gate.</p>
          <p style="margin-top:0.75rem;">In the meantime, the <a href="/pages/visa-wizard.html">Visa Wizard</a> can surface work pathways that may be relevant to business owners operating remotely.</p>
        </div>`;
        return;
      }

      const asymmetry = profile.asymmetry || '';
      const region = profile.region || '';
      const countryCategory = new Map(countries.countries.map(c => [c.id, c.category]));

      let filteredPathways = pathways.pathways;
      if (asymmetry === 'pr-route') {
        filteredPathways = filteredPathways.filter(p => (p.wizardTags || []).includes('pr-route'));
      } else if (asymmetry) {
        filteredPathways = filteredPathways.filter(p =>
          p.capital_tier === asymmetry || p.asymmetry_category === asymmetry
        );
      }
      if (region) {
        filteredPathways = filteredPathways.filter(p => countryCategory.get(p.countryId) === region);
      }

      const { matches, alternatives, missingInput, zeroFitExplanations } = window.GlobalRoute.RouteEngine.recommend(profile, countries.countries, filteredPathways, 5);
      
      if (!missingInput) {
        window.GlobalRoute?.Analytics?.track('route_recommendation_generated', { page_type: 'find-mypathway' });
      }
      
      if (missingInput) {
        results.innerHTML = '<h2>Select a goal to continue</h2><p>Choose Study or Work above.</p>';
        return;
      }

      if (!matches.length) {
        // Near-miss gap analysis
        let gapHtml = '';
        const budget = Number(profile.budget);
        if (budget > 0 && pathways.pathways) {
          const goalPathways = pathways.pathways.filter(p => p.status === 'publishable' && p.type === profile.goal);
          let closest = null, closestGap = Infinity;
          for (const p of goalPathways) {
            const tier = (p.requirements || []).find(r => r.field === 'minimum_funds' && r.kind === 'money');
            if (!tier) continue;
            const gap = tier.value - budget;
            if (gap > 0 && gap < closestGap) { closestGap = gap; closest = { pathway: p, tier }; }
          }
          if (closest) {
            const monthlyIncome = Number(profile.monthlyIncome) || 0;
            const gapAmount = Math.round(closestGap);
            const months = monthlyIncome > 0 ? Math.ceil(gapAmount / monthlyIncome) : null;
            const timelineText = months ? ` At your stated income, you could bridge this in <strong>${months} month${months === 1 ? '' : 's'}</strong>.` : '';
            const country = countries.countries.find(c => c.id === closest.pathway.countryId);
            const countryName = country ? country.name : closest.pathway.countryId;
            const tierLabel = closest.pathway.capital_tier === 'tier_1_funded'
              ? '<span class="funded-badge">&#10022; Funded</span>'
              : closest.pathway.capital_tier === 'tier_2_moderate'
                ? '<span class="funded-badge" style="background:var(--color-amber-100,#fef3c7);color:#92400e;">Low capital route</span>'
                : '';
            const playbookUrl = GOIF_PLAYBOOK_LINKS[closest.pathway.id];
            const playbookCta = playbookUrl
              ? `<a href="${esc(playbookUrl)}" class="btn btn-secondary btn-small">Read full playbook</a>`
              : '';
            const gapCurrency = esc(closest.tier.currency);
            
            gapHtml = `<div class="gap-analysis">
              <p class="gap-analysis-heading">Closest pathway to your budget</p>
              <p><strong>${esc(countryName)} - ${esc(closest.pathway.name)}</strong> ${tierLabel}</p>
              ${renderConcessions(closest.pathway)}
              <p>Requires <strong>${gapCurrency} ${esc(String(closest.tier.value))}</strong>. You are <strong>${gapCurrency} ${esc(String(gapAmount))}</strong> short.${timelineText}</p>
              <div class="gap-savings-row">
                <label for="gap-savings-input">Monthly savings (${gapCurrency}):</label>
                <input id="gap-savings-input" type="number" min="0" step="100" placeholder="e.g. 500">
                <span class="gap-savings-result" id="gap-savings-result"></span>
              </div>
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:0.75rem;">
                <button type="button" class="btn btn-secondary btn-small" id="remove-budget-filter">Remove budget filter</button>
                <a href="/pages/calculator.html" class="btn btn-secondary btn-small">Open budget calculator</a>
                ${playbookCta}
              </div>
            </div>`;

            // Attach event listeners after render
            setTimeout(() => {
              const inp = document.getElementById('gap-savings-input');
              const out = document.getElementById('gap-savings-result');
              if (inp && out) {
                const gap = gapAmount;
                inp.addEventListener('input', () => {
                  const rate = parseFloat(inp.value);
                  if (!rate || rate <= 0) { out.textContent = ''; return; }
                  const m = Math.ceil(gap / rate);
                  out.textContent = `Ready in ${m} month${m === 1 ? '' : 's'}`;
                });
              }
              const removeBudgetBtn = document.getElementById('remove-budget-filter');
              if (removeBudgetBtn) {
                removeBudgetBtn.addEventListener('click', () => {
                  const budgetInput = document.querySelector('[name=budget]');
                  if (budgetInput) budgetInput.value = '';
                  form.dispatchEvent(new Event('submit'));
                });
              }
            }, 0);
          }
        }

        const explanationHtml = zeroFitExplanations.length
          ? '<details style="margin-top:1rem;"><summary style="cursor:pointer;font-weight:600;">Why each pathway was excluded (' + zeroFitExplanations.length + ')</summary><ul style="margin-top:0.75rem;">' +
            zeroFitExplanations.map(e => `<li><strong>${esc(e.name)}</strong>: <span class="evidence-note" style="display:inline;background:none;border:none;padding:0;">${esc(e.reason)}</span></li>`).join('') +
            '</ul></details>'
          : '';

        results.innerHTML = `<div style="text-align:center;padding:3rem 1rem;">
          <h2 style="margin-bottom:0.5rem;">No pathway matches</h2>
          <p style="color:var(--color-neutral-500);max-width:420px;margin:0 auto 1.5rem;">No publishable pathways passed the evidence gate for your inputs. Try broadening your goal or adjusting your budget.</p>
          <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary" id="reset-filters-btn">Reset filters</button>
            <a href="/pages/countries.html" class="btn btn-primary">Browse countries</a>
          </div>
        </div>` + gapHtml + explanationHtml + renderAlternatives(alternatives);

        // Attach reset handler
        setTimeout(() => {
          const resetBtn = document.getElementById('reset-filters-btn');
          if (resetBtn) {
            resetBtn.addEventListener('click', () => {
              const goalSelect = document.querySelector('[name=goal]');
              const budgetInput = document.querySelector('[name=budget]');
              if (goalSelect) goalSelect.value = 'any';
              if (budgetInput) budgetInput.value = '';
              form.dispatchEvent(new Event('submit'));
            });
          }
        }, 0);
        return;
      }

      const asymmetryNote = asymmetry 
        ? '<p class="evidence-note">Showing filtered routes only - not eligibility assessments. Confirm current requirements at the official source before acting.</p>' 
        : '<p class="evidence-note">Goal matches only - not eligibility assessments. Confirm current requirements at the official source before acting.</p>';
      
      const sortBar = `<div class="results-sort-bar">
        <span class="results-count">${matches.length} pathway${matches.length === 1 ? '' : 's'} found</span>
        <label style="display:flex;align-items:center;gap:0.4rem;margin:0;">Sort: 
          <select id="sort-select">
            <option value="default">Default</option>
            <option value="cost-asc">Cost (low to high)</option>
            <option value="cost-desc">Cost (high to low)</option>
            <option value="country">Country (A-Z)</option>
          </select>
        </label>
      </div>`;

      let currentMatches = matches.slice();

      function sortAndRender() {
        const val = document.getElementById('sort-select')?.value || 'default';
        const sorted = currentMatches.slice();
        if (val === 'cost-asc' || val === 'cost-desc') {
          sorted.sort((a, b) => {
            const getFunds = m => (m.pathway.requirements || []).find(r => r.field === 'minimum_funds')?.value || 0;
            return val === 'cost-asc' ? getFunds(a) - getFunds(b) : getFunds(b) - getFunds(a);
          });
        } else if (val === 'country') {
          sorted.sort((a, b) => a.country.name.localeCompare(b.country.name));
        }
        const cardsEl = document.getElementById('pathway-cards');
        if (cardsEl) cardsEl.innerHTML = sorted.map(renderCard).join('');
      }

      results.innerHTML = '<h2>Pathways matching your goal</h2>' + asymmetryNote + sortBar + 
        `<div id="pathway-cards">${currentMatches.map(renderCard).join('')}</div>` + 
        renderAlternatives(alternatives) + 
        renderExtensionRoutes(profile, pathways.pathways, countries.countries);

      document.getElementById('sort-select')?.addEventListener('change', sortAndRender);

      // Show export button when results exist
      document.getElementById('export-bar').hidden = false;
      window._mp2gExportData = { profile: Object.fromEntries(new FormData(form).entries()), matches, alternatives };

    } catch (error) {
      results.innerHTML = `<h2>Route engine unavailable</h2><p>${esc(error.message)}</p>`;
      document.getElementById('export-bar').hidden = true;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Find routes →';
    }
  });

  // Export JSON handler
  document.getElementById('export-json-btn')?.addEventListener('click', () => {
    const data = window._mp2gExportData;
    if (!data) return;
    const payload = {
      exportedAt: new Date().toISOString(),
      profile: data.profile,
      matches: (data.matches || []).map(m => ({
        id: m.pathway.id,
        name: m.pathway.name,
        country: m.country.name,
        sourceUrl: m.pathway.sourceUrl,
        requirements: (m.pathway.requirements || []).map(r => ({
          field: r.field,
          value: r.currency ? `${r.currency} ${r.value}` : r.value,
          effectiveDate: r.effectiveDate
        }))
      })),
      nearMiss: data.nearMiss || null
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `mypathway-plan-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  // Reset form button
  document.getElementById('reset-form-btn')?.addEventListener('click', () => {
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    results.innerHTML = '<h2>Evidence-gated pathway matches</h2><p>Select Study or Work to view pathways whose exact-route records have passed the current evidence gate. Unverified pathways will not be recommended.</p>';
    document.getElementById('export-bar').hidden = true;
  });

})();
