import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}> ---{props.title}--- </h3>;
}

export default AccordionTitle;