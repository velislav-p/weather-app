import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


/**
 * Mocking the geolocation function otherwise Enzyme throws an error
 */

const mockGeoLocation = {
    getCurrentPosition  : jest.fn()
};
global.navigator.geolocation = mockGeoLocation;