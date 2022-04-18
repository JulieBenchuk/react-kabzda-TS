import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import OnOff from "./components/OnOff/OnOff";

const App = () => {
    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
            <Progress/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Members"}/>
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
