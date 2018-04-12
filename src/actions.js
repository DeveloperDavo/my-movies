// import { results } from "./movies.json";

export const CHANGE_MIN_RATING = "CHANGE_MIN_RATING"
export const RECEIVE_MOVIES = "RECEIVE_MOVIES"

export const changeMinRating = minRating => {
  return {
    type: CHANGE_MIN_RATING,
    minRating
  }
}

export const receiveMovies = json => {
  return {
    type: RECEIVE_MOVIES,
    movies: json
  }
}

export const fetchMovies = () => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    .then(response => response.json()) 
    .then(json => dispatch(receiveMovies(json.results)))
    // return dispatch(receiveMovies(results))
  }
}