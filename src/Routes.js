import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Filmes from "./Pages/Filmes";
import Filme from "./Pages/Filme";
import Series from "./Pages/Series";
import Serie from "./Pages/Serie";
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
      <Route exact path="/tv-series">
        <Series />
      </Route>
      <Route exact path="/serie/:id">
        <Serie />
      </Route>
    </Switch>
  );
}

/*
 <Route>
        <NotFound />
      </Route>
*/
