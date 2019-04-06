import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


import reducers from "./reducers";


/**
 * A function that wraps the supplied element in a Provider with access to the global store
 * Used primarily for testing connected components with Enzyme
 * @param props - the children elements
 * @returns {*}
 */
export default ({children, initialState = {}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}
