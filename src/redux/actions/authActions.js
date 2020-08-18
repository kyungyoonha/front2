import {
    AUTH_CHECKID,
    AUTH_SIGNUP,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERRORS,
} from "../types";
import history from "../../history";
import { data as authUsers } from "../../json/authUsers.json";
import { validateSignUp, validateLogin, checkRegId } from "../../util/validate";

export const authAction_checkId = (id) => {
    if (!checkRegId(id)) {
        alert(
            "아이디는 10자 이상이어야 하며, 숫자/영어/특수문자를 모두 포함해야 합니다."
        );
    } else {
        // 기존 유저
        if (authUsers.findIndex((user) => user.id === id) === -1) {
            alert("사용 가능한 아이디입니다.");
            return {
                type: AUTH_CHECKID,
                payload: true,
            };
        } else {
            alert("이미 가입되어 있는 아이디 입니다.");
        }
    }
    return {
        type: AUTH_CHECKID,
        payload: false,
    };
};

export const authAction_signup = (userData) => {
    const { valid, errors } = validateSignUp(userData);
    if (valid) {
        history.push("/login");
        alert("회원가입에 성공하였습니다.");
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

    if (!valid) {
        return {
            type: AUTH_ERRORS,
            payload: errors,
        };
    }

    // 회원가입 후에 LocalStroage에 저장된 userDB 가져옴
    const userDB = JSON.parse(localStorage.getItem("usersDB")) || authUsers;
    const user = userDB.find((user) => user.userId === userData.userId);
    if (user && user.password === userData.password) {
        history.push("/");
        return {
            type: AUTH_LOGIN,
            payload: userData,
        };
    } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return {
            type: AUTH_ERRORS,
            payload: { total: "아이디 또는 비밀번호가 일치하지 않습니다." },
        };
    }
};

export const authAction_logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};
