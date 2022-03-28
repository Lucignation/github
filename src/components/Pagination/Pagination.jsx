import { useState } from 'react';

import './Pagination.scss';

const Pagination = ({
  currentPage,
  setCurrentPage,
  userPerPage,
  totalUsers,
  paginate,
}) => {
  //   const [pages] = useState(Math.round(data.length / dataLimit));
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const goToNextPage = () => {
  //     setCurrentPage((page) => page + 1);
  //   };

  //   const goToPreviousPage = () => {
  //     setCurrentPage((page) => page - 1);
  //   };

  //   const changePage = (e) => {
  //     const pageNumber = Number(e.target.textContent);
  //     setCurrentPage(pageNumber);
  //   };

  //   getPaginatedData = () => {
  //     const startIndex = currentPage * dataLimit - dataLimit;
  //     const endIndex = startIndex + dataLimit;
  //     return data.slice(startIndex, endIndex);
  //   };

  //   const getPaginationGroup = () => {
  //     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  //     return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  //   };

  //   return (
  //     <div>
  //       {/* {getPaginatedData().map((index, item) => (
  //         <RenderComponent key={index} data={item} />
  //       ))} */}
  //       <div>
  //         <button onClick={goToPreviousPage}>Prev</button>
  //         {getPaginationGroup().map((index, item) => (
  //           <button key={index} onClick={changePage}>
  //             <span>{item}</span>
  //           </button>
  //         ))}
  //         <button onClick={goToNextPage}>Next</button>
  //       </div>
  //     </div>
  //   );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrev = () => {
    if (currentPage < 1) {
      setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const pageIncrement = null;
  const pageDecrement = null;

  if (totalUsers.length > maxPageNumberLimit) {
    return (pageIncrement = <li onClick={handleNext}>&hellip; ...</li>);
  }

  if (totalUsers.length > maxPageNumberLimit) {
    return (pageDecrement = <li onClick={handlePrev}>&hellip;</li>);
  }

  return (
    <nav ariaLabel='container'>
      <ul className='pagination pageNumber'>
        <li className='page-item'>
          <button
            onClick={handlePrev}
            className='page-link'
            disabled={currentPage === totalUsers ? true : false}
          >
            Prev
          </button>
        </li>
        {pageIncrement}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                className={
                  currentPage === number ? 'page-item active' : 'page-item'
                }
              >
                <p onClick={() => paginate(number)} className='page-link'>
                  {number}
                </p>
              </li>
            );
          } else {
            return null;
          }
        })}
        {pageDecrement}
        <li className='page-item'>
          <button onClick={handleNext} className='page-link'>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
