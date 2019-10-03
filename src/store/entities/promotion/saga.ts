import { takeLatest, put, call } from "redux-saga/effects"

import { PromotionTypes } from "./types"
import { PromotionActions } from "./actions"
import * as api from "./api"
import { history } from "store/history"

export function* handleRequest({ payload }: ReturnType<typeof PromotionActions.request>) {
  try {
    yield call(api.validatePromotionCode, payload)
    yield put(PromotionActions.success())
  } catch (e) {
    yield put(PromotionActions.failure())
  } finally {
    yield call(history.replace, { pathname: "/result" })
  }
}

export default function*() {
  yield takeLatest(PromotionTypes.REQUEST, handleRequest)
}
