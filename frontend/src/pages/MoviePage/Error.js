import React from "react";

export default function Error({ message }) {
  return (
    <div className="d-flex flex-column p-5">
      <img
        className="w-50 mx-auto rounded rounded-3"
        alt="error"
        src="/images/error.jpg"
      ></img>
      <h3 className="text-center mt-5">{message}</h3>
    </div>
  );
}
