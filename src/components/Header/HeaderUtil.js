import React from "react";
import { Link } from "react-router-dom";

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

    return (
        <div className="headerUtil">
            <div className="_container">
                {!user.userId ? (
                    <div className="headerUtil__auth">
                        <Link to="/login">로그인</Link>
                        <Link to="/signup">회원가입</Link>
                    </div>
                ) : (
                    <div className="headerUtil__auth">
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
