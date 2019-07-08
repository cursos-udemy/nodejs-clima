const argv = require('yargs')
    .options({ ciudad: { alias: 'c', demand: true, desc: 'ciudad para obtener el clima' } })
    .help()
    .argv;

module.exports = {
    argv
};