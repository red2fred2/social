const CACHE="v1",cacheURLs=["/"];self.addEventListener("install",function(e){e.waitUntil(caches.open("v1").then(function(e){return console.log("Opened cache v1"),e.addAll(cacheURLs)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(c){return c?(console.log("service worker returned cached file"),caches.delete("v1"),caches.open("v1").then(e=>e.addAll(cacheURLs)),c):(console.log("service worker returned network file"),fetch(e.request))}))});