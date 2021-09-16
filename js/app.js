//  revisamos que el navegador pueda leer los service worker
// if ('serviceWorker' in navigator) {
//     console.log('podemos usarlo')
// }

// una de las formas mas cortas de comprobar 
if ( navigator.serviceWorker ) {
    // console.log('funcionan los SW');
    navigator.serviceWorker.register('/sw.js');
    // esta funcion instala el sw y si ya está instalado no lo vuelve a instalar
}
