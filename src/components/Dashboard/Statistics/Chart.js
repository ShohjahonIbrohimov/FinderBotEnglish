import React from "react";
import styles from "./Chart.module.css";

const getAlteredData = (data) => {
  const max = Math.max(...data.map((d) => d.number));
  const data_in_percent = data.map((d) => {
    return {
      ...d,
      original_number: d.number,
      number: Math.round((d.number / max) * 100),
    };
  });
  return data_in_percent;
};

const Chart = ({ data }) => {
  return (
    <div className="d-flex">
      {getAlteredData(data).map((d) => (
        <div className="d-flex direction-column align-center justify-center mr-48">
          <div className={styles.bar_wrap}>
            <div className={styles.bar} style={{ height: `${d.number}%` }}>
              <span className={styles.bar_number}>{d.original_number}</span>
            </div>
          </div>
          <span className={styles.bar_name}>{d.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Chart;
