import { payload, action } from "ts-action"

import { initialValues } from "components/pages/Main/schema"

import { PromotionTypes } from "./types"

export const PromotionActions = {
  request: action(PromotionTypes.REQUEST, payload<typeof initialValues>()),
  success: action(PromotionTypes.SUCCESS),
  failure: action(PromotionTypes.FAILURE),
}
