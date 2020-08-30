import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideNavDepth2 from "./SideNavDepth2";
import history from "../../history";

function SideNavDepth1({ menuItem }) {
    const children = menuItem.children || [];

    // const { menuItems } = useSelector((state) => state.menu);
    // const menuItem = menuItems.find((item) => item.path === menuPath);

    const handleAddMenu = () => {
        history.push("/nav?depth1=" + menuItem.path);
    };

    const [path, setPath] = useState("");

    const onMouseEnter = (path) => {
        setPath(path);
    };

    const onMouseLeave = () => {
        setPath("");
    };

    return (
        <div className="sideNavInner" onMouseLeave={onMouseLeave}>
            {children.map((item) => (
                <div key={item.path} className="sideNavInner__item">
                    <NavLink
                        to={item.path}
                        activeClassName="active"
                        onMouseEnter={() => onMouseEnter(item.path)}
                    >
                        {item.name}
                        {item.children && (
                            <i
                                className={`fas fa-angle-${
                                    path === item.path ? "down" : "right"
                                } right`}
                            ></i>
                        )}
                    </NavLink>
                    {path === item.path && <SideNavDepth2 menuItem={item} />}
                </div>
            ))}

            <div
                className="sideNavInner__item"
                onMouseEnter={() => onMouseEnter("")}
            >
                <i
                    className="fas fa-plus-circle"
                    onClick={() => handleAddMenu()}
                ></i>
            </div>
        </div>
    );
}

export default React.memo(SideNavDepth1);
