import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AdvancedSearchPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setError(null);
    if (title === "") {
      setError("The title is required!");
    } else {
      let query = `s=${title}`;
      if (type) query += `&type=${type}`;
      if (year) query += `&year=${year}`;
      history.push(`/search/${query}`);
    }
  };

  return (
    <div className="container p-3 d-flex flex-column">
      <p className="fs-5 text-center">
        Can't find your movie? Try the advanced search below to get a list of
        movies matching your search.
      </p>
      <div className="row">
        <form className="col-11 col-md-8 col-lg-6 mx-auto">
          <p>Title</p>
          <hr />
          <input
            className="form-control"
            placeholder="Title to search for..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="search"
          ></input>
          <p className="mt-4">Type</p>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="type1"
              value="movie"
              onChange={(e) => setType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="type1">
              Movie
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="type2"
              value="series"
              onChange={(e) => setType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="type2">
              Series
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="type3"
              value="episode"
              onChange={(e) => setType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="type3">
              Episode
            </label>
          </div>
          <p className="mt-4">Year</p>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
              <input
                className="form-control"
                placeholder="Year of release..."
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
              ></input>
            </div>
          </div>
          <p className="mt-3 text-secondary">
            Only the title is required to search.
          </p>
          {error && <p className="text-danger">{error}</p>}
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
