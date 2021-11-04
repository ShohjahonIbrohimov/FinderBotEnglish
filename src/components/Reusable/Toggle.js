import React from "react";

const Toggle = ({ label = null }) => {
  return (
    <div className="d-flex align-center">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      {label && <span className="ml-8">{label}</span>}
    </div>
  );
};

export default Toggle;
