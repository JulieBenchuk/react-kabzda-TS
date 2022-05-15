import React, {FocusEvent, MouseEvent} from "react";
import {usersPropsType} from "../../App";
import s from "./BusySelect.module.css"


export type BusySelectPropsType = {
    users: usersPropsType
    onChange: (e: MouseEvent<HTMLDivElement>) => void
    ID?: number | undefined
    active: boolean
    onUserClick: (ID: number) => void
}
export const BusySelect = (props: BusySelectPropsType) => {
    const selectedUser = props.users.find(u => u.id === props.ID)

    return <div className={s.select}>
        <span onClick={props.onChange} className={s.main}>{selectedUser && selectedUser.title}</span>
        {props.active &&      // if select expanded
            <div className={s.items}>
                {props.users.map(u =>
                    <div key={u.id} onClick={()=>{props.onUserClick(u.id)}}> {u.title} </div>
                        )}
            </div>}
    </div>
}
