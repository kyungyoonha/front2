import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Page from "../pages/Page";
import TabsPageSingle from "../pages/TabsPageSingle";
import TabsPageDouble from "../pages/TabsPageDouble";
import SignUp from "../pages/SignUp";
import history from "../history";

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <div>
                    <Header history={history} />
                    <div className="app__container">
                        <Route path="/" exact component={Page} />
                        <Route path="/page1" component={Page} />
                        <Route path="/page2" component={Page} />
                        <Route path="/page3" exact component={TabsPageSingle} />
                        <Route path="/page4" component={Page} />
                        <Route
                            path="/page3/intro1"
                            component={TabsPageSingle}
                        />
                        <Route
                            path="/page3/intro2"
                            component={TabsPageDouble}
                        />
                        <Route path="/page3/intro3" exact component={Page} />
                        <Route path="/page3/intro4" exact component={Page} />
                    </div>
                    <Route path="/signup" exact component={SignUp} />
                </div>
            </Router>
        </div>
    );
}

export default App;
