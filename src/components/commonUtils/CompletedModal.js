import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompletedActionContext } from '../../contexts/Client/completedAction';
import checkIconBlue from '../../pictures/checkIconBlue.png';

function CompletedModal() {
  const { setIsShowCompletedAction, completedText } =
    useCompletedActionContext();
  const navigate = useNavigate();
  const handleRedirectButton = (e) => {
    e.preventDefault();
    setIsShowCompletedAction(false);
    navigate('/');
  };
  return (
    <div
      id='medium-modal'
      className={`overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen bg-gray-600/50 inset-0 md:inset-0 h-screen md:h-screen flex  justify-center`}
      onClick={() => {}}
    >
      <div className='text-slate-600 p-4 w-full max-w-lg h-full md:h-auto items-center z-50'>
        <div
          className='flex flex-col bg-white rounded-lg  p-10 mt-20 shadow items-center'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='flex mx-auto flex-col h-full justify-evenly gap-5'>
            <img src={checkIconBlue} alt='' className=' mx-auto w-32 h-32' />
            <div className='flex flex-col'>
              <div className='text-2xl mx-auto text-[#006DDF] font-semibold'>
                COMPLETED
              </div>
              <div className='text-grey font-medium text-center'>
                {completedText}
              </div>
            </div>
            <div
              className='bg-gradient-to-t from-[#006DDF] to-[#00CAF7] px-20 py-1 text-2xl text-white rounded-3xl text-center'
              role='button'
              onClick={handleRedirectButton}
            >
              HOME
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedModal;
