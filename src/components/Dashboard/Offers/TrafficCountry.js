import React from "react";
import { useFieldArray } from "react-hook-form";
import styles from "./styles/CreateOffer.module.css";
import { general_icons } from "../../../constants/icons";
import InputText from "../../Reusable/InputText";

const TrafficCountry = ({ control, register, errors, traffic_country }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `citiesof_country[${traffic_country}]`,
  });

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div className={` mr-16 mb-16 ${styles.delete_input_wrap}`}>
            <InputText
              width="150px"
              register={register}
              name={`citiesof_country[${traffic_country}][${index}].name`}
              errors={errors}
              widthLabel={false}
            />
            <button
              className={styles.delete_input_button}
              type="button"
              onClick={() => remove(index)}
            >
              {general_icons.deleteIcon}
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          append({ name: "append" });
        }}
        className={`mb-16 d-flex align-center justify-center ${styles.add_btn}`}
      >
        {general_icons.plus_circle} Add
      </button>
    </div>
  );
};

export default TrafficCountry;
