import { DATA_FETCH } from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return action.payload;
        default:
            return state;
    }
};
