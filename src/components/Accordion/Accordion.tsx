import React from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    onChange: ()=>void
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {

    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    );
}


export default Accordion;