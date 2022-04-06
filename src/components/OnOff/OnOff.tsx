import React from 'react';
import classes from "./OnOff.module.css";
import On from "./On"
import Off from "./Off";

type OnOffPropsType = {
    switchedOn: boolean

}
const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={classes.all}>
            { props.switchedOn && <On />}
            { !props.switchedOn && <Off />}
        </div>
    );
};

export default OnOff;