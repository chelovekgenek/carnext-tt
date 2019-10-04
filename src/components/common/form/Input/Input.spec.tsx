import React from "react"
import { shallow } from "enzyme"

import fieldProps from "mocks/formik-field-props"

import { InnerFormItem } from "./Input"

describe("Input", () => {
  const defaultProps = {
    ...fieldProps,
    field: { ...fieldProps.field, value: false, name: "input" },
    name: "input",
    label: "input",
  }
  const render = (props: React.ComponentProps<typeof InnerFormItem> = defaultProps) =>
    shallow(<InnerFormItem {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
