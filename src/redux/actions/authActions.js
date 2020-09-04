import {
    AUTH_CHECKID,
    AUTH_CLEAR_ERRORS,
    AUTH_LOGOUT,
    AUTH_ERRORS,
    AUTH_FETCH_USER,
} from "../types";
import history from "../../history";
import { checkRegId } from "../../util/validate";
import setAuthHeader from "../../util/setAuthHeader";
import axios from "axios";

export const authAction_checkId = (id) => async (dispatch) => {
    if (!checkRegId(id)) {
        dispatch({
            type: AUTH_ERRORS,
            payload: {
                userId:
                    "아이디는 10자 이상이어야 하며, 숫자/영어/특수문자를 모두 포함해야 합니다.",
            },
        });
    } else {
        dispatch({ type: AUTH_ERRORS, payload: { userId: "" } });
        try {
            await axios.post("/auth/checkid", { userId: id });
            dispatch({
                type: AUTH_CHECKID,
                payload: true,
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERRORS,
                payload: err.response.data,
            });
        }
    }
};

export const authAction_signup = (userData) => async (dispatch) => {
    dispatch({
        type: AUTH_CLEAR_ERRORS,
    });
    try {
        const response = await axios.post("/auth/signup", userData);
        alert("회원가입에 성공하였습니다.");
        setAuthHeader(response.data.token);
        dispatch({
            type: AUTH_CLEAR_ERRORS,
        });
        history.push("/login");
    } catch (err) {
        if (err.response.data.alert) {
            alert(err.response.data.alert);
        }
        dispatch({
            type: AUTH_ERRORS,
            payload: err.response.data,
        });
    }
};

export const authAction_login = (userData) => async (dispatch) => {
    dispatch({
        type: AUTH_CLEAR_ERRORS,
    });
    try {
        const response = await axios.post("/auth/login", userData);
        setAuthHeader(response.data.token);
        dispatch(authAction_fetchUserData());
        history.push("/");
    } catch (err) {
        if (err.response.data.alert) {
            alert(err.response.data.alert);
        }
        dispatch({
            type: AUTH_ERRORS,
            payload: err.response.data,
        });
    }
};

export const authAction_logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    return {
        type: AUTH_LOGOUT,
    };
};

export const authAction_fetchUserData = () => async (dispatch) => {
    try {
        const response = await axios.get("/apis/user");
        dispatch({
            type: AUTH_FETCH_USER,
            payload: response.data.user,
        });
    } catch (err) {
        console.error("authAction_fetchUserData error", err);
    }
};

export const authAction_token = (token) => async (dispatch) => {
    try {
        const response = await axios.post("/auth/token", token);

        const accessToken = "Bearer " + response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);

        axios.defaults.headers.common["Authorization"] = accessToken;
        dispatch(authAction_fetchUserData());
    } catch (err) {
        console.error("authAction_token error", err);
    }
};
