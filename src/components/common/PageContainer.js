import React, { Fragment } from "react";
import SideNav from "../SideNav";

function PageContainer({ history, children }) {
    return (
        <Fragment>
            <div className="app_img">슬라이딩 이미지</div>
            <div className="app__container">
                <div className="page">
                    <SideNav history={history} />
                    <div className="page__right">{children}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default PageContainer;
