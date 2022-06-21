import React from 'react';
import style from "./DigitalClock.module.css"

type DigitalClockPropsType = {
    date: Date
}
export const DigitalClock = (props: DigitalClockPropsType) => {
    const transformTime = (num: number) => num < 10 ? "0" + num : num
    return (
        <div>
            <p>{transformTime(props.date.getHours())} : {transformTime(props.date.getMinutes())} : {transformTime(props.date.getSeconds())}</p>
        </div>
    );
};
