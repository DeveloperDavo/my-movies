import React from "react";
import { Header, MainComponent } from "./components";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { results } from "./movies.json";

describe("Header", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(
      <Header/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})

describe("Main component", () => {
  it("should match empty snapshot", () => {
    const mainComp = 
      <MainComponent 
        handleMinRatingChange={() => {}} 
        handleFetchMovies={() => {}} 
        minRating={0}
        movies={[]}
      />
    const tree = renderer.create(
      mainComp
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})