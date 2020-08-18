import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function ChildMenu2({ menuItem }) {
    const children = menuItem.children;
    if (!children) return null;

    return (
        <Fragment>
            {children.map((item) => (
                <NavLink
                    className="child"
                    key={item.path}
                    to={menuItem.path + item.path}
                    activeClassName="active"
                >
                    {"▶ "}
                    {item.name}
                </NavLink>
            ))}
        </Fragment>
    );
}

export default React.memo(ChildMenu2);
