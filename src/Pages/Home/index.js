import React, { useState, useEffect } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import { HomeArea } from "./styled";
import api from "../../api";
import SliderMovie from "../../components/SliderMovie";
export default function Home() {
  const [list, setList] = useState({});
  const [movieHome, setMovieHome] = useState([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const list = await api.getHomeList();
      let popular = list.filter((item) => item.slug === "popular");
      let randomPopular = Math.floor(
        Math.random() * popular[0].items.results.length - 1
      );
      let chosen = popular[0].items.results[randomPopular];
      let chosenInfo = await api.getMovieInfo(chosen.id);
      setList(chosenInfo);
    };

    const loadHomeMovies = async () => {
      const listHome = await api.getHomeList();
      let primaryList = listHome.filter(
        (item) => item.slug === "popular" || item.slug === "toprated"
      );
      console.log(primaryList);
      setMovieHome(primaryList);
    };

    loadFeatured();
    loadHomeMovies();
  }, []);

  return (
    <HomeArea>
      <FeaturedMovie data={list} />
      {movieHome.map((item, k) => (
        <SliderMovie data={item} key={k} />
      ))}
    </HomeArea>
  );
}
