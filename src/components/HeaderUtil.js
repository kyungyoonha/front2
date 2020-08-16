import React from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authAction_logout } from "../redux/actions";

function HeaderUtil() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // 로그아웃
    const onClickLogout = () => {
        dispatch(authAction_logout());
    };

    return (
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
    );
}

export default React.memo(HeaderUtil);
