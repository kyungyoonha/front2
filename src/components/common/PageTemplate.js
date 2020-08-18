import React, { Fragment } from "react";
import SideNav from "../SideNav";
import Slider from "./Slider";

// page Template
function PageTemplate({ children }) {
    return (
        <Fragment>
            <Slider />
            <div className="app__container">
                <div className="page">
                    <SideNav />
                    <div className="page__right">{children}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default PageTemplate;
