import React from "react";
import { Link } from "react-router-dom";

function HeaderNavDepth2({ menuItem, handleOpen }) {
    const children = menuItem.children || [];
    const query = new URLSearchParams(window.location.search);
    const value = query.get("value");

    return (
        <div className="headerNavDepth2">
            <div className="headerNavDepth2__items">
                {children.map((item) => (
                    <Link
                        key={item.path}
                        to={menuItem.path + "?value=" + item.name}
                        className={`${value === item.name && "active"}`}
                    >
                        {item.name}
                    </Link>
                ))}
                <i
                    className="fas fa-plus-circle"
                    onClick={() => handleOpen(menuItem.path)}
                ></i>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavDepth2);
