import React from 'react';
import {usersPropsType, usersType} from "../../App";

type AccordionBodyPropsType = {
    users: usersPropsType
}

export function AccordionBody_ (props: AccordionBodyPropsType) {
    console.log("AccordionBody")
    const onUserClick = (user: string) => {
        console.log(`User with name ${user} was clicked`)
    }
    return (
        <ul>
            {props.users.map(u=><li onClick={()=>onUserClick(u.title)}>{u.title}</li>)}
        </ul>
    );
}

export const AccordionBody = React.memo(AccordionBody_)