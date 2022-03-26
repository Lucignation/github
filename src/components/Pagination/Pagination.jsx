import { useState } from 'react';

import './Pagination.scss';

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {/* {getPaginatedData().map((index, item) => (
        <RenderComponent key={index} data={item} />
      ))} */}
      <div>
        <button onClick={goToPreviousPage}>Prev</button>
        {getPaginationGroup().map((index, item) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))}
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
