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

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <div>
                    <Header history={history} />
                    <Switch>
                        <Route path="/" exact component={Page} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/page1" component={Page} />
                        <Route path="/page2" component={Page} />
                        <Route path="/page3" component={TabsPageSingle} />
                        <Route path="/page4" component={TabsPageDouble} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
