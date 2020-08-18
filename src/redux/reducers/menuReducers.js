import { MENU_FETCH_ALL, MENU_FETCH } from "../types";

const INITIAL_STATE = {
    menuItems: [],
    child: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENU_FETCH_ALL:
            return {
                ...state,
                menuItems: action.payload,
            };

        case MENU_FETCH:
            return {
                ...state,
                child: action.payload,
            };
        default:
            return state;
    }
};
