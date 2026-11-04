/**
 * MyPathway2Global — Blog Post
 * Enhanced JS for article pages
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

  // Wrap tables in scrollable container for mobile
  function wrapTables() {
    const tables = document.querySelectorAll('.article-body table');
    tables.forEach(function(table) {
      if (table.parentElement.classList.contains('table-wrapper')) return;
      
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      
      // Check if table overflows and add indicator class
      function checkOverflow() {
        if (wrapper.scrollWidth > wrapper.clientWidth) {
          wrapper.classList.add('has-overflow');
        } else {
          wrapper.classList.remove('has-overflow');
        }
      }
      
      checkOverflow();
      window.addEventListener('resize', checkOverflow);
    });
  }

  // Add reading progress indicator
  function initReadingProgress() {
    const article = document.querySelector('.article-body');
    if (!article) return;
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = 'position:fixed;top:70px;left:0;height:3px;background:#0b409c;z-index:100;width:0;transition:width 0.1s;';
    document.body.appendChild(progressBar);
    
    function updateProgress() {
      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      const start = articleTop - windowHeight;
      const end = articleTop + articleHeight - windowHeight;
      const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
      
      progressBar.style.width = (progress * 100) + '%';
    }
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // Add accessibility improvements to tables
  function enhanceTableAccessibility() {
    const tables = document.querySelectorAll('.article-body table');
    tables.forEach(function(table, index) {
      // Add caption if missing
      if (!table.querySelector('caption')) {
        const caption = document.createElement('caption');
        caption.className = 'sr-only';
        caption.textContent = 'Data table ' + (index + 1);
        table.insertBefore(caption, table.firstChild);
      }
      
      // Add scope to headers
      const headers = table.querySelectorAll('th');
      headers.forEach(function(th) {
        if (!th.hasAttribute('scope')) {
          th.setAttribute('scope', 'col');
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    wrapTables();
    initReadingProgress();
    enhanceTableAccessibility();
  }

})();
