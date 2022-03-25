import { useState } from 'react';

import './Repos.scss';

const Repos = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='repos'>
      In these repositories
      <span className='repos-input'>
        <input
          type='text'
          name='owners'
          value={search}
          placeholder='tws/bootstrap, rails/rails'
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Repos;
