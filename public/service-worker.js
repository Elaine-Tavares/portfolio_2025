self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/app.js',
        'icons/icon-144x144.png',
        'icons/icon-192x192.png',
        'icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);// Se não estiver no cache, busca da rede
    })
  );
});

//Cache Versioning é uma técnica para garantir que o navegador sempre pegue a versão mais recente do seu site após uma atualização.

//Isso é feito alterando o nome da versão do cache, como v1, v2, etc.

//Quando atualizar a versão, é importante limpar o cache antigo, para evitar que o navegador use arquivos desatualizados.
