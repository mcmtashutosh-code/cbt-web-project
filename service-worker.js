// Minimal service worker — required by Android Chrome for the
// "Add to Home Screen" install prompt to appear. Deliberately does NOT
// cache anything aggressively, since exam/practice/challenge data is
// live from Supabase and must always be fresh.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Pass every request straight through to the network — this file's
// only job is to make the app installable, not to work offline.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
