import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Route {...rest}>{isAuth ? children : <Redirect to="/"></Redirect>}</Route>
  );
}
