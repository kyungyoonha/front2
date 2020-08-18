import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ChildMenu from "./common/ChildMenu";

function SideNavItem({ menuItem }) {
    const [path, setPath] = useState("");
    // open 마우스 들어올 때
    const onMouseEnter = useCallback((path) => {
        setPath(path);
    }, []);

    // 마우스 나갈 때
    const onMouseLeave = useCallback(() => {
        setPath("");
    }, []);

    return (
        <div
            key={menuItem.path}
            onMouseLeave={onMouseLeave}
            className="sideNav__box"
        >
            <NavLink
                key={menuItem.path}
                to={menuItem.path}
                activeClassName="active"
                onMouseEnter={() => onMouseEnter(menuItem.path)}
            >
                <div className="sideNav__mainIcon">
                    <i className={`fas ${menuItem.icon}`}></i>
                </div>
                {menuItem.name}
            </NavLink>

            {path && <ChildMenu styleName="sideNav" path={path} />}
        </div>
    );
}

export default React.memo(SideNavItem);
