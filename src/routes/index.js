//Importando templates y paginas
import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

//Rutas que tendra la aplicacion
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

//Manejador que se encarga de mostrar los objetos
const router = async () => {
    //Variables para saber donde mostraremos los datos
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    //Obteniendo el hash de la ruta
    let hash = getHash();
    //Manejando la ruta
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML =  await render();
};

export default router;