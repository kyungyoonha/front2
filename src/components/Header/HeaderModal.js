import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { menuAction_validateInput } from "../../redux/actions";

// BS
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HeaderModal({ isOpen, handleClose, handleSubmit }) {
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.menu);
    const [inputs, setInputs] = useState({ path: "", name: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const onSubmit = () => {
        dispatch(menuAction_validateInput(inputs));
        if (Object.keys(errors).length === 0) {
            handleSubmit(inputs);
        }
        setInputs({ path: "", name: "" });
    };

    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    추가하기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Path</Form.Label>
                        <Form.Control
                            type="input"
                            name="path"
                            value={inputs.path}
                            placeholder="/new"
                            onChange={handleChange}
                            isInvalid={errors.path ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.path}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="input"
                            name="name"
                            value={inputs.name}
                            placeholder="메뉴에 표시될 이름을 적어주세요."
                            onChange={handleChange}
                            isInvalid={errors.name ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
                <Button onClick={onSubmit}>저장하기</Button>)
            </Modal.Footer>
        </Modal>
    );
}

export default React.memo(HeaderModal);
