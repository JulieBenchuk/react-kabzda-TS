import React, {ChangeEvent, MouseEvent, KeyboardEvent, useState, useReducer} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Progress} from "./components/Progress/Progress";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {UniqueSelect} from "./components/UniqueSelect/UniqueSelect";
import {BusySelect} from "./components/BusySelect/BusySelect";
import {
    SET_ACTIVE_FALSE, SET_ACTIVE_OPPOSITE, SET_HOVERED_ITEM_CURRENT,
    SET_HOVERED_ITEM_NEXT,
    SET_HOVERED_ITEM_PREVIOUS,
    setActiveReducer,
    setHoveredItemReducer
} from "./reducer";

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
export type citiesPropsType = citiesType []

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
export const cities = [
    {id: 0, title: "Grodno", country: "Belarus", population: 500000, goodForEmigration: true},
    {id: 1, title: "Kiev", country: "Ukraine", population: 3000000, goodForEmigration: false},
    {id: 2, title: "Brest", country: "Belarus", population: 400000, goodForEmigration: true},
    {id: 3, title: "Retchica", country: "Belarus", population: 60000, goodForEmigration: false},
    {id: 4, title: "Gdansk", country: "Poland", population: 300000, goodForEmigration: true},
    {id: 5, title: "Krakow", country: "Poland", population: 800000, goodForEmigration: true},
    {id: 6, title: "Chernigiv", country: "Ukraine", population: 600000, goodForEmigration: false},
    {id: 7, title: "Belgorod", country: "Russia", population: 400000, goodForEmigration: false}

]

const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [switchedOn, setSwitchedOn] = useState(true);
    const [selectValue, setSelectValue] = useState<undefined | string>(undefined)
    const [list, setList] = useState<usersPropsType>(users1)
    ///
    const [active, dispatchActive] = useReducer(setActiveReducer, false) //start status for busy select && REDUCER
    const [ID, setID] = useState<undefined | number>(undefined)
    const [hoveredItem, dispatchHovered] = useReducer(setHoveredItemReducer, undefined)
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
    //// BUSY SELECT
    const onChangeBusySelect = (e: MouseEvent<HTMLDivElement>) => {
        console.log(`${e.currentTarget.innerHTML} was clicked`)
        dispatchActive({type: SET_ACTIVE_OPPOSITE})
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }
    const onUserClick = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
        setID(ID)
        dispatchActive({type: SET_ACTIVE_FALSE})
    }
    const onMouseEnter = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: ID})
    }

    //if we click up/down in expanded select with hovered element
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>, data: usersPropsType | citiesPropsType) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === hoveredItem) {
                if (e.key === "ArrowDown") {
                    if (data[i + 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_NEXT, ID: data[i].id})
                        break
                    }
                } else if (e.key === "ArrowUp") {
                    if (data[i - 1]) {
                        dispatchHovered({type: SET_HOVERED_ITEM_PREVIOUS, ID: data[i].id})
                        break
                    }

                } else if (e.key === "Enter") {
                    dispatchHovered({type: SET_HOVERED_ITEM_CURRENT, ID: data[i].id})
                    setID(data[i].id)
                    dispatchActive({type: SET_ACTIVE_FALSE})
                    break;
                }
            }
        }
    }


    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
            <div className={"busySelect"}>
                <BusySelect data={cities} onChange={onChangeBusySelect} ID={ID} hoveredItem={hoveredItem}
                            active={active}
                            onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
                <BusySelect data={cities.filter(c => c.country === "Belarus")} onChange={onChangeBusySelect} ID={ID}
                            hoveredItem={hoveredItem} active={active}
                            onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
                <BusySelect data={cities.filter(c => c.population >= 500000)} onChange={onChangeBusySelect} ID={ID}
                            hoveredItem={hoveredItem} active={active}
                            onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
                <BusySelect data={cities.filter(c => c.goodForEmigration === true)} onChange={onChangeBusySelect}
                            ID={ID} hoveredItem={hoveredItem} active={active}
                            onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={(e) => onKeyUp(e, cities)}/>
            </div>
            <Progress/>
            {/*    <Accordion titleValue={"Menu"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed} users={users}/>*/}
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
type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}

export default App;
