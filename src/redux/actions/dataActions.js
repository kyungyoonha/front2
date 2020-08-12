import { DATA_FETCH, DATA_INSERT, DATA_EDIT, DATA_DELETE } from "../types";
import { data as boardItems } from "../../json/boardItems.json";
import { makeRandomId } from "../../util/functions";

// Fetch data
export const dataAction_fetch = () => {
    // API data fetch
    return {
        type: DATA_FETCH,
        payload: boardItems,
    };
};

// Insert or Edit data
export const dataAction_update = (item) => {
    // Insert New data
    // 아이디 없는 경우 신규 추가, 있으면 기존 데이터 수정
    if (!item.id) {
        return {
            type: DATA_INSERT,
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
            type: DATA_EDIT,
            payload: item,
        };
    }
};

// Delete data
export const dataAction_delete = (item) => {
    return {
        type: DATA_DELETE,
        payload: item,
    };
};
