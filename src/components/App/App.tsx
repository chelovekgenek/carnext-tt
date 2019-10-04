import React from "react"
import { Provider } from "react-redux"

import { store } from "store"

import { AppRouter } from "./Router"
import * as Styles from "./App.styled"

export const App = () => (
  <Provider store={store}>
    <Styles.Global />
    <AppRouter />
  </Provider>
)
