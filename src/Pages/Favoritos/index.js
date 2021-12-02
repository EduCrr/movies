import React from "react";
import { FavoritosArea } from "./styled";
import Favorite from "@material-ui/icons/Favorite";
import Delete from "@material-ui/icons/Delete";
import { useStateValue } from "../../contexts/StateContext";
import { Link } from "react-router-dom";

export default function Favortios() {
  const [state, dispatch] = useStateValue();
  function handleDelete(id) {
    dispatch({
      type: "remove",
      id,
    });
  }
  function handleDeleteSerie(id) {
    dispatch({
      type: "removeSerie",
      id,
    });
  }
  return (
    <FavoritosArea>
      <div className="area">
        <h1>
          <Favorite /> Favoritos
        </h1>
      </div>
      <div>
        <h2>
          Filmes favoritos{" "}
          <span>({state.favoritos.favoritosMovies.length})</span>
        </h2>
      </div>
      <div className="favoritesArea">
        {state.favoritos.favoritosMovies.length > 0 && (
          <>
            {state.favoritos.favoritosMovies.map((item, k) => (
              <div className="favoritesItems" key={k}>
                <div className="favoritesImage">
                  <Link to={`filme/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.original_name}
                    />
                  </Link>
                </div>
                <div className="favoritesName">
                  <Link to={`filme/${item.id}`}>{item.title}</Link>
                </div>
                <div className="favoritesBtns">
                  <span>
                    <Favorite />
                  </span>
                  <span>
                    <Delete onClick={() => handleDelete(item.id)} />
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <hr />
      <h2>
        Series favoritas <span>({state.favoritos.favoritosSeries.length})</span>
      </h2>
      <div className="favoritesArea">
        {state.favoritos.favoritosSeries.length > 0 && (
          <>
            {state.favoritos.favoritosSeries.map((item, k) => (
              <div className="favoritesItems" key={k}>
                <div className="favoritesImage">
                  <Link to={`serie/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.original_name}
                    />
                  </Link>
                </div>
                <div className="favoritesName">
                  <Link to={`serie/${item.id}`}>{item.name}</Link>
                </div>
                <div className="favoritesBtns">
                  <span>
                    <Favorite />
                  </span>
                  <span>
                    <Delete onClick={() => handleDeleteSerie(item.id)} />
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </FavoritosArea>
  );
}
