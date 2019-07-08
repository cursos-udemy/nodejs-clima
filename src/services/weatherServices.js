const axios = require('axios');
const colors = require('colors');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '07a0f146443fe3674e70be2570e99a2f';

const getWeather = async (lat, lon) => {
    console.info('weather for geographic coordinates: '.bold, 'lat: ', `${lat}`.bold.cyan, ', lon: ', `${lon}`.bold.cyan);
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`);
    if (response.status !== 200) {
        throw new Error ('Error al consulta la temperatura!');
    } 
    if (!response.data) {
        throw new Error (`No se obtuvo la temperatura para: lat: ${lat}, lon: ${lon}`);
    }
    return response.data.main.temp; 
}

module.exports = {
    getWeather
}