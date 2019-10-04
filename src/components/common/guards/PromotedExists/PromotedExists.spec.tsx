import React from "react"
import { shallow } from "enzyme"

import { PromotedExists } from "./PromotedExists"

describe("Layout", () => {
  const render = (props: React.ComponentProps<typeof PromotedExists>) => shallow(<PromotedExists {...props} />)

  it("should render children if promoted is true", () => {
    expect(render({ promoted: true, children: "children" })).toMatchSnapshot()
  })
  it("should render redirect if promoted is false", () => {
    expect(render({ promoted: false, children: "children" })).toMatchSnapshot()
  })
})
