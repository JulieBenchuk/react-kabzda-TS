import React, {MouseEvent} from "react";
import {usersPropsType} from "../../App";
import s from "./UniqueSelect.module.css"


export type UniqueSelectPropsType = {
    users: usersPropsType
    onChange: (e: MouseEvent<HTMLDivElement>) => void
}
export const UniqueSelect_ = (props: UniqueSelectPropsType) => {

    return <div>
        <div className={s.selectListAll}>
            {props.users.map((u, index) =>
                <div key={index}
                     onClick={props.onChange}
                     className={props.users.length == 1 ? s.selectStart : s.selectItem}>
                    {u.title }
                </div>)}
        </div>
    </div>
}
export const UniqueSelect = React.memo(UniqueSelect_)