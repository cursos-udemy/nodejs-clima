const axios = require('axios');
const colors = require('colors');

const headers = {
    'X-RapidAPI-Key': 'a6ec1a0c0dmsh48b9eaccdade4c9p1b9712jsn92e91ba539f6',
    'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
};

const timeoutRequest = 5000;

const BASE_URL = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';

const createAxiosInstance = (url) => {
    const instance = axios.create({
        baseURL: url,
        timeout: timeoutRequest,
        headers
    });
    return instance;
};

const findCity = async (citySearch) => {
    console.info('find city: '.bold, citySearch.bold.cyan);
    const instance = createAxiosInstance(`${BASE_URL}?location=${encodeURI(citySearch)}`);
    const response = await instance.get();
    if (response.status !== 200) {
        throw new Error ('Error al consulta las ciudades!');
    } 
    if (response.data.Results.length === 0) {
        throw new Error (`No se encontraron ciudades para la busqueda "${citySearch}"`);
    }
    const result = response.data.Results[0];
    return { city: result.name, country: result.c, latitude: result.lat, longitude: result.lon };
}

module.exports = {
    findCity
};