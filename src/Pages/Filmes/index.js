import React, { useState, useEffect } from "react";
import api from "../../api";
import { FilmesArea } from "./styled";
import FeaturedMovie from "../../components/FeaturedMovie";
import Categories from "../../components/Categories";
export default function Filmes() {
  const [list, setList] = useState({});
  const [loadingF, setLoadingF] = useState(true);

  async function loadSingleMovie(list, type, setType) {
    let popular = list.filter((item) => item.slug === String(type));
    let randomPopular = Math.floor(
      Math.random() * popular[0].items.results.length
    );
    let chosen = popular[0].items.results[randomPopular];
    let chosenInfo = await api.getMovieInfo(chosen.id, "movie");
    setType(chosenInfo);
  }

  useEffect(() => {
    const loadFeatured = async () => {
      setLoadingF(true);
      const list = await api.getHomeList();
      loadSingleMovie(list, "upcoming", setList);
      setLoadingF(false);
    };

    loadFeatured();
  }, []);
  return (
    <>
      {loadingF && (
        <div className="loading">
          <img src="/assets/loading.gif" alt="loading" />
        </div>
      )}
      {list && <FeaturedMovie data={list} />}

      <FilmesArea>
        <h1>Filmes Online</h1>

        <Categories />
      </FilmesArea>
    </>
  );
}
