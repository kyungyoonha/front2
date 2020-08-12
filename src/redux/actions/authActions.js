import { AUTH_SIGNUP, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERRORS } from "../types";
import { data as authUsers } from "../../json/authUsers.json";
import { validateSignUp, validateLogin, checkRegId } from "../../util/validate";

export const authAction_validateId = (id) => {
    if (!checkRegId(id)) {
        alert(
            "아이디는 10자 이상이어야 하며, 숫자/영어/특수문자를 모두 포함해야 합니다."
        );
    } else {
        // 기존 유저
        if (authUsers.findIndex((user) => user.id === id) === -1) {
            alert("사용가능한 아이디 입니다.");
        } else {
            alert("이미 가입되어 있는 아이디 입니다.");
        }
    }
};

export const authAction_signup = (userData) => {
    const { valid, errors } = validateSignUp(userData);
    if (valid) {
        return {
            type: AUTH_SIGNUP,
            payload: userData,
        };
    } else {
        return {
            type: AUTH_ERRORS,
            payload: errors,
        };
    }
};

export const authAction_login = (userData) => {
    const { valid, errors } = validateLogin(userData);
    if (valid) {
        return {
            type: AUTH_LOGIN,
        };
    } else {
        return {
            type: AUTH_ERRORS,
            payload: errors,
        };
    }
};

export const authAction_logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};
