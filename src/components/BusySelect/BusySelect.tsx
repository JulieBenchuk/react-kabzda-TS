import React, {KeyboardEvent, MouseEvent, useReducer, useState} from "react";
import {citiesPropsType} from "../../App";
import s from "./BusySelect.module.css"
import {
    SET_ACTIVE_FALSE,
    SET_ACTIVE_OPPOSITE,
    SET_HOVERED_ITEM_CURRENT, SET_HOVERED_ITEM_NEXT, SET_HOVERED_ITEM_PREVIOUS,
    setActiveReducer,
    setHoveredItemReducer
} from "../../reducer";

export type BusySelectPropsType = {
    selectID: number
    data: citiesPropsType
}
export const BusySelect_ = (props: BusySelectPropsType) => {
    console.log("Select item")
    const [active, dispatchActive] = useReducer(setActiveReducer, false) //start status for busy select && REDUCER
    const [ID, setID] = useState<undefined | number>(undefined)
    const [hoveredItem, dispatchHovered] = useReducer(setHoveredItemReducer, undefined)

    const onChangeBusySelect = (e: MouseEvent<HTMLDivElement>) => {
        dispatchActive({type: SET_ACTIVE_OPPOSITE})
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }
    const onItemClick = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
        setID(ID)
        dispatchActive({type: SET_ACTIVE_FALSE})
    }
    const onMouseEnter = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 1; i < props.data.length; i++) {
            if (props.data[i].id === hoveredItem) {
                if (e.key === "ArrowDown") {
                    if (props.data[i + 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_NEXT, ID: props.data[i].id})
                        break
                    }
                } else if (e.key === "ArrowUp") {
                    if (props.data[i - 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_PREVIOUS, ID: props.data[i].id})
                        break
                    }

                } else if (e.key === "Enter") {
                    dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: props.data[i].id})
                    setID(props.data[i].id)
                    dispatchActive({type: SET_ACTIVE_FALSE})
                    break;
                }
            }
        }
    }

    const selectedItem = props.data.find(u => u.id === ID)
    const itemForHover = props.data.find(u=>u.id===hoveredItem)

    return <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span onClick={onChangeBusySelect} className={s.main}>{selectedItem && selectedItem.title}</span>
        {active &&      // if select expanded
            <div className={s.items}>
                {props.data.map(u =>
                    <div key={u.id} className={s.item + " " +(itemForHover && itemForHover.id===u.id ? s.itemSelected : "")} onMouseEnter={()=>onMouseEnter(u.id)} onClick={()=>{onItemClick(u.id)}}> {u.title} </div>)}
            </div>}
    </div>
}
export const BusySelect = React.memo(BusySelect_)
