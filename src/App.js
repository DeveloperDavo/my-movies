import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { businesses } from './businesses.json';

class App extends Component {
  render() {
    const businessNames = businesses.map(business => {
      return (
        <p key={business.id}>
          {business.name}
        </p>
      );
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurant Finder</h1>
        </header>
        {businessNames}
      </div>
    );
  }
}

export default App;
