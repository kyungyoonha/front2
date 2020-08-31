import React, { useState, useEffect, Fragment } from "react";
import BoardSearch from "./BoardSearch";
import Pagination from "../common/Pagination";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import history from "../../history";

// redux
import { useSelector, useDispatch } from "react-redux";
import { boardAction_fetch, boardAction_delete } from "../../redux/actions";

// BS
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

dayjs.extend(relativeTime);

function Board() {
    const dispatch = useDispatch();
    const { boardItems, totalPage } = useSelector((state) => state.board);
    const { user } = useSelector((state) => state.auth);
    const [options, setOptions] = useState({
        currentPage: 1,
        find: "",
    });

    // Fetch Items
    useEffect(() => {
        dispatch(boardAction_fetch(options));
    }, [dispatch, options]);
    // Delete Data
    const handleDelete = (item) => {
        dispatch(boardAction_delete(item));
    };

    const handleOpenModal = (id) => {
        if (!user.userId) {
            history.push("/login");
        } else {
            history.push("/board/" + id);
        }
    };

    const handleCurrentPage = (newPage) => {
        setOptions({
            ...options,
            currentPage: newPage,
        });
    };

    // Seach
    const handleSearch = (keyword) => {
        setOptions({
            ...options,
            find: keyword,
        });
    };

    return (
        <div className="board">
            <div className="board__title">
                <h2>게시판</h2>
            </div>

            <BoardSearch handleSearch={handleSearch} />
            <Table striped bordered hover>
                <thead className="thead">
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성날짜</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {boardItems.map((item) => (
                        <tr
                            key={item.id}
                            onClick={() => handleOpenModal(item._id)}
                        >
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
                                            onClick={() =>
                                                handleOpenModal(item._id)
                                            }
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
                    onClick={() => handleOpenModal("new")}
                >
                    글쓰기
                </Button>
            </div>
            <Pagination
                totalPage={totalPage}
                currentPage={options.currentPage}
                handleCurrentPage={handleCurrentPage}
            />
        </div>
    );
}

export default Board;
