import weatherReducer from 'reducers/weather';
import {actionTypes} from "../../actions/types";

it('Handles actions of type `FETCH_DATA`',()=>{
    const action = {
        type : actionTypes.FETCH_DATA,
        payload : {lat:200, long:300}
    };

    const newState = weatherReducer({},action);

    expect(newState).toEqual({lat:200, long:300});
});

it('Handles action with unknown type',()=>{
    const initialState = {weatherData : ""};
    const newState =  weatherReducer(initialState,{type: 'unknown', payload: ""});

    expect(newState).toEqual({weatherData : ""});
});

