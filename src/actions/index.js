import {actionTypes} from 'actions/types';
import openWeatherMap from 'apis/openWeatherMap';


export const fetchData = (lat, lon) => {
    return (dispatch) => {
        return openWeatherMap.get('/weather', {params :{
                lat: lat,
                lon: lon,
                appid: 'fce19d58cf2749138e64640c8fce41a5'
        }})
            .then(response=>{
                dispatch({
                    type : actionTypes.FETCH_DATA,
                    payload: response.data
                })
            })
    }
};


export const throwError = (message) => {
    return {
        type : actionTypes.THROW_ERROR,
        payload : message
    }
};