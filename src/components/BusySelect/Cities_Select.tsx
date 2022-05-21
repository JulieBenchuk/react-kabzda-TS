import React from 'react';
import {BusySelect} from "./BusySelect";
import {filterForSelectType} from "../../App";
import './../../App.css';

type CitiesSelectPropsType = {
    data: Array<filterForSelectType>
}
export const Cities_Select = (props: CitiesSelectPropsType) => {
    console.log("Select list is rendering")
    return (
        <div className={"busySelect"}>
            {props.data.map(s=>(
                <BusySelect key={s.id} selectID = {s.id} data={s.filteredCities}/>
            ))}
        </div>
    );
};
export const CitiesSelect = React.memo(Cities_Select);
