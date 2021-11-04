import React from "react";

const Radio = ({ options, register, width = "100%", primary = "" }) => {
  return (
    <div className="radio-classic d-flex justify-start">
      {options.map((o, index) => (
        <div className="d-flex justify-center align-center mr-32">
          <input
            ref={register({
              required: true,
            })}
            type="radio"
            name={o.name}
            value={o.value}
            id={o.value}
          />
          <label
            style={{ margin: "0" }}
            for={o.value}
            className="radio_label d-flex justify-center align-center"
          >
            <span className="checked"></span>
          </label>
          <span className="radio-text">{o.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Radio;
