import React from "react";
import { Link } from "react-router-dom";

function HeaderNavDepth2({ menuItem, handleOpenModal }) {
    const children = menuItem.children || [];
    const query = new URLSearchParams(window.location.search);
    const genre = query.get("genre");

    return (
        <div className="headerNavDepth2">
            <div className="headerNavDepth2__items">
                {children.map((item) => (
                    <Link
                        key={item.path}
                        to={menuItem.path + "?genre=" + item.name}
                        className={`${genre === item.name && "active"}`}
                    >
                        {item.name}
                    </Link>
                ))}
                <i
                    className="fas fa-plus-circle"
                    onClick={() => handleOpenModal(menuItem.path)}
                ></i>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavDepth2);
