import { request } from "helpers"
import { PromotionActions } from "./actions"

export const validatePromotionCode = async (params: ReturnType<typeof PromotionActions.request>["payload"]) =>
  request.post("/promotions/validate", params)
