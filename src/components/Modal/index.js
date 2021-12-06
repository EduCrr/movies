import React, { useState } from "react";
import { ModalArea } from "./styled";
import Search from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
export default function Modal({ close, open }) {
  const [word, setWord] = useState("");
  let history = useHistory();
  function handleClose(e) {
    if (e.target.classList.contains("fundo")) {
      close(false);
    }
  }
  function handleForm(e) {
    e.preventDefault();
    close(false);
    return history.push({
      pathname: "/search",
      search: `?query=${word}`,
    });
  }
  return (
    <ModalArea className="fundo" search={open} onClick={handleClose}>
      <h2>Busque pelo nome do filme</h2>
      <div className="search">
        <form method="GET" onSubmit={handleForm}>
          <input
            name="query"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
            placeholder="Ex: Velozes e furiosos"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </ModalArea>
  );
}

/*
import React, { useState } from "react";
import { ModalArea } from "./styled";
import Search from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
export default function Modal({ close, open }) {
  const [word, setWord] = useState("");
  let history = useHistory();
  function handleClose(e) {
    if (e.target.classList.contains("fundo")) {
      close(false);
    }
  }
  function handleForm(e) {
    e.preventDefault();
    close(false);
    return history.push({
      pathname: "/search",
      search: `?query=${word}`,
    });
  }
  return (
    <ModalArea className="fundo" search={open} onClick={handleClose}>
      <h2>Busque pelo nome do filme</h2>
      <div className="search">
        <form method="GET" onSubmit={handleForm}>
          <input
            name="query"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
            placeholder="Ex: Velozes e furiosos"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </ModalArea>
  );
}


velho

import React from "react";
import { ModalArea } from "./styled";
import Search from "@material-ui/icons/Search";

export default function Modal({ close, open }) {
  function handleClose(e) {
    if (e.target.classList.contains("fundo")) {
      close(false);
    }
  }
  return (
    <ModalArea className="fundo" search={open} onClick={handleClose}>
      <h2>Busque pelo nome do filme</h2>
      <div className="search">
        <form method="GET" action={`/search`}>
          <input
            name="query"
            type="text"
            required
            placeholder="Ex: Velozes e furiosos"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </ModalArea>
  );
}

*/
