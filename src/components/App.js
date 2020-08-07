import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./SideNav";
import page from "../pages/page";
import history from "../history";

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <Router history={history}>
                    <SideNav history={history} />
                    <Route path="/" exact component={page} />
                    <Route path="/page1" exact component={page} />
                    <Route path="/page1/:id" exact component={page} />
                    <Route path="/page2" exact component={page} />
                    <Route path="/page2/:id" exact component={page} />
                    <Route path="/page3" exact component={page} />
                    <Route path="/page3/:id" exact component={page} />
                    <Route path="/page4" exact component={page} />
                    <Route path="/page4/:id" exact component={page} />
                </Router>
            </div>
        </div>
    );
}

export default App;
