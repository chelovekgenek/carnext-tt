import React from "react"

import MainForm from "./MainForm"
import * as Styles from "./Main.styled"

export const Main = () => (
  <Styles.Row>
    <Styles.Column>
      <h1>Get a free year of driving!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Styles.Column>
    <Styles.Column>
      <h1>Get a car leasing offer!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <MainForm />
    </Styles.Column>
  </Styles.Row>
)
