import * as Yup from "yup"
import { PHONE_MASK, ALPHA_MASK, PromotionCodes } from "helpers"

export const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(2)
    .max(32)
    .matches(ALPHA_MASK)
    .required(),
  surname: Yup.string()
    .min(2)
    .max(32)
    .matches(ALPHA_MASK)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string()
    .matches(PHONE_MASK)
    .required(),
  code: Yup.string()
    .test("promotion-code", "promotion code is not valid", value => PromotionCodes.isValid(value))
    .required(),
  agreement: Yup.bool()
    .oneOf([true])
    .required(),
})

export const initialValues: Yup.InferType<typeof schema> = {
  firstname: "",
  surname: "",
  email: "",
  phone: "",
  code: "",
  agreement: true,
}
