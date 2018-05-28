import React from 'react'
import { changeMinRating, receiveMovies, RECEIVE_MOVIES, fetchMovies } from './actions'
import { results } from './movies.json'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

describe('actions', () => {
  it('should change min rating', () => {
    const minRating = 7
    expect(changeMinRating(minRating)).toEqual({
      type: 'CHANGE_MIN_RATING',
      minRating: minRating
    })
  })
  it('should receive movies', () => {
    expect(receiveMovies(results)).toEqual({
      type: 'RECEIVE_MOVIES',
      movies: results
    })
  })
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates RECEIVE_MOVIES when fetching movies is complete', () => {
    const matcher = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const response = { body: { results}, headers: { 'content-type': 'application/json' } }
    fetchMock.getOnce(matcher, response)

    const expectedActions = [
      { type: RECEIVE_MOVIES, movies: results }
    ]

    const store = mockStore()

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
