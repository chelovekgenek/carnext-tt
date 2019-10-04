import React from "react"
import { shallow } from "enzyme"

import { Layout } from "./Layout"

describe("Layout", () => {
  const render = (props = {}) => shallow(<Layout {...props} />)
  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
  it("should render child as text", () => {
    expect(render({ children: "Hello there!" })).toMatchSnapshot()
  })
  it("should render child as ReactNode", () => {
    expect(render({ children: <div>asd</div> })).toMatchSnapshot()
  })
})
