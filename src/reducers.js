export const handleActions = (state = { minRating: 0 }, action) => {
  switch (action.type) {
    case 'changeMinRating':
      return { minRating: action.minRating }
    default:
      return state
  }
}