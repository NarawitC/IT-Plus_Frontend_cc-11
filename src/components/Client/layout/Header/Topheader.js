import React, { useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Dragbutton from './Dragbutton';
import Clientinfo from '../Utils/Clientinfo';
import ModalAny from '../../../commonUtils/ModalAuth';

function Topheader({ clicksidebar }) {
  const inputEmodal = useRef();
  return (
    <div className='navbar flex flex-row justify-start h-1/2'>
      <ModalAny inputEmodal={inputEmodal} />
      <Dragbutton clicksidebar={clicksidebar} />
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>IT PLUS</a>
        <Searchbar />
        {1 ? (
          <button
            className='hover:border-blue-600/40 border-2 rounded-full btn-sm h-10 w-28'
            onClick={() => inputEmodal.current.click()}
          >
            Sign In
          </button>
        ) : (
          <Clientinfo />
        )}

        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <label tabIndex='0' className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>8</span>
              </div>
            </label>
            <div
              tabIndex='0'
              className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>8 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
