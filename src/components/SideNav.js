import React from "react";
import SideNavList from "./SideNavList";

function SideNav() {
    return (
        <div className="sideNav">
            <SideNavList page="page1" />
            <SideNavList page="page2" />
            <SideNavList page="page3" />
            <SideNavList page="page4" />
        </div>
    );
}

export default React.memo(SideNav);
