import React from "react";
import { SliderMovieArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link, useHistory } from "react-router-dom";
export default function SliderMovie({ data, noSlider, serie, similar }) {
  let history = useHistory();
  const handleDragStart = (e) => e.preventDefault();

  function handleChangeMovie(id) {
    if (serie) {
      history.push("");
      setTimeout(() => history.push(`/serie/${id}`), 0);
    } else {
      history.push("");
      setTimeout(() => history.push(`/filme/${id}`), 0);
    }
  }
  const items =
    data.items.results.length > 0 &&
    data.items.results.map((item, k) => (
      <>
        {similar && (
          <div key={k}>
            <div onClick={() => handleChangeMovie(item.id)}>
              <img
                onDragStart={handleDragStart}
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.original_name}
              />
            </div>
            <div onClick={() => handleChangeMovie(item.id)}>
              <div className="title">{serie ? item.name : item.title}</div>
            </div>
            <div className="infoSlider">
              <span>
                Data: {serie ? item.first_air_date : item.release_date}
              </span>
              <span>
                <span style={{ color: "#ff0066", fontWeight: "bold" }}>
                  IMDb:
                </span>
                {item.vote_average}
              </span>
            </div>
          </div>
        )}
        {!similar && (
          <div key={k}>
            <Link to={serie ? `/serie/${item.id}` : `/filme/${item.id}`}>
              <img
                onDragStart={handleDragStart}
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.original_name}
              />
            </Link>
            <Link to={serie ? `/serie/${item.id}` : `/filme/${item.id}`}>
              <div className="title">{serie ? item.name : item.title}</div>
            </Link>
            <div className="infoSlider">
              <span>
                Data: {serie ? item.first_air_date : item.release_date}
              </span>
              <span>
                <span style={{ color: "#ff0066", fontWeight: "bold" }}>
                  IMDb:
                </span>{" "}
                {item.vote_average}
              </span>
            </div>
          </div>
        )}
      </>
    ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };
  return (
    <>
      {noSlider !== true && (
        <SliderMovieArea>
          <h1>{data.title}</h1>
          <AliceCarousel
            mouseTracking
            items={items}
            disableDotsControls={true}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </SliderMovieArea>
      )}
      {noSlider && (
        <SliderMovieArea noSlider={noSlider}>
          <h1>{data.title}</h1>
          <div className="normalArea">
            {data.items.results.length > 0 &&
              data.items.results.map((item, k) => (
                <div key={k} className="normal">
                  <Link to={`/filme/${item.id}`}>
                    <img
                      onDragStart={handleDragStart}
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.original_name}
                    />
                  </Link>
                  <div className="infos">
                    <Link to={`/filme/${item.id}`}>
                      <div className="title">
                        {serie ? item.name : item.title}
                      </div>
                    </Link>
                    <div className="infoSlider">
                      <span>
                        Data: {serie ? item.first_air_date : item.release_date}
                      </span>
                      <span>
                        <span style={{ color: "#ff0066", fontWeight: "bold" }}>
                          IMDb:
                        </span>{" "}
                        {item.vote_average}
                      </span>
                    </div>
                    {serie && <br />}
                  </div>
                </div>
              ))}
          </div>
        </SliderMovieArea>
      )}
    </>
  );
}
