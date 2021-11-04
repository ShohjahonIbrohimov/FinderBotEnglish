import React from "react";

const Checkbox = ({ options, name, register, required = false }) => {
  return (
    <div className="d-flex">
      {options.map((o) => (
        <label class="checkbox_classic_wrap">
          <input
            type="checkbox"
            name={name}
            ref={register({
              required,
            })}
          />
          <span class="checkmark"></span>
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
