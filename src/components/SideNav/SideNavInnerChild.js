import React from "react";
import { NavLink } from "react-router-dom";

function SideNavInnerChild({ menuItem, handleOpen }) {
    return (
        <div className="sideNavInnerChild">
            {menuItem.children &&
                menuItem.children.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        activeClassName="active"
                    >
                        {"- "}
                        {item.name}
                    </NavLink>
                ))}
            <i
                className="fas fa-plus-circle"
                onClick={() => handleOpen(menuItem.path)}
            ></i>
        </div>
    );
}

export default React.memo(SideNavInnerChild);
