import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user;

  return isAuthenticated ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
