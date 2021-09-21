
// Los service worker deben de tener el control total de la carpeta 


// self.addEventListener('fetch', (event) => {

//     // const respFoto = fetch(event.request)
//     // // refactor de codigo
//     //                 .then( resp =>  ( resp.ok ) ? resp : fetch('./img/throme.jpeg'));
    
//     // //  el respondWith necesita retornar una respuesta 
//     // event.respondWith(   respFoto   )


// });



// SYNC: ES IDEA PARA CUANDO SE PIERDE LA CONEXION Y SE RECUPERA LA CONEXXION A INTERNET

// self.addEventListener('sync', (event) => {

//     console.log("Tenemos conexion");
//     console.log(event)
     
//     console.log(event.tag);

// });



// MANEJAR LAS PUSH NOTIFICATIONS :



self.addEventListener('push', (event) => {
    // console.log(event)

    console.log("notificacion recibida");
});