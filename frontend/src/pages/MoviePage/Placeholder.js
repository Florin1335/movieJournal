import React from "react";

export default function Placeholder() {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row p-1 p-sm-2 p-md-3 darkerWhite">
        <div
          className="placeholder img-fluid poster mx-auto"
          style={{ height: "450px", width: "400px" }}
        ></div>
        <div className="d-flex flex-column w-100 ps-4">
          <p className="placeholder-glow mt-4 mt-md-0">
            <span className="placeholder placeholder-lg col-6"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholdercol-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-2"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-3"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholder col-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-2"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholder col-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-3"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholder col-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-2"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholder col-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-4"></span>
          </p>
          <p className="placeholder-glow  mt-3">
            <span className="placeholder col-1"></span>
            <span>&nbsp;</span>
            <span className="placeholder col-3"></span>
          </p>
          <p className="placeholder-glow mt-5 mt-md-auto">
            <span className="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
