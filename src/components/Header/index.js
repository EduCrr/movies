import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
import Search from "@material-ui/icons/Search";
import Modal from "../Modal";
export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  function handleSearch() {
    console.log("s");
    setOpenModal(!openModal);
  }
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
            <Link to="/">
              <h1>E-Movie</h1>
            </Link>
          </div>
          <div className="headerMenu">
            <ul>
              <li>
                <span>
                  <Search onClick={handleSearch} />
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
                <Link to="/favoritos">Favoritos</Link>
              </li>
            </ul>
          </div>
        </HeaderArea>
      </div>
      {openModal && <Modal close={setOpenModal} />}
    </>
  );
}
