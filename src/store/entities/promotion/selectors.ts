import { createSelector } from "reselect"
import { TAppState } from "../reducers"

export const getRoot = (state: TAppState) => state.promotion
export const getPromoted = (state: TAppState) => state.promotion.promoted

export const isPromoted = createSelector(
  getRoot,
  state => "promoted" in state,
)
