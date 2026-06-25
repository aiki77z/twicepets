const CACHE_NAME = "twice-pets-ipad-memo-v1";
const ASSETS = [
  "./ipad.html",
  "./index.html",
  "./styles.css",
  "./ipad-memo.css",
  "./app.js",
  "./ipad-memo.js",
  "./pet-data.js",
  "./manifest.webmanifest",
  "./build/icon.ico",
  "./navely/hatch-run/final/spritesheet.webp",
  "./jeongvely/hatch-run/final/spritesheet.webp",
  "./movely/hatch-run/final/spritesheet.webp",
  "./savely/hatch-run/final/spritesheet.webp",
  "./jively/hatch-run/final/spritesheet.webp",
  "./mively/hatch-run/final/spritesheet.webp",
  "./davely/hatch-run/final/spritesheet.webp",
  "./chaengvely/hatch-run/final/spritesheet.webp",
  "./tsuvely/hatch-run/final/spritesheet.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
