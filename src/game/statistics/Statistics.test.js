import React from "react";
import { shallow } from "enzyme";
import Statistics from "./Statistics";

describe("Statistics", () => {
  it("renders without crashing", () => {
    const component = shallow(<Statistics lifes={2} counter={5} />);
    expect(component).toMatchSnapshot();
  });
});
