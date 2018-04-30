import React from "react";
import { Header, MainComponent } from "./components";
import renderer from 'react-test-renderer';
import { results } from "./movies.json";

const slicedResults = results.slice(0, 4);

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
  it("should match snapshot with movie data", () => {
    const mainComp = 
    <MainComponent 
      handleMinRatingChange={() => {}} 
      handleFetchMovies={() => {}} 
      minRating={0}
      movies={slicedResults}
    />
    const tree = renderer.create(
      mainComp
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
  it("should match snapshot with min rating", () => {
    const mainComp = 
    <MainComponent 
      handleMinRatingChange={() => {}} 
      handleFetchMovies={() => {}} 
      minRating={8}
      movies={slicedResults}
    />
    const tree = renderer.create(
      mainComp
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})