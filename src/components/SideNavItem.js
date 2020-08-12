import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ChildMenu from "./common/ChildMenu";

// redux
import { useSelector, useDispatch } from "react-redux";
import { pathAction_setPath, pathAction_setMain } from "../redux/actions";

function SideNavItem({ menuItem }) {
    const { pathMain } = useSelector((state) => state.path);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        menuItem.url === pathMain ? setOpen(true) : setOpen(false);
    }, [menuItem, pathMain]);

    // open 마우스 들어올 때
    const onMouseEnter = useCallback(() => {
        setOpen(true);
    }, []);

    // close 마우스 나갈 때
    // 고정되어 있지 않으면 open=false
    const onMouseLeave = useCallback(() => {
        if (menuItem.url !== pathMain) {
            setOpen(false);
        }
    }, [menuItem, pathMain]);

    // 메인 페이지 클릭시
    const onClickSetMain = useCallback(
        (path) => {
            setOpen(true);
            dispatch(pathAction_setMain(path));
        },
        [dispatch]
    );

    const onClickSetPath = (newPath) => {
        dispatch(pathAction_setPath(newPath));
    };

    return (
        <div
            key={menuItem.url}
            onMouseLeave={onMouseLeave}
            className="sideNav__box"
            onClick={() => onClickSetMain(menuItem.url)}
        >
            <NavLink
                key={menuItem.url}
                to={menuItem.url}
                activeClassName="active"
                onMouseEnter={onMouseEnter}
            >
                <div className="sideNav__mainIcon">
                    <i className={`fas ${menuItem.icon}`}></i>
                </div>
                {menuItem.name}
            </NavLink>

            {/* fix 있으면 보이고 open 되도 보이고 */}
            {open && (
                <ChildMenu
                    styleName="sideNav"
                    menuItem={menuItem}
                    onClick={onClickSetPath}
                />
            )}
        </div>
    );
}

export default React.memo(SideNavItem);
