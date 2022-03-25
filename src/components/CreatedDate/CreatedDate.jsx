import { useState } from 'react';

import './CreatedDate.scss';

const CreatedDate = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='created'>
      Created on the dates
      <span className='created-input'>
        <input
          type='text'
          name='owners'
          value={search}
          placeholder='>YYYY-MM-DD, YYYY-MM-DD'
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
    </div>
  );
};

export default CreatedDate;
