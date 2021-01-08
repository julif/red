// use a cacheName for cache versioning
var cacheName = 'v1:static';
// new Request('https://farm6.staticflickr.com/5594/14749918329_888df4f2ef.jpg', {mode: 'no-cors'})

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(async function(cache) {
           /*  await cache.addAll([
                './',
                './css/style.css',
                './css/fonts/roboto.woff',
                './offline.html'
            ]);
            self.skipWaiting(); */
        })
    );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});