import { combineReducers } from "redux";
import pathReducer from "./pathReducers";

export default combineReducers({
    path: pathReducer,
});
