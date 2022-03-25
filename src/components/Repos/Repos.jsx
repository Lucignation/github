import { useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

import './Repos.scss';

const Repos = () => {
  const { repos, setRepos } = useContext(SearchContext);
  // const [search, setSearch] = useState('');
  return (
    <div className='repos'>
      In these repositories
      <span className='repos-input'>
        <input
          type='text'
          name='owners'
          value={repos}
          placeholder='tws/bootstrap, rails/rails'
          onChange={(e) => setRepos(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Repos;
