import React from "react";
import { shallow } from "enzyme";
import { LOADING_STATE } from "../actionTypes";
import Game from "./Game";
import Button from "react-bootstrap/lib/Button";

describe("Game", () => {
  test("renders without crashing", () => {
    const component = shallow(<Game loadingState={LOADING_STATE.READY} />);
    expect(component).toMatchSnapshot();
  });

  test("renders disabled button while loading", () => {
    const component = shallow(<Game loadingState={LOADING_STATE.LOADING} />);
    expect(component.find(Button).prop("disabled")).toBe(true);
  });
});
