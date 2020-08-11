import React, { useState, useEffect } from "react";
import ModalContainer from "./common/ModalContainer";

import { useSelector, useDispatch } from "react-redux";
import {
    dataAction_fetch,
    dataAction_update,
    dataAction_delete,
} from "../store/actions";

// BS
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Board() {
    const items = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        dispatch(dataAction_fetch());
    }, [dispatch]);

    const handleUpdate = (item) => {
        dispatch(dataAction_update(item));
    };
    const handleDelete = (item) => {
        dispatch(dataAction_delete(item));
    };

    const handleShow = () => {
        setModalShow(true);
    };

    const handleHide = () => {
        setModalShow(false);
    };

    return (
        <div className="board">
            <Table striped hover>
                <thead className="thead">
                    <tr>
                        <th className="thead__title">Title</th>
                        <th className="thead__writer">Writer</th>
                        <th className="thead__date">Date</th>
                        <th className="thead__actions">Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="tbody__title">{item.title}</td>
                            <td className="tbody__write">{item.name}</td>
                            <td className="tbody__date">{item.date}</td>
                            <td className="tbody__actions">
                                <i className="fas fa-pencil-alt"></i>
                                <i
                                    className="far fa-trash-alt"
                                    onClick={() => handleDelete(item)}
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="board__buttom">
                <Button
                    className="board__buttomBtn"
                    variant="dark"
                    onClick={handleShow}
                >
                    글쓰기
                </Button>
            </div>
            <ModalContainer
                show={modalShow}
                onHide={handleHide}
                onUpdate={handleUpdate}
            />
        </div>
    );
}

export default Board;
