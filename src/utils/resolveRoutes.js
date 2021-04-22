/* Funcion que muestra el template segun la ruta que se ha obtenido */
const resolveRoutes = (route) => {
    //Validando que los ids no sean mayor a 3 caracteres
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    //Si la ruta es 'about' se salta el if anterior y nos dirige a esta pagina
    return `/${route}`; 
};

export default resolveRoutes;