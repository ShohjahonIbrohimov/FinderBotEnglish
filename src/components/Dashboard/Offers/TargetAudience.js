import React from "react";
import { useFieldArray } from "react-hook-form";
import styles from "./styles/CreateOffer.module.css";
import { general_icons } from "../../../constants/icons";
import InputText from "../../Reusable/InputText";

const Benefits = ({ control, register, errors, watch }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "target_audience",
  });

  const getCurrentValue = (name) => {
    const age = watch(name);
    return age;
  };

  return (
    <div>
      <div>
        {fields.map((item, index) => {
          return (
            <div>
              <div>
                <span className="label_title">
                  {getCurrentValue(`target_audience[${index}].from`)} -
                  {getCurrentValue(`target_audience[${index}].to`)}
                </span>
              </div>
              <div className={` mr-16 mb-16 ${styles.delete_input_wrap}`}>
                <div className="d-flex">
                  <div className="mr-16">
                    <InputText
                      width="150px"
                      register={register}
                      name={`target_audience[${index}].from`}
                      errors={errors}
                      widthLabel={false}
                    />
                  </div>
                  <InputText
                    width="150px"
                    register={register}
                    name={`target_audience[${index}].to`}
                    errors={errors}
                    widthLabel={false}
                  />
                </div>
                <button
                  className={styles.delete_input_button}
                  type="button"
                  onClick={() => remove(index)}
                >
                  {general_icons.deleteIcon}
                </button>
              </div>
            </div>
          );
        })}
        <div>
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

export default Benefits;
