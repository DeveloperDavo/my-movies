import React from "react";

export const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">My Movies</h1>
    </header>
  );
};


const MinRatingSelect = ({ value, onChange }) => {
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

const MovieGrid = ({ movies, minRating }) => {
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

const Attribution = () => {
  return (
    <footer className="Attribution">
      <img className="Attribution--logo"src="tmdb-logo.png" alt="tmdb logo"/>
      <div className="Attribution--text">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </div>
    </footer>
  )
}

export const MainComponent = ({ minRating, handleMinRatingChange, movies }) => {
  handleMinRatingChange.bind(this);
  return (
    <main>
      <div className="Main--title">Movies now playing</div>
      <MinRatingSelect
        value={minRating}
        onChange={handleMinRatingChange}
      />
      <MovieGrid movies={movies} minRating={minRating} />
      <Attribution />
    </main>
  );
}