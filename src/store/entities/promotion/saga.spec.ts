import { expectSaga } from "redux-saga-test-plan"

import promotionReducer, { initialState as promotionInitialState } from "./reducer"
import { handleRequest } from "./saga"
import * as api from "./api"
import { PromotionActions } from "./actions"
import { wrapCall } from "helpers/saga.mock"
import { history } from "store/history"

describe("promotion", () => {
  describe("handleRequest", () => {
    const action = PromotionActions.request({
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      code: "",
      agreement: true,
    })
    const callApiOK = wrapCall(api.validatePromotionCode, () => "ok")
    const callApiError = wrapCall(api.validatePromotionCode, () => {
      throw Error()
    })

    it("should set 'promoted=true' if request succeded", async () =>
      expectSaga(handleRequest, action)
        .withReducer(promotionReducer)
        .provide([{ call: callApiOK }])
        .hasFinalState({ ...promotionInitialState, promoted: true })
        .run())

    it("should set 'promoted=false' if request not succeded", async () =>
      expectSaga(handleRequest, action)
        .withReducer(promotionReducer)
        .provide([{ call: callApiError }])
        .hasFinalState({ ...promotionInitialState, promoted: false })
        .run())
    it("should do history replace to the result page anyway", async () => {
      const spyReplace = jest.spyOn(history, "replace")
      await expectSaga(handleRequest, action)
        .provide([{ call: callApiOK }])
        .run()
      expect(spyReplace).toBeCalledWith({ pathname: "/result" })
      spyReplace.mockRestore()
    })
  })
})
