import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import history from "../../history";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authAction_logout } from "../../redux/actions";

function HeaderUtil() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // 로그아웃
    const onClickLogout = () => {
        dispatch(authAction_logout());
    };

    // 메인 로고 클릭시 홈으로
    const handleClickLogo = () => {
        history.push("/");
    };

    return (
        <div className="headerUtil">
            <div className="headerUtil__container">
                {/* 왼쪽: 로고부분 */}
                <div className="headerUtil__left">
                    <Link to="/" onClick={handleClickLogo}>
                        <img src={logo} alt="logo" /> <span>블로그</span>
                    </Link>
                </div>

                {!user.userId ? (
                    <div className="headerUtil__right">
                        <Link to="/login">로그인</Link>
                        <Link to="/signup">회원가입</Link>
                    </div>
                ) : (
                    <div className="headerUtil__right">
                        {`${user.userId} 님 반갑습니다.`}
                        <Link to="/" onClick={onClickLogout}>
                            로그아웃
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default React.memo(HeaderUtil);
