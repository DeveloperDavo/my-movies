import { connect } from 'react-redux'
import { changeMinRating } from './actions'
import { MainComponent, AsyncComponent } from './components'

const mapStateToProps = state => {
  return {
    minRating: state.handleUserActions.minRating,
    movies: state.handleNetworkActions.movies
  }
}

const mapDispatchToProps = dispatch => ({
  handleMinRatingChange: e => dispatch(changeMinRating(e.target.value))
})

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent)

const mapAsyncStateToProps = state => {
  return { 
    movies: state.handleNetworkActions.movies
  }
}

export const AsyncApp = connect(
  mapAsyncStateToProps
)(AsyncComponent)
