import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { businesses } from "./businesses.json";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Restaurant Finder</h1>
    </header>
  );
};

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <label>Search: </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="location"
      />
    </div>
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

const RestaurantGrid = ({ minRating }) => {
  const restaurantGrid = businesses
    .filter(business => business.rating >= minRating)
    .map(business => {
      return (
        <div key={business.id}>
          <a href={business.url}>
            <img
              width="200"
              src={business.image_url}
              alt={business.name}
            />
            <div>{business.name}</div>
          </a>
          <div>rating: {business.rating}</div>
          <div>reviews: {business.review_count}</div>
        </div>
      );
    });
  return <div>{restaurantGrid}</div>;
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
        <SearchBar
          value={this.state.searchText}
          onChange={this.handleSearchTextChange}
        />
        <MinRatingSelect
          value={this.state.minRating}
          onChange={this.handleMinRatingChange}
        />
        <RestaurantGrid minRating={this.state.minRating} />
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
