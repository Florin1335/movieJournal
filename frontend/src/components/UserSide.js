import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice.js";
import { Link } from "react-router-dom";

export default function UserSide() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    localStorage.removeItem("auth-token");
  };

  return (
    <>
      {!isAuth ? (
        <div className="d-flex flex-column">
          <button
            className="btn btn-white p-0"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            <button
              type="button"
              className="btn btn-white w-100 h-100 p-1"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
            >
              Register
            </button>
          </button>
          <button
            className="btn btn-white mt-2 p-0"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            <button
              type="button"
              className="btn btn-white w-100 h-100 p-1"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
            >
              Login
            </button>
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <img
            alt="user"
            src="/images/user.svg"
            className="img-fluid w-50 mx-auto"
          ></img>
          <p className="text-center">Authenticated</p>
          <Link to="/user_info">
            <button
              type="button"
              className="btn btn-white w-100"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
            >
              User Info
            </button>
          </Link>
          <Link to="/user_wishlist">
            <button
              type="button"
              className="btn btn-white w-100 mt-2"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
            >
              Wishlist
            </button>
          </Link>
          <Link to="/user_history">
            <button
              type="button"
              className="btn btn-white w-100 mt-2"
              data-bs-target="#target"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="target"
            >
              History
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-white mt-2"
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
