import React, { useState, useEffect } from "react";
import api from "../../api";
import { SerieArea } from "./styled";
import FeaturedMovie from "../../components/FeaturedMovie";
import CategoriesSeries from "../../components/CategoriesSeries";
export default function Series() {
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
      const list = await api.getHomeList();
      loadSingleMovie(list, "comedy", setList);
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

      <SerieArea>
        <h1>Series Online</h1>

        <CategoriesSeries />
      </SerieArea>
    </>
  );
}
