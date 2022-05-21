import React, {ChangeEvent, MouseEvent, useMemo, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Progress} from "./components/Progress/Progress";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {UniqueSelect} from "./components/UniqueSelect/UniqueSelect";
import {CitiesSelect} from "./components/BusySelect/Cities_Select";

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
export type usersType = {
    id: number
    title: string
}
export type usersPropsType = usersType[]
export type citiesType = {
    id: number
    title: string
    country: string
    population: number
    goodForEmigration: boolean
}
export type citiesPropsType = citiesType[]
export type filterForSelectType = {
    id: number
    filteredCities: citiesPropsType
}
export const users1 = [
    {id: 0, title: "none"},
    {id: 1, title: "Julie"},
    {id: 2, title: "Vlad"},
    {id: 3, title: "Arina"},
    {id: 4, title: "Tatsiana"},
    {id: 5, title: "Ivan"}
]
export const users2 = [
    {id: 0, title: "Julie"},
    {id: 1, title: "Vlad"},
    {id: 2, title: "Arina"},
    {id: 3, title: "Tatsiana"},
    {id: 4, title: "Ivan"}
]

const App = () => {
    console.log("APP IS RENDERING")
    const [cities, setCities] = useState([
        {id: 0, title: "Grodno", country: "Belarus", population: 500000, goodForEmigration: true},
        {id: 1, title: "Kiev", country: "Ukraine", population: 3000000, goodForEmigration: false},
        {id: 2, title: "Brest", country: "Belarus", population: 400000, goodForEmigration: true},
        {id: 3, title: "Retchica", country: "Belarus", population: 60000, goodForEmigration: false},
        {id: 4, title: "Gdansk", country: "Poland", population: 300000, goodForEmigration: true},
        {id: 5, title: "Krakow", country: "Poland", population: 800000, goodForEmigration: true},
        {id: 6, title: "Chernigiv", country: "Ukraine", population: 600000, goodForEmigration: false},
        {id: 7, title: "Belgorod", country: "Russia", population: 400000, goodForEmigration: false}

    ]);
    const filterForSelect = [
        {id: 0, filteredCities: cities.filter(c => c.country === "Belarus")},
        {id: 1, filteredCities: cities.filter(c => c.population > 500000)},
        {id: 2, filteredCities: cities.filter(c => c.goodForEmigration === true)},
        {id: 3, filteredCities: cities}
    ];

    const [collapsed, setCollapsed] = useState(true);
    const [switchedOn, setSwitchedOn] = useState(true);
    const [selectValue, setSelectValue] = useState<undefined | string>(undefined)
    const [list, setList] = useState<usersPropsType>(users1)
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }
    //// UniqueSelect
    const onChangeUniqueSelect = (e: MouseEvent<HTMLDivElement>) => {
        let filteredList = list.filter(u => u.title === e.currentTarget.innerHTML)
        let fullList = [filteredList[0], ...users1.filter(u => u.title !== e.currentTarget.innerHTML)]
        list.length === 1 ? setList(fullList) : setList(filteredList)
        console.log(`User ${e.currentTarget.innerHTML} was clicked`) //for check clicked element
    }

    const addCity = () => {
        let newCity = {id: 8, title: "City", country: "Country", population: 0, goodForEmigration: false};
        setCities([...cities, newCity])
    }

    return (
        <div className={"App"}>
            <button onClick={addCity}>add new city</button>
            <CitiesSelect data={filterForSelect}/>
            <PageTitle title={"This is App component!"}/>
            <Progress/>
            <Accordion titleValue={"Members"} onChange={() => {
                setCollapsed(!collapsed)
            }} collapsed={collapsed} users={users1}/>
            <OnOff onChange={() => {
                setSwitchedOn(!switchedOn)
            }} switchedOn={switchedOn}/>
            <Select onChange={onChangeSelect} value={selectValue}/>
            <UniqueSelect users={list} onChange={onChangeUniqueSelect}/>
        </div>
    );
}
export default App;
