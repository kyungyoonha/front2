import { DATA_FETCH, DATA_LOADING } from "../types";

const INITIAL_STATE = {
    pageData: null,
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return {
                ...state,
                pageData: action.payload,
            };
        case DATA_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        default:
            return state;
    }
};
