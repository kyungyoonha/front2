import { DATA_FETCH, DATA_INSERT, DATA_EDIT, DATA_DELETE } from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return action.payload;

        // item 추가
        case DATA_INSERT:
            return [...state, action.payload];

        // id 일치하는 item 업데이트
        case DATA_EDIT:
            return state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );

        // id 일치 하는 item 삭제
        case DATA_DELETE:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};
