import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Home from './Home';

test('matches snapshot', () => {
  const wrapper = shallow(<Home />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
