import React from "react";
import { NavLink } from "react-router-dom";

//
function SideNavItemChild({ menuItem, onClick }) {
    const children = menuItem.children;
    if (!children) return null;

    return (
        <div className="sideNavItemSub">
            {children.map((childrenItem) => (
                <div key={childrenItem.name}>
                    <NavLink
                        to={`${menuItem.url}${childrenItem.url}`}
                        className="sideNavItemSub__link"
                        activeClassName="sideNavItemSub__link_active"
                        onClick={onClick}
                    >
                        <span>
                            {"▶ "}
                            {childrenItem.name}
                        </span>
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default React.memo(SideNavItemChild);
