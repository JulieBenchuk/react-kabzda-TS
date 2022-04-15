import React, {useState} from 'react';

type OnOffPropsType = {
    /*switchedOn: boolean*/

}
const OnOff = (props: OnOffPropsType) => {
    let [switchedOn, setSwitchedOn] = useState(false);
    const onClickButtonHandler = () => {
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
    const buttonStyle = {
        padding: "5px",

    }
    const allStyle = {
        display: "flex"
    }
    return (<div style={allStyle}>
            <div style={onStyle}></div>
            <div style={offStyle}></div>
            <div style={switchStyle}></div>
            <button style={buttonStyle}
                    onClick={onClickButtonHandler}>ON/OFF
            </button>
        </div>
    )
}

export default OnOff;