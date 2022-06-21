import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";
import style from "./Clock.module.css"


export const Clock = () => {
    console.log("Clock is rendering")
    let [date, setDate] = useState(new Date());
    let [digitalMode, setDigitalMode] = useState(true)

    useEffect(() => {
        console.log("useEffect is starting")
        let id = setInterval(() => {
            console.log("setInterval is starting")
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(id)
        }

    }, [])


    return (
        <div className={style.clockAll}>
            {digitalMode && <DigitalClock date={date}/>}
            {!digitalMode && <AnalogClock date={date}/>}
            <button onClick={() => {
                setDigitalMode(!digitalMode)
            }}>change mode
            </button>
        </div>
    );
}