import React from 'react';
import {mount} from 'enzyme';

import App,{RawApp} from 'components/App';
import Main from 'components/Main';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Root from 'Root';
import {APIresponseObject} from "testUtils";

let wrapped;


const setup = (initialState) => {
    return mount(<Root initialState={initialState}><App/></Root>);
};

afterEach = () => {
    wrapped.unmount();
};
describe('Render',()=>{

    describe('Render content with data from state',()=>{
        const initialState = APIresponseObject;
        it('Renders `Header` element correctly',()=>{
            wrapped = setup(initialState);
            expect(wrapped.find(Header).length).toBe(1);
        });

        it('Renders `Main` element correctly',()=>{
            wrapped = setup(initialState);
            expect(wrapped.find(Main).length).toBe(1);
        });
    });

    describe('Render elements before data from state',()=>{
        it('Renders a Loader component',()=>{
            wrapped = setup({});
            expect(wrapped.find(Loader).length).toBe(1);
        });

        it('Does not render Header and Main components',()=>{
            wrapped = setup({});
            expect(wrapped.find(Header).length).toBe(0);
            expect(wrapped.find(Main).length).toBe(0);
        });
    })
});

describe("Call action",()=>{
    const fetchDataMock = jest.fn();
    const props = {
        fetchData : fetchDataMock
    };
    describe('User accepts to share location',()=>{
        global.navigator.geolocation = {
            getCurrentPosition  : jest.fn()
                .mockImplementationOnce(
                    (success)=>Promise.resolve(success({
                        coords: {
                            latitude: 12,
                            longitude: 10
                        }
                    })))
        };
        wrapped = mount(<RawApp {...props}/>);

        it("Calls the fetchData action creator when component is mounted",()=>{
            const getFetchDataMockCount = fetchDataMock.mock.calls.length;
            expect(getFetchDataMockCount).toBe(1);
        });
    });
});
