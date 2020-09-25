import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import FavoriteButton from './FavoriteButton';

test('matches snapshot', () => {
  const wrapper = shallow(<FavoriteButton />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
