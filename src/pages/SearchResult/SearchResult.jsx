import { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import Repository from '../../components/Repository/Repository';

import './SearchResult.scss';

const SearchResult = () => {
  const { result } = useContext(SearchContext);
  const navigate = useNavigate();

  //take user back
  const handleBack = () => {
    navigate(-1);
  };
  console.log(result);
  const userResult =
    result &&
    result.map((user) => (
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
      <Pagination data={result} pageLimit={5} dataLimit={10} />

      <Repository />
    </>
  );
};

export default SearchResult;
