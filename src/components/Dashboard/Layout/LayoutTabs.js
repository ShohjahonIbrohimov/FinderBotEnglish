import React, { useEffect } from "react";
import styles from "./LayoutTabs.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";
import { changeLang } from "../../../redux/lang/langSlice";
import i18next from "i18next";
import { layoutMenuIcons } from "../../../constants/icons";
import { useTranslation } from "react-i18next";

const langs = [
  { name: "RU", value: "ru" },
  { name: "EN", value: "en" },
];

const LayoutTabs = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const langChange = (e) => {
    dispatch(changeLang(e.target.value));
    i18next.changeLanguage(e.target.value);
  };

  const navItems = [
    {
      name: t("menu-item1"),
      icon: layoutMenuIcons.offer,
      link: "/offers",
    },
    {
      name: t("menu-item2"),
      icon: layoutMenuIcons.creative,
      link: "/news",
    },
    {
      name: t("menu-item3"),
      icon: layoutMenuIcons.stream,
      link: "/webmaster",
    },
    {
      name: t("menu-item4"),
      icon: layoutMenuIcons.domain,
      link: "/production",
    },
    {
      name: t("menu-item5"),
      icon: layoutMenuIcons.domain,
      link: "/products",
    },
    {
      name: t("menu-item6"),
      icon: layoutMenuIcons.domain,
      link: "/carts",
    },
    {
      name: t("menu-item7"),
      icon: layoutMenuIcons.domain,
      link: "/menu",
    },
    {
      name: t("menu-item8"),
      icon: layoutMenuIcons.finance,
      link: "/users",
    },
    {
      name: t("menu-item9"),
      icon: layoutMenuIcons.statistics,
      link: "/tools",
    },
    {
      name: t("menu-item10"),
      icon: layoutMenuIcons.instrument,
      link: "/finance",
    },
    {
      name: t("menu-item11"),
      icon: layoutMenuIcons.new_request,
      link: "/statistics",
    },
    {
      name: t("menu-item12"),
      icon: layoutMenuIcons.new_request,
      link: "/profile",
    },
    {
      name: t("menu-item13"),
      icon: layoutMenuIcons.new_request,
      link: "/sms",
    },
    {
      name: t("menu-item14"),
      icon: layoutMenuIcons.new_request,
      link: "/bot-settings",
    },
  ];
  useEffect(() => {
    i18next.changeLanguage("ru");
  }, []);

  return (
    <div className={styles.tabs_wrap}>
      <ul className={styles.nav_items}>
        <div className={styles.nav_items_header}>
          <span class="icon_wrap" onClick={handleLogout}>
            <i class="bx bx-log-out" style={{ color: "#fff" }}></i>
          </span>
          <select
            onChange={langChange}
            style={{ marginLeft: "1.5rem", width: "70px" }}
          >
            {langs.map((o) => (
              <option value={o.value}>{o.name}</option>
            ))}
          </select>
        </div>
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                activeClassName={styles.active}
                to={item.link}
                className={`${styles.nav_item} layout_menu_item`}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LayoutTabs;
