import React, { Fragment } from "react";
import SideNav from "../SideNav";
import Slider from "../Slider";

// page Template
function PageTemplate({ children }) {
    return (
        <Fragment>
            <Slider />
            <div className="pageTemplate">
                <div className="page">
                    <SideNav />
                    {children}
                </div>
            </div>
        </Fragment>
    );
}

export default PageTemplate;
