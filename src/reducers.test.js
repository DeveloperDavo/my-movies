import React from "react";
import { handleUserActions } from "./reducers"

describe("reducers", () => {
  it("should return handle initial state", () => {
    expect(handleUserActions(undefined, {})).toEqual({
      minRating: 0
    })
  });
});
