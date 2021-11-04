import React from "react";
import ReactSelect from "react-select";
import { Controller } from "react-hook-form";

const dot = (color = "#fff") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 5,
    width: 5,
  },
});

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "0.5px solid #26304F",
    borderColor: isFocused ? "#26304F" : "red",
    boxShadow: "none",
    height: "42px",
  }),
  menu: (styles) => ({ ...styles, backgroundColor: "#4E5C86", zIndex: "1000" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      ...dot(),
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#343f61"
        : isFocused
        ? "#343f61"
        : "#4E5C86",
      color: "#fff",
      cursor: "pointer",
      ":active": {
        ...styles[":active"],
        backgroundColor: "#26304F",
      },
    };
  },
};

const RSelect = ({
  options,
  name,
  primary = true,
  width = "100%",
  control,
  label,
  height,
  placeholder = "Выбрать...",
}) => {
  return (
    <div style={{ width }}>
      <label className="label">{label}</label>
      <Controller
        as={
          <ReactSelect
            styles={colourStyles}
            required
            placeholder={placeholder}
          />
        }
        control={control}
        required
        name={name}
        options={options}
      />
    </div>
  );
};

export default RSelect;
