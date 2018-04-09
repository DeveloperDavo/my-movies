import { CHANGE_MIN_RATING } from './actions'

export const handleActions = (state = { minRating: 0 }, action) => {
  switch (action.type) {
    case CHANGE_MIN_RATING:
      return { minRating: action.minRating }
    default:
      return state
  }
}