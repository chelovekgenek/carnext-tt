import React from "react"
import { shallow } from "enzyme"

import { Result } from "./Result"

describe("Result", () => {
  it("should match snapshot if promoted is true", () => {
    expect(shallow(<Result promoted={true} />)).toMatchSnapshot()
  })
  it("should match snapshot if promoted is false", () => {
    expect(shallow(<Result promoted={false} />)).toMatchSnapshot()
  })
})
