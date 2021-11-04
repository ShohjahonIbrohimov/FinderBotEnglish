import React, { useState } from "react";
import LayoutTabs from "./Layout/LayoutTabs";
import { Route, Switch } from "react-router-dom";
import { MVP_ROUTES } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { call_center_icons, general_icons } from "../../constants/icons"

const MVPLayout = () => {
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);


  const handleVisibility = () => {
    setvisible(!visible);
  };
  const user = useSelector((state) => state.authReducer.user);
  console.log(user)

  const handleLogout = () => {
    dispatch(logout());

  };
  return (
    <>
      <LayoutTabs />
      <div className="topbar d-flex">
        <div className="header_right_item">
          <div className="d-flex align-center">
            <div className="profile_img">
              <img src={call_center_icons.userIcon} alt="" />
            </div>
            <div className="profile_info">
              <p>
                <b>{user?.email}</b>
              </p>
              <p>
                {user?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="header_dropdown_wrap">
          <span onClick={handleVisibility} className="dots medium">
            {general_icons.dots_vertical}
          </span>
          <div
            className={`header_dropdown ${visible ? "dropdown_visible" : ""}`}>
            <ul>
              <li onClick={handleLogout} className="d-flex align-center">
                {general_icons.logout} Выйти
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          width: "80%",
          minHeight: "100vh",
          marginLeft: "19%",
          padding: "1.5rem",
          marginTop: "72px"
        }}
      >
        <Switch>
          {MVP_ROUTES.map((route) => (
            <Route {...route} key={route.key} />
          ))}
        </Switch>
      </div>
    </>
  );
};

export default MVPLayout;
