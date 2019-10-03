import * as Yup from "yup"
import { PHONE_MASK } from "helpers"

export const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(2)
    .max(16)
    .required(),
  surname: Yup.string()
    .min(2)
    .max(16)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string()
    .matches(PHONE_MASK, "Phone number is not valid")
    .required(),
  code: Yup.string().required(),
  agreement: Yup.bool().required(),
})

export const initialValues: Yup.InferType<typeof schema> = {
  firstname: "",
  surname: "",
  email: "",
  phone: "",
  code: "",
  agreement: true,
}
