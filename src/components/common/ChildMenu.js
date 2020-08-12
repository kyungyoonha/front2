import React from "react";
import { NavLink } from "react-router-dom";

function HeaderSub({ styleName, menuItem, onClick }) {
    if (!menuItem) return null;
    const children = menuItem.children;

    return (
        <div className={`${styleName}__childMenu`}>
            {children.map((item) => (
                <NavLink
                    key={item.url}
                    to={menuItem.url + item.url}
                    onClick={() => onClick(menuItem.url + item.url)}
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
