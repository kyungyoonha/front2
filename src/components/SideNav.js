import React from "react";
import SideNavItem from "./SideNavItem";
import menuItems from "../json/menuItems.json";

function SideNav() {
    return (
        <div className="sideNav">
            {menuItems.data.map((menuItem) => (
                <SideNavItem key={menuItem.name} menuItem={menuItem} />
            ))}
        </div>
    );
}

export default React.memo(SideNav);
