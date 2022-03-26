import React from "react";

type ProgressPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
function Progress(props: ProgressPropsType) {
    console.log("progress is comming...")
    if (props.value === 1) {
        return (
            <div>
                <Done selected={true}/>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
            </div>
        );
    } else if (props.value === 2) {
        return (
            <div>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
            </div>
        );
    } else if (props.value === 3) {
        return (
            <div>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={false}/>
                <Done selected={false}/>
            </div>
        );
    } else if (props.value === 4) {
        return (
            <div>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={false}/>
            </div>
        );
    } else if (props.value === 5) {
        return (
            <div>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
                <Done selected={true}/>
            </div>
        );
    } else {
        return (
            <div>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
                <Done selected={false}/>
            </div>
        );
    };
}

type DonePropsType = {
    selected: boolean
}
function Done(props: DonePropsType) {
    console.log("Is's done!")
    if (props.selected === true) {
        return <span> <b>done! </b> </span>
    } else {
        return <span>done! </span>
    };
}

export default Progress;