import React from "react";
import { shallow } from "enzyme";
import ShowWord from "./ShowWord";

it("renders without crashing", () => {
  const component = shallow(<ShowWord word="Wort" />);
  expect(component).toMatchSnapshot();
});
