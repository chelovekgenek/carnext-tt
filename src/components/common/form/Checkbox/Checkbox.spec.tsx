import React from "react"
import { shallow } from "enzyme"

import fieldProps from "mocks/formik-field-props"

import { InnerFormItem } from "./Checkbox"

describe("Checkbox", () => {
  const defaultProps = {
    ...fieldProps,
    field: { ...fieldProps.field, value: false, name: "checkbox" },
    name: "checkbox",
    label: "checkbox",
  }
  const render = (props: React.ComponentProps<typeof InnerFormItem> = defaultProps) =>
    shallow(<InnerFormItem {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
