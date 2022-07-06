import React, { useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import headerlogo from '../../../../icons/IT_PLUS_smLOGO.png';
import Dragbutton from './Dragbutton';
import Clientinfo from '../Utils/Clientinfo';
import ModalAny from '../../authforms/ModalAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/Client/AuthCcontexts';
import DynamicCartDropdown from './DynamicCartDropdown';
import { useProductfilter } from '../../../../contexts/ProductContext';
import { useErrorContext } from '../../../../contexts/ErrorContext';

function Topheader({ clicksidebar }) {
  const { tempCarts } = useProductfilter();
  const { user } = useAuthContext();
  const { setError } = useErrorContext();
  const { setSearchParams } = useProductfilter();
  const inputEmodal = useRef();

  const navigate = useNavigate();
  const handleBacktohome = async () => {
    await setSearchParams((prev) => {
      return {};
    });
    navigate('/');
  };

  return (
    <div className='navbar  flex sticky top-0 flex-row justify-start h-1/2'>
      <ModalAny inputEmodal={inputEmodal} />
      <Dragbutton clicksidebar={clicksidebar} />
      <div className='flex-1'>
        <Link
          className='mr-2 normal-case text-xl font-bold'
          to={'/'}
          onClick={() => {
            handleBacktohome();
          }}
        >
          <div>
            <img
              src={headerlogo}
              className={'mask w-48  ring-gray-700/20 duration-150 rounded-md'}
            />
            {/* <span className='text-primary'>IT </span>
            <span>Plus</span> */}
          </div>
        </Link>
        <Searchbar />
        {!user ? (
          <>
            <button
              className='hover:border-blue-600/40 border-2 rounded-full btn-sm h-10 w-28'
              onClick={() => inputEmodal.current.click()}
            >
              Sign In
            </button>
            <div
              className='btn btn-ghost btn-circle'
              onClick={() => inputEmodal.current.click()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <Clientinfo />
            <DynamicCartDropdown inputEmodal={inputEmodal} />
          </>
        )}
      </div>
    </div>
  );
}

export default Topheader;
