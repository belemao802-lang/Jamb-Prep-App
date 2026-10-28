// Jamb Prep App - makes the app work offline after the first visit
const V = 'jp-v4';
const CORE = [
  './', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'content/jamb-catalog.js', 'content/interactive-content.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js'
];
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(V)
      .then((c) => Promise.all(CORE.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.hostname.endsWith('supabase.co')) return; // never cache sign-in or data requests
  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then((hit) => {
      const net = fetch(r)
        .then((res) => {
          if (res && res.ok && (u.origin === location.origin || u.hostname === 'cdn.jsdelivr.net')) {
            const copy = res.clone();
            caches.open(V).then((c) => c.put(r, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
