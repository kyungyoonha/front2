import React, { useState, useEffect } from "react";
import BoardWrite from "./BoardWrite";
import Pagination from "./common/Pagination";
import paginate from "../util/paginate";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    dataAction_fetch,
    dataAction_update,
    dataAction_delete,
} from "../redux/actions";

// BS
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

dayjs.extend(relativeTime);

function Board() {
    const fetchitems = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // Board Detail
    const [modalShow, setModalShow] = useState(false);
    const [editItem, setEditItem] = useState("");

    // paginate
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
    const totalPage = Math.ceil(fetchitems.length / pageSize);

    const items = paginate(fetchitems, currentPage, pageSize);
    console.log(items);

    // Fetch Items
    useEffect(() => {
        dispatch(dataAction_fetch());
    }, [dispatch]);

    // Update Data
    const handleUpdate = (item) => {
        dispatch(dataAction_update(item));
        setEditItem("");
        setModalShow(false);
    };

    // Delete Data
    const handleDelete = (item) => {
        dispatch(dataAction_delete(item));
        setEditItem(""); //
    };

    // Show Detail
    const handleShow = (item) => {
        if (item) {
            setEditItem(item);
        }
        setModalShow(true);
    };

    // Hide Detail
    const handleHide = () => {
        setModalShow(false);
        setEditItem(""); //
    };

    // Change Current Page
    const handlePageChange = (page) => {
        if (page === "before" && currentPage > 1) {
            setCurrentPage((state) => state - 1);
        } else if (page === "next" && currentPage < totalPage)
            setCurrentPage((state) => state + 1);
        else {
            setCurrentPage(page);
        }
    };

    // ==========================
    console.log(currentPage);
    // ==========================
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
            <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                handlePageChange={handlePageChange}
            />
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
