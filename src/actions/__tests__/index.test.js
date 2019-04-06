import {fetchData, throwError} from "actions/index";
import {actionTypes} from "actions/types";

import thunk from 'redux-thunk';
import moxios from 'moxios';
import {applyMiddleware, createStore} from "redux";



describe('fetchData action creator',()=>{
    it('Calls the',()=>{

    });
    const weatherData = {
        location : "",
        degrees : "",
        forecast : "",
    };

    beforeEach(()=>{
        moxios.install();
        moxios.stubRequest('http://api.openweathermap.org//data/2.5/weather?lat={lat}&lon={lon}',{
            status: 200,
            response: weatherData
        })
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    // it('Adds the API response to the state',()=>{
    //
    //     moxios.wait(()=>{
    //         const request = moxios.requests.mostRecent();
    //
    //         request.respondWith({
    //             status : 200,
    //             response: weatherData
    //         });
    //
    //         const store = createStore(reducers, {}, applyMiddleware(thunk));
    //         return store.dispatch(fetchData())
    //             .then(()=>{
    //                 const newState = store.getState();
    //                 expect("12").toBe(weatherData);
    //                 done();
    //             });
    //     });
    // });
});


describe('throwError action creator',()=>{
    let action = throwError();
    it('Has the correct type',()=>{
        expect(action.type).toEqual(actionTypes.THROW_ERROR);
    });

    it('Has the correct payload',()=>{
        const errorMsg = "Error message";
        action = throwError(errorMsg);

        expect(action.payload).toEqual('Error message');
    })
});