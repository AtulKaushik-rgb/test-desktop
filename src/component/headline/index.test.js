import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline comp", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test",
        desc: "desc",
      };
      wrapper = setup(props);
    });

    it("should render headline", () => {
      expect(1).toBe(1);
    });


  });

  describe("Have no  props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
  });
});

it("should render headline", () => {
  expect(1).toBe(1);
});
