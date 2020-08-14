import { PATH_MAIN, PATH_SUB, PATH_SET } from "../types";

const INITIAL_STATE = {
    pathMain: "",
    pathSub: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PATH_SET:
            return action.payload;
        case PATH_MAIN:
            return {
                pathMain: action.payload,
                pathSub: "",
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
