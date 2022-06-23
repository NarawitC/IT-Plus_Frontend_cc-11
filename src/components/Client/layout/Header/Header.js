import { useRef } from 'react';
import LgsubHeader from './sub-header/LgsubHeader';
import Topheader from './Topheader';

function Header({ eldrawer, clicksidebar }) {
  return (
    <>
      <div className='navbar bg-base-100 h-48 flex-nowarp flex-col justify-start border-b px-6 gap-1 pt-2  border-[#DDDDDD]'>
        <Topheader clicksidebar={clicksidebar} />
        <LgsubHeader />
      </div>
    </>
  );
}

export default Header;
