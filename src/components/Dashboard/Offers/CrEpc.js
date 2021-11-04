import React from "react";
import { crepc } from "./assets/offer_fields";
import InputText from "../../Reusable/InputText";

const CrEpc = ({ register, errors, crepc_country }) => {
  return (
    <div className="d-flex">
      {crepc.map((i) => (
        <div className="mr-16">
          <InputText
            {...i}
            register={register}
            name={`crepc[${crepc_country}][${i.name}]`}
            errors={errors}
          />
        </div>
      ))}
    </div>
  );
};

export default CrEpc;
