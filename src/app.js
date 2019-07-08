const colors = require('colors');
const { argv } = require('./config/yargs');

const { findCity } = require('./services/cityService');

console.info('Clima App started ...'.bold.green);

findCity(argv.city)
    .then(city => console.info('City info: '.bold, city))
    .catch(error => console.error(error.message.bold.red));