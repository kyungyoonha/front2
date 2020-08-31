import React, { useState, useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
    boardAction_fetch_detail,
    boardAction_update,
} from "../../redux/actions";

// BS
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import PageTemplate from "../common/PageTemplate";

const INITIAL_INPUTS = {
    userId: "",
    title: "",
    content: "",
};

function BoardModal({ match }) {
    // { isEdit, item, handleUpdate }
    const id = match.params.id;

    // redux
    const dispatch = useDispatch();
    const { boardDetail } = useSelector((state) => state.board);
    const { user } = useSelector((state) => state.auth);

    // hook
    const [inputs, setInputs] = useState(INITIAL_INPUTS);
    const [isDisabled, setDisable] = useState(false);

    useEffect(() => {
        if (id !== "new") {
            dispatch(boardAction_fetch_detail(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (boardDetail) {
            setInputs(boardDetail);
        }

        if (id !== "new" && user) {
            if (user.userId === id) {
                setDisable(true);
            }
        }
    }, [boardDetail, user, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    // Update Data
    const handleUpdate = () => {
        // 유저 ID 정보 추가
        const item = {
            ...inputs,
            userId: user.userId,
        };

        dispatch(boardAction_update(item));
        setInputs(INITIAL_INPUTS);
        history.goBack();
    };

    const handleClose = () => {
        history.goBack();
    };

    if (!user) {
        history.push("/login");
    }

    return (
        <PageTemplate>
            <Modal
                show={true}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {boardDetail ? "게시글" : "글 작성"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="input"
                                name="title"
                                value={inputs.title}
                                placeholder="글 제목"
                                onChange={handleChange}
                                disabled={isDisabled}
                            />
                        </Form.Group>
                        {/* 에디터 모드 아닐때 작성자 보임 */}
                        {!user && (
                            <Form.Group>
                                <Form.Label>작성자명</Form.Label>
                                <Form.Control
                                    type="input"
                                    value={inputs.userId}
                                    placeholder="작성자"
                                    disabled={isDisabled}
                                />
                            </Form.Group>
                        )}

                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                name="content"
                                value={inputs.content}
                                onChange={handleChange}
                                disabled={isDisabled}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>

                    <Button onClick={handleUpdate}>
                        {boardDetail ? "수정하기" : "추가하기"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </PageTemplate>
    );
}

export default BoardModal;
