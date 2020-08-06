import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SideNav from "./SideNav";
import page from "../pages/page";

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <SideNav />
                <Route path="/" exact component={page} />
                <Route path="/page1" exact component={page} />
                <Route path="/page1/:id" exact component={page} />
                <Route path="/page2" exact component={page} />
                <Route path="/page2/:id" exact component={page} />
                <Route path="/page3" exact component={page} />
                <Route path="/page3/:id" exact component={page} />
                <Route path="/page4" exact component={page} />
                <Route path="/page4/:id" exact component={page} />
            </div>
        </div>
    );
}

export default App;
