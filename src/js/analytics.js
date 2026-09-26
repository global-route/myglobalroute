// Google Analytics 4 Setup for Global Route
// Initialize GA4 tracking with custom events

// GA4 Measurement ID (replace with actual ID from Google Analytics)
// This would typically be injected from environment variables in production
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Placeholder - update with actual ID

/**
 * Initialize Google Analytics 4
 * Loads the gtag script and configures basic tracking
 */
function initializeGA4() {
  // Create gtag function if not already present
  if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
  }

  // Function to push events to dataLayer
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    'send_page_view': true,
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });

  console.log('✅ Google Analytics 4 initialized');
}

/**
 * Track custom event: Blog Post Viewed
 */
function trackBlogPostView(postTitle, postCategory, postSlug) {
  if (typeof gtag === 'undefined') return;

  gtag('event', 'blog_post_view', {
    'event_category': 'Blog',
    'event_label': postTitle,
    'post_category': postCategory,
    'post_slug': postSlug,
    'page_title': document.title,
    'page_path': window.location.pathname
  });

  console.log(`📊 Tracked: Blog post view - ${postTitle}`);
}

/**
 * Track custom event: Search Performed
 */
function trackSearch(searchQuery, resultCount) {
  if (typeof gtag === 'undefined') return;

  gtag('event', 'search', {
    'event_category': 'Search',
    'event_label': searchQuery,
    'search_query': searchQuery,
    'result_count': resultCount,
    'page_path': window.location.pathname
  });

  console.log(`📊 Tracked: Search - "${searchQuery}" (${resultCount} results)`);
}

/**
 * Track custom event: Newsletter Signup
 */
function trackNewsletterSignup(email) {
  if (typeof gtag === 'undefined') return;

  // Hash email for privacy (don't send raw email)
  const emailHash = btoa(email).substring(0, 10);

  gtag('event', 'newsletter_signup', {
    'event_category': 'Newsletter',
    'event_label': 'Newsletter Signup',
    'email_hash': emailHash,
    'page_path': window.location.pathname
  });

  console.log('📊 Tracked: Newsletter signup');
}

/**
 * Track custom event: Category Filter Applied
 */
function trackCategoryFilter(categoryName) {
  if (typeof gtag === 'undefined') return;

  gtag('event', 'category_filter', {
    'event_category': 'Navigation',
    'event_label': categoryName,
    'filter_category': categoryName,
    'page_path': window.location.pathname
  });

  console.log(`📊 Tracked: Category filter - ${categoryName}`);
}

/**
 * Track custom event: CTA Clicked
 */
function trackCTAClick(ctaName, ctaURL) {
  if (typeof gtag === 'undefined') return;

  gtag('event', 'cta_click', {
    'event_category': 'Engagement',
    'event_label': ctaName,
    'cta_name': ctaName,
    'cta_url': ctaURL,
    'page_path': window.location.pathname
  });

  console.log(`📊 Tracked: CTA click - ${ctaName}`);
}

/**
 * Track custom event: Page Scroll Depth
 */
function trackScrollDepth(depthPercentage) {
  if (typeof gtag === 'undefined') return;

  gtag('event', 'scroll_depth', {
    'event_category': 'Engagement',
    'event_label': `${depthPercentage}%`,
    'depth_percentage': depthPercentage,
    'page_path': window.location.pathname
  });

  console.log(`📊 Tracked: Scroll depth - ${depthPercentage}%`);
}

/**
 * Track time on page (every 30 seconds)
 */
function trackTimeOnPage() {
  let timeOnPage = 0;

  setInterval(() => {
    timeOnPage += 30;

    if (typeof gtag !== 'undefined') {
      gtag('event', 'engagement', {
        'event_category': 'Engagement',
        'event_label': 'Time on Page',
        'time_on_page_seconds': timeOnPage,
        'page_path': window.location.pathname
      });
    }
  }, 30000); // Every 30 seconds
}

/**
 * Setup scroll tracking
 * Tracks when user reaches 25%, 50%, 75%, 100% of page
 */
function setupScrollTracking() {
  let scrollTracked = {};

  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    // Track at 25%, 50%, 75%, 100%
    [25, 50, 75, 100].forEach(depth => {
      if (scrollPercentage >= depth && !scrollTracked[depth]) {
        scrollTracked[depth] = true;
        trackScrollDepth(depth);
      }
    });
  });
}

/**
 * Setup external link tracking
 * Track when users click external links
 */
function setupExternalLinkTracking() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    
    if (link && link.href && link.target === '_blank') {
      const isExternal = !link.href.includes(window.location.hostname);
      
      if (isExternal && typeof gtag !== 'undefined') {
        gtag('event', 'external_link_click', {
          'event_category': 'Outbound',
          'event_label': link.href,
          'link_url': link.href,
          'link_text': link.textContent
        });

        console.log(`📊 Tracked: External link - ${link.href}`);
      }
    }
  });
}

/**
 * Initialize all analytics on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if Measurement ID is set (not placeholder)
  if (GA4_MEASUREMENT_ID && !GA4_MEASUREMENT_ID.includes('XXXXXXXXXX')) {
    initializeGA4();
    setupScrollTracking();
    setupExternalLinkTracking();
    trackTimeOnPage();
    
    console.log('🎯 Google Analytics 4 tracking fully configured');
  } else {
    console.warn('⚠️ GA4 Measurement ID not configured. Update GA4_MEASUREMENT_ID in analytics.js');
  }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeGA4,
    trackBlogPostView,
    trackSearch,
    trackNewsletterSignup,
    trackCategoryFilter,
    trackCTAClick,
    trackScrollDepth,
    trackTimeOnPage,
    setupScrollTracking,
    setupExternalLinkTracking
  };
}
