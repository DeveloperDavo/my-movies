import React from 'react';
import { changeMinRating } from './actions';

describe('actions', () => {
  it('should change min rating', () => {
    const minRating = 7;
    expect(changeMinRating(minRating)).toEqual({
      type: 'CHANGE_MIN_RATING',
      minRating: minRating
    })
  });
})