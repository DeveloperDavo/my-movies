import React, { Component } from "react";
import "./App.css";
import { Main } from "./containers";
import { Header } from "./components";

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
