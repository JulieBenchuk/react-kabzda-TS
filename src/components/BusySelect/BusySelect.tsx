import React, {KeyboardEvent, MouseEvent} from "react";
import {citiesPropsType, usersPropsType} from "../../App";
import s from "./BusySelect.module.css"


export type BusySelectPropsType = {
    selectID: number
    data: usersPropsType | citiesPropsType
    onChange: (e: MouseEvent<HTMLDivElement>) => void
    onKeyUp: (e: KeyboardEvent<HTMLDivElement>)=> void
    ID: number | undefined
    hoveredItem: number | undefined
    active: boolean
    onUserClick: (ID: number) => void
    onMouseEnter: (ID: number) => void
}
export const BusySelect_ = (props: BusySelectPropsType) => {
    const selectedUser = props.data.find(u => u.id === props.ID)
    const hoveredUser = props.data.find(u=>u.id===props.hoveredItem)

    return <div className={s.select} onKeyUp={props.onKeyUp} tabIndex={0}>
        <span onClick={props.onChange} className={s.main}>{selectedUser && selectedUser.title}</span>
        {props.active &&      // if select expanded
            <div className={s.items}>
                {props.data.map(u =>
                    <div key={u.id} className={s.item + " " +(hoveredUser && hoveredUser.id===u.id ? s.itemSelected : "")} onMouseEnter={()=>props.onMouseEnter(u.id)} onClick={()=>{props.onUserClick(u.id)}}> {u.title} </div>)}
            </div>}
    </div>
}
export const BusySelect = React.memo(BusySelect_)
