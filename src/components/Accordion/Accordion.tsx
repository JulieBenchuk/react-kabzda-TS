import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {usersPropsType, usersType} from "../../App";

type AccordionPropsType = {
    titleValue: string
    onChange: ()=>void
    collapsed: boolean
    users: usersPropsType
}

export const Accordion_ = (props: AccordionPropsType) => {
    console.log("Accordion")
    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody users={props.users}/>}
        </>
    );
}
export const Accordion = React.memo(Accordion_)

