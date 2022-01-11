import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FilmeArea, FilmeContent } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import api from "../../api";
import SliderMovie from "../../components/SliderMovie";
import Stars from "@material-ui/icons/Stars";
import DateRange from "@material-ui/icons/DateRange";
import { useStateValue } from "../../contexts/StateContext";
export default function Filme() {
  const [filme, setFilme] = useState([]);
  const [atores, setAtores] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const { id } = useParams();
  const [state, dispatch] = useStateValue();
  let history = useHistory();
  useEffect(() => {
    const loadSingleMovie = async () => {
      let movie = await api.getMovieInfo(id, "movie");
      console.log(movie);
      setFilme(movie);
    };
    loadSingleMovie();
  }, []);

  useEffect(() => {
    const loadAtores = async () => {
      let actors = await api.getMovieActors(id, "movie");
      setAtores(actors.cast);
    };
    loadAtores();
  }, []);

  useEffect(() => {
    const loadSimilar = async () => {
      let similar = await api.getSimilares(id, "movie");
      console.log(similar);
      setSimilarMovie(similar);
    };
    loadSimilar();
  }, []);

  let genres = [];
  for (let i in filme.genres) {
    genres.push(filme.genres[i].name);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDragStart = (e) => e.preventDefault();

  const items = atores.map((item, k) => (
    <div className="atores" key={k}>
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

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    768: { items: 4 },
    1024: { items: 4 },
  };

  function handleAddFav(filme) {
    let dadosFilme = {
      id: filme.id,
      title: filme.title,
      original_name: filme.original_name,
      poster_path: filme.poster_path,
    };

    dispatch({
      type: "addFav",
      add: dadosFilme,
    });

    history.push("/favoritos");
  }
  return (
    <>
      <FilmeArea
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
        }}
      >
        <div className="featuredVertical">
          <div className="infos">
            <div className="infoArea">
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}
                />
              </div>
              <div className="details">
                <div className="year">
                  <Stars /> {filme.release_date}
                </div>
                <div className="vote">
                  <DateRange /> {filme.vote_average}/10
                </div>
                <div className="title">
                  {filme.title} <br />
                  <p>{filme.tagline}</p>
                </div>

                <div className="watch">
                  <a
                    href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
                    target="_blank"
                  >
                    Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FilmeArea>

      <FilmeContent>
        <h2>Descrição</h2>

        <div className="desc">
          <div className="descLeft">
            <span>Gênero:</span> {genres.join(", ")}
            <p>{filme.overview}</p>
          </div>
          <div className="descRight">
            <button onClick={() => handleAddFav(filme)}>++ favoritos</button>
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
        {similarMovie && (
          <>
            {similarMovie.map((item, k) => (
              <SliderMovie data={item} key={k} similar={similarMovie} />
            ))}
          </>
        )}
      </FilmeContent>
    </>
  );
}
