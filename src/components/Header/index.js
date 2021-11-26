import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
import Search from "@material-ui/icons/Search";

export default function Header() {
  return (
    <HeaderArea>
      <div className="headerLogo">
        <a href="/">
          <h1>E-Movie</h1>
        </a>
      </div>
      <div className="headerMenu">
        <ul>
          <li>
            <span>
              <Search />
            </span>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/tv-series">TV Series</Link>
          </li>
          <li>
            <Link to="/">Favoritos</Link>
          </li>
        </ul>
      </div>
    </HeaderArea>
  );
}
