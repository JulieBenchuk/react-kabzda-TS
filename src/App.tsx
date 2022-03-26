import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";

function App() {
    console.log("App is rendering")
    return (
        <>
            <PageTitle title={"This is App component!"}/>
            Task 1
            <Progress value={0}/>
            <Accordion/>
            Task 2
            <Progress value={1}/>
            <Progress value={2}/>
            <Progress value={3}/>
            <Progress value={4}/>
            <Progress value={5}/>
        </>
    );
}

function PageTitle(props: any) {
    console.log("See on my title!)")
    return <h1>{ props.title }</h1>
}

export default App;
