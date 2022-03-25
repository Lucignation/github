import { useState } from 'react';

import './Language.scss';
import Languages from '../../db/db.json';

// const Language

const Language = () => {
  const [select, setSelect] = useState('');

  const languagesOpts = Languages.map((item) => (
    <option key={item.id} name={item.name} value={item.value}>
      {item.placeholder}
    </option>
  ));

  // console.log(select);
  return (
    <div className='language'>
      Written in this language
      <span className='language-input'>
        <select
          name='language'
          defaultValue='Any Language'
          onChange={(e) => setSelect(e.target.value)}
        >
          {languagesOpts}
        </select>
      </span>
    </div>
  );
};

export default Language;
