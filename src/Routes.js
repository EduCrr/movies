import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

/*
 <Route>
        <NotFound />
      </Route>
*/
