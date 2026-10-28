/* MyPathway2Global — Service Worker (CP-4-T1) */
const CACHE = 'mp2g-v1';
const PRECACHE = [
  '/data/pathways.json',
  '/data/countries.json',
  '/pages/find-mypathway.html',
  '/pages/visa-wizard.html',
  '/css/styles.css?v=3',
  '/css/enhancements.css?v=3',
  '/css/responsive.css?v=3',
  '/js/app.js',
  '/js/route-engine.js',
  '/js/wizard-engine.js',
  '/js/analytics.js',
  '/js/monetization.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Cache-first for data + static assets
  if (url.pathname.startsWith('/data/') || url.pathname.startsWith('/css/') || url.pathname.startsWith('/js/')) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
    return;
  }

  // Network-first for HTML pages — fall back to cache on failure
  if (e.request.mode === 'navigate' || e.request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
