import React from "react";

const Radio = ({
  options,
  register,
  paddingLeft,
  paddingRight,
  flexWrap,
  label = null,
  name,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: label ? "1.5rem" : "" }}>
      {label && <span className="label_title">{label}</span>}
      <div className="d-flex " style={{ flexWrap }}>
        {options.map((o, index) => (
          <div key={index} className="radio_wrapper mr-24">
            <input
              ref={register({
                required,
              })}
              type="radio"
              name={name}
              value={o.value}
              id={o?.id}
            />
            <label
              style={{ margin: "0", paddingLeft, paddingRight }}
              htmlFor={o.id}
              className="radio_label h-100"
            >
              {o.icon ? (
                <span className="checkmark-icon mr-16">
                  <img src={o.icon} alt="" />
                </span>
              ) : (
                ""
              )}
              <span>{o.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
