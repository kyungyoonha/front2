import React from "react";
import { NavLink } from "react-router-dom";
import history from "../../history";

function SideNavDepth2({ menuItem }) {
    const handleAddMenu = () => {
        history.push("/nav?depth2=" + menuItem.path);
    };

    return (
        <div className="sideNavInnerChild">
            {menuItem.children &&
                menuItem.children.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        activeClassName="active"
                    >
                        {item.name}
                    </NavLink>
                ))}
            <i
                className="fas fa-plus-circle"
                onClick={() => handleAddMenu()}
            ></i>
        </div>
    );
}

export default React.memo(SideNavDepth2);
