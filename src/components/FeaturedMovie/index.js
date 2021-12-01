import React from "react";
import { FeaturedMovieArea } from "./styled";
import Monetization from "@material-ui/icons/MonetizationOn";
import Stars from "@material-ui/icons/Stars";
import DateRange from "@material-ui/icons/DateRange";
export default function FeaturedMovie({ data }) {
  let genres = [];
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }

  return (
    <>
      {!data && (
        <div className="loading">
          <img src="/assets/loading.gif" alt="loading" />
        </div>
      )}
      <FeaturedMovieArea
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      >
        <div className="featuredVertical">
          <div className="infoList">
            <div className="title">{data.title}</div>
            <div className="details">
              <div className="infoLeft">
                <div className="featuredYear">
                  <DateRange />
                  <p>{data.release_date}</p>
                </div>
                <div className="featuredPoints">
                  <Stars />
                  <p>{data.vote_average}/10</p>
                </div>
                <div className="featuredBudget">
                  {data.budget > 0 && (
                    <>
                      <Monetization />
                      <p>
                        {data.budget.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </>
                  )}
                </div>
                <br />
                <div className="genres">{genres.join(", ")}</div>
              </div>
              <div className="infoRight">{data.overview && data.overview}</div>
            </div>
          </div>
        </div>
      </FeaturedMovieArea>
    </>
  );
}
