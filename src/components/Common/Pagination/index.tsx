import React from "react";

interface PaginationProps {
  onClickPrev: () => void;
  onClickNext: () => void;
  currentPage: number;
  totalPage: number;
}

function Pagination({
  onClickPrev,
  onClickNext,
  currentPage,
  totalPage,
}: PaginationProps) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <div className="page-link" onClick={() => onClickPrev()}>
            Previous
          </div>
        </li>
        {currentPage !== 1 ? (
          <li className="page-item">
            <div className="page-link" onClick={() => onClickPrev()}>
              {currentPage - 1}
            </div>
          </li>
        ) : null}

        <li className="page-item active">
          <div className="page-link">{currentPage}</div>
        </li>
        {currentPage !== totalPage ? (
          <li className="page-item" onClick={() => onClickNext()}>
            <div className="page-link">{currentPage + 1}</div>
          </li>
        ) : null}

        <li className="page-item" onClick={() => onClickNext()}>
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
