//  revisamos que el navegador pueda leer los service worker
// if ('serviceWorker' in navigator) {
//     console.log('podemos usarlo')
// }

// una de las formas mas cortas de comprobar 
if ( navigator.serviceWorker ) {
    // console.log('funcionan los SW');
    navigator.serviceWorker.register('/sw.js')
    .then( regist => {
        // setTimeout(() =>{
        //     regist.sync.register('posteo-perros');
        //     console.log("hizo el post de las fotos");
        // }, 3000);

        Notification.requestPermission()
        .then( (resultado) => {
            console.log(resultado)
            regist.showNotification('Hola mundo');
        });

    });
    // esta funcion instala el sw y si ya está instalado no lo vuelve a instalar
}
