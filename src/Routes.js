import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Filmes from "./Pages/Filmes";
import Filme from "./Pages/Filme";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/filmes">
        <Filmes />
      </Route>
      <Route exact path="/filme/:id">
        <Filme />
      </Route>
    </Switch>
  );
}

/*
 <Route>
        <NotFound />
      </Route>
*/
