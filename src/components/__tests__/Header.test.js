import React from 'react';
import {shallow} from 'enzyme'

import Header from 'components/Header';

/**
 * A utility function for finding elements based on a data-test attribute
 * @param wrapped - an Enzyme wrapped object
 * @param value - the data-test value found in the DOM
 * @returns {*}
 */
const findElementByTestAttr = (wrapped, value) => {
  return wrapped.find(`[data-test="${value}"]`);
};


let wrapped;

beforeEach(()=>{
    wrapped = shallow(<Header/>);
});

it('Renders an image, a location element and a temperature element',()=>{
    const imageComponent = findElementByTestAttr(wrapped,'header-image-container');
    const locationComponent = findElementByTestAttr(wrapped,'header-location-container');
    const temperatureComponent = findElementByTestAttr(wrapped,'header-temperature-container');

    expect(imageComponent.length).toBe(1);
    expect(locationComponent.length).toBe(1);
    expect(temperatureComponent.length).toBe(1);
});

//Test that the location is being displayed based on the user's current position

//Test that the icon changes according to state

//Test that the degrees are connected tot he state

