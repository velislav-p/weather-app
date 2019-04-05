import {combineReducers} from 'redux';
import weatherReducer from 'reducers/weather';

export default combineReducers({
    weatherData : weatherReducer
});