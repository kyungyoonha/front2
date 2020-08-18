import { MENU_FETCH_ALL } from "../types";
import axios from "axios";
const apiUrl = "../json/menuItems.json";

export const menuAction_fetchAll = () => async (dispatch) => {
    axios.get(apiUrl).then((response) => {
        dispatch({
            type: MENU_FETCH_ALL,
            payload: response.data.data,
        });
    });
};

// export const menuAction_fetch = (path) => async (dispatch) => {
//     const pathSplit = newPath.split("/");
//     const pathMain = pathSplit[1] ? "/" + pathSplit[1] : "";
//     const pathSub = pathSplit[2] ? "/" + pathSplit[2] : "";

//     axios
//         .get(apiUrl)
//         .then((response) => {
//             dispatch({
//                 type: MENU_FETCH,
//                 payload: {
//                     menu: response.data.data,
//                     menuChild:
//                         response.data.data.find(
//                             (item) => item.path === pathMain
//                         ) || {},
//                 },
//             });
//         })
//         .catch((error) => console.error(error));
// };
