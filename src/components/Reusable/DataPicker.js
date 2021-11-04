import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const DPicker = ({ inputClass, date, setdate }) => {
    const formatInputValue = () => {
        if (!date) return "";
        return `${date.day <= 9 ? "0" + date.day : date.day}.${date.month <= 9 ? "0" + date.month : date.month
            }.${date.year}`;
    };

    useEffect(() => {
        console.log(date);

    }, [date]);

    return (
        <DatePicker
            value={date}
            onChange={setdate}
            inputPlaceholder="DD.MM.YYYY"
            shouldHighlightWeekends
            inputClassName={
                inputClass ? inputClass : "h-48 radius-8 bg-transparent custom-input"
            }
            className="datepicker"
            colorPrimary="#20caeb"
            colorPrimaryLight="rgba(1, 1, 1, .1)"
            calendarClassName="calendar-bg"
            calendarTodayClassName="calendarToday"
            formatInputText={formatInputValue} // format value
        // renderInput={renderCustomInput}
        />
    );
};

export default DPicker;
