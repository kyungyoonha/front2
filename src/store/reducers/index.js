import { combineReducers } from "redux";
import pathReducers from "./pathReducers";
import dataReducers from "./dataReducers";

export default combineReducers({
    path: pathReducers,
    data: dataReducers,
});
