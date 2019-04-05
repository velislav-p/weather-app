import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./reducers";


/**
 * A function that wraps the supplied element in a Provider with access to the global store
 * Used primarily for testing connected components with Enzyme
 * @param props - the children elements
 * @returns {*}
 */
export default ({children, initialState = {}}) => {
    return(
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    )
}
