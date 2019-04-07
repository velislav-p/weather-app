import React from 'react';

import {mount} from 'enzyme';
import Root from 'Root';
import {findByTestAttr, APIresponseObject} from 'testUtils';
import Main from 'components/Main';

describe('Render',()=>{

   it('Renders two components that display text',()=>{
      const wrapped = mount(<Root initialState={APIresponseObject}><Main/></Root>);

      const dayContainer = findByTestAttr(wrapped,'main-day-container');
      const messageContainer = findByTestAttr(wrapped,'main-message-container');

      expect(dayContainer.length).toBe(1);
      expect(messageContainer.length).toBe(1);
   });

});