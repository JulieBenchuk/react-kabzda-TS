import React from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion is rendering...")
    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    );
}


export default Accordion;