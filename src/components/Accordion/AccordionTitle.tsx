import React from 'react';

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickAccordionHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    return <h3 onClick={onClickAccordionHandler}> ---{props.title}--- </h3>;
}

export default AccordionTitle;