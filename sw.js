self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{caches.keys().then(k=>k.forEach(c=>caches.delete(c))); self.clients.claim()});
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request)));
