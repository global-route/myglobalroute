/**
 * Global Route: AdMob Loader Module
 * Manages Google AdMob integration
 */

const AdMobLoader = (() => {
  // Configuration
  const config = {
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with actual Publisher ID
    delayLoadMs: 3000,
    enabled: true,
    adUnits: {
      homepageFeatured: 'div-gpt-ad-1234567890',
      articleSidebar: 'div-gpt-ad-0987654321',
      articleNative: 'div-gpt-ad-1122334455',
      mobileFooter: 'div-gpt-ad-5566778899',
      stickyHeader: 'div-gpt-ad-9988776655'
    }
  };

  // State
  let state = {
    adsLoaded: 0,
    adsClicked: 0,
    initialized: false
  };

  /**
   * Initialize AdMob
   */
  const init = async () => {
    if (state.initialized) return;
    if (!config.enabled) {
      console.log('AdMob is disabled');
      return;
    }

    try {
      // Load Google AdSense script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.publisherId}`;
      script.onload = () => {
        state.initialized = true;
        console.log('AdMob script loaded');
      };
      script.onerror = () => {
        console.warn('Failed to load AdMob script');
      };
      document.head.appendChild(script);

      // Delay ad loading for performance
      delayLoadAds();
    } catch (error) {
      console.error('AdMob initialization error:', error);
    }
  };

  /**
   * Delay ad loading
   */
  const delayLoadAds = () => {
    setTimeout(() => {
      loadAllAds();
    }, config.delayLoadMs);
  };

  /**
   * Load all ad units
   */
  const loadAllAds = () => {
    if (!state.initialized) return;

    // Load specific ad placements
    loadAdUnit('homepageFeatured', '.featured-section');
    loadAdUnit('articleSidebar', '.article-sidebar');
    loadAdUnit('articleNative', '.country-cards-container');
    loadAdUnit('mobileFooter', 'footer');
    loadAdUnit('stickyHeader', 'header');
  };

  /**
   * Load single ad unit
   */
  const loadAdUnit = (unitKey, selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
      const adContainer = document.createElement('div');
      adContainer.className = 'adsbygoogle';
      adContainer.setAttribute('data-ad-client', config.publisherId);
      
      // Set ad format
      if (unitKey === 'articleNative') {
        adContainer.setAttribute('data-ad-format', 'native');
        adContainer.setAttribute('data-ad-layout', 'in-article');
        adContainer.setAttribute('data-ad-layout-key', '-gn-1+4x-6k-27');
      } else {
        adContainer.setAttribute('data-ad-format', 'rectangle');
      }

      element.appendChild(adContainer);

      // Push ad to AdSense
      if (window.adsbygoogle) {
        (adsbygoogle = window.adsbygoogle || []).push({});
        state.adsLoaded++;
      }
    } catch (error) {
      console.warn(`Failed to load ad unit ${unitKey}:`, error);
    }
  };

  /**
   * Track ad click
   */
  const trackAdClick = () => {
    state.adsClicked++;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ad_click', {
        ad_count: state.adsClicked
      });
    }
  };

  /**
   * Get ad status
   */
  const getStatus = () => ({
    initialized: state.initialized,
    adsLoaded: state.adsLoaded,
    adsClicked: state.adsClicked,
    publisherId: config.publisherId
  });

  // Initialize when DOM is ready
  const initWhenReady = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  };

  // Public API
  return {
    init,
    initWhenReady,
    loadAllAds,
    trackAdClick,
    getStatus
  };
})();

// Initialize AdMob
AdMobLoader.initWhenReady();
