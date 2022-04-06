import React from 'react';
import classes from "./OnOff.module.css";

const Off = () => {
    return (
        <div>
            <div className={classes.square}>   ON   </div>
            <div className={classes.squareOff}>   OFF   </div>


            <div className={classes.circleOff}>   </div>
        </div>
    );
};

export default Off;