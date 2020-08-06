import React from "react";
import { mount } from "enzyme";
import BrancolProvider from "../BrancolProvider";

import styled from "styled-components";
import toJson from "enzyme-to-json";

const Button = styled.button`
  color: ${(props) => {
    if (props.solid) return "white";
    else return props.theme.colors[props.color];
  }};
  border: ${(props) => `1px solid ${props.theme.colors[props.color]}`};
  background-color: ${(props) => {
    if (props.solid) return props.theme.colors[props.color];
    else return "white";
  }};
  font-weight: 700;
`;

const ComponentMock = () => {
  return (
    <div>
      <Button color="success" solid dataTest="btn-success-solid">
        Show Success
      </Button>
    </div>
  );
};

export const mountWithTheme = (Component, theme) =>
  mount(<BrancolProvider theme={theme}>{Component}</BrancolProvider>);

describe("BrancolProvider Theme Test", () => {
  it("should have a button solid with the default properties from the Theme", () => {
    // Wrapper with Provider
    const wrapper = mountWithTheme(<ComponentMock />);

    const Btn = wrapper.find('[dataTest="btn-success-solid"]');
    const Button = toJson(Btn).children[0];

    // Expect the following conditions
    expect(Button).toHaveStyleRule("font-weight", "700");
    expect(Button).toHaveStyleRule("color", "white");
    expect(Button).toHaveStyleRule("background-color", "#28c960");
  });

  it("should have a button solid with a custom color from the new Theme", () => {
    // Wrapper with Provider
    const wrapper = mountWithTheme(<ComponentMock />, {
      colors: { success: "#fff" },
    });

    const Btn = wrapper.find('[dataTest="btn-success-solid"]');
    const Button = toJson(Btn).children[0];

    // Expect the following conditions
    expect(Button).toHaveStyleRule("font-weight", "700");
    expect(Button).toHaveStyleRule("color", "white");
    expect(Button).toHaveStyleRule("background-color", "#fff");
  });
});
