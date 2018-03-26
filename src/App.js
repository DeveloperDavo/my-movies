import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { businesses } from './businesses.json';

class App extends Component {
  render() {
    const mainContent = businesses.map(business => {
      return (
        <div key={business.id}>
        <a href={business.url}>
          <img width="200" height="200" src={business.image_url} alt={business.name} />
          <div>{business.name}</div>
        </a>
        </div>
      );
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurant Finder</h1>
        </header>
        <main>
          {mainContent}
        </main>
      </div>
    );
  }
}

export default App;
