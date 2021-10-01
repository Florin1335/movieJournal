import React from "react";
import { Link } from "react-router-dom";
import UserSide from "./UserSide";

export default function Sidebar() {
  return (
    <div
      className="collapse collapse-horizontal sidebar-width"
      style={{
        color: "lightgray",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        bottom: 0,
        overflowY: "scroll",
        overflowX: "hidden",
        zIndex: 100000,
      }}
      id="target"
    >
      <div className="min-vh-100 p-4 sidebar-width d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
              className="btn bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="lightgray"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg>
            </button>
          </div>
          <h2>Menu</h2>
          <hr />
          <nav className="navbar navbar-dark">
            <ul className="navbar-nav flex-column w-100">
              <li className="nav-item">
                <Link className="nav-link p-0 m-0 h4" to="/">
                  <button
                    className="w-100 btn-white bg-black text-start p-2 darkerWhite"
                    type="button"
                    data-bs-target="#target"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="target"
                    style={{ border: "none" }}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/advanced_search" className="nav-link p-0 m-0 h4">
                  <button
                    className="w-100 btn-white bg-black text-start p-2 darkerWhite"
                    type="button"
                    data-bs-target="#target"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="target"
                    style={{ border: "none" }}
                  >
                    Advanced Search
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <UserSide></UserSide>
        </div>
      </div>
    </div>
  );
}
