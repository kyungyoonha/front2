import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideNavInnerChild from "./SideNavInnerChild";

// redux
import { useSelector } from "react-redux";

function SideNavInner({ menuPath, handleOpen }) {
    const { menuItemsAll } = useSelector((state) => state.menu);
    const menuItem = menuItemsAll.find((item) => item.path === menuPath);

    const [path, setPath] = useState("");

    const onMouseEnter = (path) => {
        setPath(path);
    };

    const onMouseLeave = () => {
        setPath("");
    };

    // const menuItem = { name: "상품", path: "/page1", icon: "fa-home" };

    if (!menuItem || !menuItem.children) {
        return;
    }

    return (
        <div className="sideNavInner" onMouseLeave={onMouseLeave}>
            {menuItem.children.map((item) => (
                <div key={item.path} className="sideNavInner__item">
                    <NavLink
                        to={item.path}
                        activeClassName="active"
                        onMouseEnter={() => onMouseEnter(item.path)}
                    >
                        {"- "}
                        {item.name}
                        {item.children && (
                            <i
                                className={`fas fa-angle-${
                                    path === item.path ? "down" : "right"
                                } right`}
                            ></i>
                        )}
                    </NavLink>
                    {path === item.path && (
                        <SideNavInnerChild
                            menuItem={item}
                            handleOpen={handleOpen}
                        />
                    )}
                </div>
            ))}

            <div
                className="sideNavInner__item"
                onMouseEnter={() => onMouseEnter("")}
            >
                <i
                    className="fas fa-plus-circle"
                    onClick={() => handleOpen()}
                ></i>
            </div>
        </div>
    );
}

export default React.memo(SideNavInner);
