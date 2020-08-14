import { BOARD_FETCH, BOARD_INSERT, BOARD_EDIT, BOARD_DELETE } from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOARD_FETCH:
            return action.payload;

        // item 추가
        case BOARD_INSERT:
            return [...state, action.payload];

        // id 일치하는 item 업데이트
        case BOARD_EDIT:
            return state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );

        // id 일치 하는 item 삭제
        case BOARD_DELETE:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};
