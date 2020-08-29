import React from "react";
import { NavLink } from "react-router-dom";
import HeaderNavDepth2 from "./HeaderNavDepth2";

function HeaderNavDepth1({ menuItem, handleOpenModal }) {
    const children = menuItem.children || [];
    return (
        <div className="headerNavDepth1">
            <div>
                {children.map((item) => (
                    <div key={item.path} className="headerNavDepth1__item">
                        <NavLink to={item.path} activeClassName="active">
                            {item.name}
                        </NavLink>
                        <HeaderNavDepth2
                            menuItem={item}
                            handleOpenModal={handleOpenModal}
                        />
                    </div>
                ))}

                <div className="headerNavDepth1__item">
                    <i
                        className="fas fa-plus-circle"
                        onClick={() => handleOpenModal()}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavDepth1);
