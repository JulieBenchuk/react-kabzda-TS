import React, {useEffect, useState} from 'react';
import "./Clock.css"


export const Clock = () => {
    console.log("Clock is rendering")
    let [date, setDate] = useState(new Date());
    let [digitalMode, setDigitalMode] = useState(true)
    let hours = date.getHours()
    let minuets = date.getMinutes()
    let sek = date.getSeconds()
    const transformTime = (num: number) => num < 10 ? "0" + num : num

    useEffect(() => {
        console.log("useEffect is starting")
        let id = setInterval(() => {
            console.log("setInterval is starting")
            setDate(new Date());
            let hr_rotation = 30 * hours + minuets / 2; //converting current time
            let min_rotation = 6 * minuets;
            let sec_rotation = 6 * sek;

            /*      hour.style.transform = `rotate(${hr_rotation}deg)`;
                  minute.style.transform = `rotate(${min_rotation}deg)`;
                  second.style.transform = `rotate(${sec_rotation}deg)`;*/
        }, 1000)

        return () => {
            clearInterval(id)
        }

    }, [])


    return (
        <div>
            {digitalMode && <p>{transformTime(hours)} : {transformTime(minuets)} : {transformTime(sek)}</p>}
            {!digitalMode && <div id="clockContainer">
                <div id="hour"></div>
                <div id="minute"></div>
                <div id="second"></div>
            </div>}
            <button onClick={() => {
                setDigitalMode(!digitalMode)
            }}>change mode
            </button>
        </div>
    );
}