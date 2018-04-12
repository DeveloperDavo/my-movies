import { combineReducers } from 'redux'
import { 
  CHANGE_MIN_RATING,
  RECEIVE_MOVIES
} from './actions'

export const handleUserActions = (state = { minRating: 0 }, action) => {
  switch (action.type) {
    case CHANGE_MIN_RATING:
      return { minRating: action.minRating }
    default:
      return state
  }
}

export const handleNetworkActions = (state = {movies: []}, action) => {
  switch (action.type) { 
    case RECEIVE_MOVIES:
      return ({
        ...state, 
        movies: action.movies, 
      })
    default: 
      return state
  }
}

const rootReducer = combineReducers({
  handleNetworkActions,
  handleUserActions
})

export default rootReducer