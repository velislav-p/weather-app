import {actionTypes} from 'actions/types';
import openWeatherMap from 'apis/openWeatherMap';

/**
 * Action creator that connects to the OpenWeatherMap api asynchronously
 * Gets called when the App component mounts and a user shares their location
 * @param lat - integer
 * @param lon - integer
 * @returns a promise, that gets dispatched to the reducers
 */
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

/**
 * Action creator that dispatches an error message to the reducers
 * Gets called when the App component mounts and a user does not share their location
 * @param message - string
 * @returns {{payload: *, type: string}}
 */
export const throwError = (message) => {
    return {
        type : actionTypes.THROW_ERROR,
        payload : message
    }
};