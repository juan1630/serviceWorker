
// Los service worker deben de tener el control total de la carpeta 


self.addEventListener('fetch', (event) => {
   
   
    // console.log(event);

    if( event.request.url.includes('.jpg') ) {

        let urlFoto = fetch( event.request );

        event.respondWith( urlFoto );
    }

    // if( event.request.url.includes('style.css') ) {
        
    //     event.respondWith( fetch( null ));
    //     // bloqueamos los estils de la aplicacion
    // }else {
    //     // respondemos con la peticion del request
    //     event.respondWith( fetch(event.request ));
    // }

});