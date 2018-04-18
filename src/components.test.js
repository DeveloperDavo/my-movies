import React from "react";
import { Header } from "./components";
import renderer from 'react-test-renderer';

describe("Header", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(
      <Header/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})