import React from "react";
// ROUTE
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <>
      <Switch>
        {ROUTES.map((route) => {
          if (route.key === "APP_DASHBOARD") {
            return <ProtectedRoute {...route} component={route.component} />;
          } else if (route.key === "APP_MVP") {
            return <ProtectedRoute {...route} component={route.component} />;
          } else {
            return <Route {...route} key={route.key} />;
          }
        })}
      </Switch>
    </>
  );
};

export default App;
