import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion is rendering...")
    if (props.collapsed === true) {
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

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("This is accordion title!")
    return <h3> ---{props.title}--- </h3>;
}

function AccordionBody() {
    console.log("This is accordion body!")
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    );
}

export default Accordion;