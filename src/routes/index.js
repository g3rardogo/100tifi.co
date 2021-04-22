//Importando templates y paginas
import Header from '../templates/header'
import Home from '../pages/home'
import Character from '../pages/character'
import Error404 from '../pages/error404'

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
};

export default router;