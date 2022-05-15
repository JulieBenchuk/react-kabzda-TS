import {users2} from "./App";

export type SetActiveActionType = {
    type: string
}
export type setHoveredUserActionType = {
    type: string
    ID: any
}

export const SET_ACTIVE_OPPOSITE = "SET_ACTIVE_OPPOSITE"
export const SET_ACTIVE_FALSE = "SET_ACTIVE_FALSE"
export const SET_HOVERED_USER_CURRENT = "SET_HOVERED_USER_CURRENT"
export const SET_HOVERED_USER_NEXT = "SET_HOVERED_USER_NEXT"
export const SET_HOVERED_USER_PREVIOUS = "SET_HOVERED_USER_PREVIOUS"

export const setActiveReducer = (state: boolean, action: SetActiveActionType) => {
    switch (action.type) {
        case SET_ACTIVE_OPPOSITE:
            return !state;
        case SET_ACTIVE_FALSE:
            return false;
        default:
            throw new Error("Invalid action type :(")
    }
    return state;
}
export const setHoveredUserReducer = (state: undefined | number, action: setHoveredUserActionType) => {
    switch (action.type) {
        case SET_HOVERED_USER_CURRENT:
            return action.ID;
        case SET_HOVERED_USER_NEXT:
            return users2[action.ID + 1].id;
        case SET_HOVERED_USER_PREVIOUS:
            return users2[action.ID - 1].id;
        default:
            throw new Error("Invalid hovered action type :(")
    }
}