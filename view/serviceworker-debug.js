/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  const CACHE = 'v1',
      cacheURLs = ['/']

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(cacheURLs)
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) {
        
        caches.delete(CACHE)
        caches.open(CACHE).then(function(cache) {
          cache.addAll(cacheURLs)
        })
        return response
      } else {
        return fetch(event.request)
      }
    })
  )
})
