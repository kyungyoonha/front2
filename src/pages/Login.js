import React, { useState } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authAction_login } from "../redux/actions";

// BS
import Form from "react-bootstrap/form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Login() {
    const { user, errors } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        userId: "",
        password: "",
        errors: {},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const userData = {
            userId: inputs.userId,
            password: inputs.password,
        };
        dispatch(authAction_login(userData));
    };
    return (
        <div className="auth">
            <div className="auth__container">
                <div className="auth__header">
                    <h2>로그인</h2>
                </div>
                <div className="auth__body">
                    <Form>
                        <Form.Group>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                type="input"
                                name="userId"
                                placeholder="아이디를 입력해주세요."
                                autoComplete="false"
                                value={inputs.userId}
                                onChange={handleChange}
                                isInvalid={errors.userId ? true : false}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.userId}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력해주세요."
                                autoComplete="false"
                                value={inputs.password}
                                onChange={handleChange}
                                isInvalid={errors.password ? true : false}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <br />
                        <Form.Row>
                            <Col>
                                <Button
                                    variant="primary"
                                    block
                                    onClick={handleSubmit}
                                >
                                    로그인
                                </Button>
                            </Col>
                            <Col>
                                <Link to="/signup">
                                    <Button variant="success" block>
                                        회원가입
                                    </Button>
                                </Link>
                            </Col>
                        </Form.Row>
                        <br />
                    </Form>
                </div>
                <div className="auth__bottom"></div>
            </div>
        </div>
    );
}

export default Login;
