import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeOptions, makeOptionsDay } from "../util/functions";

// BS
import Form from "react-bootstrap/form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { authAction_signup, authAction_checkId } from "../redux/actions";

function SignUp() {
    const { isCheckId, errors } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        gender: "woman",
        year: 2019,
        month: 1,
        day: "",
        checkbox: {},
        content: "",
        errors: {},
    });

    useEffect(() => {
        setInputs((state) => ({
            ...state,
            errors,
        }));
    }, [errors]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setInputs((state) => ({
                ...state,
                checkbox: {
                    ...state.checkbox,
                    [name]: checked,
                },
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }
    };

    const handleSubmit = () => {
        if (!isCheckId) {
            alert("아이디 중복확인을 해주세요.");
        } else {
            const userData = {
                id: inputs.id,
                password: inputs.password,
                passwordConfirm: inputs.passwordConfirm,
                gender: inputs.gender,
                birth: inputs.year + "/" + inputs.month + "/" + inputs.day,
                checkbox: inputs.checkbox,
                content: inputs.content,
            };
            dispatch(authAction_signup(userData));
        }
    };

    const handleClickValidateId = (e) => {
        e.preventDefault();
        dispatch(authAction_checkId(inputs.id));
    };

    return (
        <div className="auth">
            <div className="auth__container">
                <div className="auth__header">
                    <h2>회원 가입</h2>
                </div>
                <div className="auth__body">
                    <Form>
                        <Form.Group>
                            <Form.Label>아이디</Form.Label>
                            <Form.Row>
                                <Col xs={9}>
                                    <Form.Control
                                        type="input"
                                        name="id"
                                        placeholder="아이디를 입력해주세요."
                                        autoComplete="false"
                                        value={inputs.id}
                                        onChange={handleChange}
                                        isInvalid={errors.id ? true : false}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.id}
                                    </Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Button
                                        variant={
                                            isCheckId ? "secondary" : "success"
                                        }
                                        block
                                        onClick={handleClickValidateId}
                                    >
                                        {isCheckId ? "다시 체크" : "중복 확인"}
                                    </Button>
                                </Col>
                            </Form.Row>
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

                        <Form.Group>
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control
                                type="password"
                                name="passwordConfirm"
                                placeholder="비밀번호 확인"
                                autoComplete="false"
                                value={inputs.passwordConfirm}
                                onChange={handleChange}
                                isInvalid={
                                    errors.passwordConfirm ? true : false
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirm}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>성별</Form.Label>
                            <div key="custom-inline-radio" className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    label="여자"
                                    name="gender"
                                    type="radio"
                                    checked={inputs.gender === "woman"}
                                    id="custom-inline-radio-1"
                                    value="woman"
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    name="gender"
                                    label="남자"
                                    type="radio"
                                    id="custom-inline-radio-2"
                                    checked={inputs.gender === "man"}
                                    value="man"
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>생년월일</Form.Label>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        custom
                                        name="year"
                                        value={inputs.year}
                                        onChange={handleChange}
                                    >
                                        {makeOptions("year")}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        custom
                                        name="month"
                                        value={inputs.month}
                                        onChange={handleChange}
                                    >
                                        {makeOptions("month")}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        custom
                                        name="day"
                                        value={inputs.day}
                                        onChange={handleChange}
                                    >
                                        {makeOptionsDay(
                                            inputs.year,
                                            inputs.month
                                        )}
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>취미</Form.Label>
                            <div key="custom-inline-checkbox" className="mb-3">
                                <Form.Row>
                                    <Form.Check
                                        custom
                                        inline
                                        label="연애"
                                        type="checkbox"
                                        id="custom-inline-checkbox-1"
                                        name="love"
                                        checked={inputs.checkbox.love || false}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        label="게임"
                                        type="checkbox"
                                        id="custom-inline-checkbox-2"
                                        name="game"
                                        checked={inputs.checkbox.game || false}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        label="영화보기"
                                        type="checkbox"
                                        id="custom-inline-checkbox-3"
                                        name="movie"
                                        checked={inputs.checkbox.movie || false}
                                        onChange={handleChange}
                                    />
                                </Form.Row>
                                {errors.checkbox && (
                                    <div className="errorBox">
                                        {errors.checkbox}
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>자기소개</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                name="content"
                                value={inputs.content}
                                onChange={handleChange}
                                isInvalid={errors.content ? true : false}
                            />
                            <div className="auth__contentCount">
                                <span>{`${inputs.content.length} / 300`}</span>
                            </div>
                            <Form.Control.Feedback type="invalid">
                                {errors.content}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Row>
                            <Col>
                                <Link to="/login">
                                    <Button variant="secondary" block>
                                        취소
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button
                                    variant="primary"
                                    block
                                    onClick={handleSubmit}
                                >
                                    회원가입
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <div className="auth__bottom"></div>
            </div>
        </div>
    );
}

export default SignUp;
