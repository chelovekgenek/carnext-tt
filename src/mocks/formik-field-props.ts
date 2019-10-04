import formProps from "./formik-form-props"

export default {
  form: formProps,
  field: {
    onChange: jest.fn() as any,
    onBlur: jest.fn() as any,
  },
}
