//
const API = 'https://rickandmortyapi.com/api/character/'
//Obteniendo los datos de la API
const getData = async (id) => {
    //Si recibe un id, se concatena el id a la url de la API, sino recibe un id retorna la url del home para mostrar todos los personajes.
    const apiUrl = id ? `${API}${id}` : API;
    //Fetch de los elementos
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;