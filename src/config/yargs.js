const argv = require('yargs')
    .options({ city: { alias: 'c', demand: true, desc: 'ciudad para obtener el clima' } })
    .help()
    .argv;

module.exports = {
    argv
};