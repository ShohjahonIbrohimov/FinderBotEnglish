import React from "react";
import { useFieldArray } from "react-hook-form";
import styles from "./styles/CreateOffer.module.css";
import { general_icons } from "../../../constants/icons";
import InputText from "../../Reusable/InputText";

const Benefits = ({ control, register, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pros_client",
  });

  return (
    <div className={styles.benefits_wrap}>
      <div>
        <span className="label_title">Преимущества для клиент</span>
      </div>
      {fields.map((item, index) => {
        return (
          <div className={styles.delete_input_wrap}>
            <InputText
              width="525px"
              register={register}
              name={`pros_client[${index}].name`}
              errors={errors}
              icon={index + 1}
              iconType="icon_left"
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
      <div>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
          className={`d-flex align-center justify-center ${styles.add_btn}`}
        >
          {general_icons.plus_circle} Add
        </button>
      </div>
    </div>
  );
};

export default Benefits;
