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

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>Search: </label>
        <input type="text" placeholder="location" />
      </div>
    )
  }
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

const Main = () => {
  return (
    <main>
      <SearchBar />
      <RestaurantGrid />
    </main>
  )
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
