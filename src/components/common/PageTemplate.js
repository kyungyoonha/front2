import React, { Fragment } from "react";
import SideNav from "../SideNav/SideNav";
import Slider from "../Slider/Slider";

// page Template
function PageTemplate({ children }) {
    return (
        <Fragment>
            <Slider />
            <div className="pageTemplate">
                <div className="pageTemplate__container">
                    <SideNav />
                    {children}
                </div>
            </div>
        </Fragment>
    );
}

export default PageTemplate;
