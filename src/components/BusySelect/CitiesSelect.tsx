import React, {ChangeEvent, KeyboardEvent, MouseEvent, useReducer, useState} from 'react';
import {BusySelect} from "./BusySelect";
import {cities, citiesPropsType, filterForSelect, filterForSelectType, usersPropsType} from "../../App";
import './../../App.css';
import {
    SET_ACTIVE_FALSE,
    SET_ACTIVE_OPPOSITE,
    SET_HOVERED_ITEM_CURRENT,
    SET_HOVERED_ITEM_NEXT,
    SET_HOVERED_ITEM_PREVIOUS, setActiveReducer, setHoveredItemReducer
} from "../../reducer";

type CitiesSelectPropsType = {
    filterForSelect: Array<filterForSelectType>
}
export const CitiesSelect = (props: CitiesSelectPropsType) => {
    const [active, dispatchActive] = useReducer(setActiveReducer, false) //start status for busy select && REDUCER
    const [ID, setID] = useState<undefined | number>(undefined)
    const [hoveredItem, dispatchHovered] = useReducer(setHoveredItemReducer, undefined)

    const onChangeBusySelect = (e: MouseEvent<HTMLDivElement>) => {
        console.log(`${e.currentTarget.innerHTML} was clicked`)
        dispatchActive({type: SET_ACTIVE_OPPOSITE})
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }
    const onUserClick = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
        setID(ID)
        dispatchActive({type: SET_ACTIVE_FALSE})
    }
    const onMouseEnter = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }

    //if we click up/down in expanded select with hovered element
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>, data: usersPropsType | citiesPropsType) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === hoveredItem) {
                if (e.key === "ArrowDown") {
                    if (data[i + 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_NEXT, ID: data[i].id})
                        break
                    }
                } else if (e.key === "ArrowUp") {
                    if (data[i - 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_PREVIOUS, ID: data[i].id})
                        break
                    }

                } else if (e.key === "Enter") {
                    dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: data[i].id})
                    setID(data[i].id)
                    dispatchActive({type: SET_ACTIVE_FALSE})
                    break;
                }
            }
        }
    }
    return (
        <div className={"busySelect"}>
            {props.filterForSelect.map(s=>(
                <BusySelect selectID = {s.id} data={s.filteredCities} onChange={onChangeBusySelect}
                            ID={ID} hoveredItem={hoveredItem}
                            active={active} onMouseEnter={onMouseEnter}
                            onUserClick={onUserClick}
                            onKeyUp={(e) => onKeyUp(e, cities)}/>
            ))}
         {/*   <BusySelect selectID = {0} data={cities} onChange={onChangeBusySelect}
                        ID={ID} hoveredItem={hoveredItem}
                        active={active} onMouseEnter={onMouseEnter}
                        onUserClick={onUserClick}
                        onKeyUp={(e) => onKeyUp(e, cities)}/>
            <BusySelect selectID = {1} data={cities.filter(c => c.country === "Belarus")} onChange={onChangeBusySelect} ID={ID}
                        hoveredItem={hoveredItem} active={active}
                        onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
            <BusySelect selectID = {2} data={cities.filter(c => c.population >= 500000)} onChange={onChangeBusySelect} ID={ID}
                        hoveredItem={hoveredItem} active={active}
                        onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
            <BusySelect selectID = {3} data={cities.filter(c => c.goodForEmigration === true)} onChange={onChangeBusySelect}
                        ID={ID} hoveredItem={hoveredItem} active={active}
                        onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>*/}

        </div>
    );
};
