import axios from "axios";

const setAuthHeader = (token) => {
    const accessToken = "Bearer " + token.accessToken;
    const refreshToken = "Bearer " + token.refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    axios.defaults.headers.common["Authorization"] = accessToken;
};

export default setAuthHeader;
