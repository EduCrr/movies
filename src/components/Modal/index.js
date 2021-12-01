import React from "react";
import { ModalArea } from "./styled";
import Search from "@material-ui/icons/Search";

export default function Modal({ close }) {
  function handleClose(e) {
    if (e.target.classList.contains("fundo")) {
      close(false);
    }
  }
  return (
    <ModalArea className="fundo" onClick={handleClose}>
      <h2>Busque pelo nome do filme</h2>
      <div className="search">
        <form method="GET" action={`/search`}>
          <input
            name="query"
            type="text"
            required
            placeholder="Ex: Crepúculo"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </ModalArea>
  );
}
