import React, { Fragment, useEffect, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { data as menuItems } from "../json/menuItems.json";
import ChildMenu from "./common/ChildMenu";
import { getMenuItemsFromPath } from "../util/functions";
import logo from "../images/logo.png";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
    pathAction_setPath,
    pathAction_setMain,
    authAction_logout,
} from "../redux/actions";

function Header({ history }) {
    const dispatch = useDispatch();
    const { pathMain } = useSelector((state) => state.path);
    const { user } = useSelector((state) => state.auth);

    // 초기 PATH 설정
    // Refresh 후에도 path 유지
    useEffect(() => {
        dispatch(pathAction_setPath(history.location.pathname));
    }, [dispatch, history]); // currentPage

    const menuItemChildren = useMemo(() => getMenuItemsFromPath(pathMain), [
        pathMain,
    ]);

    // 로그아웃
    const onClickLogout = () => {
        dispatch(authAction_logout());
    };

    // 메인 로고 클릭시 홈으로
    const onClickLogo = () => {
        dispatch(pathAction_setPath("/"));
    };

    // 메인 메뉴 클릭시 서브메뉴 활성화
    const onClick = (page) => {
        dispatch(pathAction_setMain(page));
        history.push(page);
    };

    const onClickSetPath = (newPath) => {
        dispatch(pathAction_setPath(newPath));
    };
    // ========================
    console.log(pathMain);
    // ========================

    return (
        <Fragment>
            <div className="util">
                <div className="util__container">
                    {!user.userId ? (
                        <div className="util__items">
                            <Link to="/login">로그인</Link>
                            <Link to="/signup">회원가입</Link>
                        </div>
                    ) : (
                        <div className="util__items">
                            {`${user.userId} 님 반갑습니다.`}
                            <Link to="/" onClick={onClickLogout}>
                                로그아웃
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="header">
                <div className="header__container">
                    <div className="header__log">
                        <Link to="/" onClick={onClickLogo}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* MAIN PAGE NAV */}
                    <div className="header__mainMenu">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.url}
                                to={item.url}
                                activeClassName="active"
                                onClick={() => onClick(item.url)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="header__event">기타기능</div>
                </div>
            </div>
            {/* SUB PAGE NAV */}
            {pathMain && menuItemChildren && (
                <div className="header__childMenuContainer">
                    <ChildMenu
                        styleName="header"
                        menuItem={menuItemChildren}
                        onClick={onClickSetPath}
                    />
                </div>
            )}
        </Fragment>
    );
}

export default Header;
