import React, {useState} from "react";

import AccordionTitle from "./AccordionTitle";

import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
}

const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false);
    const [button, setButton] = useState("COLLAPSE")

    const onClickButton = () => {
        setCollapsed (!collapsed)
        setButton(
            collapsed ? "COLLAPSE" : "EXPAND")
    }
    console.log("Accordion is rendering...")
    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickButton}>{button}</button>
            {!collapsed && <AccordionBody/>}
        </>
    );
}


export default Accordion;