import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.authReducer.authenticated);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component path="/offers" {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
