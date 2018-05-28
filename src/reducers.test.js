import React from 'react'
import { handleUserActions, handleNetworkActions } from './reducers'
import { changeMinRating, receiveMovies } from './actions'
import { results } from './movies.json'

describe('reducers', () => {
  describe('user actions', () => {
    it('should return initial state', () => {
      expect(handleUserActions(undefined, {})).toEqual({
        minRating: 0
      })
    })

    it('should handle changing the min rating', () => {
      const minRating = 7
      expect(handleUserActions({ minRating: '4'}, changeMinRating(minRating))).toEqual({
        minRating: minRating
      })
    })
  })

  describe('network actions', () => {
    it('should return initial state', () => {
      expect(handleNetworkActions(undefined, {})).toEqual({
        movies: []
      })
    })

    it('should handle receiving movies', () => {
      expect(handleNetworkActions({movies: []}, receiveMovies(results))).toEqual({
        movies: results
      })
    })
  })
})
