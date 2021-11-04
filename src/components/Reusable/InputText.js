import React from "react";

const InputText = ({
  name,
  label,
  errors,
  register,
  icon = null,
  widthLabel = true,
  width = "100%",
  placeholder = "",
  required = false,
  iconType = "icon_right",
  type = "text",
  defaultValue = "",
  readonly = false
}) => {
  return (
    <>
      {widthLabel ? (
        <label style={{ width }}>
          {label && <span className="label_title">{label}</span>}
          <div className="input_primary_wrapper">
            {icon && (
              <span
                className={`input_icon_wrap ${iconType} d-flex justify-center align-center`}
              >
                {icon}
              </span>
            )}
            <input
              className={`primary ${iconType}`}
              name={name}
              ref={register({
                required,
              })}
              placeholder={placeholder}
              type={type}
              defaultValue={defaultValue}
              readonly
            />
          </div>
          {errors[name] && (
            <span className="input_error">Обязательно поле</span>
          )}
        </label>
      ) : (
        <React.Fragment>
          <div style={{ width }} className="input_primary_wrapper">
            {icon && (
              <span
                className={`input_icon_wrap ${iconType} d-flex justify-center align-center`}
              >
                {icon}
              </span>
            )}
            <input
              className={`primary ${iconType}`}
              name={name}
              ref={register({
                required,
              })}
              placeholder={placeholder}
              type={type}
              defaultValue={defaultValue}
              readonly
            />
          </div>
          {errors[name] && (
            <span className="input_error">Обязательно поле</span>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default InputText;
