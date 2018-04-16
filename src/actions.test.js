import React from 'react';
import { changeMinRating, receiveMovies } from './actions';
import { results } from "./movies.json";

describe('actions', () => {
  it('should change min rating', () => {
    const minRating = 7;
    expect(changeMinRating(minRating)).toEqual({
      type: 'CHANGE_MIN_RATING',
      minRating: minRating
    })
  });
  it('should receive movies', () => {
    expect(receiveMovies(results)).toEqual({
      type: 'RECEIVE_MOVIES',
      movies: results
    })
  });
})