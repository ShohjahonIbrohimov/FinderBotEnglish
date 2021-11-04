import React from "react";
import { useFieldArray } from "react-hook-form";
import styles from "./styles/CreateOffer.module.css";
import { general_icons } from "../../../constants/icons";
import InputText from "../../Reusable/InputText";

const Information = ({ control, register, errors, pricelist_country }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `pricelist_countries[${pricelist_country}]`,
  });

  return (
    <div>
      <div className="d-flex flex-wrap">
        {fields.map((item, index) => {
          return (
            <div className={`w-100 mb-16 ${styles.delete_input_wrap}`}>
              <div className="d-flex">
                <InputText
                  defaultValue={`${item.name}`}
                  width="70%"
                  register={register}
                  name={`pricelist_countries[${pricelist_country}][${index}].name`}
                  errors={errors}
                  widthLabel={false}
                />
                <div className="ml-16">
                  <InputText
                    defaultValue={`${item.price}`}
                    width="120px"
                    register={register}
                    name={`pricelist_countries[${pricelist_country}][${index}].price`}
                    errors={errors}
                    widthLabel={false}
                    icon={general_icons.rubl}
                  />
                </div>
              </div>
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
              append({ id: "" });
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
