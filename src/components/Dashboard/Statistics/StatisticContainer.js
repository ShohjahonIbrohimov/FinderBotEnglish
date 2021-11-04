import React from "react";
import Chart from "../Statistics/Chart";
import styles from "./StatisticContainer.module.css";

const StatisticContainer = ({ stat }) => {
  return (
    <div className={styles.stat_container}>
      <div className="mb-64">
        <h4 className={styles.title}>{stat.title}</h4>
        <span className={styles.date}>
          Cтатистика с {stat.date_from} до {stat.date_to}
        </span>
      </div>
      <Chart data={stat.data} />
    </div>
  );
};

export default StatisticContainer;
