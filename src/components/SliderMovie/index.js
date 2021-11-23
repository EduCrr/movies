import React from "react";
import { SliderMovieArea } from "./styled";
export default function SliderMovie({ data }) {
  return (
    <SliderMovieArea>
      <h1>{data.title}</h1>
    </SliderMovieArea>
  );
}
