import React from "react"
import { Route, Switch, Redirect, Router } from "react-router-dom"

import * as Page from "components/pages"
import { history } from "store"

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Page.Main} />
      <Redirect to="/" />
    </Switch>
  </Router>
)
