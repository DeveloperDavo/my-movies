import React from "react";
import { Header, Attribution, MovieGrid, MainComponent } from "./components";
import renderer from "react-test-renderer";
import { results } from "./movies.json";
import { changeMinRating } from "./actions";
import { Provider } from "react-redux";
import { store } from "./store";
import { connect } from "react-redux";
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const slicedResults = results.slice(0, 3);

describe("Header", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Header />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("Attribution", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Attribution />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("MovieGrid", () => {
  it("should match empty snapshot", () => {
    const wrapper = shallow(<MovieGrid minRating={0} movies={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match snapshot with movies and minRating", () => {
    const wrapper = shallow(<MovieGrid minRating={7} movies={slicedResults} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("Main component", () => {
  it("should match empty snapshot", () => {
    const mainComp = (
      <MainComponent
        handleMinRatingChange={() => {}}
        handleFetchMovies={() => {}}
        minRating={6}
        movies={[]}
      />
    );
    const wrapper = shallow(mainComp);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should match snapshot with movie data", () => {
    const mainComp = (
      <MainComponent
        handleMinRatingChange={() => {}}
        handleFetchMovies={() => {}}
        minRating={8}
        movies={slicedResults}
      />
    );
    const wrapper = shallow(mainComp);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
