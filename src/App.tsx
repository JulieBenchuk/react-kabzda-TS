import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import OnOff from "./components/OnOff/OnOff";

const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
            <Progress/>
            <Accordion titleValue={"Menu"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
            <Accordion titleValue={"Members"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
            <OnOff/>
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
