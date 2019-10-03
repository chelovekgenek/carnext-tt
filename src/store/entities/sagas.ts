import { all, fork } from "redux-saga/effects"

import promotion from "./promotion/saga"

export function* sagas() {
  yield all([fork(promotion)])
}
