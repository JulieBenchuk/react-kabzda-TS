import React from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";
import {usersPropsType, usersType} from "../../App";

type AccordionPropsType = {
    titleValue: string
    onChange: ()=>void
    collapsed: boolean
    users: usersPropsType
}

const Accordion = (props: AccordionPropsType) => {

    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody users={props.users}/>}
        </>
    );
}


export default Accordion;