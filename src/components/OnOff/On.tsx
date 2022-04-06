import React from 'react';
import classes from "./OnOff.module.css";

const On = () => {
    return (
        <div >
            <div className={classes.squareOn}>   ON   </div>
            <div className={classes.square}>   OFF   </div>
            <div className={classes.circleOn}>   </div>
        </div>
    );
};

export default On;