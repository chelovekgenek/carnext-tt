import React from "react"
import { Provider } from "react-redux"

import { store } from "store"

import { AppRouter } from "./Router"
import { MainLayout } from "./MainLayout"
import * as Styles from "./App.styled"

export const App = () => (
  <Provider store={store}>
    <Styles.Global />
    <MainLayout>
      <AppRouter />
    </MainLayout>
  </Provider>
)
