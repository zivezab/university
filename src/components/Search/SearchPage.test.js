import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";

import SearchPage from "./SearchPage";

test("matches snapshot", () => {
  const wrapper = shallow(<SearchPage />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
