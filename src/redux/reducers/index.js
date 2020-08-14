import { combineReducers } from "redux";
import pathReducers from "./pathReducers";
import authReducers from "./authReducers";
import dataReducers from "./dataReducers";
import boardReducers from "./boardReducers";

export default combineReducers({
    path: pathReducers,
    auth: authReducers,
    data: dataReducers,
    board: boardReducers,
});
