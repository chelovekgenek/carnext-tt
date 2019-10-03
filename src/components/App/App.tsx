import React from "react"

import { AppRouter } from "./Router"
import { MainLayout } from "./MainLayout"
import * as Styles from "./App.styled"

export const App = () => (
  <React.Fragment>
    <Styles.Global />
    <MainLayout>
      <AppRouter />
    </MainLayout>
  </React.Fragment>
)
