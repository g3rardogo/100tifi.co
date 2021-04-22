import router from './routes'
//Si se ha cargado la pagina se ejecutara el codigo
window.addEventListener('load', router);

//Listener que se encargara de escuchar las rutas a la que me estoy moviendo
window.addEventListener('hashchange', router)