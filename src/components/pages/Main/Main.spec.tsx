import React from "react"
import { shallow } from "enzyme"

import { Main } from "./Main"

describe("Page.Main", () => {
  it("should render correctly", () => {
    expect(shallow(<Main />)).toMatchSnapshot()
  })
})
