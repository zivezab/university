import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import UniversityCards from './UniversityCards';

test('matches snapshot', () => {
  const wrapper = shallow(<UniversityCards />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
