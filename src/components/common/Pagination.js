import React from "react";

function Pagination({ currentPage, totalPage, handlePageChange }) {
    const pageNumbers = [...new Array(totalPage).keys()];
    return (
        <div className="pagination">
            <div
                className="pagination__item"
                onClick={() => handlePageChange(1)}
            >
                <i className="fas fa-angle-double-left"></i>
            </div>
            <div
                className="pagination__item"
                onClick={() => handlePageChange("before")}
            >
                <i className="fas fa-angle-left"></i>
            </div>
            {pageNumbers.map((_, i) => (
                <div
                    key={i}
                    className={`pagination__item ${
                        i + 1 === currentPage && "active"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </div>
            ))}
            <div
                className="pagination__item"
                onClick={() => handlePageChange("next")}
            >
                <i className="fas fa-angle-right"></i>
            </div>
            <div
                className="pagination__item"
                onClick={() => handlePageChange(totalPage)}
            >
                <i className="fas fa-angle-double-right"></i>
            </div>
        </div>
    );
}

export default Pagination;
