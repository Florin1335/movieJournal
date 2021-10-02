import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/search/t=${query}`);
    setQuery("");
  };

  return (
    <form className="d-flex flex-row align-items-center ms-4 ms-sm-0">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control rounded-pill me-1 shadow-lg"
        placeholder="Search a movie..."
        type="search"
      ></input>
      <button className="btn-white" type="submit" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.75rem"
          height="1.75rem"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
}
