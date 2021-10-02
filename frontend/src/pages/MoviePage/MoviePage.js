import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import Error from "./Error.js";
import MovieList from "./MovieList";
import Placeholder from "./Placeholder";
import ListPlaceholder from "./ListPlaceholder";

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: null, movie: null };
    case "error":
      return { ...state, isLoading: false, error: action.value };
    case "success":
      return { ...state, isLoading: false, movie: action.value };
    default:
      return { ...state };
  }
};

export default function MoviePage() {
  const { query } = useParams();
  const initialState = {
    isLoading: true,
    error: null,
    movie: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, error, movie } = state;

  useEffect(() => {
    dispatch({ type: "loading" });
    fetch(`https://www.omdbapi.com/?apikey=28334d8e&${query}`)
      .then((value) => value.json())
      .then((value) => {
        if (value.Error) dispatch({ type: "error", value: value.Error });
        else dispatch({ type: "success", value });
      })
      .catch((err) => {
        dispatch({ type: "error", value: "Eroare la conexiune..." });
      });
  }, [query]);

  return (
    <>
      {isLoading &&
        (query.search(/t=/) !== -1 || query.search(/i=/) !== -1 ? (
          <Placeholder></Placeholder>
        ) : (
          <ListPlaceholder></ListPlaceholder>
        ))}
      {movie &&
        (movie.Search ? (
          <MovieList list={movie}></MovieList>
        ) : (
          <Movie movie={movie}></Movie>
        ))}
      {error && <Error message={error}></Error>}
    </>
  );
}
