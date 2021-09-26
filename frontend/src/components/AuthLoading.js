import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import useApiCall from "../apiHooks/useApiCall.js";

export default function AuthLoading() {
  const [data, isLoading] = useApiCall("/api/check", "GET", true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.type === "success" && data.payload === true) {
      dispatch(login());
    }
  }, [data]);

  return (
    <div
      className={`${
        isLoading ? "fixed-top" : "d-none"
      } min-vh-100 min-vw-100 bg-dark opacity-75`}
    >
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        {data && data.type === "failure" ? (
          <h3>{data.payload}</h3>
        ) : (
          <h3 className="darkerWhite mt-2">Attempting to authenticate...</h3>
        )}
      </div>
    </div>
  );
}
