import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

export function AccordionTitle_ (props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return <h3 onClick={props.onChange}> ---{props.title}--- </h3>;
}

export const AccordionTitle = React.memo(AccordionTitle_);