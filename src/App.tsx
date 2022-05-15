import React, {ChangeEvent, MouseEvent, KeyboardEvent, useState, useReducer} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import OnOff from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {UniqueSelect} from "./components/UniqueSelect/UniqueSelect";
import {BusySelect} from "./components/BusySelect/BusySelect";
import {
    SET_ACTIVE_FALSE, SET_ACTIVE_OPPOSITE, SET_HOVERED_USER_CURRENT,
    SET_HOVERED_USER_NEXT,
    SET_HOVERED_USER_PREVIOUS,
    setActiveReducer,
    setHoveredUserReducer
} from "./reducer";

export type usersType = {
    id: number
    title: string
}
export type usersPropsType = usersType[]

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
    const [collapsed, setCollapsed] = useState(true);
    const [switchedOn, setSwitchedOn] = useState(true);
    const [selectValue, setSelectValue] = useState<undefined | string>(undefined)
    const [list, setList] = useState<usersPropsType>(users1)
    ///
    const [active, dispatchActive] = useReducer(setActiveReducer, false) //start status for busy select && REDUCER
    const [ID, setID] = useState<undefined | number>(undefined)
    const [hoveredUser, dispatchHovered] = useReducer(setHoveredUserReducer, undefined)
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
        dispatchHovered({type: SET_HOVERED_USER_CURRENT, ID: ID})
    }
    const onUserClick = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_USER_CURRENT, ID: ID})
        setID(ID)
        dispatchActive({type: SET_ACTIVE_FALSE})
    }
    const onMouseEnter = (ID: number) => {
        dispatchHovered({type: SET_HOVERED_USER_CURRENT, ID: ID})
    }

    //if we click up/down in expanded select with hovered element
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < users2.length; i++) {
            if (users2[i].id === hoveredUser) {
                if (e.key === "ArrowDown") {
                    if (users2[i + 1]) {
                        dispatchHovered({type: SET_HOVERED_USER_NEXT, ID: users2[i].id})
                        break
                    }
                } else if (e.key === "ArrowUp") {
                    if (users2[i - 1]) {
                        dispatchHovered({type: SET_HOVERED_USER_PREVIOUS, ID: users2[i].id})
                        break
                    }

                } else if (e.key === "Enter") {
                    dispatchHovered({type: SET_HOVERED_USER_CURRENT, ID: users2[i].id})
                    setID(users2[i].id)
                    dispatchActive({type: SET_ACTIVE_FALSE})
                    break;
                }
            }
        }
    }


    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
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
            <BusySelect users={users2} onChange={onChangeBusySelect} ID={ID} hoveredUser={hoveredUser} active={active}
                        onMouseEnter={onMouseEnter} onUserClick={onUserClick} onKeyUp={onKeyUp}/>
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
