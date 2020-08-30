import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideNavDepth1 from "./SideNavDepth1";

//redux
import { useSelector } from "react-redux";

const SideNav = () => {
    const { menuItems } = useSelector((state) => state.menu); // 전체 메뉴 아이템
    const [menuPath, setMenuPath] = useState(""); // 자식 메뉴 오픈 여부
    const [isToggle, setToggle] = useState(false); // 메뉴 팝업

    // 마우스 진입 시
    const handleMouseEnter = (path) => {
        setMenuPath(path);
    };

    // 마우스 아웃 시
    const handleMouseLeave = () => {
        setMenuPath("");
    };

    const handleOpenToggle = () => {
        setToggle(!isToggle);
    };

    if (!menuItems) {
        return;
    }

    return (
        <div className="sideNav" onMouseLeave={handleMouseLeave}>
            <div className="container">
                <i
                    className={`fas fa-${isToggle ? "times on" : "bars"} `}
                    onClick={handleOpenToggle}
                ></i>
                <div className={`sideNav__items ${isToggle && "on"}`}>
                    {menuItems.map((item) => (
                        <div className="sideNav__item" key={item.path}>
                            <NavLink
                                to={item.path}
                                activeClassName="active"
                                onMouseEnter={() => handleMouseEnter(item.path)}
                            >
                                <i className={`fas ${item.icon}`}></i>
                                {item.name}
                                {item.children && (
                                    <i
                                        className={`fas fa-angle-${
                                            menuPath === item.path
                                                ? "down"
                                                : "right"
                                        } right`}
                                    ></i>
                                )}
                            </NavLink>
                            {item.children && menuPath === item.path && (
                                <SideNavDepth1 menuItem={item} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideNav;
