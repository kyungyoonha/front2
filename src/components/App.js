import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "../pages/Page";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import history from "../history";
import Footer from "./Footer";
import HeaderUtil from "./Header/HeaderUtil";
import HeaderNav from "./Header/HeaderNav";

// redux
import { useSelector, useDispatch } from "react-redux";
import { menuAction_fetch_all } from "../redux/actions";
import PageMain from "../pages/PageMain";

function App() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(menuAction_fetch_all());
    }, [dispatch]);

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
                <div className="app__container">
                    <HeaderUtil /> {/* 로그인 / 회원가입 / 유저정보 */}
                    <HeaderNav history={history} />
                    <Switch>
                        <Route path="/" exact component={PageMain} />
                        <Route path="/signup" exact component={SignUp} />
                        <AuthRoute path="/login" exact component={Login} />
                        <AuthRoute path="/page1" exact component={Page} />
                        <AuthRoute path="/page2" exact component={Page} />
                        <AuthRoute path="/page1/:id" exact component={Page} />
                        <AuthRoute path="/page2/:id" exact component={Page} />
                        <AuthRoute path="/page1/:id/:id" component={Page} />
                        <AuthRoute path="/page2/:id/:id" component={Page} />
                        <AuthRoute path="/page3" component={PageMain} />
                        <AuthRoute path="/page4" component={PageMain} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
