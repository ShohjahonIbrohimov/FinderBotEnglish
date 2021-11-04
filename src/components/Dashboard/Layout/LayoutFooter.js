import React from "react";
import styles from "./LayoutFooter.module.css";
import footerSocials from "./FooterSocials";
import { Link } from "react-router-dom";
import { general_icons } from "../../../constants/icons";

const LayoutFooter = () => {
  return (
    <div className={styles.footer_wrap}>
      <div className="container d-flex justify-between">
        <Link to="/">
          <img src={general_icons.logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.content_two}>
          <p>Присоединяйся к нам в соц сетях</p>
          <div className={styles.socials}>
            {footerSocials.map((i) => i.icon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
