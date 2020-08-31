import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { boardAction_fetch } from "../../redux/actions";

function Pagination({ totalPage, currentPage, handleCurrentPage }) {
    const pageNumbers = [...new Array(totalPage).keys()];

    const onClick = (page) => {
        if (page === "before" && currentPage > 1) {
            handleCurrentPage(currentPage - 1);
        } else if (page === "next" && currentPage < totalPage)
            handleCurrentPage(currentPage + 1);
        else if (page !== "before" && page !== "next") {
            handleCurrentPage(page);
        }
    };

    return (
        <div className="pagination">
            <div className="pagination__item" onClick={() => onClick(1)}>
                <i className={"fas fa-angle-double-left"}></i>
            </div>
            <div className="pagination__item" onClick={() => onClick("before")}>
                <i className="fas fa-angle-left"></i>
            </div>
            {pageNumbers.map((_, i) => (
                <div
                    key={i}
                    className={`pagination__item ${
                        i + 1 === currentPage && "active"
                    }`}
                    onClick={() => onClick(i + 1)}
                >
                    {i + 1}
                </div>
            ))}
            <div className="pagination__item" onClick={() => onClick("next")}>
                <i className="fas fa-angle-right"></i>
            </div>
            <div
                className="pagination__item"
                onClick={() => onClick(totalPage)}
            >
                <i className="fas fa-angle-double-right"></i>
            </div>
        </div>
    );
}

export default React.memo(Pagination);
