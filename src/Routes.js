import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Filmes from "./Pages/Filmes";
import Filme from "./Pages/Filme";
import Series from "./Pages/Series";
import Serie from "./Pages/Serie";
import Search from "./Pages/Search";
import Favoritos from "./Pages/Favoritos";
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
      <Route path="/search">
        <Search />
      </Route>
      <Route exact path="/favoritos">
        <Favoritos />
      </Route>
    </Switch>
  );
}

/*
 <Route>
        <NotFound />
      </Route>
*/
