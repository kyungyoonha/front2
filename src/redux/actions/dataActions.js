import { DATA_FETCH } from "../types";
import axios from "axios";

export const dataAction_fetch = (ctg) => async (dispatch) => {
    try {
        const apiUrl = "http://localhost:3000/json/product.json";
        const response = await axios.get(apiUrl);

        let result = response.data.data;
        if (ctg) {
            result = result.filter((item) => item.ctg === ctg);
        } else {
            result = [];
        }

        dispatch({
            type: DATA_FETCH,
            payload: result,
        });
    } catch (err) {
        console.error("dataAction_fetch error:", err);
    }
};
