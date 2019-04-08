import {fetchData} from "actions";
import axiosInstance from "apis/openWeatherMap";
import reducers from "reducers";
import Root from "Root";
import App from "components/App";

import React from "react";
import moxios from "moxios";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {mount} from "enzyme";


describe('fetchData action creator and reducer',()=>{
    let action = fetchData();
    beforeEach(()=>{
        moxios.install(axiosInstance);
    });
    afterEach(()=>{
        moxios.uninstall(axiosInstance);
    });

    it('Updates the `weatherData` state with data from the API response',()=>{
        const store = createStore(reducers, {}, applyMiddleware(thunk));
        mount(<Root><App/></Root>);

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response: "weatherData"
            })
        });

        return store.dispatch((action))
            .then(()=>{
                const newState = store.getState();
                expect(newState.weatherData).toEqual("weatherData");
            })

    });
});
