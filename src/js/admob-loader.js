/* AdSense adapter — wires Google AdSense into GlobalRoute.Monetization */
(function () {
  'use strict';

  const PUBLISHER_ID = 'ca-pub-8077583188666813';

  // Load the AdSense script once, async, after consent check
  function loadScript() {
    if (document.querySelector('script[data-adsense]')) return;
    const s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
    s.dataset.adsense = '1';
    document.head.appendChild(s);
  }

  // Adapter: mount() is called by monetization.js mountSlots() for each visible slot
  const adsenseAdapter = {
    mount(host, { slotId }) {
      // Clear any previous content
      host.replaceChildren();
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.dataset.adClient = PUBLISHER_ID;
      ins.dataset.adSlotId = slotId;
      ins.dataset.adFormat = 'auto';
      ins.dataset.fullWidthResponsive = 'true';
      host.appendChild(ins);
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { /* script not yet loaded — AdSense queues the push */ }
      return true;
    }
  };

  function init() {
    const M = window.GlobalRoute?.Monetization;
    if (!M) return;
    const analytics = window.GlobalRoute?.Analytics;
    const consentGranted = analytics?.getAdvertisingConsentState?.() === 'granted';
    if (!consentGranted) return;
    loadScript();
    M.setAdProvider(adsenseAdapter);
    M.mountSlots({ consentGranted: true });
  }

  // Run after consent may have been set (analytics.js fires consent events)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also re-run if consent is granted after page load
  window.addEventListener('gr:consent:advertising:granted', init);
})();
