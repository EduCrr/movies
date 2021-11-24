import React, { useState, useEffect } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import { HomeArea, SingleMovie } from "./styled";
import api from "../../api";
import SliderMovie from "../../components/SliderMovie";
import Stars from "@material-ui/icons/Stars";
import DateRange from "@material-ui/icons/DateRange";

export default function Home() {
  const [list, setList] = useState({});
  const [movieHome, setMovieHome] = useState([]);
  const [movieHomeFinal, setMovieHomeFinal] = useState([]);
  const [upcoming, setUpcoming] = useState({});

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
      loadSingleMovie(list, "popular", setList);
    };

    const loadHomeMovies = async () => {
      const listHome = await api.getHomeList();
      let primaryList = listHome.filter(
        (item) => item.slug === "popular" || item.slug === "toprated"
      );
      setMovieHome(primaryList);
    };

    const loadUpcoming = async () => {
      const list = await api.getHomeList();
      loadSingleMovie(list, "upcoming", setUpcoming);
    };

    const loadHomeMoviesFinal = async () => {
      const listHome = await api.getHomeList();
      let primaryList = listHome.filter(
        (item) => item.slug === "comedy" || item.slug === "horror"
      );
      setMovieHomeFinal(primaryList);
    };

    loadFeatured();
    loadHomeMovies();
    loadUpcoming();
    loadHomeMoviesFinal();
  }, []);

  return (
    <HomeArea>
      {movieHome && <FeaturedMovie data={list} />}

      {movieHome.map((item, k) => (
        <SliderMovie data={item} key={k} />
      ))}
      {upcoming && (
        <SingleMovie
          style={{
            height: "80vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${upcoming.backdrop_path})`,
          }}
        >
          <div className="infoSingle">
            <div className="SingleHorizontal">
              <div className="title">Nos cinemas</div>
              <div className="titleSingle">{upcoming.title}</div>
              <div className="infos">
                <div className="icons">
                  <Stars />
                  {upcoming.release_date}
                </div>
                <div className="icons">
                  <DateRange />
                  {upcoming.vote_average}/10
                </div>
              </div>
              <div className="overview">{upcoming.overview}</div>
            </div>
          </div>
        </SingleMovie>
      )}
      {movieHomeFinal.map((item, k) => (
        <SliderMovie data={item} key={k} />
      ))}
    </HomeArea>
  );
}
