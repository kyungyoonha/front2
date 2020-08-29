import { DATA_FETCH } from "../types";

export const dataAction_fetch = (genre) => async (dispatch) => {
    try {
        // 헤더설정 되어있는 axios 사용 x => cors 오류 발생
        const apiUrl =
            "https://yts-proxy.now.sh/list_movies.json?limit=6&genre=" + genre;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DATA_FETCH,
                    payload: data.data.movies,
                });
            });
    } catch (err) {
        console.error("dataAction_fetch error:", err);
    }
};
