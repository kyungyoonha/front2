import React, { useState, useEffect } from "react";
import BoardWrite from "./BoardWrite";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    dataAction_fetch,
    dataAction_update,
    dataAction_delete,
} from "../store/actions";

// BS
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

dayjs.extend(relativeTime);

function Board() {
    const items = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);
    const [editItem, setEditItem] = useState("");

    useEffect(() => {
        dispatch(dataAction_fetch());
    }, [dispatch]);

    const handleUpdate = (item) => {
        dispatch(dataAction_update(item));
        setEditItem("");
        setModalShow(false);
    };
    const handleDelete = (item) => {
        dispatch(dataAction_delete(item));
        setEditItem(""); //
    };

    const handleShow = (item) => {
        if (item) {
            setEditItem(item);
        }
        setModalShow(true);
    };

    const handleHide = () => {
        setModalShow(false);
        setEditItem(""); //
    };

    return (
        <div className="board">
            <div className="board__title">
                <h2>게시판</h2>
            </div>

            <Table striped hover>
                <thead className="thead">
                    <tr>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {items.map((item) => (
                        <tr key={item.id} onClick={() => handleShow(item)}>
                            <td>{item.title}</td>
                            <td>{item.name}</td>
                            <td>{dayjs(item.date).fromNow()}</td>
                            <td
                                className="board__delete"
                                onClick={(e) => e.stopPropagation()}
                            >
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
                    onClick={() => handleShow()}
                >
                    글쓰기
                </Button>
            </div>
            <BoardWrite
                show={modalShow}
                onHide={handleHide}
                editItem={editItem}
                handleUpdate={handleUpdate}
            />
        </div>
    );
}

export default Board;
