
export type SetActiveActionType = {
    type: string
}
export type setHoveredItemActionType = {
    type: string
    ID: any
}

export const SET_ACTIVE_OPPOSITE = "SET_ACTIVE_OPPOSITE"
export const SET_ACTIVE_FALSE = "SET_ACTIVE_FALSE"
export const SET_HOVERED_ITEM_CURRENT = "SET_HOVERED_ITEM_CURRENT"
export const SET_HOVERED_ITEM_NEXT = "SET_HOVERED_ITEM_NEXT"
export const SET_HOVERED_ITEM_PREVIOUS = "SET_HOVERED_ITEM_PREVIOUS"

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
export const setHoveredItemReducer = (state: undefined | number, action: setHoveredItemActionType) => {
    switch (action.type) {
        case SET_HOVERED_ITEM_CURRENT:
            return action.ID;
        case SET_HOVERED_ITEM_NEXT:
            return action.ID + 1;
        case SET_HOVERED_ITEM_PREVIOUS:
            return action.ID - 1;
        default:
            throw new Error("Invalid hovered action type :(")
    }
}