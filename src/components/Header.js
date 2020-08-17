import React, { Fragment, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ChildMenu from "./common/ChildMenu";
import { getMenuItemsFromPath } from "../util/functions";
import logo from "../images/logo.png";
import HeaderUtil from "./HeaderUtil";
// redux
import { useSelector, useDispatch } from "react-redux";
import { pathAction_setPath, pathAction_setMain } from "../redux/actions";
import HeaderNav from "./HeaderNav";

function Header({ history }) {
    const dispatch = useDispatch();
    const { pathMain } = useSelector((state) => state.path);

    // 초기 PATH 설정
    // Refresh 후에도 path 유지
    useEffect(() => {
        dispatch(pathAction_setPath(history.location.pathname));
    }, [dispatch, history]); // currentPage

    const menuItemChildren = useMemo(() => getMenuItemsFromPath(pathMain), [
        pathMain,
    ]);

    // 메인 로고 클릭시 홈으로
    const handleClickLogo = () => {
        dispatch(pathAction_setPath("/"));
    };

    // 메인 메뉴 클릭시 서브메뉴 활성화
    const handleClickMain = (page) => {
        dispatch(pathAction_setMain(page));
        history.push(page);
    };

    const onClickSetPath = (newPath) => {
        dispatch(pathAction_setPath(newPath));
    };
    // ========================

    // ========================

    return (
        <Fragment>
            <HeaderUtil />
            <div className="header">
                <div className="headerLogo">
                    <Link to="/" onClick={handleClickLogo}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <HeaderNav
                    handleClickLogo={handleClickLogo}
                    handleClickMain={handleClickMain}
                />
                <div className="headerEvent">기타기능</div>
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
