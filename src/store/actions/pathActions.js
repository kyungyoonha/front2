import { PATH_MAIN, PATH_SUB, SET_PATH } from "../types";

export const setPath = (newPath) => {
    const pathSplit = newPath.split("/");
    const path = {
        pathMain: pathSplit[1] ? "/" + pathSplit[1] : "",
        pathSub: pathSplit[2] ? "/" + pathSplit[2] : "",
    };
    return {
        type: SET_PATH,
        payload: path,
    };
};

export const setPathMain = (path) => {
    return {
        type: PATH_MAIN,
        payload: path,
    };
};

export const setPathSub = (path) => {
    return {
        type: PATH_SUB,
        payload: path,
    };
};
