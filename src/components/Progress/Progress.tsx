import React from "react";

type ProgressPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
const Progress = (props: ProgressPropsType) => {
    console.log("progress is comming...")
        return (
            <div>
                <Done selected={props.value>0}/>
                <Done selected={props.value>1}/>
                <Done selected={props.value>2}/>
                <Done selected={props.value>3}/>
                <Done selected={props.value>4}/>
            </div>
        );
}

type DonePropsType = {
    selected: boolean
}
const Done = (props: DonePropsType) => {
    console.log("It is done!")
    if (props.selected) {
        return <span> <b>done! </b> </span>
    } else {
        return <span>done! </span>
    };
}

export default Progress;