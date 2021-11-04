import React, { useState } from "react";
import styles from "./LayoutHeader.module.css";
import { Link } from "react-router-dom";
import { general_icons } from "../../../constants/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";

const managerImg =
  "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

const LayoutHeader = () => {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const manager_img = {
    backgroundImage: `url(${managerImg})`,
  };

  const handleVisibility = () => {
    setvisible(!visible);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const linkedManager = useSelector(
    (state) => state.authReducer?.user?.linkedManager?.manager
  );
  const username = useSelector((state) => state.authReducer?.user?.username);

  const user_id = useSelector((state) => state.authReducer?.user?.profile?.id);
  return (
    <div className="container">
      <div className={styles.header_wrap}>
        <Link to="/">
          <img src={general_icons.logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className="d-flex">
          <div className="d-flex mr-32">
            <div className={styles.header_right_item}>
              <p>
                <b>Всего 0₽</b>
              </p>
              <p>Сегодня 0₽</p>
            </div>
            <div className={styles.header_right_item}>
              <p>
                <b>Xолд</b>
              </p>
              <p> 0₽</p>
            </div>
            <div className={styles.header_right_item}>
              <div className="d-flex align-center">
                <div className={styles.profile_img} style={manager_img}></div>
                <div>
                  <p className={styles.user_name}>{username}</p>
                  <p className={styles.user_id}>id: {user_id}</p>
                </div>
              </div>
            </div>
            <div className={styles.header_right_item}>
              <div className="d-flex align-center">
                <div className={styles.profile_img} style={manager_img}></div>
                <div>
                  <p>
                    <b>Ваш менеджер:</b>
                  </p>
                  <p>
                    {linkedManager?.[0].manager_name
                      ? linkedManager?.[0].manager_name
                      : "Без имени"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.header_dropdown_wrap}>
            <span onClick={handleVisibility} className="icon_primary medium">
              {general_icons.dots_vertical}
            </span>
            <div
              className={`${styles.header_dropdown} ${visible ? styles.dropdown_visible : ""
                }`}
            >
              <ul>
                <li onClick={handleLogout} className="d-flex align-center">
                  {general_icons.logout} Выйти
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
