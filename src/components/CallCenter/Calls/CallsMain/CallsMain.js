import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rangepicker from "../../../Reusable/Rangepicker";
import SelectClassic from "../../../Reusable/SelectClassic";
import styles from "../styles/Calls.module.css";
import { items, calls_filter } from "../items";
import UniversalButton from "../../../Reusable/UniversalButton";
import { call_center_icons } from "../../../../constants/icons";
import RSelect from "../../../Reusable/Select";
import Radio from "../../../Reusable/Radio";

const CallsMain = () => {
  const [open, setOpen] = useState(false);

  const getInputValue = (data) => {
    console.log(data);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <div>
      <div className={styles.row1}>
        <div className={styles.div1}>
          <Rangepicker label={"Период"} />
        </div>
        <div className={styles.div2}>
          {items.field.map((f, i) => {
            return (
              <div key={i}>
                <RSelect
                  control={control}
                  width="180px"
                  register={register}
                  options={f.options}
                  name={f.name}
                  label={f.label}
                />
                {/* <SelectClassic width="230px" register={register} options={f.options} name={f.name} /> */}
              </div>
            );
          })}
        </div>
        <div className={styles.div3}>
          <Radio
            register={register}
            name="calls_filter"
            options={calls_filter}
          />
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.sub_row1}>
          <span>
            Дата и время
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Тип
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Трубка
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
        </div>
        <div className={styles.sub_row2}>
          <span>
            Делительность
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
          <span>
            Запись разгавора
            <img
              className={styles.img_arrow_up_down}
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </span>
        </div>
      </div>
      <div className={styles.thirdRow}>
        <div className={styles.no_sales}>
          Звонки не найдены или Telephoneия не настроена
        </div>
        <div className={styles.create_sales}>
          Подключите Telephoneию в Центре интеграций
        </div>
      </div>
    </div>
  );
};

export default CallsMain;
