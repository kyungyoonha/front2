import {
    MENU_FETCH_ALL,
    MENU_FETCH,
    MENU_UPDATE_SECOND,
    MENU_UPDATE_THIRD,
    MENU_ERRORS,
} from "../types";
import axios from "axios";
import { validateInsertMenu } from "../../util/validate";

const apiUrl = "http://localhost:3000/json/menuItems.json";
// 모든 메뉴 데이터 Fetch
export const menuAction_fetch_all = () => async (dispatch) => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.data;

        dispatch({
            type: MENU_FETCH_ALL,
            payload: data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const menuAction_fetch = (path) => async (dispatch) => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.data;

        let result;

        if (!path || path === "/") {
            result = data;
        }
        // path = '/page1'
        else if (path.split("/").length === 2) {
            result = data.find((item) => item.path === path).children || [];
        }
        // page = '/page1/product2'
        else if (path.split("/").length >= 3) {
            const second =
                data.find((item) => item.path === "/" + path.split("/")[1])
                    .children || [];
            result = second.find(
                (item) =>
                    item.path ===
                    "/" + path.split("/")[1] + "/" + path.split("/")[2]
            ).children;
        }

        dispatch({
            type: MENU_FETCH,
            payload: result,
        });
    } catch (err) {}
};

export const menuAction_updateSecond = (newPath, newItem) => {
    return {
        type: MENU_UPDATE_SECOND,
        payload: { newPath, newItem },
    };
};

export const menuAction_updateThird = (newPath, newItem) => {
    return {
        type: MENU_UPDATE_THIRD,
        payload: { newPath, newItem },
    };
};

export const menuAction_validateInput = (inputs) => (dispatch) => {
    const { valid, errors } = validateInsertMenu(inputs);
    if (!valid) {
        dispatch({
            type: MENU_ERRORS,
            payload: errors,
        });
    }
};
