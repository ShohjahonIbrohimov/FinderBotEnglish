import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { general_icons } from "../../constants/icons";

const getFullDate = (date) => {
  let from = `${date.from?.day <= 9 ? `0${date.from?.day}` : date.from?.day}.${date.from?.month <= 9 ? `0${date.from?.month}` : date.from?.month
    }.${date.from?.year}`;
  let to = `${date.to?.day <= 9 ? `0${date.to?.day}` : date.to?.day}.${date.to?.month <= 9 ? `0${date.to?.month}` : date.to?.month
    }.${date.to?.year}`;

  return { from, to };
};

const Rangepicker = ({ height = "auto", label, width = "215.5px" }) => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const renderCustomInput = ({ ref }) => (
    <div className="range-picker-input-wrapper">
      <input
        readOnly
        ref={ref}
        placeholder="I'm a custom input"
        style={{ height }}
        value={`${getFullDate(selectedDayRange).from === "undefined.undefined.undefined"
            ? "00.00.0000"
            : getFullDate(selectedDayRange).from
          } - ${getFullDate(selectedDayRange).to === "undefined.undefined.undefined"
            ? "00.00.0000"
            : getFullDate(selectedDayRange).to
          }`}
        className="range-picker-input"
      />
      {general_icons.calendar}
    </div>
  );

  return (
    <div style={{ width }}>
      {label ? <label className="label">{label}</label> : ""}
      <DatePicker
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        inputPlaceholder="Select a day range"
        renderInput={renderCustomInput}
        shouldHighlightWeekends
      />
    </div>
  );
};

export default Rangepicker;
