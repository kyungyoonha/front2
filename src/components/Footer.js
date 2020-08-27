import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__left">
                    <h1>리액트</h1>
                    <ul>
                        <li>
                            <Link to="/">서비스 이용약관</Link>
                        </li>
                        <li>
                            <Link to="/">개인정보처리방침</Link>
                        </li>
                        <li>
                            <Link to="/">운영/관리방침</Link>
                        </li>
                        <li>
                            <Link to="/">고객서비스센터</Link>
                        </li>
                        <li>
                            <Link to="/">기업소개2</Link>
                        </li>
                    </ul>

                    <p>(주)Ryoon 서울시 강남구 역삼동 대표이사 하경윤</p>
                    <p>사업자 등록번호 000-00-00000 </p>
                    <p>통신판매신고번호 2000-서울-0000</p>
                    <p>제품 문의 : 080-000-0000 FAX 00-0000-0000</p>
                    <p>이메일 주소 gkb10a@naver.com</p>
                    <p>비즈니스제휴/입점문의 gkb10a@naver.com</p>
                    <p>호스팅 서비스 제공자 ㈜Ryoon</p>

                    <p>Copyright © 2016 Ryoon. All Rights Reserved.</p>
                </div>
                <div className="footer__right">
                    <div className="footer__rightIcons">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="footer__rightContent">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Soluta dolore nobis quibusdam repellat assumenda,
                        laborum molestiae, omnis est ipsam unde, officia porro
                        aspernatur amet nihil accusantium explicabo aliquid
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
