import { useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

import './Owners.scss';

const Owners = () => {
  const { owners, setOwners, ownersState, setOwnersState } =
    useContext(SearchContext);
  // const [search, setSearch] = useState('');
  const onChange = (e) => {
    setOwnersState(true);
    setOwners(() => e.target.value);
    // setOwners();
  };
  // setOwnersState(false);
  // console.log(owners);
  return (
    <div className='owners'>
      From these owners
      <span className='owners-input'>
        <input
          type='text'
          name='owners'
          value={owners}
          placeholder='git, atom'
          onChange={onChange}
          // onChange={(e) => setOwners(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Owners;
