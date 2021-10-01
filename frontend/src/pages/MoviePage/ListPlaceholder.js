import React from "react";

const Card = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card flex-column h-100 w-100 bg-dark text-light">
        <div
          className="placeholder img-fluid poster"
          style={{ height: "450px", width: "400px" }}
        ></div>
        <div className="placeholder-glow mt-4">
          <span className="placeholder placeholder-lg col-6"></span>
        </div>
        <div className="placeholder-glow mt-4">
          <span className="placeholder col-1"></span>
          <span>&nbsp;</span>
          <span className="placeholder col-2"></span>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-1"></span>
          <span>&nbsp;</span>
          <span className="placeholder col-2"></span>
        </div>
      </div>
    </div>
  );
};

export default function ListPlaceholder() {
  return (
    <div className="container">
      <div className="row p-2 justify-content-center">
        {Array(10)
          .fill("")
          .map((value, index) => (
            <Card key={index}></Card>
          ))}
      </div>
    </div>
  );
}
