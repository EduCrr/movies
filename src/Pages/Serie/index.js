import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SerieArea, SerieContent } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import api from "../../api";
import SliderMovie from "../../components/SliderMovie";
import Stars from "@material-ui/icons/Stars";
import DateRange from "@material-ui/icons/DateRange";
export default function Serie() {
  const [serie, setSerie] = useState([]);
  const [atores, setAtores] = useState([]);
  //const [similarMovie, setSimilarMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadSingleMovie = async () => {
      let tv = await api.getMovieInfo(id, "tv");
      console.log(tv);
      setSerie(tv);
    };
    loadSingleMovie();
  }, []);

  useEffect(() => {
    const loadAtores = async () => {
      let actors = await api.getMovieActors(id, "tv");
      setAtores(actors.cast);
    };
    loadAtores();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = atores.map((item, k) => (
    <div key={k}>
      <img
        onDragStart={handleDragStart}
        src={
          item.profile_path === null
            ? "https://images.unsplash.com/photo-1585675100414-add2e465a136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            : `https://image.tmdb.org/t/p/w300/${item.profile_path}`
        }
        alt={item.character}
      />
      <div className="title">{item.character}</div>
      <p>{item.name}</p>
    </div>
  ));

  let genres = [];
  for (let i in serie.genres) {
    genres.push(serie.genres[i].name);
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  return (
    <>
      <SerieArea
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${serie.backdrop_path})`,
        }}
      >
        <div className="featuredVertical">
          <div className="infos">
            <div className="infoArea">
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
                />
              </div>
              <div className="details">
                <div className="year">
                  <Stars /> {serie.first_air_date}
                </div>
                <div className="vote">
                  <DateRange /> {serie.vote_average}/10
                </div>
                <div className="title">
                  {serie.name} <br />
                  <p>{serie.tagline}</p>
                </div>

                <div className="watch">
                  <a
                    href={`https://www.youtube.com/results?search_query=${serie.title} trailer`}
                    target="_blank"
                  >
                    Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SerieArea>

      <SerieContent>
        <h2>Descrição</h2>

        <div className="desc">
          <div className="descLeft">
            <span>Genero:</span> {genres.join(", ")}
            <br />
            <span>Episódios:</span> {serie.number_of_episodes}
            <br />
            <span>Temporada:</span> {serie.number_of_seasons}
            <p>{serie.overview}</p>
          </div>
          <div className="descRight">
            <button>++ favoritos</button>
          </div>
        </div>

        <div className="actors">
          <h2>Atores</h2>
          <AliceCarousel
            mouseTracking
            items={items}
            disableDotsControls={true}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </SerieContent>
    </>
  );
}
