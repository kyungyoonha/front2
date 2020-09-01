import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import reduxThunk from "redux-thunk";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { authAction_token, authAction_fetchUserData } from "./redux/actions";
import { AUTH_AUTHENTICATED } from "./redux/types";

const store = createStore(reducers, applyMiddleware(reduxThunk));

axios.defaults.baseURL = "http://localhost:8080";
const accessToken = localStorage.accessToken;
const refreshToken = localStorage.refreshToken;

if (accessToken) {
    const decodedToken = jwtDecode(accessToken);

    // Access Token 만료
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(
            authAction_token({
                token: {
                    accessToken,
                    refreshToken,
                },
            })
        );
    } else {
        store.dispatch({ type: AUTH_AUTHENTICATED });
        axios.defaults.headers.common["Authorization"] = accessToken;
        store.dispatch(authAction_fetchUserData());
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
