import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"

import promotion from "./promotion/reducer"

export const reducers = combineReducers({
  promotion,
  router,
})

export type TAppState = ReturnType<typeof reducers>
