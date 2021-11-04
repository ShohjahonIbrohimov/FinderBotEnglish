import React from "react";
import { useFieldArray } from "react-hook-form";
import styles from "./styles/CreateOffer.module.css";
import { general_icons } from "../../../constants/icons";
import TextArea from "../../Reusable/TextArea";
import Radio from "../../Reusable/Radio";
import { country_select, info_type } from "./assets/offer_fields";

const Information = ({ control, register, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "traffic_cities",
  });

  return (
    <div>
      <Radio
        register={register}
        name="info_type"
        options={info_type}
        label=" "
      />

      <div className="d-flex flex-wrap">
        {fields.map((item, index) => {
          return (
            <div className={` mr-16 mb-16 ${styles.delete_input_wrap}`}>
              <TextArea
                label="Описания оффера"
                width="375px"
                register={register}
                name={`information[${index}].name`}
              />
              <button
                className={`${styles.delete_input_button} ${styles.delete_input_button_textarea}`}
                type="button"
                onClick={() => remove(index)}
              >
                {general_icons.deleteIcon}
              </button>
            </div>
          );
        })}
        <div className="w-100">
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
      </div>
    </div>
  );
};

export default Information;
