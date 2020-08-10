import React from "react";
import { NavLink } from "react-router-dom";

function HeaderSub({ styleName, menuItem, onClick }) {
    const children = menuItem.children;
    if (!children) return null;

    return (
        <div className={`${styleName}__childMenu`}>
            {children.map((item) => (
                <NavLink
                    key={item.url}
                    to={menuItem.url + item.url}
                    onClick={onClick}
                    activeClassName="active"
                >
                    {styleName === "sideNav" && "▶ "}
                    {item.name}
                </NavLink>
            ))}
        </div>
    );
}

export default React.memo(HeaderSub);
