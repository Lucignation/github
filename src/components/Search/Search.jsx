import { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';

import { SearchContext } from '../../Context/SearchContext';

import { BiSearchAlt2 } from 'react-icons/bi';
import './Search.scss';

const Search = () => {
  const [user, setUser] = useState([]);
  const [vallue, setVallue] = useState('');
  const { search, setSearch, owners, repos, ownersState, setOwnersState } =
    useContext(SearchContext);
  // const [search, setSearch] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    const data = await res.data.items;
    setUser(data);
  };

  console.log('From the search comp ', search);
  console.log('From the search comp for owners ', owners);

  const onChange = (e) => {
    setSearch(e.target.value);
    // setOwners(e.target.value);
    // setOwners(owners);
    setOwnersState(false);
  };

  console.log(search);

  let returnValue = <span className='search-return-value'>{search}</span>;

  // let val =
  //   owners.length > 0
  //     ? owners?.length > 0 && repos.length > 0
  //       ? returnValue.props.children + ' user:' + owners + ' repo:' + repos
  //       : returnValue.props.children + ' user:' + owners
  //     : returnValue.props.children;

  let val =
    owners.length > 0 || repos.length > 0
      ? repos.length > 0
        ? owners?.length > 0 && repos.length > 0
          ? returnValue.props.children + ' user:' + owners + ' repo:' + repos
          : returnValue.props.children + ' repo:' + repos
        : returnValue.props.children + ' user:' + owners
      : returnValue.props.children;

  return (
    <div className='search-container'>
      <div className='search-container-title'>
        <BiSearchAlt2 />
        <span> Search more than 553M issues</span>
      </div>
      <div>
        <form onSubmit={onSubmit} className='search-form'>
          {/* <input type='text' defaultValue={val} /> */}
          <input
            type='text'
            name='search'
            // defaultValue={val}
            value={search}
            onChange={onChange}
            className='hide-search'
          />
          <input type='submit' value='Search' />
          <p className='search-value'>{val}</p>
        </form>
      </div>
      {user[0]?.login}
    </div>
  );
};

export default Search;
