import React, { useState, useEffect, Fragment } from "react";
import BoardWrite from "./BoardWrite";
import Pagination from "./common/Pagination";
import paginate from "../util/paginate";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import history from "../history";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_fetch,
    boardAction_update,
    boardAction_delete,
} from "../redux/actions";

// BS
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

dayjs.extend(relativeTime);

function Board() {
    const fetchitems = useSelector((state) => state.board);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // Board Detail
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    // search
    const [input, setInput] = useState("");

    // paginate
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalPage = Math.ceil(fetchitems.length / pageSize);

    // items
    const items = paginate(fetchitems, currentPage, pageSize);

    // Fetch Items
    useEffect(() => {
        dispatch(boardAction_fetch());
    }, [dispatch]);

    // Update Data
    const handleUpdate = (item) => {
        // 유저 ID 정보 추가
        item.userId = user.userId;

        dispatch(boardAction_update(item));
        setSelectedItem("");
        setModalShow(false);
    };

    // Delete Data
    const handleDelete = (item) => {
        dispatch(boardAction_delete(item));
        setSelectedItem("");
    };

    // Show Detail
    const handleShow = (item) => {
        setSelectedItem(item);
        setIsEdit(false);
        setModalShow(true);
    };

    // Edit Detail
    const handleEdit = (item) => {
        // 유저 정보 없을 시, 로그인 화면 이동
        if (!user.userId) {
            history.push("/login");
        }

        setSelectedItem(item);
        setIsEdit(true);
        setModalShow(true);
    };

    // Hide Detail
    const handleHide = () => {
        setModalShow(false);
        setSelectedItem("");
        setIsEdit(false);
    };

    // Change Current Page
    const handlePageChange = (page) => {
        console.log(page);
        if (page === "before" && currentPage > 1) {
            setCurrentPage((state) => state - 1);
        } else if (page === "next" && currentPage < totalPage)
            setCurrentPage((state) => state + 1);
        else if (page !== "before" && page !== "next") {
            setCurrentPage(page);
        }
    };

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="board">
            <div className="board__title">
                <h2>게시판</h2>
            </div>

            {/* <Form.Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="input"
                            name="title"
                            value={input.title}
                            placeholder="검색"
                            onChange={onChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button>검색하기</Button>
                </Col>
            </Form.Row> */}
            <Table striped hover>
                <thead className="thead">
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성날짜</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {items.map((item) => (
                        <tr key={item.id} onClick={() => handleShow(item)}>
                            <td>{item.title}</td>
                            <td>{item.userId}</td>
                            <td>{dayjs(item.date).fromNow()}</td>
                            <td
                                className="board__actions"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {item.userId === user.userId && (
                                    <Fragment>
                                        <i
                                            className="fas fa-edit"
                                            onClick={() => handleEdit(item)}
                                        ></i>
                                        <i
                                            className="far fa-trash-alt"
                                            onClick={() => handleDelete(item)}
                                        ></i>
                                    </Fragment>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="board__buttom">
                <Button
                    className="board__buttomBtn"
                    variant="dark"
                    onClick={() => handleEdit()}
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
                isEdit={isEdit}
                onHide={handleHide}
                item={selectedItem}
                handleUpdate={handleUpdate}
            />
        </div>
    );
}

export default Board;
