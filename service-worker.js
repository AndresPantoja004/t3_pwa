const CACHE_NAME = "clima-pwa-v1.1";
const FILES_TO_CACHE = [
  "./", 
  "./index.html",
  "./src/css/style.css",
  "./src/js/app.js",
  "/assets/icon-144.png",
  "/assets/icon-96.png"
];

// INSTALL: Cachear archivos del App Shell
self.addEventListener("install", (event) => {
  console.log("Instalando y cacheando App Shell...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE: Limpiar caches antiguos
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Eliminando caché viejo:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH: Estrategia "Cache First"
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("api.openweathermap.org")) {
    event.respondWith(
      caches.open("weather-cache").then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse; // ✅ Respuesta desde cache
        }

        // Si no hay cache, hago la petición a la API
        return fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone()); // ✅ Guardar en cache
          return networkResponse;
        });
      })
    );
  }
});

