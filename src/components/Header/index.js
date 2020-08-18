import React from "react";
import HeaderUtil from "./HeaderUtil";
import HeaderNav from "./HeaderNav";

function Header({ history }) {
    return (
        <div>
            <HeaderUtil /> {/* 로그인 / 회원가입 / 유저정보 */}
            <HeaderNav history={history} />
        </div>
    );
}

export default Header;
