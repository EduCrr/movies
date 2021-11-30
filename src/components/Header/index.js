import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
import Search from "@material-ui/icons/Search";

export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <div
        className="menuBackground"
        style={{
          background: blackHeader ? "#16151d" : "transparent",
          height: blackHeader ? "70px" : "0px",
          width: blackHeader ? "100%" : "0px",
          position: blackHeader ? "fixed" : "none",
          zIndex: blackHeader ? "999" : "0",
          transition: "all ease 0.4s",
        }}
      >
        <HeaderArea black={blackHeader}>
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
      </div>
    </>
  );
}
