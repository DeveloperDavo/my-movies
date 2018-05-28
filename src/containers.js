import { connect } from 'react-redux'
import { changeMinRating, fetchMovies } from './actions'
import { MainComponent } from './components'

const mapStateToProps = state => {
  return {
    minRating: state.handleUserActions.minRating,
    movies: state.handleNetworkActions.movies
  }
}

const mapDispatchToProps = dispatch => ({
  handleMinRatingChange: e => dispatch(changeMinRating(e.target.value)),
  handleFetchMovies: () => dispatch(fetchMovies())
})

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)
