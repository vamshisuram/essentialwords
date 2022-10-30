self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('essentialwords').then((cache) => cache.addAll([
      '/essentialwords/',
      '/essentialwords/index.html',
      '/essentialwords/index.js',
      '/essentialwords/style.css',
      '/essentialwords/images/words.png',
      '/essentialwords/icon/words.png',
      '/essentialwords/images/repeat.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
