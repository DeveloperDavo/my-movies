import React from "react";
import { MinRatingSelect, MovieGrid, Attribution } from "./App";

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