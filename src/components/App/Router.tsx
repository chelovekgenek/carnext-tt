import React from "react"
import { Route, Switch, Redirect, Router } from "react-router-dom"

import * as Page from "components/pages"
import { history } from "store"
import { PromotedExists } from "components/common/guards"

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Page.Main} />
      <PromotedExists>
        <Route exact path="/result" component={Page.Result} />
      </PromotedExists>
      <Redirect to="/" />
    </Switch>
  </Router>
)
