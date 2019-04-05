import React from 'react';
import {shallow, mount} from 'enzyme'

import {findByTestAttr} from 'testUtils';
import Root from 'Root';
import Header from 'components/Header';

let wrapped;

const setup = (initialState) => {
    return mount(<Root initialState={initialState}><Header/></Root>);
};

describe('Render',()=>{
    it('Renders an image, a location container and a temperature container when state is not empty',()=>{
        const initialState = {
            weatherData: {}
        };
        wrapped = setup(initialState);
        const imageContainer = findByTestAttr(wrapped,'header-image-container');
        const locationContainer = findByTestAttr(wrapped,'header-location-container');
        const temperatureContainer = findByTestAttr(wrapped,'header-temperature-container');

        expect(imageContainer.length).toBe(1);
        expect(locationContainer.length).toBe(1);
        expect(temperatureContainer.length).toBe(1);

        wrapped.unmount();
    });

    it('Does not render elements when state is empty',()=>{
        wrapped = setup({});
        const imageContainer = findByTestAttr(wrapped,'header-image-container');
        const locationContainer = findByTestAttr(wrapped,'header-location-container');
        const temperatureContainer = findByTestAttr(wrapped,'header-temperature-container');

        expect(imageContainer.length).toBe(0);
        expect(locationContainer.length).toBe(0);
        expect(temperatureContainer.length).toBe(0);

        wrapped.unmount();
    });

    it('Renders Header with props mapped from state',()=>{
        const initialState = {
            weatherData: {
                location: 'Odense',
                temperature: '23',
                forecast: 'cloudy'
            }
        };
        wrapped = setup(initialState);
        expect(wrapped.props().initialState).toEqual(initialState);

        wrapped.unmount();
    });

});
