import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Filmes from "./Pages/Filmes";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/filmes">
        <Filmes />
      </Route>
    </Switch>
  );
}

/*
 <Route>
        <NotFound />
      </Route>
*/
