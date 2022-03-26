import { useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

import './CreatedDate.scss';

const CreatedDate = () => {
  const { created, setCreated } = useContext(SearchContext);
  // const [search, setSearch] = useState('');

  return (
    <div className='created'>
      Created on the dates
      <span className='created-input'>
        <input
          type='text'
          name='owners'
          value={created}
          placeholder='>YYYY-MM-DD, YYYY-MM-DD'
          onChange={(e) => setCreated(e.target.value)}
        />
      </span>
    </div>
  );
};

export default CreatedDate;
