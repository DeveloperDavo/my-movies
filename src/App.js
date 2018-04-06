import React, { Component } from "react";
import "./App.css";
import { results } from "./movies.json";
import { Main } from "./containers";

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">My Movies</h1>
    </header>
  );
};

export const MinRatingSelect = ({ value, onChange }) => {
  const options = [<option key="0" value="0">none</option>];
  for (let i = 5; i <= 10; i = i + 0.5) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <div>
      <label>Choose a minimum rating: </label>
      <select className="MinRatingSelect--select" value={value} onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export const MovieGrid = ({ movies, minRating }) => {
  const movieGrid = movies
    .filter(movie => movie.vote_average >= minRating)
    .map(movie => {
      const imageSrc = `http://image.tmdb.org/t/p/w200/${movie.poster_path}`;
      return (
        <div className="MovieGrid--movie-item" key={movie.id}>
          <img
            width="200"
            src={imageSrc}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <div>Rating: {movie.vote_average}</div>
          <div>Review Count: {movie.vote_count}</div>
        </div>
      );
    });
  return <div className="MovieGrid">{movieGrid}</div>;
};

export const Attribution = () => {
  return (
    <footer className="Attribution">
      <img className="Attribution--logo"src="tmdb-logo.png" alt="tmdb logo"/>
      <div className="Attribution--text">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </div>
    </footer>
  )
}

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
