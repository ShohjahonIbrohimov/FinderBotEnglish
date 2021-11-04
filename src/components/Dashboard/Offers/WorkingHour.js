import React from "react";
import InputText from "../../Reusable/InputText";
import { field_settings } from "./assets/offer_fields";

const WorkingHour = ({ working_hours_country, register, errors }) => {
  return (
    <div className="d-flex">
      <div className="mr-16">
        <InputText
          {...field_settings.working_hours_am}
          register={register}
          name={`working_hours[${working_hours_country}].am`}
          errors={errors}
        />
      </div>
      <span className="mr-16">__</span>
      <InputText
        {...field_settings.working_hours_pm}
        register={register}
        name={`working_hours[${working_hours_country}].pm`}
        errors={errors}
      />
    </div>
  );
};

export default WorkingHour;
