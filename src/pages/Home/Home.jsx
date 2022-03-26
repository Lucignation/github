import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './Home.scss';

//import components
import Owners from '../../components/Owners/Owners';
import Search from '../../components/Search/Search';
import Repos from '../../components/Repos/Repos';
import CreatedDate from '../../components/CreatedDate/CreatedDate';
import Language from '../../components/Language/Language';
import { SearchContext } from '../../Context/SearchContext';

const Home = () => {
  // const [search, setSearch] = useState({
  //   _search: '',
  //   owners: '',
  //   ownersState: false,
  //   repos: '',
  //   reposState: false,
  //   created: '',
  //   createdState: false,
  //   languague: '',
  //   languageState: false,
  // });

  // const [search, setSearch] = useState('');

  // const [owners, setOwners] = useState('');
  // const [ownersState, setOwnersState] = useState(false);
  // const [repos, setRepos] = useState('');
  // const [created, setCreated] = useState('');
  // const [result, setResult] = useState([]);

  // console.log(search);
  return (
    // <SearchContext.Provider
    //   value={{
    //     search,
    //     setSearch,
    //     owners,
    //     setOwners,
    //     ownersState,
    //     setOwnersState,
    //     repos,
    //     setRepos,
    //     created,
    //     setCreated,
    //     result,
    //     setResult,
    //   }}
    // >
    <div className='container-page'>
      <Search />

      <h1 className='container-item-item'>Advanced options</h1>

      <div className='container-item'>
        <Owners />
      </div>

      <div className='container-item'>
        <Repos />
      </div>

      <div className='container-item'>
        <CreatedDate />
      </div>

      <div className='container-item'>
        <Language />
      </div>
    </div>
    // </SearchContext.Provider>
  );
};

export default Home;
