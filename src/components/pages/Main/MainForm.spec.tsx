import React from "react"
import { shallow } from "enzyme"

import formikMock from "mocks/formik-props"

import { MainForm } from "./MainForm"

describe("Main.MainForm", () => {
  const defaultValues = {
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    code: "",
    agreement: true,
  }
  const render = (props = {}) =>
    shallow(<MainForm {...formikMock} initialValues={defaultValues} values={defaultValues} {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
