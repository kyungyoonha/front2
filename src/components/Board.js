import React, { useState, useEffect, Fragment } from "react";
import BoardDetail from "./BoardDetail";
import BoardSearch from "./BoardSearch";
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

dayjs.extend(relativeTime);

function Board() {
    const fetchitems = useSelector((state) => state.board);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // Board Search
    const [keyword, setKeyword] = useState("");

    // Board Detail
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    // paginate
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalPage = Math.ceil(fetchitems.length / pageSize);

    // genertate items
    // 현재 페이지랑 페이지 사이즈에 맞게 데이터 자름
    const items = paginate(fetchitems, currentPage, pageSize, keyword);

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

    // Show Detail
    const handleShow = (item) => {
        setSelectedItem(item);
        setIsEdit(false);
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
        setCurrentPage(page);
    };

    // Seach
    const handleSearch = (keyword) => {
        setKeyword(keyword);
    };

    return (
        <div className="board">
            <div className="board__title">
                <h2>게시판</h2>
            </div>

            <BoardSearch handleSearch={handleSearch} />
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
            <BoardDetail
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
