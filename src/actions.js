export const CHANGE_MIN_RATING = "CHANGE_MIN_RATING"
export const changeMinRating = minRating => {
  return {
    type: CHANGE_MIN_RATING,
    minRating
  }
}
