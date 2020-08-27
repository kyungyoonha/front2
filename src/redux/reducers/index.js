import { combineReducers } from "redux";
import authReducers from "./authReducers";
import boardReducers from "./boardReducers";
import menuReducers from "./menuReducers";
import dataReducers from "./dataReducers";

export default combineReducers({
    auth: authReducers,
    board: boardReducers,
    menu: menuReducers,
    data: dataReducers,
});
