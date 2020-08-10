import { PATH_MAIN, PATH_SUB, SET_PATH } from "../types";

const INITIAL_STATE = {
    pathMain: "",
    pathSub: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PATH:
            return action.payload;
        case PATH_MAIN:
            return {
                ...state,
                pathMain: action.payload,
            };
        case PATH_SUB:
            return {
                ...state,
                pathSub: action.payload,
            };
        default:
            return state;
    }
};
