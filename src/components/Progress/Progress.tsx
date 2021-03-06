import React, {useState} from "react";

export const Progress_ = () => {
    const [value, setValue] = useState(0);
    const onClickButtonHandler = (value: number) => {
        setValue(value)
    }
    return (
        <div>
            <Done callBack={() => onClickButtonHandler(1)} selected={value > 0}/>
            <Done callBack={() => onClickButtonHandler(2)} selected={value > 1}/>
            <Done callBack={() => onClickButtonHandler(3)} selected={value > 2}/>
            <Done callBack={() => onClickButtonHandler(4)} selected={value > 3}/>
            <Done callBack={() => onClickButtonHandler(5)} selected={value > 4}/>
        </div>
    );
}

type DonePropsType = {
    selected: boolean
    callBack: () => void
}
const Done = (props: DonePropsType) => {
    const spanStyle = {
        fontWeight: props.selected ? "bold" : "normal",
        padding: "5px"
    }
    const onClickSpanHandler = () => {
        props.callBack()
    }
    return <span style={spanStyle} onClick={onClickSpanHandler}>done!</span>
}

export const Progress = React.memo(Progress_);