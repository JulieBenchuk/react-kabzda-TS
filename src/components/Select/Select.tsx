import React, {ChangeEvent} from "react";

type selectPropsType = {
    onChange: (e: ChangeEvent<HTMLSelectElement>)=> void
    value: string | undefined
}
export const Select_ = (props: selectPropsType) => {
    return <select onChange={props.onChange} value={props.value}>
        <option value="1">none</option>
        <option value="2">Minsk</option>
        <option value="3">Kiev</option>
        <option value="4">Warsaw</option>
        <option value="5">Vilnius</option>
    </select>
}
export const Select = React.memo(Select_)