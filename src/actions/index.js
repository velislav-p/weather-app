import {FETCH_DATA} from 'actions/types';


export function fetchData(){
    //Fetch data from API

    return {
        type: FETCH_DATA,
        payload: {}
    }
}