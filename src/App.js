import React, { Component } from "react";
import "./App.css";
import { Main, AsyncApp } from "./containers";
import { Header } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <AsyncApp />
      </div>
    );
  }
}

export default App;
