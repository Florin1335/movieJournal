import React from "react";
import MovieButtons from "./MovieButtons";
import Rating from "./Rating";
import { useSelector } from "react-redux";

export default function Movie({ movie }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <div className="d-flex flex-column flex-md-row p-1 p-sm-2 p-md-3 darkerWhite">
        {movie.Poster && movie.Poster !== "N/A" && (
          <img
            alt="poster"
            id="poster"
            className="img-fluid"
            src={movie.Poster}
          ></img>
        )}
        <div className="d-flex flex-column w-100 ps-4">
          <h2 className="darkWhite mt-4 mt-md-0">{movie.Title}</h2>
          <div className="d-flex flex-row flex-wrap gap-1 align-items-center mt-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </span>
            <span>IMDb Rating: </span>
            {movie.imdbRating && movie.imdbRating !== "N/A" ? (
              <>
                <Rating
                  extraClasses="d-none d-sm-flex"
                  rating={movie.imdbRating}
                ></Rating>
                <Rating
                  extraClasses="d-flex d-sm-none mt-1"
                  rating={movie.imdbRating}
                ></Rating>
                <span>{`${movie.imdbRating}/10`}</span>
              </>
            ) : (
              <div>Not found</div>
            )}
          </div>
          <div className="d-flex flex-row gap-1 mt-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-calendar2-week"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
            </span>
            <span>
              Year:{" "}
              {movie.Year && movie.Year !== "N/A" ? movie.Year : "Not found"}
            </span>
          </div>
          <div className="d-flex flex-row gap-1 mt-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
            </span>
            <span>
              Genre:{" "}
              {movie.Genre && movie.Genre !== "N/A" ? movie.Genre : "Not found"}
            </span>
          </div>
          <div className="d-flex flex-row gap-1 mt-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
            </span>
            <span>
              Duration:{" "}
              {movie.Runtime && movie.Runtime !== "N/A"
                ? movie.Runtime
                : "Not found"}
            </span>
          </div>
          <div className="d-flex flex-row gap-1 mt-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fillRule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </span>
            <span>
              Actors:{" "}
              {movie.Actors && movie.Actors !== "N/A"
                ? movie.Actors
                : "Not found"}
            </span>
          </div>
          <div className="d-flex flex-row gap-1 mt-3 mb-none mb-md-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                fill="currentColor"
                className="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
              </svg>
            </span>
            <span>
              Language:{" "}
              {movie.Language && movie.Language !== "N/A"
                ? movie.Language
                : "Not found"}
            </span>
          </div>
          {movie.Plot && movie.Plot !== "N/A" ? (
            <p className="mt-5 mt-md-auto">{movie.Plot}</p>
          ) : (
            <p className="mt-5 mt-md-auto">No plot found.</p>
          )}
        </div>
      </div>
      {isAuth && <MovieButtons imdbID={movie.imdbID}></MovieButtons>}
    </>
  );
}
