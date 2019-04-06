import {actionTypes} from 'actions/types';


export default (state = null, action) => {

    switch (action.type){

        case (actionTypes.FETCH_DATA) :
            return action.payload;
        case (actionTypes.THROW_ERROR) :
            return {
                errorMessage : action.payload
            };
        default:
            return state;
    }
};
