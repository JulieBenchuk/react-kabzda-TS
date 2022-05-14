import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import OnOff from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [switchedOn, setSwitchedOn] = useState(true);
    const [selectValue, setSelectValue] = useState<undefined|string>(undefined)
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
            <Progress />
            <Accordion titleValue={"Menu"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
            <Accordion titleValue={"Members"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
            <OnOff onChange = {()=> {setSwitchedOn(!switchedOn)}} switchedOn={switchedOn}/>
            <Select onChange={onChangeSelect} value={selectValue}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}

export default App;
