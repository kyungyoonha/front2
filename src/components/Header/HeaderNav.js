import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { menuAction_fetchAll } from "../../redux/actions";
import HeaderNavInner from "./HeaderNavInner";

const HeaderNav = () => {
    const dispatch = useDispatch();
    const { menuItems } = useSelector((state) => state.menu); // 전체 메뉴 아이템
    const [menuPath, setMenuPath] = useState(""); // 자식 메뉴 오픈 여부

    useEffect(() => {
        dispatch(menuAction_fetchAll());
    }, [dispatch]);

    // 마우스 진입 시
    const handleMouseEnter = (path) => {
        setMenuPath(path);
    };

    // 마우스 아웃 시
    const handleMouseLeave = () => {
        setMenuPath("");
    };
    // const pageee = "/page1";

    return (
        <div className="headerNav" onMouseLeave={handleMouseLeave}>
            <div className="headerNav__container">
                {menuItems.map((item) => (
                    <div key={item.path} className="headerNav__item">
                        <NavLink
                            to={item.path}
                            activeClassName="active"
                            onMouseEnter={() => handleMouseEnter(item.path)}
                        >
                            {item.name}
                        </NavLink>
                        <div className="headerNav__underbar"></div>
                    </div>
                ))}
                {menuPath && <HeaderNavInner menuPath={menuPath} />}
            </div>
        </div>
    );
};

export default HeaderNav;
