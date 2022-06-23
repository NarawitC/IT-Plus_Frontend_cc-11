import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
function ModalAny({}) {
  const [anymodal, setAnymodal] = useState(false);
  const navigete = useNavigate();
  const inputEmodal = useRef();

  return (
    <div
      ref={inputEmodal}
      id='medium-modal'
      className={`${anymodal} overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen bg-gray-600/50 inset-0 md:inset-0 h-screen md:h-screen flex  justify-center`}
      onClick={() => {
        setAnymodal((prev) => !prev);
      }}
    >
      <div className='text-slate-600 p-4 w-full max-w-lg h-full md:h-auto items-center z-50'>
        <div
          className='flex flex-col bg-white rounded-lg h-2/3  my-40 shadow items-center'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='Header flex flex-initial flex-row w-full justify-between'></div>
        </div>
      </div>
    </div>
  );
}

export default ModalAny;
