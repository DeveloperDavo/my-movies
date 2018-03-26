import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { businesses } from './businesses.json';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Restaurant Finder</h1>
    </header>
  )
}

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <label>Search: </label>
      <input value={value} onChange={onChange} type="text" placeholder="location" />
    </div>
  )
}

const RestaurantGrid = () => {
  const restaurantGrid = businesses.map(business => {
    return (
      <div key={business.id}>
        <a href={business.url}>
          <img width="200" height="200" src={business.image_url} alt={business.name} />
          <div>{business.name}</div>
        </a>
        <div>rating: {business.rating}</div>
        <div>reviews: {business.review_count}</div>
      </div>
    );
  })
  return (<div>{restaurantGrid}</div>)
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ''};
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.setState({searchText: e.target.value})
  }

  render() {
    return (
      <main>
        <SearchBar value={this.state.searchText} onChange={this.handleSearchTextChange} />
        <RestaurantGrid />
      </main>
    )
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
