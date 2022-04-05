import React from 'react';

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("This is accordion title!")
    return <h3> ---{props.title}--- </h3>;
}


export default AccordionTitle;