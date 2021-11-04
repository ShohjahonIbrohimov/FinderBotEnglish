import React, { useState } from "react";
import Button from "../../../Reusable/Button";
import UniversalButton from "../../../Reusable/UniversalButton";
import Rangepicker from "../../../Reusable/Rangepicker";
import SearchInput from "../../../Reusable/SearchInput";
import styles from "../styles/Sales.module.css";
import { call_center_icons } from "../../../../constants/icons";
import SideBar from "../../../Reusable/SideBar";
import SideBarContent from "./SideBarContent";

const SalesMain = () => {
  const [open, setOpen] = useState(false);

  const getInputValue = (data) => {
    console.log(data);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <SideBar open={open} setOpen={setOpen}>
        <SideBarContent />
      </SideBar>
      <div className={styles.main_div}>
        <div className={styles.first_row}>
          <div className={styles.w50}>
            <div className={styles.flexAround}>
              <div>
                <button
                  onClick={handleOpen}
                  className="btn-main btn-main--green mr-8"
                >
                  +Продажа
                </button>
              </div>
              <div>
                <Rangepicker />
              </div>
              <div>
                <button className="btn-main btn-main--dark mr-8">
                  Применить
                </button>
              </div>
            </div>
          </div>
          <div className={styles.w30}>
            <div className={styles.flexAround}>
              <UniversalButton
                name="Экспорт"
                backgroundColor="transparent"
                color="#26304F"
                border="0.5px solid #26304F"
                icon={call_center_icons.arrow_smile_icon}
                iconLeft
                padding="0"
              />
              <SearchInput func={getInputValue} onChange={getInputValue} />
            </div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <span>
            Продажа №
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Дата и время
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Сотрудник
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Склад
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Клиент
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Description
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Сумма,руб
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.no_sales}>У вас еще нет продаж</div>
          <div className={styles.create_sales}>Создать продажу</div>
        </div>
      </div>
    </>
  );
};

export default SalesMain;
