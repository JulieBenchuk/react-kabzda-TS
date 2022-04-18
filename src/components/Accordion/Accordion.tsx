import React, {useState} from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
}

const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </>
    );
}


export default Accordion;