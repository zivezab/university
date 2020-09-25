import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Navbar from './Navbar';

test('matches snapshot', () => {
  const wrapper = shallow(<Navbar />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
