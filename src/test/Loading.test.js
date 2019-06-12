import React from "react";
import { create } from "react-test-renderer";
import Loading from '../Loading';

describe("Loading component", () => {
  test("it shows the expected text", () => {
    const component = create(<Loading />);
    const rootInstance = component.root;
    const text = rootInstance.findByType("span");
    expect(text.props.children).toBe("Loading...");
  });
});