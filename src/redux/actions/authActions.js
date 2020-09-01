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

export const authAction_checkId = (id) => (dispatch) => {
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
        axios
            .post("/auth/checkid", { userId: id })
            .then((res) => {
                alert("사용 가능한 아이디 입니다.");
                dispatch({
                    type: AUTH_CHECKID,
                    payload: true,
                });
            })
            .catch((err) => {
                dispatch({
                    type: AUTH_ERRORS,
                    payload: err.response.data,
                });
            });
    }
};

export const authAction_signup = (userData) => (dispatch) => {
    dispatch({
        type: AUTH_CLEAR_ERRORS,
    });
    axios
        .post("/auth/signup", userData)
        .then((res) => {
            alert("회원가입에 성공하였습니다.");
            setAuthHeader(res.data.token);
            dispatch({
                type: AUTH_CLEAR_ERRORS,
            });
            history.push("/login");
        })
        .catch((err) => {
            if (err.response.data.alert) {
                alert(err.response.data.alert);
            }
            dispatch({
                type: AUTH_ERRORS,
                payload: err.response.data,
            });
        });
};

export const authAction_login = (userData) => (dispatch) => {
    dispatch({
        type: AUTH_CLEAR_ERRORS,
    });
    axios
        .post("/auth/login", userData)
        .then((res) => {
            setAuthHeader(res.data.token);
            dispatch(authAction_fetchUserData());
            history.push("/");
        })
        .catch((err) => {
            if (err.response.data.alert) {
                alert(err.response.data.alert);
            }
            dispatch({
                type: AUTH_ERRORS,
                payload: err.response.data,
            });
        });
};

export const authAction_logout = () => {
    localStorage.removeItem("FBIdToken");
    return {
        type: AUTH_LOGOUT,
    };
};

export const authAction_fetchUserData = () => async (dispatch) => {
    axios
        .get("/apis/user")
        .then((res) =>
            dispatch({
                type: AUTH_FETCH_USER,
                payload: res.data.user,
            })
        )
        .catch((err) => {
            console.error("authAction_fetchUserData error", err);
        });
};
