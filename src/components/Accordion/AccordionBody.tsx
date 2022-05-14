import React from 'react';
import {usersPropsType, usersType} from "../../App";

type AccordionBodyPropsType = {
    users: usersPropsType
}

function AccordionBody(props: AccordionBodyPropsType) {
    const onUserClick = (user: string) => {
        console.log(`User with name ${user} was clicked`)
    }
    return (
        <ul>
            {props.users.map(u=><li onClick={()=>onUserClick(u.title)}>{u.title}</li>)}
        </ul>
    );
}

export default AccordionBody;