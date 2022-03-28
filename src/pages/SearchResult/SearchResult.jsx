import { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import Repository from '../../components/Repository/Repository';

import './SearchResult.scss';

const SearchResult = () => {
  const { result } = useContext(SearchContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  useEffect(() => {
    setUsers(result);
  }, []);

  const indexOfLastUsers = currentPage * userPerPage;
  const indexOfFirstUsers = indexOfLastUsers - userPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (currentPage < 1 || userPerPage.length === 0) {
    setCurrentPage(1);
    setUserPerPage(10);
  }

  if (currentPage === currentPage + 1) {
    setCurrentPage(currentPage);
  }

  console.log(currentUsers);
  console.log(currentPage);

  //take user back
  const handleBack = () => {
    navigate(-1);
  };

  const userResult =
    currentUsers &&
    currentUsers.map((user) => (
      <div key={user.id} className='search-result'>
        <div className='search-result-info'>
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url} target='_blank' rel='noreferrer'>
            <h3>{user.login}</h3>
          </a>
        </div>
        <div className='search-result-lower-info'>
          <a href={user.repos_url} target='_blank' rel='noreferrer'>
            <p>Repositories</p>
          </a>
          <a href={user.subscriptions_url} target='_blank' rel='noreferrer'>
            <p>Subscribe</p>
          </a>
        </div>
      </div>
    ));
  return (
    <>
      <h1>
        {result.length} Result{result.length > 1 ? 's' : ''} Found
      </h1>
      {userResult}
      <p onClick={handleBack}>Back</p>
      <Pagination
        userPerPage={userPerPage}
        totalUsers={users.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <Repository />
    </>
  );
};

export default SearchResult;
