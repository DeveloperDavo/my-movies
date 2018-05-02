import React from "react";
import { Header, MainComponent } from "./components";
import renderer from 'react-test-renderer';
import { results } from "./movies.json";
import { changeMinRating } from './actions'
import { Provider } from 'react-redux'
import { store } from './store'
import { connect } from 'react-redux'

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

  const MainFake = () => {
    const mapStateToProps = state => ({
      minRating: state.handleUserActions.minRating,
      movies: slicedResults
    })
    
    const mapDispatchToProps = dispatch => ({
      handleMinRatingChange: minRating => dispatch(changeMinRating(minRating)),
      handleFetchMovies: () => dispatch(() => {})
    })
    
    const MainFake = connect(
      mapStateToProps,
      mapDispatchToProps,
    )(MainComponent)

    return (<MainFake />)
  }

  it("should select a min rating", () => {
    const main = renderer.create(
    <Provider store={store}>
        <MainFake />
    </Provider>
    )

    let tree = main.toJSON();

    expect(tree).toMatchSnapshot();

    const temp = tree.children[1].children[1].props.onChange(7);

    tree = main.toJSON();
    expect(tree).toMatchSnapshot();
  })

})