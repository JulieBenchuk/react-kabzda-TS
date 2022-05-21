import {SET_ACTIVE_FALSE, SET_HOVERED_ITEM_NEXT, setActiveReducer, setHoveredItemReducer} from "./reducer";
import {users2, usersPropsType} from "./App";
import {useReducer} from "react";


test("reducer should change active status to false", ()=> {
    //data
    // action
    // expectation
    expect(setActiveReducer(true,{type: SET_ACTIVE_FALSE})).toBe(false)
});

test("reducer with nonexistent type should throw error", ()=> {
    //data
    // action
    // expectation
    expect(()=>{setActiveReducer(true,{type: "NONEXISTENT_TYPE"})}).toThrowError();
})

test("reducer should hover next element after press ArrowDown", ()=>{
    //data
    const [hoveredUser, dispatchHovered] = useReducer(setHoveredItemReducer, undefined)
    // action
    // expectation
    expect(()=>{
        dispatchHovered({type: SET_HOVERED_ITEM_NEXT, ID: users2[1].id})
    }).toBe(2);
})