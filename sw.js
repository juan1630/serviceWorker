
// Los service worker deben de tener el control total de la carpeta 


self.addEventListener('fetch', (event) => {

    const respFoto = fetch(event.request)
    // refactor de codigo
                    .then( resp =>  ( resp.ok ) ? resp : fetch('./img/throme.jpeg'));
    
    //  el respondWith necesita retornar una respuesta 
    event.respondWith(   respFoto   )

});