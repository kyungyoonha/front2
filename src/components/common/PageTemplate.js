import React, { Fragment } from "react";
import SideNav from "../SideNav";
import Slider from "./Slider";

// page Template
function PageTemplate({ history, children }) {
    return (
        <Fragment>
            <Slider />
            <div className="app__container">
                <div className="page">
                    <SideNav history={history} />
                    <div className="page__right">{children}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default PageTemplate;
