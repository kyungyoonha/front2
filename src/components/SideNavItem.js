import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ChildMenu from "./common/ChildMenu";

// redux
import { useSelector, useDispatch } from "react-redux";
import { pathAction_setMain } from "../store/actions";

const IconsMap = {
    page1: <i className="fas fa-home"></i>,
    page2: <i className="fas fa-question-circle"></i>,
    page3: <i className="fas fa-address-book"></i>,
    page4: <i className="fas fa-cogs"></i>,
};

function SideNavItem({ menuItem }) {
    const { pathMain } = useSelector((state) => state.path);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        menuItem.url === pathMain ? setOpen(true) : setOpen(false);
    }, [menuItem, pathMain]);

    // open 마우스 들어올 때
    const handleMouseEnter = useCallback(() => {
        setOpen(true);
    }, []);

    // close 마우스 나갈 때
    // 고정되어 있지 않으면 open=false
    const handleMouseLeave = useCallback(() => {
        if (menuItem.url !== pathMain) {
            setOpen(false);
        }
    }, [menuItem, pathMain]);

    // 메인 페이지 클릭시
    const handleClickMain = useCallback(
        (path) => {
            setOpen(true);
            dispatch(pathAction_setMain(path));
        },
        [dispatch]
    );

    return (
        <div
            key={menuItem.url}
            onMouseLeave={handleMouseLeave}
            className="sideNav__box"
        >
            <NavLink
                key={menuItem.url}
                to={menuItem.url}
                activeClassName="active"
                onMouseEnter={handleMouseEnter}
                onClick={() => handleClickMain(menuItem.url)}
            >
                <div className="sideNav__mainIcon">
                    {IconsMap[menuItem.name]}
                </div>
                {menuItem.name}
            </NavLink>

            {/* fix 있으면 보이고 open 되도 보이고 */}
            {open && (
                <ChildMenu
                    styleName="sideNav"
                    menuItem={menuItem}
                    onClick={() => handleClickMain(menuItem.url)}
                />
            )}
        </div>
    );
}

export default React.memo(SideNavItem);
