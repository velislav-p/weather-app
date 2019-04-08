/**
Axios instance used for connecting to the OpenWeatherMap API
 */

import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5',
})