import React from "react";

function Accordion() {
    console.log("Accordion is rendering...")
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    );
}

function AccordionTitle() {
    console.log("This is accordion title!")
    return <h3>Menu</h3>;
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