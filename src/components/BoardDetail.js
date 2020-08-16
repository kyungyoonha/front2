import React, { useState, useEffect } from "react";

// BS
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";

const INITIAL_INPUTS = {
    userId: "",
    title: "",
    content: "",
};

function BoardDetail({ show, onHide, isEdit, item, handleUpdate }) {
    const [inputs, setInputs] = useState(INITIAL_INPUTS);

    useEffect(() => {
        if (item) {
            setInputs(item);
        } else {
            setInputs(INITIAL_INPUTS);
        }
    }, [item]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const onClick = () => {
        handleUpdate(inputs);
        setInputs(INITIAL_INPUTS);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {item ? "게시글" : "글 작성"}
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
                            onChange={onChange}
                            disabled={!isEdit}
                        />
                    </Form.Group>
                    {/* 에디터 모드 아닐때 작성자 보임 */}
                    {!isEdit && (
                        <Form.Group>
                            <Form.Label>작성자명</Form.Label>
                            <Form.Control
                                type="input"
                                value={inputs.userId}
                                placeholder="작성자"
                                disabled={true}
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
                            onChange={onChange}
                            disabled={!isEdit}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    닫기
                </Button>

                {isEdit && (
                    <Button onClick={onClick}>
                        {item ? "수정하기" : "추가하기"}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default BoardDetail;
