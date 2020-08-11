import React, { useState, useEffect } from "react";

// BS
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";

const INITIAL_INPUTS = {
    id: "",
    title: "",
    name: "",
    content: "",
};

function BoardWrite({ show, onHide, editItem, handleUpdate }) {
    const [inputs, setInputs] = useState(INITIAL_INPUTS);

    useEffect(() => {
        if (editItem) {
            setInputs(editItem);
        } else {
            setInputs(INITIAL_INPUTS);
        }
    }, [editItem]);

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
                    {editItem ? "게시글" : "글 작성"}
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
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="input"
                            name="name"
                            value={inputs.name}
                            placeholder="작성자명"
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            name="content"
                            value={inputs.content}
                            onChange={onChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    닫기
                </Button>
                <Button onClick={onClick}>
                    {editItem ? "수정하기" : "추가하기"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BoardWrite;
