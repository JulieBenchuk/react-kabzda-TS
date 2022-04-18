import React, {useState} from 'react';

const OnOff = () => {
    let [switchedOn, setSwitchedOn] = useState(true);
    const onClickOnOffHandler = () => {
        setSwitchedOn(!switchedOn)
    }
    const onStyle = {
        display: "inline-block",
        width: "50px",
        height: "30px",
        border: "1px solid grey",
        padding: "5px",
        margin: "5px",
        backgroundColor: switchedOn ? "green" : "white"

    }
    const offStyle = {
        display: "inline-block",
        width: "50px",
        height: "30px",
        border: "1px solid grey",
        padding: "5px",
        margin: "5px",
        backgroundColor: switchedOn ? "white" : "red"
    }
    const switchStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid grey",
        borderRadius: "15px",
        margin: "10px",
        backgroundColor: switchedOn ? "green" : "red",
        boxShadow: switchedOn ? "0 0 20px green" : "0 0 20px red"
    }
    const allStyle = {
        display: "flex"
    }

    return (<div style={allStyle}>
            <div style={onStyle} onClick={onClickOnOffHandler}></div>
            <div style={offStyle} onClick={onClickOnOffHandler}></div>
            <div style={switchStyle}></div>
        </div>
    )
}

export default OnOff;