import React from 'react';
import {mount, shallow} from 'enzyme';

import App from 'components/App';
import Main from 'components/Main';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Root from 'Root';

let wrapped;


const setup = (initialState) => {
    return mount(<Root initialState={initialState}><App/></Root>);
};

afterEach = () => {
    wrapped.unmount();
};
describe('Render',()=>{

    describe('With data from API',()=>{
        const initialState = {
            weatherData: {
                location: 'Odense',
                temperature: '23',
                forecast: 'cloudy'
            }
        };
        it('Renders `Header` element correctly',()=>{
            wrapped = setup(initialState);
            expect(wrapped.find(Header).length).toBe(1);
        });

        it('Renders `Main` element correctly',()=>{
            wrapped = setup(initialState);
            expect(wrapped.find(Main).length).toBe(1);
        });
    });

    describe('Before data from API',()=>{
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


