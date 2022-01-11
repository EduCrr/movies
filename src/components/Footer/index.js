import React from "react";
import { FooterArea } from "./styled";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <FooterArea>
      <hr />
      <div className="content">
        <div className="offer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Filmes</Link>
            </li>
            <li>
              <Link to="/tv-series">TV Séries</Link>
            </li>
            <li>
              <Link to="/">Favoritos</Link>
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <strong>Feito por:</strong> Eduardo Carraro
        </div>
      </div>
    </FooterArea>
  );
}
