import weatherReducer from 'reducers/weather';
import { FETCH_DATA} from "../../actions/types";

it('Handles actions of type `SAVE_COMMENT`',()=>{
    const action = {
        type : FETCH_DATA,
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

