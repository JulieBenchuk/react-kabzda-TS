import React, {ChangeEvent, MouseEvent, FocusEvent, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Progress from "./components/Progress/Progress";
import OnOff from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {UniqueSelect, UniqueSelectPropsType} from "./components/UniqueSelect/UniqueSelect";
import {BusySelect} from "./components/BusySelect/BusySelect";
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
    {id: 1, title: "Julie"},
    {id: 2, title: "Vlad"},
    {id: 3, title: "Arina"},
    {id: 4, title: "Tatsiana"},
    {id: 5, title: "Ivan"}
]
const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [switchedOn, setSwitchedOn] = useState(true);
    const [selectValue, setSelectValue] = useState<undefined|string>(undefined)
    const [list, setList] = useState<usersPropsType>(users1)
    const [active, setActive] = useState<boolean>(false) //start status for busy select
    const [ID, setID] = useState<undefined|number>(undefined)
    const [hoveredUser, setHoveredUser] = useState<undefined|number>(undefined)
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }
    //// UniqueSelect
    const onChangeUniqueSelect = (e: MouseEvent<HTMLDivElement>)=> {
        let filteredList = list.filter(u=>u.title===e.currentTarget.innerHTML)
        let fullList = [filteredList[0], ...users1.filter(u=>u.title!==e.currentTarget.innerHTML)]
        list.length===1 ? setList(fullList) : setList(filteredList)
        console.log(`User ${e.currentTarget.innerHTML} was clicked`) //for check clicked element
    }
    //// BUSY SELECT
    const onChangeBusySelect = (e: MouseEvent<HTMLDivElement>) => {
        console.log(`${e.currentTarget.innerHTML} was clicked`)
        setActive(!active)
        setHoveredUser(ID)
    }
    const onUserClick = (ID: number) => {
        setHoveredUser(ID)
        setID(ID)
        setActive(false)
    }
    const onMouseEnter = (ID: number) => {
        setHoveredUser(ID)
    }



    return (
        <div className={"App"}>
            <PageTitle title={"This is App component!"}/>
            <Progress />
        {/*    <Accordion titleValue={"Menu"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed} users={users}/>*/}
            <Accordion titleValue={"Members"} onChange={() => {setCollapsed(!collapsed)}} collapsed={collapsed} users={users1}/>
            <OnOff onChange = {()=> {setSwitchedOn(!switchedOn)}} switchedOn={switchedOn}/>
            <Select onChange={onChangeSelect} value={selectValue}/>
            <UniqueSelect users={list} onChange={onChangeUniqueSelect}/>
            <BusySelect users={users2} onChange={onChangeBusySelect} ID={ID} hoveredUser={hoveredUser} active={active} onMouseEnter={onMouseEnter} onUserClick={onUserClick}/>
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
