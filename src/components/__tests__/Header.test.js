import React from 'react';
import {mount} from 'enzyme'

import {findByTestAttr, APIresponseObject} from 'testUtils';
import Root from 'Root';
import Header from 'components/Header';

let wrapped;

/*
Mounting the App component with the required Provider component and store
 */
const setup = (initialState) => {
    return mount(<Root initialState={initialState}><Header/></Root>);
};

afterEach = () => {
    wrapped.unmount();
};

describe('Render',()=>{
    it('Renders an image, a location container and a temperature container',()=>{
        wrapped = setup(APIresponseObject);
        const imageContainer = findByTestAttr(wrapped,'header-image-container');
        const locationContainer = findByTestAttr(wrapped,'header-location-container');
        const temperatureContainer = findByTestAttr(wrapped,'header-temperature-container');

        expect(imageContainer.length).toBe(1);
        expect(locationContainer.length).toBe(1);
        expect(temperatureContainer.length).toBe(1);

    });

    it('Renders Header with props mapped from state',()=>{
        wrapped = setup(APIresponseObject);
        expect(wrapped.props().initialState).toEqual(APIresponseObject);
    });
});


