import React from "react";


type OnOffPropsType = {
    onChange: ()=> void
    switchedOn: boolean
}
export const OnOff_ = (props:OnOffPropsType) => {
    const onStyle = {
        display: "inline-block",
        width: "50px",
        height: "30px",
        border: "1px solid grey",
        padding: "5px",
        margin: "5px",
        backgroundColor: props.switchedOn ? "green" : "white"

    }
    const offStyle = {
        display: "inline-block",
        width: "50px",
        height: "30px",
        border: "1px solid grey",
        padding: "5px",
        margin: "5px",
        backgroundColor: props.switchedOn ? "white" : "red"
    }
    const switchStyle = {
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid grey",
        borderRadius: "15px",
        margin: "10px",
        backgroundColor: props.switchedOn ? "green" : "red",
        boxShadow: props.switchedOn ? "0 0 20px green" : "0 0 20px red"
    }
    const allStyle = {
        display: "flex"
    }

    return (<div style={allStyle}>
            <div style={onStyle} onClick={props.onChange}></div>
            <div style={offStyle} onClick={props.onChange}></div>
            <div style={switchStyle}></div>
        </div>
    )
}

export const OnOff = React.memo(OnOff_);