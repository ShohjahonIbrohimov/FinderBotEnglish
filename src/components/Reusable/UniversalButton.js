import React from "react";

function UniversalButton({
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
    iconLeft,
    fontSize
}) {
    return (
        <button
            onClick={onClick}
            className={`button d-flex align-center ${hovered ? "btn-hover" : ""}`}
            style={{ backgroundColor, color, border, height, padding, fontSize }}
            type={type}
        >
            {icon && !name ? (

                <span className="button-icon">
                    <img src={icon} alt="" />
                </span>

            ) : !icon && name ? (

                <span>{name}</span>

            ) : icon && name && iconLeft ? (

                <span className="button-icon-text">
                    <img className="mr-16" src={icon} alt="iconWithText" />
                    <span className="mr-16">{name}</span>
                </span>

            ) : icon && name && !iconLeft ? (
                <span className="button-icon-text">
                    <span className="mr-16">{name}</span>
                    <img src={icon} alt="iconWithText" />
                </span>
            ) : ""}
        </button>
    );
}

export default UniversalButton;
