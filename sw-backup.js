
// Los service worker deben de tener el control total de la carpeta 


self.addEventListener('fetch', (event) => {
   
   
    // intercepatmos la peticion de la imagen
    if( event.request.url.includes('main.jpg') ) {

        let fotoPatasArriba = fetch('./img/main-patas-arriba.jpg');

        event.respondWith( fotoPatasArriba );
    }   

    // intersectamos la peticion
    // if( event.request.url.includes('style.css') ) {

    //     // let urlFoto = fetch( event.request );

    //     // event.respondWith( urlFoto );

    //     let respuesta = new Response(`
    //         body {
    //             background-color: red !important;
    //             color: pink;
    //         }
    //     `, { 
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //      });

    //      event.respondWith( respuesta );

    // }

    // if( event.request.url.includes('style.css') ) {
        
    //     event.respondWith( fetch( null ));
    //     // bloqueamos los estils de la aplicacion
    // }else {
    //     // respondemos con la peticion del request
    //     event.respondWith( fetch(event.request ));
    // }

});