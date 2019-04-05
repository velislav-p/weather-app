import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr} from 'testUtils';

import Main from 'components/Main';

describe('Render',()=>{
   it('Renders two components that display text',()=>{
      const wrapped = shallow(<Main/>);

      const dayContainer = findByTestAttr(wrapped,'main-day-container');
      const messageContainer = findByTestAttr(wrapped,'main-message-container');

      expect(dayContainer.length).toBe(1);
      expect(messageContainer.length).toBe(1);
   });
});