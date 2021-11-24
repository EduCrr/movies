import React from "react";
import { SliderMovieArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function SliderMovie({ data }) {
  console.log(data);
  const handleDragStart = (e) => e.preventDefault();
  const items =
    data.items.results.length > 0 &&
    data.items.results.map((item, k) => (
      <>
        <div key={k}>
          <img
            onDragStart={handleDragStart}
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={item.original_name}
          />
          <div className="title">{item.title}</div>
          <div className="infoSlider">
            <span>Data: {item.release_date}</span>
            <span>
              <span style={{ color: "#ff0066", fontWeight: "bold" }}>
                IMDb:
              </span>{" "}
              {item.vote_average}
            </span>
          </div>
        </div>
      </>
    ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  return (
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
  );
}

//https://www.npmjs.com/package/react-alice-carousel
