import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { results } from "./movies.json";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">My Movies</h1>
    </header>
  );
};

const MinRatingSelect = ({ value, onChange }) => {
  const options = [<option key="0" value="0">none</option>];
  for (let i = 3; i <= 5; i = i + 0.5) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <div>
      <label>Choose a minimum rating: </label>
      <select value={value} onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

const MovieGrid = ({ minRating }) => {
  const movieGrid = results
    .filter(movie => movie.vote_average >= minRating)
    .map(movie => {
      const imageSrc = `http://image.tmdb.org/t/p/w200/${movie.poster_path}`;
      return (
        <div key={movie.id}>
          <img
            width="200"
            src={imageSrc}
            alt={movie.title}
          />
          <div>{movie.title}</div>
          <div>rating: {movie.vote_average}</div>
          <div>reviews: {movie.vote_count}</div>
        </div>
      );
    });
  return <div>{movieGrid}</div>;
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", minRating: "4.5" };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleMinRatingChange = this.handleMinRatingChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleMinRatingChange(e) {
    this.setState({ minRating: e.target.value });
  }

  render() {
    return (
      <main>
        <MinRatingSelect
          value={this.state.minRating}
          onChange={this.handleMinRatingChange}
        />
        <MovieGrid minRating={this.state.minRating} />
      </main>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
