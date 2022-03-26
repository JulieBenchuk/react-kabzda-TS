import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

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

export default App;
