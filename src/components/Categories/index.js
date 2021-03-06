import React, { useState, useEffect } from "react";
import { CategoriesArea } from "./styled";
import SliderMovie from "../SliderMovie";
import api from "../../api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
let totalPages;
export default function Categories() {
  const [listMovies, setListMovies] = useState([]);
  const [listMovieSingle, setListMovieSingle] = useState(null);
  const [page, setPage] = useState(2);
  const [slugH, setSlugH] = useState("");
  const [loadingF, setLoadingF] = useState(true);
  let filmes = [
    { id: 0, title: "Ação", slug: "action" },
    { id: 1, title: "Aventura", slug: "adventure" },
    { id: 2, title: "Romance", slug: "romance" },
    { id: 3, title: "Drama", slug: "drama" },
    { id: 4, title: "Comédia", slug: "comedy" },
    { id: 5, title: "Ficção científica", slug: "sciencefiction" },
    { id: 6, title: "Guerra", slug: "war" },
    { id: 7, title: "Terror", slug: "horror" },
  ];
  const items =
    filmes.length > 0 &&
    filmes.map((item, k) => (
      <>
        <div
          className="tags"
          key={k}
          onClick={() => handleCategories(item.slug)}
        >
          {item.title}
        </div>
      </>
    ));

  async function handleCategories(slug) {
    setListMovies([]);
    setLoadingF(true);
    const singleMovie = await api.getFilmesList();
    const movieFilter = singleMovie.filter((item) => item.slug === slug);
    console.log(movieFilter);
    setListMovieSingle(movieFilter);
    setSlugH(slug);
    setPage(2);
    setLoadingF(false);
  }
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };
  useEffect(() => {
    const loadFilmes = async () => {
      setLoadingF(true);
      const listFilmes = await api.getFilmesList();
      setListMovies(listFilmes);
      totalPages = listFilmes[0].items.total_pages;
      setLoadingF(false);
    };

    loadFilmes();
  }, []);
  async function handlePage() {
    setListMovies([]);
    setPage(page + 1);
    const listFilmes = await api.getFilmesList(page);
    let filterList = listFilmes.filter((item) => item.slug === slugH);
    setListMovieSingle([...listMovieSingle, ...filterList]);
  }
  return (
    <CategoriesArea>
      <div className="categories">
        <h2>Populares Tags</h2>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        disableDotsControls={true}
        responsive={responsive}
        controlsStrategy="alternate"
      />
      {loadingF ? (
        <div className="loadingCat">
          <img className="" src="/assets/loading2.gif" />
        </div>
      ) : (
        <>
          {listMovies && (
            <>
              {listMovies.map((item, k) => (
                <SliderMovie data={item} key={k} />
              ))}
            </>
          )}

          {listMovieSingle && (
            <>
              {listMovieSingle.map((item, k) => (
                <SliderMovie data={item} key={k} noSlider={true} />
              ))}
            </>
          )}
          {listMovieSingle !== null &&
            (page > totalPages ? (
              ""
            ) : (
              <div className="btn">
                <button onClick={handlePage}>Carregar mais</button>
              </div>
            ))}
        </>
      )}
    </CategoriesArea>
  );
}
