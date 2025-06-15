// Service worker básico para habilitar a funcionalidade de PWA
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado com sucesso.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
