import React from "react";

export default function MenuButton() {
  return (
    <button
      type="button"
      className="btn-white d-flex flex-row align-items-center"
      data-bs-target="#target"
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-controls="target"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        fill="currentColor"
        className="bi bi-list me-1 mb-1"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <span className="h4">MENU</span>
    </button>
  );
}
