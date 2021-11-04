import React from "react";

// edited to accept icons as well

const MultipleSelect = ({
  type = "checkbox",
  name,
  label,
  options,
  style = { width: "80%" },
  spanStyle,
  register = () => {},
  required = false,
}) => {
  return (
    <div style={style} className="multi-select">
      <span className="label_title">{label}</span>
      <div>
        {options.map((o) => (
          <label className="multiple_select_box">
            <input
              ref={register({
                required,
              })}
              type={type}
              id={o.id}
              name={name}
              value={o.value}
            />
            <span style={spanStyle} className="checkmark">
              <span className="checkmark-icon">
                <img src={o.icon} alt="" />
              </span>
              <span className="checkmark-text">{o.label}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelect;
