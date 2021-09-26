import React, { useEffect, useState } from "react";
import useApiCall from "../apiHooks/useApiCall";

export default function RegisterModal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [info, setInfo] = useState(null);
  const [data, isLoading, setClicked] = useApiCall(
    "/api/register",
    "POST",
    false,
    {
      email,
      name,
      password,
    },
    true
  );

  useEffect(() => {
    if (data && data.type === "success") {
      setEmail("");
      setName("");
      setPassword("");
      setPassword2("");
    }
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    setInfo(null);
    if (email && name && password)
      if (password !== password2)
        setInfo({ message: "Passwords don't match.", type: "error" });
      else {
        setClicked(true);
      }
    else setInfo({ message: "All fields are required.", type: "error" });
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">
              Register a new account
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
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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
              <input
                className="form-control mt-2"
                placeholder="Re-enter password"
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="btn btn-primary mt-2"
                onClick={handleClick}
                disabled={isLoading && true}
              >
                {isLoading ? "Loading..." : "Register"}
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
            {data && (
              <p
                className={
                  data.type === "success"
                    ? "text-primary mt-2"
                    : "text-danger mt-2"
                }
              >
                {data.payload}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
