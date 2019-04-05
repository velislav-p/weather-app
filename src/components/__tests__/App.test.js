import React from 'react';
import {shallow} from 'enzyme';

import App from 'components/App';
import Main from 'components/Main';
import Header from 'components/Header';
import {findByTestAttr} from 'testUtils';

let wrapped;


beforeEach(() => {
    wrapped = shallow(<App />);
});

describe('Render',()=>{

    it('Renders `Header` element correctly',()=>{
        expect(wrapped.find(Header).length).toBe(1);
    });

    it('Renders `Main` element correctly',()=>{
        expect(wrapped.find(Main).length).toBe(1);
    });
});


