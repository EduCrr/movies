import React, { useState, useEffect } from "react";
import api from "../../api";
import { FilmesArea } from "./styled";
import FeaturedMovie from "../../components/FeaturedMovie";
import Categories from "../../components/Categories";
export default function Filmes() {
  const [list, setList] = useState({});

  async function loadSingleMovie(list, type, setType) {
    let popular = list.filter((item) => item.slug === String(type));
    let randomPopular = Math.floor(
      Math.random() * popular[0].items.results.length - 1
    );
    let chosen = popular[0].items.results[randomPopular];
    let chosenInfo = await api.getMovieInfo(chosen.id);
    setType(chosenInfo);
  }

  useEffect(() => {
    const loadFeatured = async () => {
      const list = await api.getHomeList();
      loadSingleMovie(list, "comedy", setList);
    };

    loadFeatured();
  }, []);
  return (
    <>
      {list && <FeaturedMovie data={list} />}

      <FilmesArea>
        <h1>Filmes Online</h1>

        <Categories />
      </FilmesArea>
    </>
  );
}
