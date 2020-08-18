import { combineReducers } from "redux";
import authReducers from "./authReducers";
import dataReducers from "./dataReducers";
import boardReducers from "./boardReducers";
import menuReducers from "./menuReducers";

export default combineReducers({
    auth: authReducers,
    data: dataReducers,
    board: boardReducers,
    menu: menuReducers,
});
