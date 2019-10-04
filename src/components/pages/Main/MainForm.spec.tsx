import React from "react"
import { shallow } from "enzyme"

import formProps from "mocks/formik-form-props"

import { MainForm } from "./MainForm"

describe("MainForm", () => {
  const defaultValues = {
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    code: "",
    agreement: true,
  }
  const render = (props = {}) =>
    shallow(
      <MainForm
        {...formProps}
        initialValues={defaultValues}
        submit={jest.fn() as any}
        values={defaultValues}
        {...props}
      />,
    )

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
