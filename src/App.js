import React, { Component } from "react";
import "./App.css";
import { results } from "./movies.json";
import { Main } from "./containers";
import { Header } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

  componentDidMount() {
    const self = this;
    // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json =>  {
        self.setState({movies: results})
    // });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
