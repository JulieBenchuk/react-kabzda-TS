import React from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion is rendering...")
    if (props.collapsed) {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
            </>
        );
    } else {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </>
        );
    }
}

export default Accordion;