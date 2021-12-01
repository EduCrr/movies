import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api";
import { SearchArea } from "./styled";
import SliderMovie from "../../components/SliderMovie";
import FeaturedMovie from "../../components/FeaturedMovie";
let totalPages;
let totalResults;
export default function Search() {
  let url = useLocation().search;
  function getQueryString() {
    return new URLSearchParams(url); //transforma em objeto
  }
  const queryString = getQueryString();
  const [keyWord, setKeyWord] = useState(
    queryString.get("query") !== null ? queryString.get("query") : ""
  );
  const [searchMovie, setSearchMovie] = useState([]);
  const [page, setPage] = useState(2);
  const [list, setList] = useState({});

  useEffect(() => {
    async function loadMovie() {
      let movie = await api.getSearchList(keyWord);
      setSearchMovie(movie);
      console.log(movie);
      totalPages = movie[0].items.total_pages;
      console.log("total " + totalPages);
      totalResults = movie[0].items.total_results;
    }
    loadMovie();
  }, []);

  async function handlePage() {
    setPage(page + 1);
    const listFilmes = await api.getSearchList(keyWord, page);
    setSearchMovie([...searchMovie, ...listFilmes]);
    console.log("page " + page);
  }

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
    };

    loadFeatured();
  }, []);

  if (totalResults === 0) {
    return (
      <>
        {list && <FeaturedMovie data={list} />}

        <h1 style={{ textAlign: "center" }}>Nenhum filme encontrado</h1>
      </>
    );
  }
  return (
    <SearchArea>
      {list && <FeaturedMovie data={list} />}
      {searchMovie && (
        <>
          {searchMovie.map((item, k) => (
            <SliderMovie data={item} key={k} noSlider={true} />
          ))}
        </>
      )}
      {page > totalPages ? (
        ""
      ) : (
        <div className="btn">
          <button onClick={handlePage}>Carregar mais</button>
        </div>
      )}
    </SearchArea>
  );
}
