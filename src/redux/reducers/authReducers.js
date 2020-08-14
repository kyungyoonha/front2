import {
    AUTH_CHECKID,
    AUTH_SIGNUP,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERRORS,
} from "../types";
import { data as authUsers } from "../../json/authUsers.json";

const INITIAL_STATE = {
    isCheckId: false,
    users: authUsers,
    user: {},
    errors: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_CHECKID:
            return {
                ...state,
                isCheckId: action.payload,
            };
        case AUTH_SIGNUP:
            const newUsersDB = [...state.users, action.payload];
            localStorage.setItem("usersDB", JSON.stringify(newUsersDB));
            return {
                ...state,
                users: newUsersDB,
                user: action.payload,
                errors: {},
            };

        case AUTH_LOGIN:
            return {
                ...state,
                user: state.users.find(
                    (user) => user.userId === action.payload.userId
                ),
                errors: {},
            };

        case AUTH_LOGOUT:
            return {
                ...state,
                user: {},
                errors: {},
            };

        case AUTH_ERRORS:
            return {
                ...state,
                user: {},
                errors: action.payload,
            };

        default:
            return state;
    }
};
