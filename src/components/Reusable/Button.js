import React from "react";

// customizable
// button accepts icon if passed src of img
// pass bgColor, border and hovered: boolean
// type prop to use in forms

function Button({
    onClick,
    name,
    type = "button",
    height = "42px",
    backgroundColor = "#4E5C86",
    color = "#fff",
    icon,
    border = "none",
    hovered = false,
    padding = "0 32px",
    disabled = false
}) {
    return (
        <button
            onClick={onClick}
            className={`button d-flex align-center ${hovered ? "btn-hover" : ""}`}
            style={{ backgroundColor, color, border, height, padding }}
            type={type}
        >
            {icon ? (
                <span className="button-icon">
                    <img src={icon} alt="" />
                </span>
            ) : (
                ""
            )}
            {icon ? "" : <span>{name}</span>}
        </button>
    );
}

export default Button;
