/* eslint-env jest */

import { mapStateToProps, mapDispatchToProps } from '../containers'

describe('containers', () => {
  it('should map state to props', () => {
    const minRating = 3
    const movies = 'movies'
    const state = {
      handleUserActions: {
        minRating: minRating
      },
      handleNetworkActions: {
        movies: movies
      }

    }
    const props = mapStateToProps(state)
    expect(props.minRating).toBe(minRating)
    expect(props.movies).toBe(movies)
  })

  it('should map dispatch to props', () => {
    const dispatchMock = jest.fn()

    const props = mapDispatchToProps(dispatchMock)
    props.handleFetchMovies()
    props.handleMinRatingChange({target: ''})
    expect(dispatchMock.mock.calls.length).toBe(2)
  })
})
