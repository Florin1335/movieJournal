import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Pages(props) {
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.pathname);
  const page = urlParams.has("page") ? parseInt(urlParams.get("page")) : 1;

  return (
    <nav aria-label="pagination">
      <ul className="pagination justify-content-center p-3">
        <li className={`page-item ${page === 1 && "active"}`}>
          <Link
            to={
              history.location.pathname.replace(/&page=[0-9]+/, "") + "&page=1"
            }
          >
            <span className="page-link">First page</span>
          </Link>
        </li>
        {Array(Math.ceil(props.results / 10))
          .fill("")
          .map((value, index) => {
            if (index + 1 > page - 5 && index + 1 < page + 5)
              return (
                <li
                  className={`page-item ${index + 1 === page && "active"}`}
                  key={index}
                >
                  <Link
                    to={
                      history.location.pathname.replace(/&page=[0-9]+/, "") +
                      "&page=" +
                      (index + 1)
                    }
                  >
                    <span className="page-link">{index + 1}</span>
                  </Link>
                </li>
              );
          })}
        <li
          className={`page-item ${
            page === Math.ceil(props.results / 10) && "active"
          }`}
        >
          <Link
            to={
              history.location.pathname.replace(/&page=[0-9]+/, "") +
              "&page=" +
              Math.ceil(props.results / 10)
            }
          >
            <span className="page-link">
              Last page ({Math.ceil(props.results / 10)})
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
