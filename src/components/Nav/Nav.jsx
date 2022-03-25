import { BsGithub } from 'react-icons/bs';
import {
  AiOutlineBell,
  AiOutlinePlus,
  AiOutlineCaretDown,
} from 'react-icons/ai';

import './Nav.scss';

const Nav = () => {
  return (
    <div className='nav-bg'>
      <div className='nav-item nav-left'>
        <BsGithub />
        <form>
          <input type='text' placeholder='Search or jump to...' />
        </form>
        <div className='nav-pages'>
          <h5>Pull requests</h5>
          <h5>Issues</h5>
          <h5>Marketplace</h5>
          <h5>Explore</h5>
        </div>
      </div>

      <div className='nav-item nav-right'>
        <AiOutlineBell />
        <div>
          <AiOutlinePlus />
          <AiOutlineCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Nav;
