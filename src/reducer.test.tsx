import {SET_ACTIVE_FALSE, setActiveReducer} from "./reducer";


test("reducer should change active status to false", ()=> {
    //data
    // action
    // expectation
    expect(setActiveReducer(true,{type: SET_ACTIVE_FALSE})).toBe(false)
})