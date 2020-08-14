import { DATA_FETCH } from "../types";
import { data as menuItems } from "../../json/menuItems.json";

export const dataAction_fetch = (pathMain, pathSub) => {
    if (pathMain && pathSub) {
        const item = menuItems.find((item) => item.url === pathMain);
        if (item.children) {
            return {
                type: DATA_FETCH,
                payload: item.children.find((item) => item.url === pathSub),
            };
        }
    } else {
        return {
            type: DATA_FETCH,
            payload: { url: "/home", name: "Main", color: "yellow" },
        };
    }
};
