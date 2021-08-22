import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default function Routes() {
  return (
    <Switch>
        {/* Finally, catch all unmatched routes */}
<Route>
  <NotFound />
</Route>
<Route exact path="/login">
  <Login />
</Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}