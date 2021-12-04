import React, { useState, useEffect } from "react";
import { CategoriesArea } from "./styled";
import SliderMovie from "../SliderMovie";
import api from "../../api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function CategoriesSeries() {
  const [listMovies, setListSeries] = useState([]);
  const [listSerieSingle, setListSerieSingle] = useState(null);
  const [page, setPage] = useState(2);
  const [slugH, setSlugH] = useState("");
  const [loadingF, setLoadingF] = useState(true);
  let filmes = [
    { id: 0, title: "Ação e Aventura", slug: "action-adventure" },
    { id: 1, title: "Sci-Fi & Fantasia", slug: "scifi" },
    { id: 2, title: "Drama", slug: "drama" },
    { id: 3, title: "Comédia", slug: "comedy" },
    { id: 4, title: "Família", slug: "family" },
    { id: 5, title: "Guerra", slug: "war" },
    { id: 6, title: "Talk", slug: "talk" },
    { id: 7, title: "Documentário", slug: "documentary" },
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
    setListSeries([]);
    setLoadingF(true);
    const singleMovie = await api.getSeriesList();
    const movieFilter = singleMovie.filter((item) => item.slug === slug);
    setListSerieSingle(movieFilter);
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
    const loadSeries = async () => {
      setLoadingF(true);
      const listSeries = await api.getSeriesList();
      setListSeries(listSeries);
      setLoadingF(false);
    };

    loadSeries();
  }, []);
  async function handlePage() {
    setListSeries([]);
    setPage(page + 1);
    const listFilmes = await api.getSeriesList(page);
    let filterList = listFilmes.filter((item) => item.slug === slugH);
    setListSerieSingle([...listSerieSingle, ...filterList]);
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
                <SliderMovie data={item} key={k} serie={true} />
              ))}
            </>
          )}

          {listSerieSingle && (
            <>
              {listSerieSingle.map((item, k) => (
                <SliderMovie data={item} key={k} noSlider={true} serie={true} />
              ))}
            </>
          )}
          {listSerieSingle !== null && (
            <div className="btn">
              <button onClick={handlePage}>Carregar mais</button>
            </div>
          )}
        </>
      )}
    </CategoriesArea>
  );
}
