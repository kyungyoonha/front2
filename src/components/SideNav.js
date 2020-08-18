import React from "react";
import SideNavItem from "./SideNavItem";

//redux
import { useSelector } from "react-redux";

function SideNav() {
    const { menuItems } = useSelector((state) => state.menu);

    return (
        <div className="sideNav">
            {menuItems.map((menuItem) => (
                <SideNavItem key={menuItem.name} menuItem={menuItem} />
            ))}
        </div>
    );
}

export default React.memo(SideNav);
