import React, { useState } from 'react'
import { general_icons } from '../../constants/icons'




function ASelect({ placeholder, options, register, width = "300px" }) {

    const [selected, setSelected] = useState(false);
    const [labelSelect, setLabelSelect] = useState(placeholder)


    const handleSelect = (e) => {
        setLabelSelect(e.target.innerText);
        setSelected(false)
    }
    return (
        <div className="select-box" style={{ width }}>
            <div className={`options-container ${selected ? "active" : ''}`}>
                {options.map((o, i) => {
                    return <div className="option" key={i}>
                        <input
                            ref={register({
                                required: true,
                            })}
                            type="radio"
                            className="radio"
                            id={o.id}
                            name={o.name}
                        />
                        <label
                            for={o.id}
                            onClick={handleSelect}>

                            <span className="circle"></span>
                            <span>{o.option}</span>

                        </label>
                    </div>
                })}
            </div>

            <div className="selected" onClick={() => { setSelected(!selected) }}>
                {labelSelect}
                <div className="arrow-style">
                    <img src={general_icons.ArrowDown} alt="" />
                </div>
            </div>
        </div>

    )
}

export default ASelect
