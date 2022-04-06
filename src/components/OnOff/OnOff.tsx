import React from 'react';
import classes from "./OnOff.module.css";

type OnOffPropsType = {
    status: "on" | "off"
}
const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={classes.onOff}>
            <div className={classes.square}>ON</div>
            <div className={classes.square}>OFF</div>
            <div className={classes.circle}></div>

        </div>
    );
};

export default OnOff;