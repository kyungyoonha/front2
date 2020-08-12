import { PATH_MAIN, PATH_SUB, PATH_SET } from "../types";

export const pathAction_setPath = (newPath) => {
    const pathSplit = newPath.split("/");
    const path = {
        pathMain: pathSplit[1] ? "/" + pathSplit[1] : "",
        pathSub: pathSplit[2] ? "/" + pathSplit[2] : "",
    };
    return {
        type: PATH_SET,
        payload: path,
    };
};

export const pathAction_setMain = (path) => {
    return {
        type: PATH_MAIN,
        payload: path,
    };
};

export const pathAction_setSub = (path) => {
    return {
        type: PATH_SUB,
        payload: path,
    };
};
