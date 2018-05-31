import { connect } from 'react-redux'
import { changeMinRating, fetchMovies } from './actions'
import { MainComponent } from './components'

export const mapStateToProps = state => ({
  minRating: state.handleUserActions.minRating,
  movies: state.handleNetworkActions.movies
})

export const mapDispatchToProps = dispatch => ({
  handleMinRatingChange: e => dispatch(changeMinRating(e.target.value)),
  handleFetchMovies: () => dispatch(fetchMovies())
})

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
