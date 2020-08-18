import { DATA_FETCH } from "../types";

import axios from "axios";

export const dataAction_fetch = (id) => async (dispatch) => {
    const apiUrl = "./json/dataItems.json";

    if (!id) {
        return;
    }

    axios
        .get(apiUrl)
        .then((response) => {
            dispatch({
                type: DATA_FETCH,
                payload: response.data.data.find((item) => item.id === id),
            });
        })
        .catch((error) => console.error(error));
};
