import React from "react";
import { create } from "react-test-renderer";
import SearchBar from '../SearchBar';

describe("SearchBar component", () => {
  test("it sets onChange event", () => {
    const component = create(<SearchBar onSearch={() => {}} />);
    const rootInstance = component.root;
    const input = rootInstance.findByType("input");
    expect(input.props.placeholder).toBe("Search images");
    expect(input.props.className).toBe("form-control mr-sm-2");
  });
});