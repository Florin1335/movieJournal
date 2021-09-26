import React, { useState } from "react";
import { login } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setInfo(null);
    if (email && password) {
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((value) => {
          if (!value.ok) throw value;
          if (value.headers.has("auth-token"))
            localStorage.setItem(
              "auth-token",
              JSON.stringify(value.headers.get("auth-token"))
            );
          return value.json();
        })
        .then((value) => {
          dispatch(login());
          setSuccess(true);
          setInfo({ message: value, type: "info" });
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          try {
            err.json().then((value) => {
              setInfo({ message: value, type: "error" });
            });
          } catch (error) {
            setInfo({
              message: "Internet connection problem.",
              type: "error",
            });
          }
        });
    } else setInfo({ message: "Both fields are required.", type: "error" });
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Log into an existing account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <input
                className="form-control mt-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="btn btn-primary mt-2"
                onClick={handleClick}
                disabled={success && true}
              >
                Login
              </button>
            </form>
            {info && (
              <p
                className={
                  info.type === "error"
                    ? "text-danger mt-2"
                    : "text-primary mt-2"
                }
              >
                {info.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
