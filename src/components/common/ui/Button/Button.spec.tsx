import React from "react"
import { shallow } from "enzyme"

import { Button } from "./Button"
import * as Styled from "./Button.styled"

describe("Layout", () => {
  const render = (props: React.ComponentProps<typeof Button>) => shallow(<Button {...props} />)
  it("should render", () => {
    expect(render({})).toMatchSnapshot()
  })
  it("should render with passed button props", () => {
    const props = { onClick: jest.fn(), type: "submit" as const }
    const element = render(props).find(Styled.Button)
    element.simulate("click")
    expect(props.onClick).toBeCalled()
    expect(element.prop("type")).toBe("submit")
  })
  it("should render with children", () => {
    expect(render({ children: "text" }).find(Styled.Button)).toMatchSnapshot()
  })
})
