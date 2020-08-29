import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import HeaderNavInner from "./HeaderNavDepth1";
import HeaderModal from "./HeaderModal";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
    menuAction_updateSecond,
    menuAction_updateThird,
} from "../../redux/actions";

const HeaderNav = ({ history }) => {
    const dispatch = useDispatch();
    const { menuItemsAll } = useSelector((state) => state.menu); // 전체 메뉴 아이템
    const [menuPath, setMenuPath] = useState(""); // 자식 메뉴 오픈 여부

    const [isOpen, setOpen] = useState(false); // 입력창 오픈 여부

    const [parentPath, setParentPath] = useState(""); // 3차 메뉴 추가시 설정

    //=======================================================================

    const query = new URLSearchParams(history.location.search);
    const value = query.get("value");

    //=======================================================================

    // Open Menu
    const handleMouseEnter = (path) => {
        setMenuPath(path);
    };

    // Close Menu
    const handleMouseLeave = () => {
        if (!isOpen) {
            setMenuPath("");
        }
    };

    // Open Modal
    const handleOpenModal = (newPath) => {
        setOpen(true);
        // 3차 메뉴 수정인경우 parentPath 값 지정
        newPath && setParentPath(newPath);
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpen(false);
    };

    // Insert Menu Item
    const handleSubmit = (inputs) => {
        // Insert 2th depth Menu Item
        if (!parentPath) {
            dispatch(
                menuAction_updateSecond(inputs.path, {
                    ...inputs,
                    path: menuPath + inputs.path, // path => /page3/newpath
                    children: [],
                })
            );
        }
        // Insert 3th depth Menu Item
        else {
            dispatch(
                menuAction_updateThird(inputs.path, {
                    ...inputs,
                    path: parentPath + inputs.path, // path => /page3/product3/newpath
                    children: [],
                })
            );
        }
        setOpen(false);
        setParentPath("");
    };

    return (
        <div className="headerNav" onMouseLeave={handleMouseLeave}>
            <div className="_container">
                <NavLink to="/">
                    <img src={logo} alt="logo" /> 리액트
                </NavLink>

                <div>
                    <div className="headerNav__items">
                        {menuItemsAll.map((item) => (
                            <Fragment key={item.path}>
                                <NavLink
                                    to={item.path}
                                    activeClassName="active"
                                    onMouseEnter={() =>
                                        handleMouseEnter(item.path)
                                    }
                                >
                                    {item.name}
                                </NavLink>
                                {item.path === menuPath && item.children && (
                                    <HeaderNavInner
                                        menuItem={item}
                                        handleOpen={handleOpenModal}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {/* 모달 */}
            <HeaderModal
                isOpen={isOpen}
                handleClose={handleCloseModal}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default HeaderNav;

/*

return (
        <div className="headerNav" onMouseLeave={handleMouseLeave}>
            <div className="_container">
                <NavLink to="/">
                    <img src={logo} alt="logo" /> 리액트
                </NavLink>

                <div>
                    <div className="headerNav__items">
                        {menuItemsAll.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                activeClassName="active"
                                onMouseEnter={() => handleMouseEnter(item.path)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <HeaderNavInner
                        menuPath={menuPath}
                        handleOpen={handleOpenInner}
                    />
                </div>
            </div>
            
            <HeaderModal
                isOpen={isOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    );
*/
