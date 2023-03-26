self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('static')
    .then(cache => {
      return cache.addAll(['./', './icon-128x128.png', './icon-192x192.png'])
    })
  )
});


self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(res => {
      return res || fetch(e.request)
    })
  )

})