import React from 'react';
import {shallow} from 'enzyme'

import {findByTestAttr} from 'testUtils';

import Header from 'components/Header';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<Header/>);
});

it('Renders an image, a location element and a temperature element',()=>{
    const imageContainer = findByTestAttr(wrapped,'header-image-container');
    const locationContainer = findByTestAttr(wrapped,'header-location-container');
    const temperatureContainer = findByTestAttr(wrapped,'header-temperature-container');

    expect(imageContainer.length).toBe(1);
    expect(locationContainer.length).toBe(1);
    expect(temperatureContainer.length).toBe(1);
});

//Test that the location is being displayed based on the user's current position

//Test that the icon changes according to state

//Test that the degrees are connected tot he state

