import React from "react";
import { webmaster_icons } from "../../constants/icons";

const SearchInput = ({
    func,
    onChange,
    icon = webmaster_icons.search_icon,
    placeholder = "Минимум 3 символ",
    // getValueOnChange = false
}) => {
    const getOnClick = (e) => {
        return func(e.target.parentElement.nextSibling.value)
    }
    const getOnChange = (e) => {
        return onChange(e.target.value)
    }
    return (
        <>
            <div className="search-div">
                <button
                    onClick={getOnClick}
                    type="button"
                    className="search-btn"
                >
                    <img src={icon} className="search-icon" alt="" />
                </button>
                <input
                    onChange={onChange ? getOnChange : null}
                    type="text" placeholder={placeholder}
                    className="search-input" id="search_input"
                />
            </div>
        </>
    )
}

export default SearchInput;