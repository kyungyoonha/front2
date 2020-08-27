import { BOARD_FETCH, BOARD_INSERT, BOARD_EDIT, BOARD_DELETE } from "../types";
import { makeRandomId } from "../../util/functions";
import axios from "axios";

const apiUrl = "http://localhost:3000/json/boardItems.json";
// Fetch data
export const boardAction_fetch = () => async (dispatch) => {
    const response = await axios.get(apiUrl);
    const data = response.data.data;
    // API data fetch
    dispatch({
        type: BOARD_FETCH,
        payload: data,
    });
};

// Insert or Edit data
export const boardAction_update = (item) => {
    // Insert New data
    // 아이디 없는 경우 신규 추가, 있으면 기존 데이터 수정
    if (!item.id) {
        return {
            type: BOARD_INSERT,
            payload: {
                ...item,
                id: makeRandomId(),
                date: new Date().toISOString(),
            },
        };
    }
    // Edit data
    else {
        return {
            type: BOARD_EDIT,
            payload: item,
        };
    }
};

// Delete data
export const boardAction_delete = (item) => {
    return {
        type: BOARD_DELETE,
        payload: item,
    };
};
