import React from "react";
import MovieButton from "./MovieButton.js";

export default function MovieButtons({ imdbID }) {
  return (
    <div className="row p-5">
      <MovieButton imdbID={imdbID} buttonName={"Wishlist"}></MovieButton>
      <MovieButton imdbID={imdbID} buttonName={"History"}></MovieButton>
    </div>
  );
}
