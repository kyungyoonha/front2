import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Page from "../pages/Page";
import TabsPageSingle from "../pages/TabsPageSingle";
import TabsPageDouble from "../pages/TabsPageDouble";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import history from "../history";

// redux
import { useSelector } from "react-redux";

function App() {
    const { user } = useSelector((state) => state.auth);

    // 로그인 안되어 있을 시 로그인 페이지로 이동
    const AuthRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) => {
                if (!user.userId) {
                    return <Login />;
                }

                if (Component) {
                    return <Component {...props} />;
                }
            }}
        />
    );

    return (
        <div className="app">
            <Router history={history}>
                <div>
                    <Header history={history} />
                    <Switch>
                        <Route path="/" exact component={Page} />
                        <Route path="/signup" exact component={SignUp} />
                        <AuthRoute path="/login" exact component={Login} />
                        <AuthRoute path="/page1" exact component={Page} />
                        <AuthRoute path="/page2" exact component={Page} />
                        <AuthRoute path="/page1/:id/:id" component={Page} />
                        <AuthRoute path="/page2/:id/:id" component={Page} />
                        <AuthRoute path="/page3" component={TabsPageSingle} />
                        <AuthRoute path="/page4" component={TabsPageDouble} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

// authRoute 구현할것  ★

export default App;
