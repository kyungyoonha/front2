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
            return {
                ...state,
                users: [...state.users, action.payload],
                user: action.payload,
                errors: {},
            };

        case AUTH_LOGIN:
            return {
                ...state,
                user: state.users.fillter(
                    (user) => user.id === action.payload.id
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
