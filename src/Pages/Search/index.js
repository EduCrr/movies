import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import api from "../../api";
import { SearchArea } from "./styled";
import SliderMovie from "../../components/SliderMovie";
import FeaturedMovie from "../../components/FeaturedMovie";
let totalPages;
let totalResults;
let timer;
export default function Search() {
  let history = useHistory();
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

  async function loadMovie() {
    if (keyWord.trim() === "") {
      console.log("campo em branco");
      return;
    } else {
      let movie = await api.getSearchList(keyWord);
      setSearchMovie(movie);
      console.log(movie);
      totalPages = movie[0].items.total_pages;
      console.log("total " + totalPages);
      totalResults = movie[0].items.total_results;
    }
  }
  useEffect(() => {
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

  //nova consulta
  useEffect(() => {
    let queryString = [];
    if (keyWord) {
      queryString.push(`query=${keyWord}`);
    }
    history.replace({
      search: `?${queryString}`,
    });
    if (timer) {
      clearTimeout(timer);
    }
    setSearchMovie([]);
    timer = setTimeout(loadMovie, 2000);
  }, [keyWord]);

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
      <div className="submit">
        <form method="GET">
          <input
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            name="query"
            type="text"
            required
            placeholder="Nova consulta"
          />
        </form>
      </div>
      {searchMovie && (
        <>
          {searchMovie.map((item, k) => (
            <SliderMovie data={item} key={k} noSlider={true} />
          ))}
        </>
      )}
      {page > totalPages || keyWord === "" || keyWord.indexOf(" ") >= 0 ? (
        ""
      ) : (
        <div className="btn">
          <button onClick={handlePage}>Carregar mais</button>
        </div>
      )}
    </SearchArea>
  );
}
