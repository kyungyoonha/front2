import { DATA_FETCH } from "../types";

const INITIAL_STATE = {
    pageData: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return {
                ...state,
                pageData: action.payload,
            };
        default:
            return state;
    }
};
