import React from "react";
import navItems from "./NavItems";
import styles from "./LayoutTabs.module.css";
import { NavLink } from "react-router-dom";


const LayoutTabs = () => {
  return (
    <div className={styles.tabs_wrap}>
      <NavLink to="/"><div className={styles.logo}>
        <h3>Сall-center
          менджера</h3></div></NavLink>
      <ul className={styles.nav_items}>
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                activeClassName={styles.active}
                to={item.link}
                className={`${styles.nav_item} layout_menu_item `}
              >
                <div className="d-flex align-center"><span>{item.name}</span> {item.notification ? (<div className={styles.menu_notification}>{item.notification}</div>) : ''}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LayoutTabs;
