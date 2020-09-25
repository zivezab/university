import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";

import Login from "./Login";

test("matches snapshot", () => {
  const wrapper = shallow(<Login />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
