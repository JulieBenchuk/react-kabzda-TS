import React, {useEffect, useState} from 'react';

export const Clock = () => {
    console.log("Clock is rendering")
    let [date, setDate] = useState(new Date());
    let hours = date.getHours()
    let minuets = date.getMinutes()
    let sek = date.getSeconds()

    useEffect(() => {
        console.log("useEffect is starting")
        setInterval(() => {
            console.log("setInterval is starting")
            setDate(new Date());
        }, 1000)
    }, [])


    return (
        <div>
            <p>{hours} : {minuets} : {sek}</p>
        </div>
    );
}