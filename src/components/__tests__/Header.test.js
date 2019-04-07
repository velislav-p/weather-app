import React from 'react';
import {shallow, mount} from 'enzyme'

import {findByTestAttr} from 'testUtils';
import Root from 'Root';
import Header from 'components/Header';

let wrapped;

const setup = (initialState) => {
    return mount(<Root initialState={initialState}><Header/></Root>);
};

afterEach = () => {
    wrapped.unmount();
};

const initialState = {
    weatherData: {
        name: 'Odense',
        main :{temp: 23},
        weather: [{main : 'Clouds'}]
    }
};

describe('Render',()=>{
    it('Renders an image, a location container and a temperature container',()=>{
        wrapped = setup(initialState);
        const imageContainer = findByTestAttr(wrapped,'header-image-container');
        const locationContainer = findByTestAttr(wrapped,'header-location-container');
        const temperatureContainer = findByTestAttr(wrapped,'header-temperature-container');

        expect(imageContainer.length).toBe(1);
        expect(locationContainer.length).toBe(1);
        expect(temperatureContainer.length).toBe(1);

    });

    it('Renders Header with props mapped from state',()=>{
        wrapped = setup(initialState);
        expect(wrapped.props().initialState).toEqual(initialState);
    });
});


