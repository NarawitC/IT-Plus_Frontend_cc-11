import React, { useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Dragbutton from './Dragbutton';
import Clientinfo from '../Utils/Clientinfo';
import ModalAny from '../../../commonUtils/ModalAuth';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
import DynamicCartDropdown from './DynamicCartDropdown';
import { useProductfilter } from '../../../../contexts/ProductContext';

function Topheader({ clicksidebar }) {
  const { user } = useAuthContext();
  const { tempCarts } = useProductfilter();
  const inputEmodal = useRef();
  return (
    <div className='navbar flex flex-row justify-start h-1/2'>
      <ModalAny inputEmodal={inputEmodal} />
      <Dragbutton clicksidebar={clicksidebar} />
      <div className='flex-1'>
        <Link className='btn btn-ghost normal-case text-xl font-bold' to={'/'}>
          <div>
            <span className='text-primary'>IT </span>
            <span>Plus</span>
          </div>
        </Link>
        <Searchbar />
        {!user ? (
          <button
            className='hover:border-blue-600/40 border-2 rounded-full btn-sm h-10 w-28'
            onClick={() => inputEmodal.current.click()}
          >
            Sign In
          </button>
        ) : (
          <Clientinfo />
        )}
        <DynamicCartDropdown tempCarts={tempCarts} />
      </div>
    </div>
  );
}

export default Topheader;
