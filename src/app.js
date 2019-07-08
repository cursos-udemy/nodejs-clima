const colors = require('colors');
const { argv } = require('./config/yargs');

const { findCity } = require('./services/cityService');
const { getWeather } = require('./services/weatherServices');

console.info('Clima App started ...'.bold.green);

const getInfoWeather = async (city) => {
    try {
        const cityInfo = await findCity(argv.city);
        const cityWeather = await getWeather(cityInfo.latitude, cityInfo.longitude);
        return `El clima de `.bold + `"${cityInfo.city}"`.bold.yellow.italic + ` es de `.bold + `${cityWeather}`.bold.yellow.italic;
    } catch (erro) {
        throw new Error(`No se pudo encontrar la temperatura para la ciudad "${city}"`);
    }
}

getInfoWeather(argv.city)
    .then(console.info)
    .catch(err => console.error(err.message.red.bold));


