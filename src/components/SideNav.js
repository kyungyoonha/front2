import React from "react";
import SideNavItem from "./SideNavItem";

function SideNav() {
    return (
        <div className="sideNav">
            <SideNavItem page="page1" />
            <SideNavItem page="page2" />
            <SideNavItem page="page3" />
            <SideNavItem page="page4" />
        </div>
    );
}

export default React.memo(SideNav);
