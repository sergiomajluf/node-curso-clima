const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'La ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion } es de ${temp}°C`

    } catch {
        return `No se pudo determinar el clima en ${direccion}`
    }


};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => { console.log(e); })

/** 
 * Esto no es necesario porque ahora tenemos la promesa en getInfo
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

// Puerto Varas
// lat: -41.3167,
// lng: -72.9833

clima.getClima(-41.3167, -72.9833)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));

*/