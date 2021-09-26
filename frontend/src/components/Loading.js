import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
