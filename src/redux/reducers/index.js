import { combineReducers } from "redux";
import pathReducers from "./pathReducers";
import dataReducers from "./dataReducers";
import authReducers from "./authReducers";

export default combineReducers({
    path: pathReducers,
    data: dataReducers,
    auth: authReducers,
});
