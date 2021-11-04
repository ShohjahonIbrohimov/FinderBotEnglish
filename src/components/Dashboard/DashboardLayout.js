import React, { useEffect } from "react";
import LayoutTabs from "./Layout/LayoutTabs";
import { DASHBOARD_ROUTES } from "../../routes/routes";
import { Route, Switch } from "react-router-dom";
import { authMe } from "../../redux/auth/thunks";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const DashboardLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMe());
  }, []);

  return (
    <>
      <Redirect to="/offers" />
      <LayoutTabs />
      <div
        className="container"
        style={{
          width: "75%",
          minHeight: "100vh",
          marginLeft: "25%",
          padding: "1.5rem",
          position: "relative",
        }}
      >
        <Switch>
          {DASHBOARD_ROUTES.map((route) => (
            <Route {...route} key={route.key} />
          ))}
        </Switch>
      </div>
    </>
  );
};

export default DashboardLayout;
