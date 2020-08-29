import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideNavInner from "./SideNavInner";
import HeaderModal from "../Header/HeaderModal";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
    menuAction_updateSecond,
    menuAction_updateThird,
} from "../../redux/actions";

const SideNav = () => {
    const dispatch = useDispatch();
    const { menuItems } = useSelector((state) => state.menu); // 전체 메뉴 아이템
    const [menuPath, setMenuPath] = useState(""); // 자식 메뉴 오픈 여부
    const [isOpen, setOpen] = useState(false); // 입력창 오픈 여부
    const [parentPath, setParentPath] = useState(""); // 3차 메뉴 추가시 설정
    const [isToggle, setToggle] = useState(false); // 메뉴 팝업

    // 마우스 진입 시
    const handleMouseEnter = (path) => {
        setMenuPath(path);
    };

    // 마우스 아웃 시
    const handleMouseLeave = () => {
        if (!isOpen) {
            setMenuPath("");
        }
    };

    // 메뉴 추가 입력창 열기
    const handleOpen = (newPath) => {
        setOpen(true);
        // 3차 메뉴 수정인경우 parentPath 값 지정
        newPath && setParentPath(newPath);
    };

    // 메뉴 추가 입력창 닫기
    const handleClose = () => {
        setOpen(false);
    };

    // 메뉴 추가 버튼
    const handleSubmit = (inputs) => {
        // 2차 메뉴 추가
        if (!parentPath) {
            dispatch(
                menuAction_updateSecond(inputs.path, {
                    ...inputs,
                    path: menuPath + inputs.path, // path => /page3/newpath
                    children: [],
                })
            );
        }
        // 3차 메뉴 추가
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

    const handleOpenToggle = () => {
        setToggle(!isToggle);
    };

    if (!menuItems) {
        return;
    }

    return (
        <div className="sideNav" onMouseLeave={handleMouseLeave}>
            <div className="container">
                <i
                    className={`fas fa-${isToggle ? "times on" : "bars"} `}
                    onClick={handleOpenToggle}
                ></i>
                <div className={`sideNav__items ${isToggle && "on"}`}>
                    {menuItems.map((item) => (
                        <div className="sideNav__item" key={item.path}>
                            <NavLink
                                to={item.path}
                                activeClassName="active"
                                onMouseEnter={() => handleMouseEnter(item.path)}
                            >
                                <i className={`fas ${item.icon}`}></i>
                                {item.name}
                                {item.children && (
                                    <i
                                        className={`fas fa-angle-${
                                            menuPath === item.path
                                                ? "down"
                                                : "right"
                                        } right`}
                                    ></i>
                                )}
                            </NavLink>
                            {menuPath === item.path && (
                                <SideNavInner
                                    menuPath={menuPath}
                                    handleOpen={handleOpen}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* 모달 */}
            <HeaderModal
                isOpen={isOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default SideNav;
