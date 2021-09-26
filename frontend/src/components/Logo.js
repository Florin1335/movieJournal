import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="img-fluid" src="/images/logo.png" alt="logo"></img>
      </Link>
    </div>
  );
}
