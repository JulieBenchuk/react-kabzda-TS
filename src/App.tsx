import React from 'react';
import './App.css';

function App() {
    console.log("App is rendering");
    return (
        <>
            <AppTitle/>
            <Progress/>
            <Accordion/>
            <Progress/>
        </>
    );
}

function Done() {
    console.log("Is's done!");
    return (
        <div>done</div>
    );
}

function Progress() {
    console.log("progress is comming...");
    return (
        <>
            <Done/>
            <Done/>
            <Done/>
            <Done/>
            <Done/>
        </>
    );
}

function AppTitle() {
    console.log("See on my title!)");
    return <>This is App component!</>;
}

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
    return (
        <>
            <h3>Menu</h3>
        </>
    );
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


export default App;
