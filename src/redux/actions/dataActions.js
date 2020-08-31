import { DATA_FETCH, DATA_LOADING } from "../types";

export const dataAction_fetch = (genre) => async (dispatch) => {
    try {
        // axios 안쓰고 fetch 썼음
        // axios에 토큰 헤더 설정되어있어서 cors 오류남
        const apiUrl =
            "https://yts-proxy.now.sh/list_movies.json?limit=8&genre=" + genre;
        dispatch(dataAction_loading());
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DATA_FETCH,
                    payload: data.data.movies,
                });
                dispatch(dataAction_loading());
            });
    } catch (err) {
        console.error("dataAction_fetch error:", err);
        dispatch(dataAction_loading());
    }
};

export const dataAction_loading = () => {
    return { type: DATA_LOADING };
};
