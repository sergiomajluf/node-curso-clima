const api = require('../config/api');
const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ api.weatherApi }`)

    if (resp.data.cod !== 200) {
        throw new Error(`Error en coordenadas`);
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}