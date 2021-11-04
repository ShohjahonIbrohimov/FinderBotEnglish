import React from "react";

const SelectClassicX = ({ register, options, width = "100%", className="primary", name="car" }) => {
  return (
    <select
      style={{ width }}
      className={className}
      name={name}
      ref={register({
        required: true,
      })}
    >
      {options.map((o) => (
        <option value={o.value}>{o.label}</option>
      ))}
    </select>
  );
};

export default SelectClassicX;
