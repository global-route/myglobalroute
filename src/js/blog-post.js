/**
 * MyPathway2Global — Blog Post
 * Minimal JS for article pages
 */

(function() {
  'use strict';

  // Smooth scroll for in-page anchor links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, null, '#' + targetId);
  });

})();
