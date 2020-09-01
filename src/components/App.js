import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageMain from "../pages/PageMain";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import history from "../history";
import Footer from "./Footer";
import HeaderUtil from "./Header/HeaderUtil";
import HeaderNav from "./Header/HeaderNav";

// redux
import { useSelector, useDispatch } from "react-redux";
import { menuAction_fetch } from "../redux/actions";
import Page from "../pages/Page";
// import PageDetail from "../pages/PageDetail";
import HeaderModal from "./Header/HeaderModal";
import PageDetail from "../pages/PageDetail";
import BoardModal from "./Board/BoardModal";

function App() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(menuAction_fetch());
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
                    <HeaderNav />
                    <Switch>
                        <AuthRoute path="/" exact component={Page} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/login" exact component={Login} />
                        <AuthRoute path="/movies" exact component={Page} />
                        <AuthRoute path="/movies/:id" exact component={Page} />
                        <AuthRoute
                            path="/movies/:id/:id"
                            component={PageDetail}
                        />
                        <AuthRoute path="/page2" exact component={PageMain} />
                        <AuthRoute path="/page3" component={Page} />
                        <AuthRoute path="/page4" component={Page} />
                        <AuthRoute path="/nav" exact component={HeaderModal} />
                        <AuthRoute path="/board/:id" component={BoardModal} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
