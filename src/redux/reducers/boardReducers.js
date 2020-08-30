import { BOARD_FETCH, BOARD_INSERT, BOARD_EDIT, BOARD_DELETE } from "../types";

const INITIAL_STATE = {
    boardItems: [],
    totalPage: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOARD_FETCH:
            return {
                boardItems: action.payload.data,
                totalPage: action.payload.totalPage,
            };

        // item 추가
        case BOARD_INSERT:
            return {
                ...state,
                boardItems: [...state, action.payload],
            };

        // id 일치하는 item 업데이트
        case BOARD_EDIT:
            return {
                ...state,
                boardItems: state.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                ),
            };

        // id 일치 하는 item 삭제
        case BOARD_DELETE:
            return {
                ...state,
                boardItems: state.filter(
                    (item) => item._id !== action.payload._id
                ),
            };

        default:
            return state;
    }
};
