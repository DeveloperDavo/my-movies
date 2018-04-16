import React from "react";
import { handleUserActions } from "./reducers"
import { changeMinRating } from "./actions";

describe("reducers", () => {
  it("should return initial state", () => {
    expect(handleUserActions(undefined, {})).toEqual({
      minRating: 0
    })
  });

  it("should handle changing the min rating", () => {
    const minRating = 7;
    expect(handleUserActions(undefined, changeMinRating(minRating))).toEqual({
      minRating: 7
    })
  });
});
