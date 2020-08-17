import React from "react";
import { NavLink, Link } from "react-router-dom";
import { data as menuItems } from "../json/menuItems.json";

function HeaderNav({ handleClickLogo, handleClickMain }) {
    return (
        <div className="headerNav">
            {menuItems.map((item) => (
                <div className="headerNav__item">
                    <NavLink
                        key={item.url}
                        to={item.url}
                        activeClassName="active"
                        onClick={() => handleClickMain(item.url)}
                    >
                        {item.name}
                    </NavLink>
                    <div className="headerNav__underbar"></div>
                </div>
            ))}
        </div>
    );
}

export default HeaderNav;
